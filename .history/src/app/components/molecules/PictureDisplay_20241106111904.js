import React from "react";

export default function PictureDisplay({ dataContents }) {
  return (
    <div className="dropdown flex justify-center flex-wrap gap-6">
      {dataContents.map((item) => (
        <div key={item.id} className="dropdown-item flex flex-col items-center p-4 border rounded-lg shadow-lg">
          <img
            src={item.image}
            alt={item.name}
            className="w-32 h-32 rounded-full mb-4" // Increased size of image
          />
          <div className="text-center">
            <p className="text-xl font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">{item.species}</p>
            <p className="text-sm text-gray-500">Origin: {item.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
