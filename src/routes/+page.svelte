<script>
	import Card from "./Card.svelte"
	export let data
</script>

<svelte:head>
	<title>🏠</title>
	<meta name="description" content="Parrainsup" />
</svelte:head>

<section>
	<h1> Bienvenue ! Voici {data.parrains.length} des parrains </h1>

	<div class="format-container">
		<div class="boxes_box">
		{#each data.parrains as parrain}
			<Card parrain={parrain}/>
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
