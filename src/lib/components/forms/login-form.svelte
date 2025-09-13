<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { cn } from '$lib/utils/cn';
	import type { HTMLAttributes } from 'svelte/elements';
	let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
	const id = $props.id();
</script>

<div class={cn('flex flex-col gap-6', className)} {...restProps}>
	<Card.Root>
		<Card.Header class="text-center">
			<Card.Title class="text-xl">Sign In</Card.Title>
			<Card.Description>Sign in with your email/username and password</Card.Description>
		</Card.Header>
		<Card.Content>
			<form>
				<div class="grid gap-6">
					<div class="flex flex-col gap-4">
						<Button variant="outline" class="w-full">Login with BlueSky</Button>
					</div>
					<div
						class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
					>
						<span class="bg-card text-muted-foreground relative z-10 px-2"> Or continue with </span>
					</div>
					<div class="grid gap-6">
						<div class="grid gap-3">
							<Label for="email-{id}">Email</Label>
							<Input id="email-{id}" type="email" placeholder="m@example.com" required />
						</div>
						<div class="grid gap-3">
							<div class="flex items-center">
								<Label for="password-{id}">Password</Label>
								<a href="##" class="ml-auto text-sm underline-offset-4 hover:underline">
									Forgot your password?
								</a>
							</div>
							<Input id="password-{id}" type="password" required />
						</div>
						<Button type="submit" class="w-full">Login</Button>
					</div>
					<div class="text-center text-sm">
						Don&apos;t have an account?
						<a href="##" class="underline underline-offset-4"> Sign up </a>
					</div>
				</div>
			</form>
		</Card.Content>
	</Card.Root>
	<div
		class="text-muted-foreground *:[a]:hover:text-primary *:[a]:underline *:[a]:underline-offset-4 text-balance text-center text-xs"
	>
		By clicking continue, you agree to our <a href="##">Terms of Service</a>
		and <a href="##">Privacy Policy</a>.
	</div>
</div>
