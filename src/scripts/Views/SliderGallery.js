 // Styles
import '@styles/style.scss'
import '@styles/Views/SliderGallery.scss'

// Images
import '../../assets/images/image-tes.jpg'


// Library
import {
    SliderGallery
} from 'Components'

 new SliderGallery('.slider-gallery', {
     controls: false,
     navigation: true,
     responsive: {
        992: {
            navigation: true
        }
     }
 })

