<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';

	let valueA = '';
</script>

<div class="content">
	<div class="edit">
		<form action="">
			<Textfield variant="outlined" bind:value={valueA} label="Label">
				<HelperText slot="helper">Helper Text</HelperText>
			</Textfield>
		</form>
	</div>
</div>
