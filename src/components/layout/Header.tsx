import { useState } from "react";
import { cn } from "../../lib/cn";
import { NAV_LINKS, SITE } from "../../data/content";
import { useActiveSection } from "../../hooks/useActiveSection";
import { ThemeToggle } from "../ui/ThemeToggle";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const active = useActiveSection(SECTION_IDS);

	return (
		<header className="fixed top-0 z-50 w-full">
			<nav
				className={cn(
					"border-b backdrop-blur-xl transition-smooth",
					"[background:var(--ds-nav-bg)] border-(--ds-nav-border)",
				)}
				aria-label="Primary"
			>
				<div className="mx-auto flex h-(--ds-header-height) max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
					<a
						href="#home"
						className="font-headline text-xl font-black tracking-tighter transition-opacity duration-300 ease-smooth text-(--ds-nav-logo) hover:opacity-90"
						onClick={() => setMobileOpen(false)}
					>
						{SITE.brand}
					</a>

					<div className="hidden items-center gap-6 font-headline text-sm font-medium tracking-tight md:flex md:gap-8">
						{NAV_LINKS.map(({ id, label }) => {
							const isActive = active === id;
							return (
								<a
									key={id}
									href={`#${id}`}
									className={cn(
										"transition-all duration-300 ease-smooth",
										isActive
											? "border-b-2 border-(--ds-nav-link-active) pb-1 text-(--ds-nav-link-active)"
											: "text-(--ds-nav-link-idle) hover:text-(--ds-nav-link-hover)",
									)}
								>
									{label}
								</a>
							);
						})}
					</div>

					<div className="flex items-center gap-2 md:gap-4">
						<ThemeToggle />
						<button
							type="button"
							className="rounded-lg p-2 text-(--ds-nav-link-idle) transition-smooth hover:text-(--ds-nav-link-hover) md:hidden"
							onClick={() => setMobileOpen((o) => !o)}
							aria-expanded={mobileOpen}
							aria-controls="mobile-nav"
							aria-label={mobileOpen ? "Close menu" : "Open menu"}
						>
							<span
								className="material-symbols-outlined"
								aria-hidden
							>
								{mobileOpen ? "close" : "menu"}
							</span>
						</button>
					</div>
				</div>
			</nav>

			<div
				id="mobile-nav"
				className={cn(
					"border-b backdrop-blur-xl transition-all duration-300 ease-smooth md:hidden",
					"[background:var(--ds-nav-bg)] border-(--ds-nav-border)",
					mobileOpen
						? "max-h-[min(70vh,420px)] opacity-100"
						: "pointer-events-none max-h-0 overflow-hidden opacity-0",
				)}
				aria-hidden={!mobileOpen}
			>
				<div className="flex flex-col gap-1 px-4 py-4 font-headline text-sm font-medium">
					{NAV_LINKS.map(({ id, label }) => {
						const isActive = active === id;
						return (
							<a
								key={id}
								href={`#${id}`}
								className={cn(
									"rounded-lg px-3 py-3 transition-smooth",
									isActive
										? "bg-primary/10 text-(--ds-nav-link-active)"
										: "text-(--ds-nav-link-idle) hover:bg-surface-container-high/80 hover:text-(--ds-nav-link-hover)",
								)}
								onClick={() => setMobileOpen(false)}
							>
								{label}
							</a>
						);
					})}
				</div>
			</div>
		</header>
	);
}
