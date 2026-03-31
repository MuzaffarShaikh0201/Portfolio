import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { useInView } from "../../hooks/useInView";

type MotionSectionProps = {
	children: ReactNode;
	className?: string;
};

export function MotionSection({ children, className }: MotionSectionProps) {
	const { ref, inView } = useInView<HTMLDivElement>();

	return (
		<div
			ref={ref}
			className={cn(
				"transition-all duration-700 ease-smooth will-change-[opacity,transform]",
				inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
				"motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
				className,
			)}
		>
			{children}
		</div>
	);
}
