import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
        <>
            <div className="container-fluid footer">
                <div className="row">
                    <h3 className='text-center mt-3'>Ak Movies</h3>
                    <div className="containerBox">

                        <div className="  firstContainer">
                            <span>Home</span><br />
                            <span>Contact Us</span><br />
                            <span>About Us</span><br />
                            <span>Privacy Policy</span><br />
                        </div>
                        <div className="  middleContainer">
                            <span>FAQ</span><br />
                            <span>Live</span><br />
                            <span>Permium</span><br />
                            <span>Privacy policy</span><br />
                        </div>
                        <div className=" thirdContainer">
                            <span>Resent Release</span><br />
                            <span>Top IMDB</span><br />
                            <span>Services</span><br />
                            <span>Movies and series</span><br />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer