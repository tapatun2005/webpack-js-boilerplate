// @Styles
import './SliderGallery.scss'

// @Functions
// -----------------
import { 
    $selector
} from '../../Functions/functions'
// -----------------

console.log('SLIDER')

export default class SliderGallery {
    
    constructor(el, o = {}) {  
        this.sliders = Array.isArray(el) ? el.map(item => $selector(item)) : [$selector(el)]
        this.isResponsive = o.responsive ? true : false
    }
    
}