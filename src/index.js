// @Styles
// ------------------------
import './styles/style.css'
import './styles/style.scss'
import './styles/style.sass'
// ------------------------


// @Functions
// ------------------------
import { 
	selector, 
	selectors 
} from './scripts/Functions/functions'
// ------------------------


// @Components
// ------------------------
import { 
	PageNavigation 
} from './scripts/Components/components'
// ------------------------


console.log(selector, selectors)
console.log(new PageNavigation())