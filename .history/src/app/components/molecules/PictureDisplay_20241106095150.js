import React from "react";

export default function PictureDisplay({ dataContents }) {
  return (
    <div>
      
      {dataContents.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "10px", margin: "8px 0", justifyContent: "center" }}>
          <img src={item.image} alt={item.name} style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
          <div>
            <p>{item.name}</p>
            <p style={{ fontSize: "12px", color: "gray" }}>{item.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
