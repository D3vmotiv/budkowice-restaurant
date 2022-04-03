<template>
  <div
    class="w-screen h-[50vh] welcome--image flex flex-col justify-center items-center"
    style="background-image: url('/images/contact_1.jpg')"
  >
    <slot name="top" />

    <h1 class="text-white">
        Kontakt
    </h1>

  </div>
</template>
<style lang="postcss">
.welcome--image {
    @apply bg-cover bg-no-repeat bg-black-ligth;
    background-position: 65%;
}
</style>