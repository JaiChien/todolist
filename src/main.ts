import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faTrash)

import App from './App.vue'

const app = createApp(App)
app.use(BootstrapVue3)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
