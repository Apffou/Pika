import arrowLeft from './img/left-arrow.png';
import arrowRight from './img/right-arrow.png'
import { useState } from 'react';
import './Carousel.scss';



function Carousel({ images }) {

    const filePath = "/Pika/assets/";

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = images.length;

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
    };

    if (totalImages === 1) {
        const firstImage = filePath + images[0];
        return (
            <section className="pictures-carrousel">
                <img src={firstImage} alt={images.title} />
            </section>
        );
    }


    const imageUrl = filePath + images[currentImageIndex]



    return (
        <section className="pictures-carrousel">
            <img src={imageUrl} alt="#" className='image-carousel' />
            <div className='arrows'>
                <img src={arrowLeft} alt="précédent" onClick={previousImage} />
                <img src={arrowRight} alt="suivant" onClick={nextImage} />
            </div>

        </section>
    )
}
export default Carousel;