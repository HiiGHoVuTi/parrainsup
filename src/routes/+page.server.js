import { getData, fromArray } from '$lib/parrain.js';

export async function load({ fetch, params }) {
	return { parrains: (await getData()).map(fromArray) };
}
