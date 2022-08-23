<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';

	let valueA = '';
</script>

<div class="card-display">
    <div class="card-container">
      <Card padded>A simple padded card.</Card>
    </div>
   
    <div class="card-container">
      <Card>
        <Content>You can also use <code>Content</code>.</Content>
      </Card>
    </div>
   
    <div class="card-container">
      <Card variant="outlined" padded>An outlined, padded card.</Card>
    </div>
  </div>
   
  <pre class="status">Clicked: {clicked}</pre>
   
