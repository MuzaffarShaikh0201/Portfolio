import { MotionSection } from "../ui/MotionSection";
import { SERVICES } from "../../data/content";

export function Services() {
	return (
		<section
			className="scroll-mt-28 bg-surface py-20 dark:bg-background sm:py-28 lg:py-32"
			id="services"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<MotionSection className="mb-12 sm:mb-16 lg:mb-20">
					<h2 className="mb-4 font-headline text-4xl font-bold tracking-tighter text-on-background sm:text-5xl">
						Core Offerings
					</h2>
					<div className="h-1.5 w-20 rounded-full bg-primary dark:h-1" />
				</MotionSection>

				<div className="grid gap-8 md:grid-cols-3">
					{SERVICES.map(({ Icon, title, body }) => (
						<MotionSection key={title}>
							<div className="group rounded-2xl border border-outline-variant/30 bg-surface-container-high p-6 transition-all duration-300 ease-smooth hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 dark:border-transparent dark:bg-surface-container-high dark:hover:-translate-y-2 dark:hover:bg-surface-bright dark:hover:shadow-none">
								<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-container text-primary transition-colors duration-300 ease-smooth group-hover:bg-primary group-hover:text-on-primary dark:bg-primary/10 dark:group-hover:bg-primary">
									<Icon className="text-3xl" aria-hidden />
								</div>
								<h3 className="mb-4 font-headline text-2xl font-bold text-on-surface">{title}</h3>
								<p className="leading-relaxed text-on-surface-variant">{body}</p>
							</div>
						</MotionSection>
					))}
				</div>
			</div>
		</section>
	);
}
