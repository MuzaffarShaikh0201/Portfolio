import { cn } from "../../lib/cn";

type DecorAsteriskProps = {
	className?: string;
	size?: "sm" | "md" | "lg" | "xl";
};

const sizeClass = {
	sm: "text-5xl",
	md: "text-7xl",
	lg: "text-8xl sm:text-9xl",
	xl: "text-[10rem] sm:text-[14rem]",
};

export function DecorAsterisk({ className, size = "lg" }: DecorAsteriskProps) {
	return (
		<span
			className={cn(
				"pointer-events-none font-headline font-extralight leading-none text-primary/15 select-none",
				sizeClass[size],
				className,
			)}
			aria-hidden
		>
			✱
		</span>
	);
}
