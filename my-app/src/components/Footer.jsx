import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="main-container">
                <div className="footer-header">
                    <h1>Follow Instagram @ourinsta</h1>
                </div>
                

            </div>
            <div className="middle-footer">
            <div className="footer-img-container">
                <img src="./home-4-instagram-image-101.jpg" alt="" className="img1" />
                <img src="./home-4-instagram-image-102.jpg" alt="" className="img2" />
                <img src="./home-4-instagram-image-103.jpg" alt="" className="img1" />
                <img src="./home-4-instagram-image-104.jpg" alt="" className="img2" />
                <img src="./home-4-instagram-image-105.jpg" alt="" className="img1" />
                <img src="./home-4-instagram-image-106.jpg" alt="" className="img2" />
            </div>
            
                <div className="main-container">
                <div className="discription-containt">
                    <div className="first-cotainer">
                        <img src="./logo_apple.svg" alt="logo" />
                        <p>
                            AforApple WP Theme
                            Konec sit amet nibh vestibulum ipsum cursus rhoncus. Duis ac tortor gravida ligula eleifend finibus sed vel tellus.
                        </p>
                        <h1>Social Media</h1>
                    </div>
                    <div className="second-containt">
                        <h1>Get In Touch</h1>
                        <p>Manzana María Elena Leiva s/n., Vitoria, Can 58948</p>
                        <p>
                            Call Us :
                            +00 (0) 123 456 789
                        </p>
                        <p>
                            E-Mail :
                            admin@example.com
                        </p>
                    </div>
                    <div className="third-containt">
                        <h1>Useful Links</h1>
                    </div>
                    <div className="fourth-containt">
                        <h1>Customer Services</h1>
                    </div>
                    <div className="fifth-containt">
                        <h1>Subscribe to Our Newsletter</h1>
                        <p>Urna porttitor rhoncus dolor purus. Pellentesque massa placerat duis. </p>
                        <input type="text" className="email" placeholder="Enter your Email ID" />
                        <button className="suscribe">SUSCRIBE NOW</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-footer">
                <div className="main-container">
                    <div className="footer-footer-containt">
                        <h5>© 2023 Wedesigntech. All Rights Reserved.</h5>
                        <div className="footer-footer-img-container">
                            <img src="payment-icon-1.png" alt="" className="footer-footer-img" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer