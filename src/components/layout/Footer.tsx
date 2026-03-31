import { SITE } from "../../data/content";
import { cn } from "../../lib/cn";

const SOCIAL = [
	{ label: "LinkedIn", href: "#" },
	{ label: "GitHub", href: "#" },
	{ label: "Twitter", href: "#" },
] as const;

export function Footer() {
	return (
		<footer
			className={cn(
				"w-full border-t px-4 py-10 sm:px-6 lg:px-8",
				"transition-smooth [background:var(--ds-footer-bg)] border-[color-mix(in_oklab,var(--ds-outline-variant)_30%,transparent)]",
				"dark:border-emerald-900/30",
			)}
		>
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
				<p className="font-body text-xs uppercase tracking-widest text-(--ds-footer-text)">
					© {new Date().getFullYear()} {SITE.brand}. Meticulously
					Engineered.
				</p>
				<div className="flex flex-wrap justify-center gap-6 md:gap-8">
					{SOCIAL.map(({ label, href }) => (
						<a
							key={label}
							href={href}
							className="font-body text-xs uppercase tracking-widest transition-colors duration-300 ease-smooth text-(--ds-footer-text) hover:text-(--ds-footer-link-hover)"
						>
							{label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
