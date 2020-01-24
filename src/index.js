// @Styles
// ------------------------
import './styles/style.css'
import './styles/style.scss'
import './styles/style.sass'
// ------------------------


// @Functions
// ------------------------
import { 
	// selector, 
	// selectors 
} from './scripts/Functions/functions'
// ------------------------


// @Components
// ------------------------
import { 
	PageNavigation 
} from './scripts/Components/components'
// ------------------------


// EXAMPLE
// ------------------------
class App {
	constructor() {
		this.pageNavigation = new PageNavigation('#navigation', {
			responsive: {
				991: {
					progressBar: false
				},
				480: {
					progressBar: true
				}
			}
		})
	}

	init() {
		this.pageNavigation.init()
	}
}

new App().init()