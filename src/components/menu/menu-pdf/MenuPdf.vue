<script setup lang="ts">

const props = defineProps<{
    url: string;
}>();

</script>
<template>
    <object
        :data="props.url"
        type="application/pdf"
        class="flex w-full min-h-[70vh] md:min-h-screen"
    >
        <div class="p-5 h-100 flex flex-col justify-center text-center">

            <h2 class="text-xl mb-4">
                Pobieranie rozpoczęte!
            </h2>

            <p>
                Jeśli akcja nie rozpoczeła się automatycznie kliknij
                <a :href="props.url" download class="text-primary font-bold">tutaj</a>.

                <br><br>
            </p>
        </div>
    </object> 
</template>