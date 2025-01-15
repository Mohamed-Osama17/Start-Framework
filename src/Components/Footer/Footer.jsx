import React from 'react'
import Style from './Footer.module.css';



export default function Footer() {
    return <>

        <footer className={`${Style.navyBlue}  p-5`}>
            <div className="container">

                <div className="card-group">
                    <div className="card bg-transparent text-white border border-0">
                        <div className="card-body text-center">
                            <h5 className="card-title text-uppercase fs-3 fw-bold">Location</h5>
                            <p className="card-text">2215 John Daniel Drive.</p>
                            <p className="card-text">Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="card bg-transparent text-white border border-0">
                        <div className="card-body text-center">
                            <h5 className="card-title text-uppercase fs-3 fw-bold">AROUND THE WEB</h5>
                            <span className='icons fs-5'>
                                <i className='fa-brands fa-facebook mx-1 icon p-2 border border-1 border-white rounded-circle'></i>
                                <i className='fa-brands fa-twitter mx-1 icon p-2 border border-1 border-white rounded-circle'></i>
                                <i className='fa-brands fa-linkedin-in mx-1 icon p-2 border border-1 border-white rounded-circle'></i>
                                <i className='fa-solid fa-globe mx-1 icon p-2 border border-1 border-white rounded-circle'></i>
                            </span>
                        </div>
                    </div>
                    <div className="card bg-transparent text-white border border-0">
                        <div className="card-body text-center">
                            <h5 className="card-title text-uppercase fs-3 fw-bold">ABOUT FREELANCER</h5>
                            <p className="card-text">Freelance is a free to use, licensed Bootstrap theme created by Route.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
        <div className={`${Style.darkBlue} p-4` }>
            <p className='text-white text-center'>Copyright © Your Website 2025</p>
        </div>

    </>
}
