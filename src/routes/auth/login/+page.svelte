<script lang="ts">
	import type { PageProps } from './$types';
	import LoginForm from '$lib/components/forms/login-form.svelte';

	let { data }: PageProps = $props();
</script>

<div class="mx-auto flex min-h-screen w-full flex-col items-center justify-center bg-red-100 py-2">
	<LoginForm />
</div>
