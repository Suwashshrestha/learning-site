import Card from "./Card2";
import { FaArrowRight } from "react-icons/fa";

const Fifthpage = () => {
  const cardData = [
    {
      title: "Activity Classroom",
      image: "./home-2-image-104.webp",
      description:
        "Semper feugiat nibh sed pulvinar proin gravida. Aliquam eleifend mi in nulla. In pellentesque massa placerat duis ultricies. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.",
    },
    {
      title: "Play Classroom",
      image: "./home-2-image-103.webp",
      description:
        "Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Nunc eget lorem dolor sed. Rutrum quisque.",
    },
    {
      title: "Computer Classroom",
      image: "./home-2-image-102.webp",
      description:
        "Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Lacus luctus accumsan tortor posuere ac ut. Elementum facilisis leo vel fringilla est ullamcorper. neque aliquam vestibulum.",
    },
    {
      title: "Science Lab",
      image: "./home-2-image-101.webp",
      description:
        "Rhoncus dolor purus non enim. Libero volutpat sed cras ornare arcu dui vivamus arcu. Lorem mollis aliquam ut porttitor leo a diam. Eros in cursus turpis massa tincidunt.",
    },
  ];

  return (
    <div className="fifthpage">
      <img src="./slider-2-bg.jpg" alt="" className="fifth-background"/>
      <div className="main-container">
        <div className="fifthpage-wrapper">
          <div className="fifthpage-header">
            <img src="./curved-arrow.svg" alt="" className="curved-arrow-left" />
            <div className="thirdpage-header-middle">
              <h4>Kids Education</h4>
              <h1>Unique Place Where The Magic Of Learning Starts.</h1>
            </div>
            <img src="./pp-1.webp" alt="" className="pp" />
          </div>
        </div>
        <div className="fifthpage-card">
          <div className="cards-groups">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <div className="fifthpage-footer">
          <div className="fifthpage-footer-wrapper">
            <div className="left-wrapper">
              <div className="containt">
              <h4>Our Results</h4>
              <h1>We're Proud Of Our Clients & Projects</h1>
              <p>
                Porttitor massa id neque aliquam vestibulum morbi blandit. Aliquam
                faucibus purus in massa tempor nec feugiat. Pharetra vel turpis nunc
                eget libero nunc consequat interdum varius sit amet.
              </p>
              <div className="secondpage-button">
                <button className="secondpage-button-input">
                  <span>READ MORE</span>
                  <FaArrowRight />
                </button>
              </div>
              <img
                src="counter-h2-tp-img.webp"
                alt=""
                className="right-image"
              />
              </div>
            </div>
            <div className="right-wrapper">
              <div className="card2">
                <h3>Students Graduated</h3>
                <h1>750K</h1>
                <p>
                  Donec sit amet turpis tincidunt eros, nam porttitor massa leo porta
                  maecenas reque.
                </p>
              </div>
              <div className="right-card-container">
              <div className="card2">
                <h3>Academic Programs</h3>
                <h1>289+</h1>
                <p>
                  Donec sit amet turpis tincidunt eros, nam porttitor massa leo porta
                  maecenas reque.
                </p>
              </div>
              </div>
              <div className="card2">
                <h3>Global Awards</h3>
                <h1>785+</h1>
                <p>
                  Donec sit amet turpis tincidunt eros, nam porttitor massa leo porta
                  maecenas reque.
                </p>
              </div>
              
              <div className="card2">
                <h3>Schools Worldwide</h3>
                <h1>65+</h1>
                <p>
                  Donec sit amet turpis tincidunt eros, nam porttitor massa leo porta
                  maecenas reque.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthpage;
