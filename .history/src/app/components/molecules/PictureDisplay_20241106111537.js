import React from "react";

export default function PictureDisplay({ dataContents }) {
  return (
    <div className="flex flex-wrap justify-center">
      {dataContents.map((item) => (
        <div key={item.id} className="p-4 border">
          <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full" />
          <p>{item.name}</p>
          <p>{item.species}</p>
          <p>Origin: {item.origin.name}</p>
        </div>
      ))}
    </div>
  );
}
