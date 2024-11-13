const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the description for card 1.",
   
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the description for card 2.",
   
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the description for card 3.",
    
  }
];


const Card = ({title, description}) => (
  <div className="card">
  
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);


const CardList = () => (
  <div className="card-list">
    {cardData.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        description={card.description}
      />
    ))}
  </div>
);

export default CardList;
