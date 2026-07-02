import Link from "next/link"
import { useState } from "react"

const POPULAR_GAMES = [
  { id: 1,  name: "Mustang Trail",       emoji: "🐎", badge: "hot",  rtp: "96.5%", image:"/images/ig1.png" },
  { id: 2,  name: "Starlight Princess",  emoji: "👸", badge: "new",  rtp: "97.1%", image:"/images/ig2.png" },
  { id: 3,  name: "Legacy of Gold",      emoji: "🏛️", badge: "hotrtp", rtp: "98.9%", image:"/images/ig3.png"},
  { id: 4,  name: "Sweet Bonanza",       emoji: "🍬", badge: "hotrtp", rtp: "96.5%",image:"/images/ig4.png" },
  { id: 5,  name: "Sugar Rush",          emoji: "🍭", badge: "new",  rtp: "95.0%", image:"/images/ig5.png" },
  { id: 6,  name: "Book of Gold",        emoji: "📖", badge: "hot",  rtp: "96.2%", image:"/images/ig6.png" },
  { id: 7,  name: "Buffalo King",        emoji: "🦬", badge: "hotrtp", rtp: "96.6%", image:"/images/ig7.png" },
  { id: 8,  name: "Gates of Olympus",    emoji: "⚡", badge: "hotrtp", rtp: "98.0%", image:"/images/ig8.png"},
  { id: 9,  name: "Hit Bar Gold",        emoji: "🎯", badge: "hot",  rtp: "97.0%", image:"/images/ig9.png" },
  { id: 10, name: "888 Dragons",         emoji: "🐉", badge: "new",  rtp: "96.3%",image:"/images/ig10.png"  },
]

const badgeStyles = {
  hot:    { label: "🔥 HOT",     bg: "rgba(245,158,11,0.9)", color: "#000" },
  new:    { label: "NEW",        bg: "#10b981",              color: "#fff" },
  hotrtp: { label: "HOT RTP",    bg: "#ef4444",              color: "#fff" },
}

function PopularGameCard({ game }) {
  const [hovered, setHovered] = useState(false)
  const badge = badgeStyles[game.badge]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-[12px] overflow-hidden cursor-pointer relative transition-transform duration-300"
      style={{ aspectRatio: "0.75", transform: hovered ? "translateY(-4px) scale(1.02)" : "none", zIndex: hovered ? 10 : 1 }}
    >

   <div
  className="w-full h-full relative"
  style={{
    backgroundImage: `url(${game.image || "/images/default.png"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
</div>
      <span className="absolute !top-[6px] !left-[6px] !text-[8px] font-bold !px-[6px] !py-[2px] rounded-[4px]" style={{ background: badge.bg, color: badge.color }}>
        {badge.label}
      </span>
      <span className="absolute !top-[6px] !right-[6px] !text-[8px] font-bold !px-[5px] !py-[2px] rounded-[4px]" style={{ background: "rgba(0,0,0,0.7)", color: "#4ade80" }}>
        {game.rtp}
      </span>

      <div
        className="absolute inset-0 flex items-center justify-center rounded-[12px] transition-opacity duration-300"
        style={{ background: "rgba(124,58,237,0.6)", opacity: hovered ? 1 : 0 }}
      >
        <button className="bg-gradient-to-r from-amber-500 to-orange-500 !text-black border-none !px-[20px] !py-[8px] rounded-[7px] !text-[12px] font-extrabold cursor-pointer">
          ▶ PLAY
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 !p-[8px]" style={{ zIndex: 1 }}>
        <div className="!text-[10px] font-bold text-white" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
          {game.name}
        </div>
      </div>
    </div>
  )
}
export default PopularGameCard;
