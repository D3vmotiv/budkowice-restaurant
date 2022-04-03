import { ref } from "vue";

const useHomeSlider = ({ maxPage }: { maxPage: number }) => {
    const sliderPage = ref(1);

    const changeSliderPage = (page: number) => {
        let newPageValue = page > maxPage ? 1 : page;
        newPageValue = page <= 0 ? maxPage : newPageValue;

        sliderPage.value = newPageValue;
    };

    return {
        sliderPage,
        changeSliderPage,
    }
}

export default useHomeSlider