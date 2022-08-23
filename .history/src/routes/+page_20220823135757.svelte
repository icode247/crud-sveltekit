<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import LinearProgress from '@smui/linear-progress';
	import Button from '@smui/button';

	type Post = {
		createdAt: string;
		image: any;
		content: string;
		title: string;
		id: number;
	};
	let items: Post[] = [];
	let loaded = false;

	loadThings(false);

	function loadThings(wait: boolean) {
		if (typeof fetch !== 'undefined') {
			loaded = false;

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
	}
</script>

<div style="margin-bottom: 1em;">
	<Button on:click={() => loadThings(true)}>Do Pretend Loading</Button>
</div>

<DataTable table$aria-label="User list" style="width: 100%;">
	<Head>
		<Row>
			<Cell numeric>ID</Cell>
			<Cell>Title</Cell>
			<Cell>Image</Cell>
			<Cell>Date Created</Cell>
            <Cell>Actions</Cell>

		</Row>
	</Head>
	<Body>
		{#each items as item (item.id)}
			<Row>
				<Cell numeric>{item.id}</Cell>
				<Cell>{item.title}</Cell>
				<Cell><img width="100"src="{item.image[0].url}" alt=""/></Cell>
				<Cell>{item.createdAt}</Cell>
                <Cell>
                    <Button>Edit</Button>
                    <button>Delete</button>
                </Cell>
			</Row>
		{/each}
	</Body>

	<LinearProgress
		indeterminate
		bind:closed={loaded}
		aria-label="Data is being loaded..."
		slot="progress"
	/>
</DataTable>
