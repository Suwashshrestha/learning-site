
function Card({ image, name, description }){
    return (
        <div className="card-container-eight">
            <div className="eignt-card-wrapper">
            {image && <img src={image} alt={name} className="card-image" />}
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-description">{description}</p>
            </div>
            </div>
        </div>
    );
};

export default Card;