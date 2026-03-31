import { useState, type SubmitEvent } from "react";
import { MotionSection } from "../ui/MotionSection";

export function Contact() {
	const [submitted, setSubmitted] = useState(false);

	function onSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		setSubmitted(true);
	}

	return (
		<section
			className="scroll-mt-28 bg-surface py-20 dark:bg-background sm:py-28 lg:py-32"
			id="contact"
		>
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<MotionSection className="mb-12 space-y-4 text-center sm:mb-16">
					<h2 className="font-headline text-4xl font-bold tracking-tighter text-on-background sm:text-5xl">
						Let&apos;s Cultivate Ideas
					</h2>
					<p className="text-lg text-on-surface-variant">
						Currently accepting new projects and collaborations.
					</p>
				</MotionSection>

				<MotionSection>
					<div className="rounded-3xl border border-outline-variant/30 bg-surface-container-low p-6 dark:border-transparent dark:bg-surface-container-low md:p-10 lg:p-12">
						<form className="grid gap-6" onSubmit={onSubmit}>
							<div className="grid gap-6 md:grid-cols-2">
								<div className="space-y-2">
									<label
										htmlFor="name"
										className="ml-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant/70 dark:text-on-surface-variant/60"
									>
										Name
									</label>
									<input
										id="name"
										name="name"
										type="text"
										placeholder="Alex Rivers"
										autoComplete="name"
										className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-4 text-on-surface placeholder:text-outline/60 transition-shadow duration-300 ease-smooth focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-none dark:bg-surface-container-lowest dark:placeholder:text-outline/40 dark:focus:ring-primary/20"
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="email"
										className="ml-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant/70 dark:text-on-surface-variant/60"
									>
										Email
									</label>
									<input
										id="email"
										name="email"
										type="email"
										placeholder="alex@arboretum.dev"
										autoComplete="email"
										className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-4 text-on-surface placeholder:text-outline/60 transition-shadow duration-300 ease-smooth focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-none dark:bg-surface-container-lowest dark:placeholder:text-outline/40 dark:focus:ring-primary/20"
									/>
								</div>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="message"
									className="ml-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant/70 dark:text-on-surface-variant/60"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									placeholder="How can we grow together?"
									className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-4 text-on-surface placeholder:text-outline/60 transition-shadow duration-300 ease-smooth focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-none dark:bg-surface-container-lowest dark:placeholder:text-outline/40 dark:focus:ring-primary/20"
								/>
							</div>
							<button
								type="submit"
								className="mt-2 w-full rounded-xl bg-primary py-5 text-sm font-bold uppercase tracking-widest text-on-primary shadow-xl shadow-primary/10 transition-all duration-300 ease-smooth hover:opacity-90 dark:bg-linear-to-br dark:from-primary dark:to-primary-container dark:shadow-primary/10"
							>
								{submitted
									? "Thanks — we’ll be in touch"
									: "Send Connection Request"}
							</button>
						</form>
					</div>
				</MotionSection>
			</div>
		</section>
	);
}
