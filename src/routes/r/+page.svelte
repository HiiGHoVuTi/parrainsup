<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	export let data;

	if (typeof window !== 'undefined') onMount(async () => goto('/p/' + data.nom));
</script>
