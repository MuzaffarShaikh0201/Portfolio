import { MotionSection } from "../ui/MotionSection";
import { PROJECTS } from "../../data/content";

export function Projects() {
	return (
		<section
			className="scroll-mt-28 bg-surface-container py-20 sm:py-28 lg:py-32"
			id="projects"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<MotionSection className="mb-12 flex flex-col justify-end gap-4 sm:mb-16 lg:mb-20">
					<div>
						<h2 className="mb-4 font-headline text-4xl font-bold tracking-tighter text-on-background sm:text-5xl">
							Selected Works
						</h2>
						<p className="text-lg text-on-surface-variant">
							A gallery of meticulously engineered solutions.
						</p>
					</div>
				</MotionSection>

				<div className="grid gap-10 md:grid-cols-2 md:gap-12">
					{PROJECTS.map((p) => (
						<MotionSection key={p.title}>
							<article className="group">
								<div className="relative mb-6 aspect-16/10 overflow-hidden rounded-3xl shadow-xl shadow-primary/5 dark:shadow-2xl dark:shadow-surface/40">
									<img
										src={p.image}
										alt=""
										className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
										width={1280}
										height={800}
										loading="lazy"
										decoding="async"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-on-background/10 to-transparent opacity-30 dark:from-surface dark:opacity-60" />
								</div>
								<div className="space-y-4">
									<div className="flex flex-wrap gap-2">
										<span className="text-xs font-bold uppercase tracking-widest text-primary">
											{p.kind}
										</span>
										<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">
											• {p.year}
										</span>
									</div>
									<h3 className="font-headline text-2xl font-bold tracking-tight text-on-background sm:text-3xl">
										{p.title}
									</h3>
									<p className="text-lg leading-relaxed text-on-surface-variant">
										{p.description}
									</p>
									<div className="flex flex-wrap gap-2 pt-2">
										{p.tags.map((t) => (
											<span
												key={t}
												className="rounded-md border border-outline-variant bg-white px-3 py-1 text-xs font-medium text-on-surface-variant dark:border-outline-variant/10 dark:bg-surface-container-highest"
											>
												{t}
											</span>
										))}
									</div>
									<div className="flex flex-wrap gap-4 pt-2">
										<a
											href={p.primaryCta.href}
											className="inline-flex items-center gap-2 font-bold text-primary transition-colors duration-300 ease-smooth hover:underline"
										>
											{p.primaryCta.label}
											<span
												className="material-symbols-outlined text-sm"
												aria-hidden
											>
												{p.primaryCta.icon}
											</span>
										</a>
										<a
											href={p.secondaryCta.href}
											className="inline-flex items-center gap-2 font-bold text-on-surface-variant transition-colors duration-300 ease-smooth hover:text-primary dark:hover:text-on-surface"
										>
											{p.secondaryCta.label}
											<span
												className="material-symbols-outlined text-sm"
												aria-hidden
											>
												{p.secondaryCta.icon}
											</span>
										</a>
									</div>
								</div>
							</article>
						</MotionSection>
					))}
				</div>
			</div>
		</section>
	);
}
