<div style="margin-bottom: 1em;">
    <Button on:click={() => loadThings(true)}>Do Pretend Loading</Button>
  </div>
  
  <DataTable table$aria-label="User list" style="width: 100%;">
    <Head>
      <Row>
        <Cell numeric>ID</Cell>
        <Cell style="width: 100%;">Title</Cell>
        <Cell>Content</Cell>
        <Cell>Image</Cell>
      </Row>
    </Head>
    <Body>
      {#each items as item (item.id)}
      {console.log(item)}
        <Row>
          <Cell numeric>{item.id}</Cell>
          <Cell>{item.<svelte:head>
            <title>+page</title>
          </svelte:head>}</Cell>
          <Cell>{item.username}</Cell>
          <Cell>{item.email}</Cell>
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
  
  <script lang="ts">
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import LinearProgress from '@smui/linear-progress';
    import Button from '@smui/button';
  
    type User = {
      id: number;
      name: string;
      username: string;
      email: string;
      website: string;
    };
    let items: User[] = [];
    let loaded = false;
  
    loadThings(false);
  
    function loadThings(wait: boolean) {
      if (typeof fetch !== 'undefined') {
        loaded = false;
  
        fetch(
          'https://api.fake-rest.refine.dev/posts'
        )
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
  