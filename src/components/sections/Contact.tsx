import { MotionSection } from "../ui/MotionSection";
import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
	const [state, handleSubmit] = useForm("xykvngjq");

	return (
		<section
			className="bg-background pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32"
			id="contact"
		>
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<MotionSection className="mb-12 space-y-4 text-center sm:mb-16">
					<p className="section-eyebrow">Contact</p>
					<h2 className="font-headline text-4xl font-bold tracking-tight text-on-background sm:text-5xl">
						Let&apos;s Cultivate{" "}
						<span className="text-accent-italic text-primary">Ideas</span>
					</h2>
					<p className="text-lg text-on-surface-variant">
						Currently accepting new projects and collaborations.
					</p>
				</MotionSection>

				<MotionSection>
					<div className="card-surface p-6 md:p-10 lg:p-12">
						<form className="grid gap-6" onSubmit={handleSubmit}>
							<div className="grid gap-6 md:grid-cols-2">
								<div className="space-y-2">
									<label
										htmlFor="name"
										className="section-eyebrow ml-1 normal-case tracking-widest text-on-surface-variant"
									>
										Name
									</label>
									<input
										id="name"
										name="name"
										type="text"
										placeholder="John Doe"
										autoComplete="name"
										required
										className="input-field"
									/>
									<ValidationError
										field="name"
										errors={state.errors}
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="email"
										className="section-eyebrow ml-1 normal-case tracking-widest text-on-surface-variant"
									>
										Email
									</label>
									<input
										id="email"
										name="email"
										type="email"
										placeholder="john@doe.com"
										autoComplete="email"
										required
										className="input-field"
									/>
									<ValidationError
										field="email"
										errors={state.errors}
									/>
								</div>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="message"
									className="section-eyebrow ml-1 normal-case tracking-widest text-on-surface-variant"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									placeholder="How can we grow together?"
									required
									className="input-field resize-y"
								/>
								<ValidationError
									field="message"
									errors={state.errors}
								/>
							</div>
							<button
								type="submit"
								disabled={state.submitting || state.succeeded}
								className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60"
							>
								{state.succeeded
									? "Thanks — we'll be in touch"
									: "Send Connection Request"}
							</button>
						</form>
					</div>
				</MotionSection>
			</div>
		</section>
	);
}
