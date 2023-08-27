<script>
	import Card from './Card.svelte';
	export let data;

	let searchTerm = '';

	$: parrains = data.parrains.filter((p) =>
		JSON.stringify(p).toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<svelte:head>
	<title>🏠</title>
	<meta name="description" content="Parrainsup" />
</svelte:head>

<section>
	<h1>Bienvenue ! Voici {data.parrains.length} de vos parrains</h1>

	<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
		<div class="mb-4">
			<label class="block mb-2 text-sm font-bold text-gray-700" for="search"> Recherche </label>
			<div class="relative">
				<input
					class="w-full px-3 py-2 pl-10 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					id="search"
					type="text"
					placeholder="prénom, mot-clef..."
					bind:value={searchTerm}
				/>
			</div>
		</div>
	</form>

	<div class="format-container">
		<div class="boxes_box">
			{#each parrains as parrain}
				<Card {parrain} />
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.format-container {
		width: 1142px;
		margin: 0 auto;
	}

	.boxes_box {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;

		padding: 50px 0;
	}

	@media only screen and (max-width: 767px) {
		.format-container {
			width: 96%;
		}
	}

	h1 {
		width: 100%;
	}
</style>
