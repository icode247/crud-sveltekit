<script>
	import Button  from '@smui/button';
	/** @type {import('./$types').PageData} */
	export let data;
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import Card, { Content } from '@smui/card';
	import CharacterCounter from '@smui/textfield/character-counter';


	let value = '';

	let valueA = '';
</script>

<div class="card-display">
	<div class="card-container">
		<Card padded>
			<Textfield variant="outlined" bind:value={valueA} label="Edit Title">
				<HelperText slot="Edit Title">Helper Text</HelperText>
			</Textfield>
<br>
			<Textfield textarea input$maxlength={100} bind:value label="Label">
				<CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
			</Textfield>
		</Card>
	</div>
</div>
