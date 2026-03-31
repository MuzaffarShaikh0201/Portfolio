import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
	const [active, setActive] = useState(sectionIds[0] ?? "home");

	useEffect(() => {
		const elements = sectionIds
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => Boolean(el));
		if (elements.length === 0) return;

		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.target.id) {
						setActive(entry.target.id);
					}
				});
			},
			{ rootMargin: "-45% 0px -45% 0px", threshold: 0 },
		);

		elements.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, [sectionIds]);

	return active;
}
