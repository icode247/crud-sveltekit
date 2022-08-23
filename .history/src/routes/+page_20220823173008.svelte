<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import LinearProgress from '@smui/linear-progress';
	import Button from '@smui/button';
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
    import CharacterCounter from '@smui/textfield/character-counter';
	let open = false;
   " let valueA = '"
   ''
	let value = "";
	type Post = {
		createdAt: string;
		image: any;
		content: string;
		title: string;
		id: number;
	};
	let items: Post[] = [];
	let loaded = false;

	$: loadThings(false);

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

	async function deletePost(id: number) {
		const res = await fetch(`https://api.fake-rest.refine.dev/posts/${id}`, {
			method: 'DELETE'
		}).then((res) => res.json());
	}
</script>

<main>
	<div style="display:flex; justify-content:space-between">
		<div style="margin-bottom: 1em;">
			<Button on:click={() => loadThings(true)}>Do Pretend Loading</Button>
		</div>
		<Button on:click={() => (open = true)}>Add new</Button>
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
				{console.log(item)}
				<Row>
					<Cell numeric>{item.id}</Cell>
					<Cell>{item.title}</Cell>
					<Cell><img width="100" src={item.image[0].url} alt="" /></Cell>
					<Cell>{item.createdAt}</Cell>
					<Cell>
						<a href="/post/1">Edit</a>
						<Button on:click={() => deletePost(item.id)}>Delete</Button>
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
</main>

<Dialog bind:open selection aria-labelledby="list-title" aria-describedby="list-content">
	<Title id="slider-title">Volumes</Title>
	<Content id="slider-content">
		<div>
			<Textfield variant="outlined" bind:value={valueA} label="Edit Title">
				<HelperText slot="Edit Title">Helper Text</HelperText>
			</Textfield>
			<br />
			<Textfield textarea input$maxlength={2500} bind:value label="Edit Content">
				<CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
			</Textfield>
			<br />
			<Button>Edit</Button>
		</div>
	</Content>
	<Actions>
		<Button action="accept">Close</Button>
	</Actions>
</Dialog>
