<script>
	/** @type {import('./$types').PageData} */
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    type Data = {
        image
    }
	export let data;
</script>

<div class="content">
	<img src={data.image[0].url} alt="" />
	<h1>{data.title}</h1>
	<div>{@html data.content}</div>
    <div class="edit">
        <form action="">
            <Textfield variant="outlined" bind:value={valueA} label="Label">
                <HelperText slot="helper">Helper Text</HelperText>
              </Textfield>
        </form>
    </div>
</div>
