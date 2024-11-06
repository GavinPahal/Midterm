import React from "react";

export default function PictureDisplay({ dataContents }) {
  return (
    <div className="flex flex-wrap gap-6">
      {dataContents.map((item) => (
        <div key={item.id} className="p-4 border rounded-lg">
          <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mb-4" />
          <p>{item.name}</p>
          <p className="text-sm text-gray-500">{item.species}</p>
          <p className="text-sm text-gray-500">Origin: {item.origin.name}</p>
        </div>
      ))}
    </div>
  );
}
