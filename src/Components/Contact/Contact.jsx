import React from 'react';
import './Contact.scss';
import '@fortawesome/fontawesome-free';

export default function Contact() {
    return <>



        <section>
            <div className="contact-title pt-4 text-center">
                <h1 className='text-uppercase mb-3 fs-1 fw-bolder'>CONTACT SECTION</h1>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <div className='line me-3'></div>
                    <span><i class="fa-solid fa-star"></i></span>
                    <div className='line ms-3'></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-container my-5 p-4 ">
                            <form className='d-flex flex-column justify-content-center align-items-center'>
                                <div className="mb-5 w-50">
                                    <input type="text"
                                        className="form-control border border-top-0 border-start-0 border-end-0"
                                        id="userName"
                                        aria-describedby="emailHelp"
                                        placeholder='User Name' />
                                </div>
                                <div className="mb-5 w-50">
                                    <input type="number"
                                        className="form-control border border-top-0 border-start-0 border-end-0"
                                        id="userAge"
                                        placeholder='User Age' />
                                </div>
                                <div className="mb-5 w-50">
                                    <input type="email"
                                        className="form-control border border-top-0 border-start-0 border-end-0"
                                        id="userEmail"
                                        placeholder='User Email' />
                                </div>
                                <div className="mb-5 w-50">
                                    <input type="password"
                                        className="form-control border border-top-0 border-start-0 border-end-0"
                                        id="userPassword"
                                        placeholder='User Password' />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button type="submit" className="btn btn-contact btn-outline-primary ps-2 pe-2">Send Message</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section >




    </>
}
