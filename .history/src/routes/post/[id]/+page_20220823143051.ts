import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
   const data = await fetch('https://api.fake-rest.refine.dev/posts').then((res.json()))
}