import { useCallback, useRef } from "react";
import { MotionSection } from "../ui/MotionSection";
import { DecorAsterisk } from "../ui/DecorAsterisk";
import { StackTag } from "../ui/StackTag";
import { PROJECTS } from "../../data/content";
import { cn } from "../../lib/cn";

function isExternalHref(href: string) {
	return href.startsWith("http");
}

type ProjectCta = {
	label: string;
	icon: string;
	href: string;
};

function ProjectCtaLink({
	cta,
	variant,
}: {
	cta: ProjectCta;
	variant: "primary" | "secondary";
}) {
	return (
		<a
			href={cta.href}
			{...(isExternalHref(cta.href)
				? { target: "_blank", rel: "noopener noreferrer" }
				: {})}
			className={
				variant === "primary"
					? "inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-300 ease-smooth hover:underline"
					: "inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant transition-colors duration-300 ease-smooth hover:text-primary"
			}
		>
			{cta.label}
			<span className="material-symbols-outlined text-sm" aria-hidden>
				{cta.icon}
			</span>
		</a>
	);
}

function ScrollButton({
	direction,
	onClick,
	className,
}: {
	direction: "left" | "right";
	onClick: () => void;
	className?: string;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-label={
				direction === "left"
					? "Scroll projects left"
					: "Scroll projects right"
			}
			className={cn(
				"flex size-10 shrink-0 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container-high text-lg font-bold text-on-background transition-colors duration-300 ease-smooth hover:border-primary hover:text-primary",
				className,
			)}
		>
			<span aria-hidden>{direction === "left" ? "<" : ">"}</span>
		</button>
	);
}

export function Projects() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = useCallback((direction: "left" | "right") => {
		const el = scrollRef.current;
		if (!el) return;
		const card = el.querySelector<HTMLElement>("[data-project-card]");
		const styles = getComputedStyle(el);
		const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
		const amount = card ? card.offsetWidth + gap : el.clientWidth;
		el.scrollBy({
			left: direction === "left" ? -amount : amount,
			behavior: "smooth",
		});
	}, []);

	return (
		<section
			className="relative overflow-x-hidden bg-surface-container pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32"
			id="projects"
		>
			<DecorAsterisk
				size="lg"
				className="absolute bottom-32 left-8 hidden lg:block"
			/>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<MotionSection className="mb-8 text-center sm:mb-10 lg:mb-12">
					<p className="section-eyebrow mb-4">Projects</p>
					<h2 className="mb-4 font-headline text-4xl font-bold tracking-tight text-on-background sm:text-5xl">
						Selected{" "}
						<span className="text-accent-italic text-primary">
							Works
						</span>
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
						A gallery of meticulously engineered solutions.
					</p>
				</MotionSection>

				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
					<ScrollButton
						direction="left"
						onClick={() => scroll("left")}
						className="hidden sm:flex"
					/>

					<div
						ref={scrollRef}
						className="flex min-w-0 w-full flex-1 gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory sm:gap-8"
					>
						{PROJECTS.map((p) => (
							<article
								key={p.title}
								data-project-card
								className="group w-full min-w-full shrink-0 snap-start sm:w-80 sm:min-w-80"
							>
								<div className="relative mb-4 aspect-16/10 overflow-hidden rounded-xl border border-(--ds-card-border)">
									<img
										src={p.image}
										alt=""
										className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
										width={1280}
										height={800}
										loading="lazy"
										decoding="async"
									/>
								</div>
								<div className="space-y-3">
									<div className="flex flex-wrap gap-2">
										<span className="text-[0.65rem] font-bold uppercase tracking-widest text-primary">
											{p.kind}
										</span>
										<span className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant/60">
											• {p.year}
										</span>
									</div>
									<h3 className="font-headline text-xl font-bold tracking-tight text-on-background">
										{p.title}
									</h3>
									<p className="text-sm leading-relaxed text-on-surface-variant line-clamp-3">
										{p.description}
									</p>
									<div className="flex flex-wrap gap-x-3 gap-y-2 pt-1">
										{p.tags.map((t) => (
											<StackTag
												key={t}
												label={t}
												className="text-[0.65rem] font-medium"
												iconClassName="size-3"
											/>
										))}
									</div>
									<div className="flex flex-col gap-2 pt-1">
										<ProjectCtaLink
											cta={p.primaryCta}
											variant="primary"
										/>
										<div className="flex flex-wrap gap-3">
											<ProjectCtaLink
												cta={p.secondaryCta}
												variant="secondary"
											/>
											{"tertiaryCta" in p &&
											p.tertiaryCta ? (
												<ProjectCtaLink
													cta={p.tertiaryCta}
													variant="secondary"
												/>
											) : null}
										</div>
									</div>
								</div>
							</article>
						))}
					</div>

					<ScrollButton
						direction="right"
						onClick={() => scroll("right")}
						className="hidden sm:flex"
					/>

					<div className="flex justify-center gap-3 sm:hidden">
						<ScrollButton
							direction="left"
							onClick={() => scroll("left")}
						/>
						<ScrollButton
							direction="right"
							onClick={() => scroll("right")}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
