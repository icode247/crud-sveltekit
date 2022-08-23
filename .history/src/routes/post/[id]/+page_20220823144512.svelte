<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  <img src={data.image[0]} alt="">
  <h1>{data.title}</h1>
  <div>{@html data.content}</div>