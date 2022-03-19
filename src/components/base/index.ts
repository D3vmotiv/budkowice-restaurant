import { DefineComponent } from 'vue'
import BaseButton from './BaseButton.vue'

const components: { [key: string]: DefineComponent<{}, {}, any>   } = {
    'base-button': BaseButton,
}

export default components