import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    fetch('https://api.fake-rest.refine.dev/posts')
    .then((response) => response.json())
    .then((json) =>
        setTimeout(
            () => {
                items = json;
                loaded = true;
            },
            // Simulate a long load time.
            wait ? 2000 : 0
        )
    );
 
}