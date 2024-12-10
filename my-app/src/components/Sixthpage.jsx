import Card from "./Card3";

const Sixthpage = () => {
    const cardData = [
        {
            maintitle: "Nursery",
          title: "The Ultimate Guide to Creating a Positive Classroom Environment.",
          image: "./blog-detail-image-105.webp",
          description:
            "Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.",
        },
        {
            maintitle: "Nursery",
            title: "Tips For Creating A Productive Study Space At Home For Kids.",
            image: "./blog-detail-image-104.webp",
            description:
              "Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.",
          },
          {
            maintitle: "Kindergarten",
            title: "Fun And Educational Activities To Boost Children’s Learning Ability.",
            image: "./blog-detail-image-103.webp",
            description:
              "Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.",
          },
    ];
  return (
    <div className="sixthpage">
        <div className="main-container">
            <div className="sixthpage-heading">
            <h4>News & Blogs</h4>
            <h1>Boosting The Development Of Children's Brain & Motor Skills</h1>
            </div>
            <div className="sisthpage-card">
          <div className="cards-groups">
            {cardData.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                maintitle={card.maintitle}
                title={card.title}
                
                description={card.description}
              />
            ))}
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Sixthpage