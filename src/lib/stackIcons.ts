import { stack_icons } from "../data/content";

const STACK_ICON_KEYS: Record<string, keyof typeof stack_icons> = {
	React: "React",
	"Node.js": "NodeJS",
	NodeJS: "NodeJS",
	TypeScript: "TypeScript",
	"Tailwind CSS": "TailwindCSS",
	TailwindCSS: "TailwindCSS",
	Python: "Python",
	FastAPI: "FastAPI",
	PostgreSQL: "PostgreSQL",
	Redis: "Redis",
	Docker: "Docker",
};

export function getStackIconSrc(label: string): string | undefined {
	const key = STACK_ICON_KEYS[label];
	return key ? stack_icons[key] : undefined;
}
