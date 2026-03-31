import { MotionSection } from "../ui/MotionSection";
import { IMAGES, SITE } from "../../data/content";

export function Hero() {
	const [firstName, ...restName] = SITE.name.split(" ");
	const lastName = restName.join(" ");

	return (
		<section
			className="relative flex min-h-screen scroll-mt-28 items-center justify-center overflow-hidden pt-24 sm:pt-28"
			id="home"
		>
			<div
				className="pointer-events-none absolute inset-0 z-0 opacity-40 dark:opacity-20"
				aria-hidden
			>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--tw-gradient-stops))] from-primary-container/30 via-surface/0 to-surface/0 dark:from-primary-container/40" />
			</div>

			<div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 sm:gap-12 lg:grid-cols-2 lg:px-8">
				<MotionSection className="space-y-6 sm:space-y-8">
					<div className="inline-flex items-center rounded-full bg-primary-container px-4 py-2 text-sm font-semibold uppercase tracking-wide text-on-primary-container dark:bg-surface-container-high dark:text-primary">
						{SITE.tagline}
					</div>
					<h1 className="font-headline text-5xl font-extrabold leading-[0.9] tracking-tighter text-on-background sm:text-6xl md:text-7xl lg:text-8xl">
						{firstName}{" "}
						{lastName ? (
							<span className="text-primary">{lastName}</span>
						) : null}
					</h1>
					<p className="max-w-lg font-body text-lg leading-relaxed text-on-surface-variant sm:text-xl md:text-2xl">
						{SITE.heroLead}
					</p>
					<div className="flex flex-wrap gap-4 pt-2">
						<a
							href="#projects"
							className="rounded-xl bg-primary px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-on-primary shadow-xl shadow-primary/20 transition-transform duration-300 ease-smooth hover:scale-105 active:scale-95 dark:bg-linear-to-br dark:from-primary dark:to-primary-container dark:shadow-primary/10"
						>
							View Projects
						</a>
						<a
							href="#contact"
							className="rounded-xl border border-outline px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-primary transition-colors duration-300 ease-smooth hover:bg-primary-container/20 dark:border-outline-variant/20 dark:text-on-surface dark:hover:bg-surface-container-high"
						>
							Contact Me
						</a>
					</div>
				</MotionSection>

				<MotionSection className="relative hidden lg:block">
					<div className="aspect-square rotate-3 overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 transition-transform duration-500 ease-smooth hover:rotate-0 dark:shadow-emerald-950/50">
						<img
							src={IMAGES.heroWorkspace}
							alt=""
							className="h-full w-full object-cover"
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
