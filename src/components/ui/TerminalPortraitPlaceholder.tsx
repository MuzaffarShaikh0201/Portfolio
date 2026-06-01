import { cn } from "../../lib/cn";

type TerminalPortraitPlaceholderProps = {
	className?: string;
};

export function TerminalPortraitPlaceholder({
	className,
}: TerminalPortraitPlaceholderProps) {
	return (
		<div
			className={cn(
				"terminal-window flex aspect-4/5 w-full flex-col overflow-hidden rounded-xl border shadow-[0_0_0_1px_color-mix(in_oklab,var(--ds-primary)_8%,transparent)]",
				className,
			)}
			role="img"
			aria-label='Portrait placeholder: git commit -m "Add profile photo", coming soon'
		>
			<div className="terminal-titlebar flex items-center gap-2 border-b px-4 py-3">
				<div className="flex gap-1.5" aria-hidden>
					<span className="size-2.5 rounded-full bg-[#ff5f57]" />
					<span className="size-2.5 rounded-full bg-[#febc2e]" />
					<span className="size-2.5 rounded-full bg-[#28c840]" />
				</div>
				<span className="terminal-muted ml-1 truncate font-mono text-[0.65rem] sm:text-xs">
					~/portfolio — portrait
				</span>
			</div>

			<div className="terminal-body flex flex-1 flex-col justify-center px-5 py-8 font-mono text-[0.7rem] leading-relaxed sm:px-6 sm:text-sm sm:leading-relaxed">
				<p className="wrap-break-word">
					<span className="text-primary" aria-hidden>
						$
					</span>{" "}
					<span>git commit -m </span>
					<span className="text-primary">&quot;Add profile photo&quot;</span>
				</p>
				<p className="terminal-muted mt-4">
					<span className="text-primary/70 dark:text-primary/60" aria-hidden>
						#
					</span>{" "}
					Coming soon...
				</p>
				<p className="mt-6 flex items-center gap-0.5" aria-hidden>
					<span className="text-primary">$</span>
					<span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary" />
				</p>
			</div>
		</div>
	);
}
