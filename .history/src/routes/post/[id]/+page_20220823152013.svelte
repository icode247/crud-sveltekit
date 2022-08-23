<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import Card, { Content } from '@smui/card';

	let valueA = '';
</script>

<div class="card-display">
	<div class="card-container">
		<Card padded>
            <Textfield variant="outlined" bind:value={valueA} label="Label">
                <HelperText slot="helper">Helper Text</HelperText>
              </Textfield> 
        </Card>
	</div>
</div>
