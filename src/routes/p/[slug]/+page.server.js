import { getData, fromArray } from '$lib/parrain.js';

export async function load({ fetch, params }) {
	const parrain = (await getData()).map(fromArray).find((p) => p.nom == params.slug);
	return { parrain };
}
