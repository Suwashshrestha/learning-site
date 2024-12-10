
import { FaArrowRight } from "react-icons/fa";
const secondpage = () => {
  return (
    <div className=" secondpage">
      <div className="main-container">
        <div className="secondpage-wrapper">
          <div className="three-girls">
            <img src="./star1.svg" alt="" className="star1"/>
            <img src="./gradient-blob.webp" alt="img1" className="background-image" />
            <img src="./slider-2-char-2.webp" alt="img2" className="overlay-image" />
          </div>
          <div className="secondpage1">
            <div className="secondpage1-wrapper">
              <div className="heading">
                <h3>UNLIMATED LEARNING</h3>
                <h2>Cross Disiplinary Curriculum</h2>

                <div className="paragraph">
                  <p>Quisque egestas diam in arcu cursus. Amet cursus sit amet dictum sit.sodales felis, ultricies ultricies metus faucibus non. Integer consequat ex lacus, in mattis nulla posuere.</p>
                </div>
              </div>
              <div className="secondpage-list">
                <div className="">
                  <div className="secondpage-list-1">
                    <div className="box">
                      01
                    </div>
                    <div className="list">
                      <h2>Fun Filled Learning</h2>
                      <p>
                        Arcu non odio euismod lacinia at quis risus. Fusce ut placerat orci.
                      </p>
                    </div>
                  </div>
                  <div className="secondpage-list-1">
                    <div className="box">
                      02
                    </div>
                    <div className="list">
                      <h2>Fun Filled Learning</h2>
                      <p>
                        Arcu non odio euismod lacinia at quis risus. Fusce ut placerat orci.
                      </p>
                    </div>
                  </div>
                  <div className="secondpage-list-1">
                    <div className="box">
                      03
                    </div>
                    <div className="list">
                      <h2>Fun Filled Learning</h2>
                      <p>
                        Arcu non odio euismod lacinia at quis risus. Fusce ut placerat orci.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="secondpage2">
                  <img src="h2-abt-image.webp" alt="" className="jump-girl" />
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

export default secondpage