import { getData, fromArray } from '$lib/parrain.js';

export async function load({ fetch, params }) {
	const parrains = (await getData()).map(fromArray);
	const nom = parrains[Math.floor(Math.random() * parrains.length)].nom;
	return { nom };
}
