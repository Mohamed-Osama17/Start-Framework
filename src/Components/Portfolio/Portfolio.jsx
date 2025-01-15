import React, { useState } from 'react';
import Style from './Portfolio.module.scss';
import img1 from '../../assets/port1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';


export default function Portfolio() {

    const [image, setimage] = useState();
    const [images,] = useState([
        { id: 'img1', src: img1 },
        { id: 'img2', src: img2 },
        { id: 'img3', src: img3 },
        { id: 'img4', src: img1 },
        { id: 'img5', src: img2 },
        { id: 'img6', src: img3 },
    ])

    function changeImg(img) {
        console.log(img);
        setimage(img)
    }

    return <>

        <section>
            <div className="title text-center pt-4">
                <h1 className={`${Style.textDarkBlue}  text-uppercase fw-bolder`}>portfolio component</h1>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <div className={`${Style.bgDarkBlue} ${Style.line} me-3`}></div>
                    <span><i className={`${Style.textDarkBlue} fa-solid fa-star`}></i></span>
                    <div className={`${Style.bgDarkBlue} ${Style.line} ms-3`}></div>
                </div>
            </div>
            <article className='py-4'>
                <div className="container">
                    <div className="row gy-5">
                        {images.map((image) => <div key={image.id} className="col-lg-4 col-md-6">
                            <div id={image.id} onClick={() => changeImg(image.src)} className="portfolio-container position-relative rounded-3 overflow-hidden">
                                <img src={`${image.src}`} className='w-100 rounded-3' alt="image_1" />
                                <div className={`${Style.layer} position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
                                    <span><i className="fa-solid fa-plus fa-6x text-white"></i></span>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </article>
            <div className="lightBoxContainer pt-4 pb-4">
                {image ? <div className="lightBox position-fixed start-0 top-0 w-100 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center z-3" onClick={() => changeImg()}>
                    <img src={`${image}`} width={'600px'} alt="lightBox-Image" />
                </div> : null}
            </div>
        </section>
    </>

}
