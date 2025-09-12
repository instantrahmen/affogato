<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Notifications</h1>

{JSON.stringify(data, null, 2)}
