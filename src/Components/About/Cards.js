import React, { useEffect} from "react";
import FlippableCard from "./FlippableCard";
import "./Cards.css";
import getAbout from "../../api/getAbout";


const Cards = () => {

  const [about, setAbout] = React.useState(null);

  useEffect(() => {
    getAbout().then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <div className="cards-container">
      {about && about.map((item) => {
        return (
          <FlippableCard
            key={item.id}
            front={item.role}
            back={item.fullName}
            photo={item?.photo}
            used={item.text}
          />
        );
      })}
    </div>
  );
};

export default Cards;
