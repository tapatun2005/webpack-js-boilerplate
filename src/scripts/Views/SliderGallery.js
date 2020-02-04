// Styles
import '../../styles/Views/SliderGallery.scss'

// Images
import '../../assets/images/image-tes.jpg'


// Library
import { 
    SliderGallery
 } from '../Lib/index.js'

 new SliderGallery(['.slider-gallery', 'body'], {
     navigation: true
 })

