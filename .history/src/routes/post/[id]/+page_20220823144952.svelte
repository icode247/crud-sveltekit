<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="content">
	<img src={data.image[0].url} alt="" />
	<h1>{data.title}</h1>
	<div>{@html data.content}</div>
    <div class="edit">
        <form action="">
            <input type="text" value={data.title}>
            <textarea name="" id="" cols="30" rows="10">{data.content}</textarea>
        </form>
    </div>
</div>
