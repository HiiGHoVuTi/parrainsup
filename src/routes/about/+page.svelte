<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>À propos de cette application</h1>
	<p>
		Ce site a pour objectif de vous aider à connaître vos parrains rapidement et à trouver le vôtre
		!
	</p>
	<p />
	<p>
		Un petit groupe présidé par Kenza et Solène s'est occupé du sondage, et Maxime a construit ce
		site.
	</p>
	<p>Merci à:</p>
	<ul>
		{#each ['Kenza', 'Solène', 'Maxime', 'Lucie', 'Cydony', 'Camille', 'Milan', 'Gabriel', 'Léo', 'Lucas', 'Raphaël'] as name}
			<li>{name}</li>
		{/each}
	</ul>
</div>
