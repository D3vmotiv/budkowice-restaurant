<script setup lang="ts">

</script>

<template>
    <footer class="bg-secondary text-white p-5">

        <a href="/">
            <h4 class="text-base mb-2">
                Karczma na Górce
            </h4>
        </a>

        <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dui posuere risus odio.ia
        </p>

        <hr class="my-4">

        <h5 class="text-base mb-1">
            Szybka nawigacja
        </h5>

        <ul class="text-sm">
            <li>
                <a href="/" class="inline-block py-1">
                    Strona główna
                </a>
            </li>

            <li>
                <a href="/menu" class="inline-block py-1">
                    Menu
                </a>
            </li>

            <li>
                <a href="/kontakt" class="inline-block py-1">
                    Kontakt
                </a>
            </li>
        </ul>

        <hr class="my-4">

        <h5 class="text-base mb-2">
            Dane kontaktowe
        </h5>

        <ul>
            <li>
                <a
                    href="https://goo.gl/maps/SggQTNRHx5GCTFTr8"
                    target="_blank"
                    rel="noopener nofollow"
                    class="inline-flex items-center py-1 text-sm"
                >
                    <img
                        src="/images/localization.svg"
                        alt="Lokalizacja:"
                        width="20"
                        height="20"
                        class="mr-2"
                    >

                    Wołczyńska 2, 46-030 Stare Budkowice
                </a>
            </li>

            <li>
                <a
                    href="tel:+48774210498"
                    class="inline-flex items-center py-1 text-sm"
                >
                    <img
                        src="/images/phone.svg"
                        alt="Numer telefonu:"
                        width="20"
                        height="20"
                        class="mr-2"
                    >

                    +48 774 210 498
                </a>
            </li>

            <li>
                <a
                    href="mailto:karczmanagorce@gmail.com"
                    class="inline-flex items-center py-1 text-sm"
                >
                    <img
                        src="/images/email.svg"
                        alt="Adres email:"
                        width="20"
                        height="20"
                        class="mr-2"
                    >

                    karczmanagorce@gmail.com
                </a>
            </li>

            <li>
                <a
                    href="https://www.facebook.com/Karczma-na-G%C3%B3rce-255581354538501/"
                    target="_blank"
                    rel="noopener nofollow"
                    class="inline-flex items-center py-1 text-sm"
                >
                    <img
                        src="/images/facebook.svg"
                        alt="Strona facebook:"
                        width="20"
                        height="20"
                        class="mr-2"
                    >

                    facebook
                </a>
            </li>
        </ul>

        <hr class="my-4">

        <p class="text-sm">
            Karczma na Górce &copy; {{ (new Date()).getFullYear() }}
        </p>

    </footer>
</template>