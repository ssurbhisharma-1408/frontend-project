import { useState } from "react"

export function PromoCard({ promo }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "linear-gradient(145deg, #0d1f35, #111827)",
        border: hovered ? "1px solid rgba(16,185,129,0.4)" : "1px solid rgba(255,255,255,0.06)",
        borderRadius: 18, overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 48px rgba(16,185,129,0.12)" : "none",
        cursor: "pointer",
      }}
    >
      {/* Top */}
      <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.05)", position: "relative" }}>
        <span style={{ fontSize: 36, display: "block", marginBottom: 10 }}>{promo.emoji}</span>
        <span style={{
          position: "absolute", top: 14, right: 14,
          background: promo.tagBg, border: `1px solid ${promo.tagBorder}`,
          color: promo.tagColor, fontSize: 10, fontWeight: 700,
          padding: "3px 10px", borderRadius: 999,
        }}>{promo.tag}</span>
        <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15, marginBottom: 5 }}>{promo.title}</h3>
        <p style={{ color: "#475569", fontSize: 12, margin: 0 }}>{promo.desc}</p>
      </div>

      {/* Bottom */}
      <div style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#10b981" }}>{promo.value}</div>
          <div style={{ fontSize: 10, color: "#334155", marginTop: 2 }}>{promo.expiry}</div>
        </div>
        <button style={{
          background: hovered ? "linear-gradient(135deg, #10b981, #059669)" : "rgba(16,185,129,0.08)",
          border: "1px solid rgba(16,185,129,0.3)",
          color: hovered ? "#fff" : "#10b981",
          padding: "8px 16px", borderRadius: 8,
          fontSize: 12, fontWeight: 700, cursor: "pointer",
          transition: "all 0.3s ease",
        }}>Claim</button>
      </div>
    </div>
  )
}