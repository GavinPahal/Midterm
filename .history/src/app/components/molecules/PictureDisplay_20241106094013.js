import React from "react";

export default function PictureDisplay({ dataContents }) {
  return (
    <div className="dropdown mt-2 border p-2 rounded bg-white shadow-md">
      {dataContents.map((item) => (
        <div key={item.id} className="flex items-center gap-3 p-2 border-b last:border-none">
          <img src={item.image} alt={item.name} className="w-10 h-10 rounded" />
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">{item.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
