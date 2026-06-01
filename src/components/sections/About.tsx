import { MotionSection } from "../ui/MotionSection";
import { DecorAsterisk } from "../ui/DecorAsterisk";
import { PortraitPlaceholder } from "../ui/PortraitPlaceholder";
import { StackTag } from "../ui/StackTag";
import { EXPERTISE } from "../../data/content";

export function About() {
	return (
		<section
			className="relative scroll-mt-28 bg-surface-container-low py-20 sm:py-28 lg:py-32"
			id="about"
		>
			<DecorAsterisk
				size="lg"
				className="absolute right-4 top-20 hidden md:block lg:right-12"
			/>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-5">
						<MotionSection>
							<PortraitPlaceholder label="Add your portrait" />
						</MotionSection>
					</div>
					<div className="space-y-8 lg:col-span-7">
						<MotionSection>
							<p className="section-eyebrow mb-4">About Me</p>
							<h2 className="font-headline text-4xl font-bold tracking-tight text-on-background sm:text-5xl">
								The{" "}
								<span className="text-accent-italic text-primary">
									Architect
								</span>{" "}
								Behind the Code
							</h2>
							<div className="mt-6 space-y-6 text-lg leading-relaxed text-on-surface-variant">
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
								<h3 className="section-eyebrow mb-6">
									Expertise Stack
								</h3>
								<div className="flex flex-wrap gap-x-5 gap-y-3">
									{EXPERTISE.map((skill) => (
										<StackTag
											key={skill}
											label={skill}
											className="text-sm tracking-tight"
										/>
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
