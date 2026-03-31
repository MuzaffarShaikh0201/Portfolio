/* eslint-disable react-refresh/only-export-components -- context module exports provider + hook */
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
	theme: Theme;
	toggleTheme: () => void;
	setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "portfolio-theme";

function readStoredTheme(): Theme | null {
	try {
		const v = localStorage.getItem(STORAGE_KEY);
		if (v === "light" || v === "dark") return v;
	} catch {
		/* ignore */
	}
	return null;
}

function getSystemTheme(): Theme {
	if (typeof window === "undefined") return "dark";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<Theme>(() => readStoredTheme() ?? getSystemTheme());

	useEffect(() => {
		const root = document.documentElement;
		const isDark = theme === "dark";
		root.classList.toggle("dark", isDark);
		const meta = document.querySelector('meta[name="theme-color"]');
		if (meta) {
			meta.setAttribute("content", isDark ? "#021804" : "#fdfdf6");
		}
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch {
			/* ignore */
		}
	}, [theme]);

	const setTheme = useCallback((t: Theme) => setThemeState(t), []);
	const toggleTheme = useCallback(() => {
		setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
	}, []);

	const value = useMemo(
		() => ({ theme, toggleTheme, setTheme }),
		[theme, toggleTheme, setTheme],
	);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
