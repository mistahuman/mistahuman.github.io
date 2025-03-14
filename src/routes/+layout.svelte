<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
  	// import IconSkull from 'lucide-svelte/icons/skull';
	import { Camera, Paperclip, ArrowLeft, Calendar, CircleUser } from '@lucide/svelte';
	import CircleAlert from '@lucide/svelte/icons/circle-alert';

  </script>
  <div class="grid h-screen grid-rows-[auto_1fr_auto]">
	  <!-- Header -->
	  <header class="">
	  <AppBar>
		  {#snippet lead()}
		  <ArrowLeft size={24} />
		  <!-- <CircleAlert color="#ff3e98" /> -->
		  {/snippet}
		  {#snippet trail()}
		  <Paperclip size={20} />
		  <Calendar size={20} />
		  <CircleUser size={20} />
		  {/snippet}
		  {#snippet headline()}
		  <h2 class="h2">Headline</h2>
		  {/snippet}
		</AppBar>
	</header>
	<!-- Grid Column -->
	<div class="grid grid-cols-1 md:grid-cols-[auto_1fr_auto]">
		<!-- Sidebar (Left) -->
		<aside class="bg-yellow-500 p-4">(sidebar)</aside>
		<!-- Main -->
		<main class="space-y-4 bg-green-500 p-4">
			{@render children()}
		</main>
		<!-- Sidebar (Right) -->
		<aside class="bg-yellow-500 p-4">(sidebar)</aside>
	</div>
	<!-- Footer -->
	<footer class="bg-blue-500 p-4">(footer)</footer>
</div>
