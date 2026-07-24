import { MotionSection } from "../ui/MotionSection";
import { DecorAsterisk } from "../ui/DecorAsterisk";
import { IMAGES, SITE } from "../../data/content";

export function Hero() {
	const [firstName, ...restName] = SITE.name.split(" ");
	const lastName = restName.join(" ");

	return (
		<section
			className="relative flex min-h-screen items-start justify-center overflow-hidden pt-[calc(var(--ds-header-height)+2rem)] lg:items-center"
			id="home"
		>
			<DecorAsterisk
				size="xl"
				className="absolute -left-8 top-32 hidden lg:block"
			/>
			<DecorAsterisk
				size="md"
				className="absolute right-8 top-48 opacity-80 sm:right-16"
			/>
			<DecorAsterisk
				size="sm"
				className="absolute bottom-24 left-1/4 hidden sm:block"
			/>

			<div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
				<MotionSection className="order-2 space-y-6 sm:space-y-8 lg:order-1">
					<p className="section-eyebrow">{SITE.tagline}</p>
					<h1 className="font-headline text-5xl font-extrabold leading-[0.95] tracking-tight text-on-background sm:text-6xl md:text-7xl lg:text-8xl">
						{firstName}{" "}
						{lastName ? (
							<span className="text-accent-italic text-primary">
								{lastName}
							</span>
						) : null}
					</h1>
					<p className="max-w-lg text-lg leading-relaxed text-on-surface-variant sm:text-xl">
						{SITE.heroLead}
					</p>
					<div className="flex flex-wrap gap-4 pt-2">
						<a href="#projects" className="btn-primary">
							View Projects
						</a>
						<a href="#contact" className="btn-outline">
							Contact Me
						</a>
					</div>
				</MotionSection>

				<MotionSection className="order-1 w-full justify-self-center lg:order-2 lg:justify-self-end lg:max-w-lg">
					<div className="aspect-4/3 overflow-hidden rounded-2xl border border-(--ds-card-border) lg:aspect-square lg:transition-transform lg:duration-500 lg:ease-smooth lg:hover:scale-[1.02]">
						<img
							src={IMAGES.heroWorkspace}
							alt="Developer workspace"
							className="h-full w-full object-cover object-bottom lg:object-center"
							width={800}
							height={800}
							decoding="async"
						/>
					</div>
				</MotionSection>
			</div>
		</section>
	);
}
