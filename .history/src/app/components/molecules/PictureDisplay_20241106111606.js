import React from "react";

export default function PictureDisplay({ dataContents }) {
  return (
    <div className={`dropdown ${dataContents.length > 0 ? "show" : ""} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
      {dataContents.map((item) => (
        <div key={item.id} className="dropdown-item flex flex-col items-center p-4 border rounded-lg shadow-lg">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 rounded-full mb-4"
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
