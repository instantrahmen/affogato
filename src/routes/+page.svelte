<script lang="ts">
	import type { AppBskyFeedGetFeed } from '@atproto/api';
	import type { PageProps } from './$types';
	import type { FeedViewPost } from '@atproto/api/dist/client/types/app/bsky/feed/defs';

	const { data }: PageProps = $props();

	console.log(data);

	let feed = $derived(data.feed as FeedViewPost[]);
</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

{#if data?.feed}
	<!-- {JSON.stringify(data, null, 2)} -->
	<div class="space-y-4 p-4">
		{#each feed as item (item.post.cid)}
			<div class="border-border border-sm rounded-md border-b border-gray-200 p-4 shadow-sm">
				<div class="font-bold">{item.post.author.displayName || item.post.author.handle}</div>
				<div class="text-sm text-gray-600">@{item.post.author.handle}</div>
				<div class="mt-2">{item.post.record.text}</div>
				<pre>
<!-- {JSON.stringify(item.post.embed, null, 2)} -->
        </pre>
				{#if item.post.embed?.$type.startsWith('app.bsky.embed.images')}
					{@const images = item.post.embed as any}
					<!-- TODO: get the actual type -->
					<div class="mt-2 grid grid-cols-2 gap-2">
						{#each images.images as image}
							<img src={image.fullsize} alt={image.alt} class="rounded-md" />
						{/each}
					</div>
				{/if}
				<!-- {#each item.post.embed?.} -->
				<div class="mt-2 text-xs text-gray-500">
					{new Date(item.post.indexedAt).toLocaleString()}
				</div>
			</div>
		{/each}
	</div>
{:else}
	<p class="p-4 text-gray-600">No posts available.</p>
{/if}
