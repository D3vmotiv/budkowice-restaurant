import { DefineComponent } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseLink from './BaseLink.vue'

const components: { [key: string]: DefineComponent<{}, {}, any>   } = {
    'base-button': BaseButton,
    'base-link': BaseLink,
}

export default components