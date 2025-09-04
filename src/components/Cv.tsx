import React from "react";

const Cv: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
      <iframe
        src={"/cv/Jonatas Alves da Silva_cv.pdf"}
        title="Currículo Jonatas Alves"
        width="100%"
        height="800px"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      />

      {/* Seção de Certificações */}
      <div style={{ marginTop: "40px", width: "100%", maxWidth: "600px" }}>
  <h2 style={{ fontSize: "1.3rem", marginBottom: "20px", fontWeight: 700 }}>Certifications</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <a href="https://www.credly.com/badges/01462fd8-9d7a-4203-b3ab-37659b442086/public_url" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit", background: "#f8f8f8", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: "12px 18px", minWidth: "260px" }}>
            <img src="/cv/solutions_architect.png" alt="AWS Solutions Architect Associate" style={{ width: 64, height: 64, objectFit: "contain", marginRight: "18px", borderRadius: "6px", border: "1px solid #eee" }} />
            <span style={{ fontWeight: 600, fontSize: "1.05rem" }}>AWS Certified Solutions Architect – Associate</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cv