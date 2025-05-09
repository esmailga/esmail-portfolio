import React, { useState, useEffect } from 'react';
import styles from './SliderStyles.module.css'

const imagesData = [ { url: '../../../flutter-svgrepo-com.svg', alt: 'Flutter' },
                     { url: '../../../Erpnext--Streamline-Simple-Icons.svg', alt: 'ERPNext' }, 
                     { url: '../../../javascript-svgrepo-com.svg', alt: 'JavaScript' }, 
                     { url: '../../../php-alt-svgrepo-com.svg', alt: 'PHP' }, 
                     { url: '../../../python-svgrepo-com.svg', alt: 'Python' }, 
                     { url: '../../../html-5-svgrepo-com.svg', alt: 'HTML' }, 
                     { url: '../../../django-svgrepo-com.svg', alt: 'Django' }, 
                     { url: '../../../mysql-svgrepo-com.svg', alt: 'MySQL' }, 
                     { url: '../../../firebase-svgrepo-com.svg', alt: 'Firebase' }, 
                     { url: '../../../git-svgrepo-com.svg', alt: 'Git' }, ];

const ImageSlider = () => {
const [currentIndex, setCurrentIndex] = useState(0);
                    
    useEffect(() => {
         const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (imagesData.length * 2));
            }, 2000);
                    
    return () => clearInterval(interval);
    }, [imagesData.length]);
                    
    return (
        <>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2>Tools that I use</h2>
        </div>
        <div className={styles['slider-container']}>
            <div className={styles['slider-images-wrapper']} style={{ transform: `translateX(${-currentIndex * (100 / (imagesData.length * 2))}%)` }}>
                {imagesData.map((image, index) => (
                    <div
                        key={index}
                        className={styles['slider-image']}
                        style={{ backgroundImage: `url(${image.url})` }}
                    >
                    </div>
                        )
                    )
                }
                {imagesData.map((image, index) => (
                    <div
                    key={index + imagesData.length}
                    className={styles['slider-image']}
                    style={{ backgroundImage: `url(${image.url})` }}
                    >
                    </div>
                        )
                    )
                }
            </div>
        </div>
        </>
    );
};
                    
export default ImageSlider;