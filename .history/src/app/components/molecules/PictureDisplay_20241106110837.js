import React from "react";

export default function PictureDisplay({ dataContents }) {
  return (
    <div className={`dropdown ${dataContents.length > 0 ? "show" : ""}`}>
      {dataContents.map((item) => (
        <div key={item.id} className="dropdown-item">
          <img src={item.image} alt={item.name} className="image" />
          <div>
            <p>{item.name}</p>
            <p className="text-sm">{item.species}</p>
            <p className="text-sm">Origin: {item.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
