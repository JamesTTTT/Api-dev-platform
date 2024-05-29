<script>
    export let method = "";
    export let url = "";
    export let onSendReq;
</script>

<div class="join">
    <select bind:value={method} class="select select-bordered join-item">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
    </select>
    <div>
        <div>
            <input bind:value={url} class="input input-bordered join-item" placeholder="Enter URL"/>
        </div>
    </div>

    <div class="indicator">
        <button class="btn join-item" on:click={onSendReq} >SEND</button>
    </div>
</div>