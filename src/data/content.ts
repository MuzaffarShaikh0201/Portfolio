import { FaServer } from "react-icons/fa6";
import { MdDesignServices, MdOutlineWeb } from "react-icons/md";
import type { IconType } from "react-icons";

export const IMAGES = {
	heroWorkspace:
		"https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/hero.png",
	portrait:
		"https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/portrait.png",
	trellix:
		"https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/projects/trellix.png",
	projectNexus:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuAdSLiwxj8r0cBMKqIM_J6DQjJxTK5GLnnyYl0J5NIDKIkdpVtmgroWpjw8VA8DFSJok0v5_DxhekTrKF9NRS1nvQ_MQlJ6fpFXLoBAF8RAwi-Ijr4pcMJ3f4Ulc7CwBa7iPNkOOVznF7GYnpWI-JmQtGjbf1KjihVmKjuoPU-JZGhL5L68exGVQbYVti5nrUEnMG2uYrTkPU4azZltBeX1FQ3o0gidGlQDlGcnbs45gjW6n7JkGCCx9Eh_m71h-t2mFs-nSmuM6jc",
} as const;

export const SITE = {
	title: "M.DEV | Muzaffar Shaikh Portfolio",
	brand: "M.DEV",
	name: "Muzaffar Shaikh",
	tagline: "Full Stack Developer",
	heroLead:
		"Architecting digital experiences with precision and elegance. Building the future of the web, one node at a time.",
} as const;

export const NAV_LINKS = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "services", label: "Services" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
] as const;

export const stack_icons = {
	React: "https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/stack_icons/react.svg",
	NodeJS: "https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/stack_icons/nodejs.svg",
	TypeScript:
		"https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/stack_icons/typescript.svg",
	TailwindCSS:
		"https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/stack_icons/tailwindcss.svg",
	Python: "https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/stack_icons/python.svg",
	FastAPI:
		"https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/stack_icons/fastapi.svg",
	PostgreSQL:
		"https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/stack_icons/postgresql.svg",
	Redis: "https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/stack_icons/redis.svg",
	Docker: "https://ejguwcpjzfqdhaoisuaf.supabase.co/storage/v1/object/public/default/portfolio/stack_icons/docker.svg",
} as const;

export const EXPERTISE = [
	"React",
	"Node.js",
	"TypeScript",
	"TailwindCSS",
	"Python",
	"FastAPI",
	"PostgreSQL",
	"Redis",
	"Docker",
] as const;

export const SERVICES: {
	Icon: IconType;
	title: string;
	body: string;
}[] = [
	{
		Icon: MdOutlineWeb,
		title: "Web Dev",
		body: "Crafting responsive, high-performance front-end experiences using modern frameworks and best practices.",
	},
	{
		Icon: FaServer,
		title: "Backend Architecture",
		body: "Designing scalable server-side systems and APIs that serve as the resilient backbone of your application.",
	},
	{
		Icon: MdDesignServices,
		title: "UI/UX Design",
		body: "Creating intuitive user interfaces and seamless user journeys that prioritize accessibility and engagement.",
	},
];

export const PROJECTS = [
	{
		kind: "Full Stack",
		year: "2026",
		title: "Trellix",
		description:
			"A project manager built for software developers—organize dev work, link repos, and track delivery from planning to ship.",
		tags: [
			"React",
			"Node.js",
			"Tailwind CSS",
			"TypeScript",
			"Python",
			"FastAPI",
			"PostgreSQL",
			"Redis",
			"Docker",
		],
		image: IMAGES.trellix,
		primaryCta: {
			label: "Live Demo",
			icon: "open_in_new" as const,
			href: "https://trellix.vercel.app",
		},
		secondaryCta: {
			label: "Source Code - Frontend",
			icon: "code" as const,
			href: "https://github.com/MuzaffarShaikh0201/Trellix",
		},
		tertiaryCta: {
			label: "Source Code - Backend",
			icon: "code" as const,
			href: "https://github.com/MuzaffarShaikh0201/trellix-backend",
		},
	},
	{
		kind: "Backend",
		year: "2024",
		title: "Nexus Core API",
		description:
			"A distributed microservices engine for ultra-fast asset processing. Handled 10k+ requests per second with minimal latency.",
		tags: ["Go", "gRPC", "Docker"],
		image: IMAGES.projectNexus,
		primaryCta: {
			label: "Documentation",
			icon: "menu_book" as const,
			href: "#",
		},
		secondaryCta: {
			label: "Source Code",
			icon: "code" as const,
			href: "#",
		},
	},
] as const;
