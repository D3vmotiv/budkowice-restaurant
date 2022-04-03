<template>
    <article
        class="w-full flex flex-col items-center lg:mb-12"
        aria-label="Nasza lokalizacja na mapie"
    >
        <h2 class="w-full lg:w-3/4 text-left text-xl text-primary mb-2 pl-3 md:text-2xl">
            Jak dojechać?
        </h2>

        <div class="w-full lg:w-3/4 map--background__moved">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10072.75701410985!2d18.059851!3d50.864696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47150b9aae24e1e2!2sKARCZMA%20NA%20G%C3%93RCE%20s.c.!5e0!3m2!1sen!2spl!4v1648982788197!5m2!1sen!2spl"
                class="w-full border-0 lg:h-[700px]"
                height="450"
                loading="lazy"
                style="border: 0;"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe> 
        </div>

    </article>
</template>
<style lang="postcss" scoped>
.map--background__moved {
    @apply pl-4 pb-4 relative z-20;
}

.map--background__moved::after {
    @apply
        absolute block z-[-1] top-8 right-8 bottom-0 left-0 bg-primary-light
        lg:top-16 lg:right-16 lg:-bottom-8 lg:-left-8;
    content: '';
}
</style>