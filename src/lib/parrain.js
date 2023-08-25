
import url from "$lib/url.js"
import Papa from "papaparse"


export async function getData(){
	const res = await fetch(url)
	const data = await res.text()
  return Papa.parse(data).data.slice(2).filter(p => p.length > 1)
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

export function fromArray(arr) {
  return {
    image: arr[3],
    nom: arr[0].split(" ")[1],
    prénom: arr[0].split(" ")[0],
    surnom: arr[2],
    genre: arr[1],
    origine: arr[4],
    taupin: arr[5],
    ânerie: arr[6],
    anecdote: arr[7],
    vœu: arr[8],
    bizuth: arr[9],
    team: arr[10]
  }
}
