import { cn } from "../../lib/cn";

type PortraitPlaceholderProps = {
	className?: string;
	variant?: "circle" | "portrait";
	label?: string;
};

export function PortraitPlaceholder({
	className,
	variant = "portrait",
	label = "Your photo",
}: PortraitPlaceholderProps) {
	if (variant === "circle") {
		return (
			<div
				className={cn(
					"relative mx-auto aspect-square w-full max-w-md",
					className,
				)}
			>
				<div
					className="absolute inset-0 rounded-full border border-outline-variant/40 bg-surface-container-high"
					aria-hidden
				/>
				<svg
					className="pointer-events-none absolute inset-0 size-full -rotate-90"
					viewBox="0 0 100 100"
					aria-hidden
				>
					<circle
						cx="50"
						cy="50"
						r="48"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.75"
						className="text-on-background/80"
						strokeDasharray="75 226"
						strokeLinecap="round"
					/>
				</svg>
				<div className="absolute inset-4 flex items-center justify-center rounded-full border border-dashed border-outline-variant/30 bg-surface-container">
					<span className="text-center text-xs font-medium uppercase tracking-widest text-on-surface-variant/60">
						{label}
					</span>
				</div>
			</div>
		);
	}

	return (
		<div
			className={cn(
				"flex aspect-4/5 w-full items-center justify-center rounded-2xl border border-dashed border-outline-variant/40 bg-surface-container-high",
				className,
			)}
		>
			<span className="text-center text-xs font-medium uppercase tracking-widest text-on-surface-variant/60">
				{label}
			</span>
		</div>
	);
}
