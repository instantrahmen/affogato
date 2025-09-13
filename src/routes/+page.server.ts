import { createAtpAgent } from '../features/atproto/api';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const agent = locals.atpAgents?.[0] || createAtpAgent('https://bsky.social');

	// if (!agent)
	// 	return {
	// 		timeline: null,
	// 	};

	// const timeline = (
	// 	await agent?.getTimeline({
	// 		algorithm: 'reverse-chronological',
	// 		limit: 20,
	// 	})
	// )?.data;

	// const profile = (
	// 	await agent?.getProfile({
	// 		actor: locals.tokens?.[locals.activeAgent || 0]?.handle || '',
	// 	})
	// )?.data;

	// console.log(timeline, profile);

	const convertToPOJO = (obj: any) => JSON.parse(JSON.stringify(obj));
	return {
		// timeline,
		// profile,
		tokens: locals.tokens || [],
		feed: convertToPOJO(
			(
				await agent.getAuthorFeed({
					actor: locals.tokens?.[0]?.handle || '',
					// limit: 20,
				})
			)?.data.feed,
		),
		followers: (
			await agent.getFollowers({
				actor: locals.tokens?.[0]?.handle || '',
			})
		)?.data,
	};
}) satisfies PageServerLoad;
