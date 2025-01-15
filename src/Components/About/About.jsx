import React from 'react';
import './About.scss';

export default function About() {
    return <>


        <main className='d-flex flex-column justify-content-center align-items-center'>
            <div className="title text-center text-white  ">
                <h1 className='text-uppercase fs-1 fw-bolder'>ABOUT COMPONENT</h1>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <div className='line me-3'></div>
                    <span><i class="fa-solid fa-star"></i></span>
                    <div className='line ms-3'></div>
                </div>
            </div>

            <div className="containr">
                <div className="row gx-5 px-5">
                    <div className="col-md-6 ps-md-5 ms-0">
                        <p className='text-white'>Freelancer is a free bootstrap theme created by Route.<br />
                            The download includes the complete source files including HTML,<br />
                            CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.</p>
                    </div>
                    <div className="col-md-6 pe-5 me-0">
                        <p className='text-white'>Freelancer is a free bootstrap theme created by Route.<br />
                            The download includes the complete source files including HTML,<br />
                            CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.</p>
                    </div>
                </div>
            </div>
        </main>

    </>
}
