<script>
  import RequestURLEditor from "./lib/RequestURLEditor.svelte";
  import {requestHandler} from "./models/requestHandler.js"

  let request = {
      url: "",
      method: "GET",
      headers: {},
      body: ""
  }

  const onSendReq = async () => {
     const res = await requestHandler.request(request)
         .then(response => {
             if (typeof response === 'string') {
                 console.log('Text response:', response);
             } else if (response instanceof Blob) {
                 console.log('Binary response:', response);
             } else {
                 console.log('JSON response:', response);
             }
         })
         .catch(error => {
             console.error('Error:', error);
         });
  }
</script>

<main class="min-h-screen">
    <div>
        <div class="flex justify-center items-center py-5">
            <RequestURLEditor bind:method="{request.method}" bind:url="{request.url}" {onSendReq} />
        </div>
        <p>
            {request.method} - {request.url}
        </p>
    </div>
</main>
