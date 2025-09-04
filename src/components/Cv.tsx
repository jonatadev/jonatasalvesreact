import React from "react";

const Cv: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
      <iframe
  src={"/cv/Jonatas Alves da Silva_cv.pdf"}
        title="Currículo Jonatas Alves"
        width="90%"
        height="800px"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      />
      <a
  href={"/cv/Jonatas Alves da Silva_cv.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginTop: "16px", fontWeight: "bold" }}
      >
        Download PDF
      </a>
    </div>
  );
};

export default Cv;
