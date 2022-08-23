<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  <div class="content">
    
  </div>
  <img src={data.image[0].url} alt="">
  <h1>{data.title}</h1>
  <div>{@html data.content}</div>