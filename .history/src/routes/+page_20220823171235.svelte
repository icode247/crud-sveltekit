<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import LinearProgress from '@smui/linear-progress';
	import Button from '@smui/button';
    import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
  import Slider from '@smui/slider';
  import FormField from '@smui/form-field';

  let open = false;
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
        <Button>Add new</Button>
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


<Dialog
  bind:open
  aria-labelledby="slider-title"
  aria-describedby="slider-content"
>
  <Title id="slider-title">Volumes</Title>
  <Content id="slider-content">
    <div>
      <FormField style="display: flex; flex-direction: column-reverse;">
        <Slider
          bind:value={volumeMedia}
          use={[InitialFocus]}
          style="width: 100%;"
        />
        <span slot="label">Media Volume</span>
      </FormField>
    </div>
    <div>
      <FormField style="display: flex; flex-direction: column-reverse;">
        <Slider bind:value={volumeRingtone} style="width: 100%;" />
        <span slot="label">Ringtone Volume</span>
      </FormField>
    </div>
    <div>
      <FormField style="display: flex; flex-direction: column-reverse;">
        <Slider bind:value={volumeAlarm} style="width: 100%;" />
        <span slot="label">Alarm Volume</span>
      </FormField>
    </div>
  </Content>
  <Actions>
    <Button action="accept">
      <Label>Done</Label>
    </Button>
  </Actions>
</Dialog>

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<script lang="ts">



  let volumeMedia = 100;
  let volumeRingtone = 80;
  let volumeAlarm = 80;
</script>
