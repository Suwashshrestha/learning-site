import React from 'react'
import Card from './Card5';
const Eightpage = () => {
    const cardData = [
        {
            image: "./team-02.webp",
            name: "Aurora Jackson ",
            description: "English"
        },
        {
            image: "./team-03.webp",
            name: "cosmi ",
            description: "French"
        },
        {
            image: "./team-04.webp",
            name: "debora  ",
            description: "Classroom Management"
        },
        {
            image: "./teacher-image-5.webp",
            name: "elspeth ",
            description: "Montessori"
        },
    ];
    return (
        <div className="eightpage">
            <div className="main-container">
                <div className="eightpage-wrapper">
                    <div className="header-eight">
                        <div className="eight-header-left">
                            <div className="left-header-header">
                                <h3>Our Experts</h3>
                                <h1>Incredible People Behind Incredible Students.</h1>
                            </div>
                            <img src="star-group.svg" alt="" />
                        </div>
                        <div className="eight-header-right">
                            <p>

                                Nec feugiat in fermentum posuere urna. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Aliquam faucibus purus in massa tempor nec feugiat. Pharetra vel turpis nunc eget. Proin libero nunc consequat interdum varius sit amet..
                            </p>
                        </div>
                    </div>
                    <div className="eightpage-card">
                        <div className="cards-groups-eight">
                            {cardData.map((card, index) => (
                                <Card
                                    key={index}

                                    image={card.image}
                                    name={card.name}
                                    description={card.description}
                                />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="logo-container">
                        <img src="new-brand1.webp" alt="" className="logo-image" />
                        <img src="new-brand4.webp" alt="" className="logo-image" />
                        <img src="new-brand5.webp" alt="" className="logo-image" />
                        <img src="new-brand6.webp" alt="" className="logo-image" />
                        <img src="new-brand7.webp" alt="" className="logo-image" />
                        <img src="new-brand1.webp" alt="" className="logo-image" />
                        <img src="new-brand4.webp" alt="" className="logo-image" />
                        <img src="new-brand5.webp" alt="" className="logo-image" />
                        <img src="new-brand6.webp" alt="" className="logo-image" />
                        <img src="new-brand7.webp" alt="" className="logo-image" />
                    </div>
        </div>
    )
}

export default Eightpage