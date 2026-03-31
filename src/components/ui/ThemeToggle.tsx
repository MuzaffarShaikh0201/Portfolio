import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className={cn(
				"rounded-lg p-2 transition-transform duration-300 ease-smooth",
				"scale-95 active:scale-90",
				"text-primary dark:text-(--ds-nav-link-active)",
				"hover:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary",
				className,
			)}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			aria-pressed={isDark}
		>
			<span
				className="material-symbols-outlined text-[1.35rem]"
				aria-hidden
			>
				{isDark ? "dark_mode" : "light_mode"}
			</span>
		</button>
	);
}
