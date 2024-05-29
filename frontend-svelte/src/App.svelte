<script>
    import RequestURLEditor from "./lib/RequestURLEditor.svelte";
    import { requestHandler } from "./models/requestHandler.js";
    import Response from "./lib/Response.svelte";

    let request = {
        url: "",
        method: "GET",
        headers: {},
        body: "",
    };

    let responseDataAsString = {};

    const onSendReq = async () => {
        const res = await requestHandler
            .request(request)
            .then((response) => {
                if (typeof response === "string") {
                    console.log("Text response:", response);
                } else if (response instanceof Blob) {
                    console.log("Binary response:", response);
                } else {
                    console.log("JSON response:", response);
                    responseDataAsString = JSON.stringify(response);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
</script>

<main class="min-h-screen max-h-screen">
    <div class="flex justify-between flex-row">
        <div class="w-full min-h-screen">
            <RequestURLEditor
                bind:method={request.method}
                bind:url={request.url}
                {onSendReq}
            />
        </div>
        <Response bind:responseDataAsString />
    </div>
</main>
