import React from "react";
import Image from "next/image";
import { userCard } from "../lib/lib";

const Card = () => {
  return (
      <div className="card-section">
        {userCard.map((item, index) => (
          <div key={index} className="card-item">
            <Image alt="card-icon" src={item.icon} />
            <p className="role">{item.label}</p>
            <p className="qtity">{item.value}</p>
          </div>
        ))}
      </div>
  );
};

export default Card;
