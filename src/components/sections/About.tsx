import { MotionSection } from "../ui/MotionSection";
import { EXPERTISE, IMAGES } from "../../data/content";

export function About() {
	return (
		<section
			className="scroll-mt-28 bg-surface-container-low py-20 sm:py-28 lg:py-32"
			id="about"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-5">
						<MotionSection>
							<div className="group relative">
								<div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl transition-all duration-300 ease-smooth lg:group-hover:bg-primary/10 dark:bg-primary/10 dark:lg:group-hover:bg-primary/20" />
								<img
									src={IMAGES.portrait}
									alt="Portrait"
									className="relative aspect-4/5 w-full rounded-2xl object-cover shadow-xl max-lg:grayscale-0 lg:grayscale lg:transition-all lg:duration-700 lg:ease-smooth lg:hover:grayscale-0 dark:shadow-none"
									width={480}
									height={600}
									decoding="async"
								/>
							</div>
						</MotionSection>
					</div>
					<div className="space-y-8 lg:col-span-7">
						<MotionSection>
							<h2 className="font-headline text-4xl font-bold tracking-tight text-on-background sm:text-5xl">
								The{" "}
								<span className="font-light italic text-primary">
									Architect
								</span>{" "}
								Behind the Code
							</h2>
							<div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
								<p>
									I believe code is more than logic; it&apos;s
									a medium for creation. Based in the heart of
									digital innovation, I specialize in building
									robust full-stack applications that
									harmonize performance with aesthetic
									brilliance.
								</p>
								<p>
									My journey began at the intersection of
									design and engineering, leading me to
									develop a philosophy of &quot;Meticulous
									Engineering.&quot; Every component I build
									is treated as a specimen in a digital
									arboretum—carefully nurtured and precisely
									placed.
								</p>
							</div>
							<div className="pt-6 sm:pt-8">
								<h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">
									Expertise Stack
								</h3>
								<div className="flex flex-wrap gap-3">
									{EXPERTISE.map((skill) => (
										<span
											key={skill}
											className="rounded-full bg-secondary-container px-5 py-2 text-sm font-semibold tracking-tight text-on-secondary-container"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</MotionSection>
					</div>
				</div>
			</div>
		</section>
	);
}
