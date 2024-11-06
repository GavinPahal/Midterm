import React from "react";

export default function PictureDisplay({ dataContents }) {
  return (
    <div className={`dropdown ${dataContents.length > 0 ? "show" : ""}`}>
      {dataContents.map((item) => (
        <div key={item.id} className="dropdown-item" style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
          <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
          <div>
            <p>{item.name}</p>
            <p className="text-sm" style={{ fontSize: "12px", color: "gray" }}>{item.species}</p>
            {/* Adding origin information */}
            <p className="text-sm" style={{ fontSize: "12px", color: "gray" }}>Origin: {item.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
