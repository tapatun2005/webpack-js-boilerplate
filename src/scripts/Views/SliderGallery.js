 // Styles
import '@styles/style.scss'
import '@styles/Views/SliderGallery.scss'

// Images
import '../../assets/images/image-tes.jpg'


// Library
import {
    SliderGallery
} from 'Components'

 new SliderGallery(
    [
        '.slider-gallery__images',
        '.slider-gallery__text'
    ], 
    {
        controls: true,
        navigation: true,
        responsive: {
            767: {
                constrols: false
            },
            992: {
                controls: true
            }
        }
    }
 )

