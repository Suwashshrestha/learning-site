import React from 'react'
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import Card from './Card4';
const Seventhpage = () => {
    const cardData = [
        {
            question: "What costs are covered in course fees?",

            answer:
                "Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Urna neque viverra justo nec ultrices dui sapien eget mi. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Sapien faucibus et molestie ac feugiat sed. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Morbi tincidunt augue interdum velit euismod in pellentesque.",
        },
        {
            question: "When do you communicate with parents?",

            answer:
                "Ultricies mi eget mauris pharetra et. Pellentesque massa placerat duis ultricies lacus sed. In dictum non consectetur a erat nam at. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Neque gravida in fermentum et sollicitudin. Tellus orci ac auctor augue mauris augue neque gravida in. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum.",
        },
        {
            question: "Do you take kids for field trip?",

            answer:
                "Lobortis feugiat vivamus at augue eget arcu dictum varius. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Nibh ipsum consequat nisl vel pretium lectus quam. Tempor commodo ullamcorper a lacus.Vel fringilla est ullamcorper eget nulla. ",
        },
        {
            question: "How will your education system helps my child?",

            answer:
                "Rhoncus aenean vel elit scelerisque. Arcu non sodales neque sodales. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Tortor condimentum lacinia quis vel. Mattis nunc sed blandit libero volutpat sed.Tellus orci ac auctor augue mauris augue neque gravida.",
        },
    ];
    return (
        <div className="seventhpage">
            <img src="./bg-banner-scaled.jpg" alt="" className="seventh-background" />
            <div className="main-container">
                <div className="seventhpage-wrapper">
                    <div className="left-wrapper">
                        <div className="header">
                            <h3>Kids Education Queries </h3>
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <div className="questions-answers">
                            {cardData.map((card, index) => (
                                <Card
                                    key={index}
                                    question={card.question}
                                    answer={card.answer}
                                    
                                />
                            ))}
                        </div>
                    </div>
                    <div className="right-wrapper">
                        <div className="top-containt">
                            
                            <img src="./faq-contact.webp" alt="" className="right-img"/>
                            <h1>Need Support?</h1>

                            <p>Feugiat sed lectus vestibulum mattis fusce ut placerat orci ullamcorper velit.</p>
                            <div className="top-containt-footer">
                                <div className="contact">
                                <BiSolidMessageRounded className="icon" />
                                <h4>Contact Us</h4>
                                </div>
                                <div className="call">
                                <IoCall className="icon"/>
                                <h4>Call Us</h4>
                                </div>
                                <div className="video">
                                <IoVideocam  className="icon"/>
                                <h4>Video Call</h4>
                                </div>
                            </div>
                            

                        </div>
                        <div className="buttom-containt">
                            <h1>Download Our App</h1>
                            <p>Egestas diam in arcu cursus. Porttitor leo a a lacus vestibulum diam sollicitudin. </p>
                            <div className="img-btn">
                                <img src="./playstore.webp" alt="" />
                                <img src="./app-store.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Seventhpage