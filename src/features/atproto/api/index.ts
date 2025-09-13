import { AtpAgent } from '@atproto/api';

export const createAtpAgent = (service: string = 'https://bsky.social') => {
	const agent = new AtpAgent({ service });
	return agent;
};

export const loginWithPassword = async (agent: AtpAgent, identifier: string, password: string) => {
	const response = await agent.login({ identifier, password });
	return response;
};
export const logout = async (agent: AtpAgent) => {
	await agent.logout();
};

export const createAccount = async (
	agent: AtpAgent,
	email: string,
	password: string,
	handle: string,
) => {
	const response = await agent.createAccount({ email, password, handle });
	return response;
};
