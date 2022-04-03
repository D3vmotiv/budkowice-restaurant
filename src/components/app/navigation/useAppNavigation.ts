import { ref, onMounted, onUnmounted, computed } from "vue"

const useAppNavigation = ({ isInitialFilled }: {isInitialFilled?: boolean }) => {

    const isNavOpen = ref(false)
    const isTouchingTop = ref(true)
    const changeNavVisibility = () => {
        isNavOpen.value = !isNavOpen.value
    }

    const shouldBeFilled = computed(() => isInitialFilled || !isTouchingTop.value)

    const setIsTouchingTop = () => {
        isTouchingTop.value = window.scrollY <= 15;
    }

    onMounted(() => {
        setIsTouchingTop()
        window.addEventListener('scroll', setIsTouchingTop)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', setIsTouchingTop)
    })

    return {
        isNavOpen,
        shouldBeFilled,
        changeNavVisibility,
    }
}

export default useAppNavigation