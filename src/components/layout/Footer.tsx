import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { SITE } from "../../data/content";
import { cn } from "../../lib/cn";

const SOCIAL: {
	label: string;
	href: string;
	Icon: IconType;
}[] = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/muzaffar-ali-shaikh-3b1a17274",
		Icon: FaLinkedin,
	},
	{
		label: "GitHub",
		href: "https://github.com/MuzaffarShaikh0201",
		Icon: FaGithub,
	},
	{ label: "X (Twitter)", href: "#", Icon: FaSquareXTwitter },
];

export function Footer() {
	return (
		<footer
			className={cn(
				"w-full border-t px-4 py-10 sm:px-6 lg:px-8",
				"transition-smooth [background:var(--ds-footer-bg)] border-[color-mix(in_oklab,var(--ds-outline-variant)_30%,transparent)]",
				"dark:border-emerald-900/30",
			)}
		>
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
				<p className="font-body text-xs uppercase tracking-widest text-(--ds-footer-text)">
					© {new Date().getFullYear()} {SITE.brand}. Meticulously
					Engineered.
				</p>
				<div className="flex flex-wrap justify-center gap-6 md:gap-8">
					{SOCIAL.map(({ label, href, Icon }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={label}
							className="text-(--ds-footer-text) transition-colors duration-300 ease-smooth hover:text-(--ds-footer-link-hover)"
						>
							<Icon className="size-5" aria-hidden />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
