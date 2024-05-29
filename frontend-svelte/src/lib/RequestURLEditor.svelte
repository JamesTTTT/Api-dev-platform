<script>
    export let method = "";
    export let url = "";
    export let onSendReq;
</script>

<div class="flex justify-center items-center w-full bg-neutral">
    <div class="w-full flex justify-center">
        <select
            bind:value={method}
            class="select select-bordered join-item rounded-none"
        >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
        </select>
        <div class="w-full">
            <input
                bind:value={url}
                class="block w-full p-2 border border-primary select-none input-bordered text-xs forced-color-adjust-none
                    py-[15px]"
                placeholder="Enter URL"
            />
        </div>

        <div class="indicator">
            <button
                class="btn btn-primary join-item rounded-none"
                on:click={onSendReq}>SEND</button
            >
        </div>
    </div>
</div>
