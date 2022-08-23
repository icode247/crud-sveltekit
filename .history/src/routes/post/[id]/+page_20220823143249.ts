import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const id = params.id
    const data = await fetch('https://api.fake-rest.refine.dev/posts/1').then(res => res.json());
    console.log(data)
    return data
}