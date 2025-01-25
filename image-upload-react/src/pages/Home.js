import React, { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import ImageAnalysis from "../components/ImageAnalysis";
import "../App.css";

const Home = () => {
  const [aiResponse, setAiResponse] = useState(null);

  const handleFileUpload = (file) => {
    console.log("File uploaded:", file);
    setAiResponse(file.aiResponse); // Assumes aiResponse is part of the response data
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Welcome to ExpressInk</h1>
        <p className="subtitle">
          Discover the emotions behind your images with our intuitive tool.
        </p>
      </header>

      <div>
        <h1>Upload your child's drawing here</h1>
        <ImageUpload onFileUpload={handleFileUpload} />
        <ImageAnalysis aiResponse={aiResponse} />
      </div>
    </div>
  );
};

export default Home;
