<script>
	export let data;
	const { parrain } = data;

	import { genresIllustrés } from '$lib/parrain.js';
</script>

<svelte:head>
	<title>{parrain.prénom}</title>
	<meta name="description" content="Parrainsup" />
</svelte:head>

<div class="profile">
	<div class="name">
		{parrain.prénom +
			(genresIllustrés[parrain.genre]
				? ' ' + genresIllustrés[parrain.genre]
				: `, ${parrain.genre}`)}
	</div>
	<div class="nickname">{parrain.surnom}</div>
	<div class="anecdotes">
		<h3>Quel type de taupin es-tu ?</h3>
		<p>{parrain.taupin}</p>
		<h3>D'où viens-tu ?</h3>
		<p>{parrain.origine}</p>
		{#if parrain.vœu}
			<h3>Quelle école vises-tu ?</h3>
			<p>{parrain.vœu}</p>
		{/if}
		{#if parrain.ânerie}
			<h3>Ta plus grosse ânerie scientifique ?</h3>
			<p>{parrain.ânerie}</p>
		{/if}
		{#if parrain.anecdote}
			<h3>Une anecdote sur ton année ?</h3>
			<p>{parrain.anecdote}</p>
		{/if}
		{#if parrain.team}
			<h3>Algèbre ou Analyse ?</h3>
			<p>{parrain.team}</p>
		{/if}
		{#if parrain.bizuth}
			<h3>Un message pour les bizuths ?</h3>
			<p>{parrain.bizuth}</p>
		{/if}
	</div>
</div>

<style>
	.profile {
		width: 300px;
		margin: 0 auto;
		text-align: center;
	}
	.name {
		font-size: 24px;
		font-weight: bold;
	}
	.nickname {
		font-size: 18px;
		color: #777;
	}
	.anecdotes {
		margin-top: 20px;
		text-align: left;
	}
	.anecdotes h3 {
		margin-bottom: 10px;
	}
	.anecdotes p {
		margin-bottom: 10px;
	}
</style>
