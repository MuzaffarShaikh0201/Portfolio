import { cn } from "../../lib/cn";
import { getStackIconSrc } from "../../lib/stackIcons";

type StackTagProps = {
	label: string;
	className?: string;
	iconClassName?: string;
};

export function StackTag({ label, className, iconClassName }: StackTagProps) {
	const iconSrc = getStackIconSrc(label);

	return (
		<span
			className={cn(
				"inline-flex items-center gap-2 font-semibold text-on-background",
				className,
			)}
		>
			{iconSrc ? (
				<img
					src={iconSrc}
					alt=""
					className={cn("size-4 shrink-0", iconClassName)}
					width={16}
					height={16}
					decoding="async"
				/>
			) : null}
			{label}
		</span>
	);
}
