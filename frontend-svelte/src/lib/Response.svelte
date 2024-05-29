<script>
    export let responseDataAsString;
</script>

<section class="w-full">
    <textarea
        id="config-textarea"
        readOnly
        bind:value={responseDataAsString}
        class="text-lg p-2 rounded-lg text w-full h-full"
    />
</section>
