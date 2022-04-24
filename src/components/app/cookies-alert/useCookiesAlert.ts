import { ref, onMounted } from "vue"

const useCookiesAlert = () => {
    const today = new Date();
    const isAlertSeen = ref<string | boolean | null>(false);

    onMounted(() => {
        const cookiesAlert = localStorage.getItem("cookies-alert");
        isAlertSeen.value = cookiesAlert && cookiesAlert !== "" && (new Date(cookiesAlert)) > today 
    })

    const handleAcceptCookies = () => {
        // Accept for 24hours
        localStorage.setItem("cookies-alert", `${(new Date(today.getTime() + (24 * 60 * 60 * 1000)))}`)
        isAlertSeen.value = true
    }

    return {
        isAlertSeen,
        handleAcceptCookies,
    }
}

export default useCookiesAlert;