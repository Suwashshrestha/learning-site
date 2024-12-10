import { useState } from "react";
import Card from "./Card";

const Thirdpage = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const cardData = [
    {
      title: "Sports",
      image: "./course-detail-image-109.jpg",
      description: "This is a simple card component.",
    },
    {
      title: "Dance",
      image: "./course-detail-image-108.jpg",
      description: "This is a simple card component.",
    },
    {
      title: "Craft",
      image: "./course-detail-image-106.jpg",
      description: "This is a simple card component.",
    },
    {
      title: "Indoor",
      image: "./course-detail-image-105.jpg",
      description: "This is a simple card component.",
    },
    {
      title: "Music",
      image: "./course-detail-image-104.jpg",
      description: "This is a simple card component.",
    },
    {
      title: "Music",
      image: "./course-detail-image-103.jpg",
      description: "This is a simple card component.",
    },
    {
      title: "Craft",
      image: "./course-detail-image-102.jpg",
      description: "This is a simple card component.",
    },
    {
      title: "Language",
      image: "./course-detail-image-101.jpg",
      description: "This is a simple card component.",
    },
  ];

  const categories = ["ALL", "Craft", "Dance", "Indoor", "Language", "Music", "Sports"];
  const filteredCards =
    selectedCategory === "ALL"
      ? cardData
      : cardData.filter((card) => card.title.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="thirdpage">
      <div className="main-container">
        <div className="thirdpage-wrapper">
          <div className="third">
            <div className="thirdpage-header">
              <img src="./atom.svg" alt="" className="atom" />
              <div className="thirdpage-header-middle">
                <h4>TAILORED CLASSES</h4>
                <h1>Unique Approaches To Teaching Combined Technology & Learning.</h1>
              </div>
              <img src="./curved-arrow.svg" alt="" className="curved-arrow" />
            </div>
            <div className="buttons-full">
              <div className="buttons">
                {categories.map((category, index) => (
                  <button
                    className={`secondpage-button-input ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="third-page-cards">
              <div className="cards-group">
                {filteredCards.map((card, index) => (
                  <Card
                    key={index}
                    className="card"
                    title={card.title}
                    image={card.image}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;


// import Card from "./Card"

// const Thirdpage = () => {
//   return (
//     <div className="thirdpage">
//       <div className="main-container">
//         <div className="thirdpage-wrapper">
//           <div className="third">
//             <div className="thirdpage-header">
//               <img src="./atom.svg" alt="" className="atom" />
//               <div className="thirdpage-header-middle">
//               <h4>TAILORED CLASSES</h4>
//               <h1>Unique Approaches To Teaching Combined Technology & Learning.</h1>
              
//               </div>
//               <img src="./curved-arrow.svg" alt="" className="curved-arrow" />
//             </div>
//             <div className="buttons">
//            {["ALL", "Craft", "Dance", "Indoor", "Language", "Music", "Sports"].map((category, index) => (
//                <button className="secondpage-button-input" key={index}>
//                    <span>{category}</span>
//                    </button>
//                     ))}
//               </div>



//             </div>
//             <div className="third-page-cards">
//               <div className="cards-group">
//               <Card className="card"
//               title="cards"
//               image="./course-detail-image-109.jpg"
//               description="This is a simple card component    ."
//               />
//               <Card 
//               title="cards"
//               image="./course-detail-image-108.jpg"
//               description="This is a simple card component    ."
//               />
              
//               <Card 
//               title="cards"
//               image="./course-detail-image-106.jpg"
//               description="This is a simple card component    ."
//               />
//               <Card 
//               title="cards"
//               image="./course-detail-image-105.jpg"
//               description="This is a simple card component    ."
//               />
//               </div>
//               <div className="cards-group">
//               <Card 
//               title="cards"
//               image="./course-detail-image-104.jpg"
//               description="This is a simple card component    ."
//               />
//               <Card 
//               title="cards"
//               image="./course-detail-image-103.jpg"
//               description="This is a simple card component    ."
//               />
              
//               <Card 
//               title="cards"
//               image="./course-detail-image-102.jpg"
//               description="This is a simple card component    ."
//               />
//               <Card 
//               title="cards"
//               image="./course-detail-image-101.jpg"
//               description="This is a simple card component    ."
//               />
//               </div>
              
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Thirdpage