<script lang="ts">
	import '../styles/app.css';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/environment';

	import * as Sidebar from '$lib/components/ui/sidebar';
	import favicon from '$lib/assets/favicon.svg';
	import * as Icons from '$lib/components/icons.svelte';
	import AppSidebar from '$lib/components/sidebar/sidebar.svelte';

	let { children } = $props();

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser,
			},
		},
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<QueryClientProvider client={queryClient}>
	<Sidebar.Provider>
		<AppSidebar
			items={[
				{
					title: 'Home',
					url: '/',
					icon: Icons.House,
				},
				{
					title: 'Explore',
					url: '/search',
					icon: Icons.Search,
				},
				{
					title: 'Notifications',
					url: '/notifications',
					icon: Icons.Bell,
				},
				{
					title: 'Chat',
					url: '/chat',
					icon: Icons.Inbox,
				},
				{
					title: 'Feeds',
					url: '/feeds',
					icon: Icons.Feeds,
				},
				{
					title: 'Lists',
					url: '/lists',
					icon: Icons.List,
				},
				{
					title: 'Bookmarks',
					url: '/bookmarks',
					icon: Icons.Bookmark,
				},
				{
					title: 'Profile',
					url: '/profile',
					icon: Icons.Profile,
				},
				{
					title: 'Settings',
					url: '/settings',
					icon: Icons.Settings,
				},
			]}
		/>

		<main>
			<Sidebar.Trigger />
			{@render children?.()}
		</main>
	</Sidebar.Provider>
</QueryClientProvider>
