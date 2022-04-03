<template>
  <div
    class="w-full h-[50vh] welcome--image flex flex-col justify-center items-center"
    style="background-image: url('/images/contact_1.jpg')"
  >
    <slot name="top" />

    <h1 class="text-white md:text-2xl lg:text-3xl">
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