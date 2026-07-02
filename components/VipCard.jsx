import { useState } from "react";

function VipCard({ vip }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-[16px] overflow-hidden !p-[28px] border-none cursor-pointer text-left transition-all duration-300"
      style={{
        background: "linear-gradient(145deg, #181530, #100e24)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 48px rgba(124,58,237,0.25)" : "none",
        border: hovered ? "1px solid rgba(124,58,237,0.3)" : "1px solid transparent",
      }}
    >
      {/* VIP tag */}
      <span
        className="absolute !top-0 !left-0 bg-amber-500 !text-black !text-[9px] font-extrabold !px-[10px] !py-[3px] transition-transform duration-300"
        style={{
          borderRadius: "0 0 8px 0",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        VIP
      </span>

      {/* Glow blob — hover pe appear hota hai */}
      <div
        className="absolute rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          top: -40, right: -40, width: 140, height: 140,
          background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Icon — hover pe bounce/rotate */}
      <div
        className="!w-[60px] !h-[60px] rounded-full bg-purple-500/10 flex items-center justify-center !text-[26px] !mx-auto !mb-[18px] transition-all duration-300"
        style={{
          transform: hovered ? "scale(1.15) rotate(-8deg)" : "scale(1) rotate(0deg)",
          background: hovered ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)",
        }}
      >
        {vip.icon}
      </div>

      <h3 className="!text-[16px] font-bold text-white text-center !mb-[10px]">{vip.title}</h3>
      <p className="!text-[13px] text-slate-500 text-center leading-relaxed">{vip.desc}</p>

      {/* Bottom underline — hover pe slide in */}
      <div
        className="!mt-[16px] !mx-auto transition-all duration-300"
        style={{
          height: 2,
          width: hovered ? 40 : 0,
          background: "linear-gradient(90deg, #a78bfa, #7c3aed)",
          borderRadius: 2,
        }}
      />
    </button>
  )
}

export default VipCard;


