import { FaArrowRight } from "react-icons/fa";

function Card({ maintitle, title, description, image }) {
    return (
      <div className="card">
        
        <div className="card-image-container">
            <div className="date">08 Mar</div>
        <img src={image} alt={title} className="card-image" />
        </div>
        <div className="main-title">
        <li className="card-title-li">{maintitle}</li>
        <h3>Wdtadmin</h3>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="secondpage-button">
                  <button className="secondpage-button-input">
                    <span>
                   
                   GET STARTED
                    </span>
                    <FaArrowRight />
                    </button>
                </div>
      </div>
    );
  };
  export default Card