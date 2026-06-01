import { MotionSection } from "../ui/MotionSection";
import { DecorAsterisk } from "../ui/DecorAsterisk";
import { SERVICES } from "../../data/content";

export function Services() {
	return (
		<section
			className="relative scroll-mt-28 bg-background py-20 sm:py-28 lg:py-32"
			id="services"
		>
			<DecorAsterisk
				size="md"
				className="absolute left-6 top-24 hidden lg:block"
			/>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<MotionSection className="mb-12 text-center sm:mb-16 lg:mb-20">
					<p className="section-eyebrow mb-4">Services</p>
					<h2 className="font-headline text-4xl font-bold tracking-tight text-on-background sm:text-5xl">
						Core{" "}
						<span className="text-accent-italic text-primary">
							Offerings
						</span>
					</h2>
				</MotionSection>

				<div className="grid gap-6 md:grid-cols-3 md:gap-8">
					{SERVICES.map(({ Icon, title, body }) => (
						<MotionSection key={title}>
							<div className="group card-surface flex h-full flex-col p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-primary hover:bg-primary">
								<div className="mb-6 flex h-12 w-12 items-center justify-center text-primary transition-colors duration-300 ease-smooth group-hover:text-on-primary">
									<Icon className="text-3xl" aria-hidden />
								</div>
								<h3 className="mb-4 font-headline text-xl font-bold text-on-surface transition-colors duration-300 ease-smooth group-hover:text-on-primary">
									{title}
								</h3>
								<p className="leading-relaxed text-on-surface-variant transition-colors duration-300 ease-smooth group-hover:text-on-primary">
									{body}
								</p>
							</div>
						</MotionSection>
					))}
				</div>
			</div>
		</section>
	);
}
