import React from 'react'

const Seventhpage = () => {
    const cardData = [
        {
          title: "Activity Classroom",
          image: "./home-2-image-104.webp",
          description:
            "Semper feugiat nibh sed pulvinar proin gravida. Aliquam eleifend mi in nulla. In pellentesque massa placerat duis ultricies. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.",
        },
    ];
    return (
        <div className="seventh">
            <img src="./bg-banner-scaled.jpg" alt="" className="seventh-background" />
            <div className="main-container">
                <div className="seventhpage-wrapper">
                    <div className="left-wrapper">
                        <div className="header">
                            <h3>Kids Education Queries </h3>
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <div className="questions">
                            <h1>What costs are covered in course fees?</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Seventhpage