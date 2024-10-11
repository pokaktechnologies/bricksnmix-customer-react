import React from "react";

export default function Input() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "red", // Light red background
        padding: "20px",
        width: "100%",
        height: "400px", // Adjust height as needed
        color: "white",
      }}
    >
      {/* Image on the left */}
      <img
        src="/Hire.png"
        alt="Hire Up"
        style={{
          width: "50%", // Image takes half of the width
          height: "300px", // Fill the container height
          objectFit: "cover", // Cover the area
          marginRight: "20px", // Space between image and text
          borderRadius: "0", // No border radius
        }}
      />

      {/* Text and Button on the right */}
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <h1 style={{ marginBottom: "10px",textAlign:"left" }}>Hire Up</h1>
        <p style={{ marginBottom: "10px",textAlign:"left" }}>Pack Now</p>
        <button
          style={{
            backgroundColor: "white",
            color: "red",
            border: "none",
            padding: "10px 20px",
            width: "200px",
            borderRadius: "5px",
            cursor: "pointer",
            alignSelf: "flex-start", // Align button to the left under text
            marginTop: "10px", // Add margin for proper spacing
          }}
        >
          Pack Now
        </button>
      </div>
    </div>
  );
}
