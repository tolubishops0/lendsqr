import React from "react";
import Image from "next/image";
import { userCard } from "../lib/lib";

const Card = () => {
  return (
    <div>
      <div className="card-container">
        {userCard.map((item, index) => (
          <div key={index} className="card-item">
            <Image alt="card-icon" src={item.icon} />
            <p className="role">{item.label}</p>
            <p className="qtity">{item.value}</p>
          </div>
        ))}
      
      </div>
    </div>
  );
};

export default Card;
