/** Remote assets from Stitch export (same URLs as generated HTML). */
export const IMAGES = {
	heroWorkspace:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuD_erhrzg3AxpKfsQxAmjYLseZ3N_JuNRD71DR9YrkBXfw1YHrqRg8fahuaHkB5lt_eRYN8qarWYWaPX6-c6QRaHnbbStwvT3XVWBWCJFl5T6BHE6xcl8uZ4Zx1S7dfgcFsQhv_tGhJhWhu4e8IW9dLlB-IOAfDiqZYX-9-PMjNBEFMP4tJdVWMGsunbYxc58SaEsZRejpulOEXKYXAxn2HmwpNEjkiNlAeQsfGRuCoA14KShI6ci55ZOuz9vYQn4whRpi1dmVaxt4",
	portrait:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuANDEll7CDEe64CAcZIbx6fLQNqfskGZ6LSH-rl5tW9JU5EqkpQu4eacYCpxedjoxkejykXvjI0jcpkN4tXdSy4OhcMhE5Jk6JoTTmlUo0cAGpbf3_ilqWk27hcZRRu8OSmLQI0Rr7E-wlXSgramOEGg985GkLE91aVe161cmDIS0Oi1HTNJVHkKNafJqZU5_0fH2ykdHxBN0sFRrjHGQgxUevUAkM6cL5xsRFtvY8pe6okHBHcXcwwyL54cwoDiwm772fJkyvNAUE",
	projectEcoSync:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuD0l0QaHIIKEY8QhBV_8R6UoPG9ZEUxs9EPieStiGb6nENFjX3sDD9reuJFOtBkmJQoFdOdzQ9IX5B3OHWR3AZSyKz21divOEcmAUdF0Piyc5AjFz_1w_g-MoFQNnwn1Rh7FwJMq7_HQyrwoDyiP7H7cSDGWna_GRqpnRC7Y5h5rDg08sK9nddYpecXIcUTN8bJ6FYxPhL5jGmTviWo0zvXAFuHPQkpAiN-c9yUq8BllNX914sIGcptPzhWBT4OyvGPW3__WsX2AuA",
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

export const EXPERTISE = [
	"React",
	"Node.js",
	"Python",
	"TypeScript",
	"Next.js",
	"PostgreSQL",
] as const;

export const SERVICES = [
	{
		icon: "web" as const,
		title: "Web Dev",
		body: "Crafting responsive, high-performance front-end experiences using modern frameworks and best practices.",
	},
	{
		icon: "dns" as const,
		title: "Backend Architecture",
		body: "Designing scalable server-side systems and APIs that serve as the resilient backbone of your application.",
	},
	{
		icon: "design_services" as const,
		title: "UI/UX Design",
		body: "Creating intuitive user interfaces and seamless user journeys that prioritize accessibility and engagement.",
	},
] as const;

export const PROJECTS = [
	{
		kind: "Full Stack",
		year: "2023",
		title: "EcoSync Platform",
		description:
			"A real-time data monitoring system for environmental conservation efforts. Managed complex data streams from IoT sensors.",
		tags: ["React", "Express", "Redis"],
		image: IMAGES.projectEcoSync,
		primaryCta: {
			label: "Live Demo",
			icon: "open_in_new" as const,
			href: "#",
		},
		secondaryCta: {
			label: "Source Code",
			icon: "code" as const,
			href: "#",
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
