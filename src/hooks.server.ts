import type { Handle } from '@sveltejs/kit';

import { TEST_ATP_IDENTIFIER, TEST_ATP_PASSWORD } from '$env/static/private';
import { createAtpAgent } from './features/atproto/api';

export const handle: Handle = async ({ event, resolve }) => {
	// if (event.url.pathname.startsWith('/custom')) {
	// 	return new Response('custom response');
	// }

	// TODO: Remove once authentication is properly implemented (ideally using oauth)
	if (!event.locals.atpAgents?.length || !event.locals.tokens?.length) {
		const defaultAtpAgent = createAtpAgent('https://blacksky.app');

		let res = await defaultAtpAgent.login({
			identifier: TEST_ATP_IDENTIFIER,
			password: TEST_ATP_PASSWORD,
		});

		// let follows = await defaultAtpAgent.getFollows({
		// 	actor: TEST_ATP_IDENTIFIER,
		// });

		// event.locals.atpAgents = [defaultAtpAgent];
		console.log(res.data, '\n\n-------\n\n');

		event.locals.atpAgents = [defaultAtpAgent];
		event.locals.tokens = [res.data];

		event.locals.activeAgent = 0;
	}

	const response = await resolve(event);
	return response;
};
