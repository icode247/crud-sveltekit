<script>
	/** @type {import('./$types').PageData} */
    import Textfield from '@smui/textfield';
	export let data;
</script>

<div class="content">
	<img src={data.image[0].url} alt="" />
	<h1>{data.title}</h1>
	<div>{@html data.content}</div>
    <div class="edit">
        <form action="">
            
        </form>
    </div>
</div>
