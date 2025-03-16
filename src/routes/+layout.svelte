<script lang="ts">
	import "../app.css";
	let { children } = $props();
	import { AppBar } from "@skeletonlabs/skeleton-svelte";
	// import IconSkull from 'lucide-svelte/icons/skull';
	import {
		Camera,
		Paperclip,
		ArrowLeft,
		Calendar,
		CircleUser,
	} from "@lucide/svelte";
	import CircleAlert from "@lucide/svelte/icons/circle-alert";
	import LightSwitch from "$lib/components/LightSwitch.svelte";
	import FooterBar from "$lib/components/FooterBar.svelte";
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto] max-w-full">
	<!-- Header -->
	<header
		class="fixed top-0 z-50 border-b-[1px] border-surface-500/20 bg-surface-50/90 dark:bg-surface-950/90 backdrop-blur w-full h-[70px] flex items-center"
	>
		<div
			class="container mx-auto grid max-w-screen-2xl grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr] items-center gap-4 px-2 sm:px-4 xl:px-10"
		>
			<div class="flex items-stretch justify-start gap-4">
				<nav>
					<a href="#home" class="anchor">home</a>
					<a href="#mycv" class="anchor ml-2">mycv</a>
					<a href="#contacts" class="anchor ml-2">contacts</a>
				</nav>
			</div>
			<div class="flex items-center gap-2"></div>
			<div class="flex justify-end items-stretch gap-2">
				<LightSwitch />
			</div>
		</div>
	</header>
	<!-- Grid Column -->
	<!-- Main -->
	<main class="bg-surface-50-950 space-y-4 p-4">
		{@render children()}
	</main>
	<!-- Footer -->
	<hr class="hr" />
	<footer class="p-4">
		<FooterBar />
	</footer>
</div>
