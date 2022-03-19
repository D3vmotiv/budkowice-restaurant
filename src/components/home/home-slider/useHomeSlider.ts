import { ref } from "vue";

const useHomeSlider = () => {
    const sliderPage = ref(1);

    const changeSliderPage = (page: number) => {
    sliderPage.value = page;
    };

    return {
        sliderPage,
        changeSliderPage,
    }
}

export default useHomeSlider