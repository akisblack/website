import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
	const meta = {
		title: "Home",
		description: "Web developer, Linux enthusiast and average Greek."
	}

	return {
		projects: await fetch("/api/projects").then(
			(res) => res.json()
		),
		...meta
	};
};