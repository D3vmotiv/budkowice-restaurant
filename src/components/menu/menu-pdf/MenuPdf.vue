<script setup lang="ts">

const props = defineProps<{
    url: string;
}>();

</script>
<template>
    <object
        :data="props.url"
        type="application/pdf"
        class="w-full min-h-[70vh] md:min-h-screen"
    >
        <div class="p-5">

            <h2 class="text-xl mb-3">
                Wystąpił problem
            </h2>

            <p>
                ale nie przejmuj się! <br><br>
                Przygotowaliśmy dla Ciebie rozwiązanie. <br><br>

                Jeśli chcesz możesz pobrać zawartość klikając 

                <a :href="props.url" download class="text-primary font-bold">tutaj</a>.

                <br><br>

                Alternatywnie możesz odwiedzić
                <a
                    href="https://www.facebook.com/Karczma-na-G%C3%B3rce-255581354538501/"
                    target="_blank"
                    rel="noopener nofollow"
                    class="text-facebookBlue font-bold"
                >
                naszą stronę na facebooku
                </a>
                
                i tam znaleźć interesujące Cię informacje!
            </p>
        </div>
    </object> 
</template>