
import { FaArrowRight } from "react-icons/fa";
const Fourthpage = () => {
  return (
    <div className="fourth">
      <img src="filler-about-bg.jpg" alt="" className="fourth-background"/>
      <div className="main-container">
     
        <div className="fourthpage">
          <div className="elementor-spacer-inner"></div>

          <div className="fourthpage1">
            <img src="offer-img-h2.webp" alt="" />
            <div className="elementor-widget-container">
              <div className="wdt-heading-holder" id="wdt-heading-dac7613">
                <div className="wdt-heading-subtitle-wrapper wdt-heading-align-center">
                  <span className="wdt-heading-subtitle">Welcome to School</span>
                </div><h2 className="wdt-heading-title-wrapper">
                  <span className="wdt-heading-title">Big Offer</span>
                </h2>
              </div>
            </div>
            <div className="coundown_container">
              <div className='countdown'>
                <div className="time-box">
                  <p>00</p>
                  <h3>Days</h3>
                </div>
                <span>:</span>
                <div className="time-box">
                  <p>00</p>
                  <h3>Hrs</h3>
                </div>
                <span>:</span>
                <div className="time-box">
                  <p>00</p>
                  <h3>Mins</h3>
                </div>
                <span>:</span>
                <div className="time-box">
                  <p>00</p>
                  <h3>Secs</h3>
                </div>
              </div>
              <div className="secondpage-button">
                  <button className="secondpage-button-input">
                    <span>
                   
                    MORE ABOUT US
                    </span>
                    <FaArrowRight />
                    </button>
                </div>
            </div>
          </div>


        </div>


      </div>


    </div>
    
  )
}

export default Fourthpage