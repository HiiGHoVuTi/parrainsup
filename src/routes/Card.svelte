<script>
	export let parrain;
	import { genresIllustrés } from '$lib/parrain.js';

	const crop = (p, len) => (p.length <= len ? p : p.slice(0, len) + '[…]');
</script>

<div class="boxes_item">
	<a href={'/p/' + parrain.nom} class="boxes-item_link">
		<div
			class="boxes-item_bg"
			style={parrain.couleur ? 'background-color: ' + parrain.couleur + ';' : ''}
		/>

		<div class="boxes-item_title">
			{parrain.prénom +
				(parrain.surnom ? ' «' + parrain.surnom + '»' : '') +
				' ' +
				parrain.nom.toUpperCase() +
				(genresIllustrés[parrain.genre]
					? ' ' + genresIllustrés[parrain.genre]
					: ', ' + parrain.genre)}
		</div>

		<p class="boxes-item_field-box">
			{crop(parrain.taupin, 300)}
		</p>
		<p />

		{#if parrain.vœu}
			<div class="boxes-item_field-box">
				<bold> Vœu: </bold>
				<span class="boxes-item_field">
					{crop(parrain.vœu, 180)}
				</span>
			</div>
		{/if}

		{#if parrain.team}
			<div class="boxes-item_field-box">
				Team:
				<span class="boxes-item_field">
					{crop(parrain.team, 180)}
				</span>
			</div>
		{/if}
	</a>
</div>

<style>
	.boxes_item {
		-ms-flex-preferred-size: calc(33.33333% - 30px);
		flex-basis: calc(33.33333% - 30px);

		margin: 0 15px 30px;

		overflow: hidden;

		border-radius: 28px;
	}
	.boxes-item_link {
		display: block;
		padding: 30px 20px;
		background-color: #696969;

		overflow: hidden;

		position: relative;
	}
	.boxes-item_link:hover,
	.boxes-item_link:hover .boxes-item_field {
		text-decoration: none;
		color: #fff;
	}
	.boxes-item_link:hover .boxes-item_bg {
		-webkit-transform: scale(12);
		-ms-transform: scale(12);
		transform: scale(12);
	}
	.boxes-item_title {
		min-height: 87px;
		margin: 0 0 25px;

		overflow: hidden;

		font-weight: bold;
		font-size: 30px;
		color: #fff;

		z-index: 2;
		position: relative;
	}
	.boxes-item_field-box {
		font-size: 18px;
		color: #fff;

		z-index: 2;
		position: relative;
	}
	.boxes-item_field {
		font-weight: bold;
		color: #f9b234;

		-webkit-transition: color 0.7s ease;
		-o-transition: color 0.7s ease;
		transition: color 0.7s ease;
	}
	.boxes-item_bg {
		height: 128px;
		width: 128px;
		background-color: #f9b234;

		z-index: 1;
		position: absolute;
		top: -75px;
		right: -75px;

		border-radius: 50%;

		-webkit-transition: all 0.7s ease;
		-o-transition: all 0.7s ease;
		transition: all 0.7s ease;
	}
	.boxes_item:nth-child(5n) .boxes-item_bg {
		background-color: #3ecd5e;
	}
	.boxes_item:nth-child(5n + 1) .boxes-item_bg {
		background-color: #e44002;
	}
	.boxes_item:nth-child(5n + 2) .boxes-item_bg {
		background-color: #952aff;
	}
	.boxes_item:nth-child(5n + 3) .boxes-item_bg {
		background-color: #cd3e94;
	}
	.boxes_item:nth-child(5n + 4) .boxes-item_bg {
		background-color: #4c49ea;
	}

	@media only screen and (max-width: 979px) {
		.boxes_item {
			-ms-flex-preferred-size: calc(50% - 30px);
			flex-basis: calc(50% - 30px);
		}
		.boxes-item_title {
			font-size: 24px;
		}
	}

	@media only screen and (max-width: 767px) {
		.ag-format-container {
			width: 96%;
		}
	}
	@media only screen and (max-width: 639px) {
		.boxes_item {
			-ms-flex-preferred-size: 100%;
			flex-basis: 100%;
		}
		.boxes-item_title {
			min-height: 72px;
			line-height: 1;

			font-size: 24px;
		}
		.boxes-item_link {
			padding: 22px 40px;
		}
		.boxes-item_field-box {
			font-size: 16px;
		}
	}
</style>
