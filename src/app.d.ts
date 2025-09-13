import { AtpAgent } from '@atproto/api';
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			activeAgent?: number;
			atpAgents?: AtpAgent[];
			tokens?: {
				did: string;
				handle: string;
				accessJwt?: string;
				refreshJwt?: string;
				active?: boolean;
				emailConfirmed?: boolean;
				email?: string;
			}[];
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
