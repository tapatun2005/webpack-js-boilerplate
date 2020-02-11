 // Styles
import '../../styles/Views/SliderGallery.scss'

// Images
import '../../assets/images/image-tes.jpg'


// Library
import { 
    PageNavigation, 
    SliderGallery 
} from 'Components'

 new SliderGallery(['.slider-gallery', 'body'], {
     navigation: true
 })

