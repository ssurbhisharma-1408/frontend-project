"use client"

import { useState } from "react"
import { FaStar, FaUsers, FaPlay } from "react-icons/fa"
import { FaFire } from "react-icons/fa6"
import Link from "next/link"
import Image from "next/image"


const GAME_IMAGES = {
  "Lucky Slots":    "/images/g1.jpg",
  "Blackjack Pro":  "/images/g2.jpg",
  "Roulette Elite": "/images/g3.jpg",
  "Mega Jackpot":   "/images/g4.jpg",
  "Teen Patti":     "/images/g5.jpg",
  "Live Poker":     "/images/g6.jpg",
  "Baccarat":       "/images/g7.jpg",
  "Dragon Tiger":   "/images/g8.jpg",
  "Blast Jackpot":  "/images/g9.jpg",
  "Andar Bahar":    "/images/g10.jpg",
}

export default function GameCard({ game }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/games/${game.id}`} style={{ textDecoration: "none" }}>
    <div
      className="game-card relative bg-card rounded-2xl overflow-hidden cursor-pointer border border-gray-700/50 hover:border-primary/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Game Image/Emoji Area */}
<div style={{ position: "relative", aspectRatio: 0.75, overflow: "hidden" }}>
<Image
  src={GAME_IMAGES[game.name] || `https://picsum.photos/seed/${game.id}/400/200`}
  alt={game.name}
  fill
  style={{ objectFit: "cover", transform: isHovered ? "scale(1.08)" : "scale(1)", transition: "transform 0.4s ease" }}
/>
</div>

  {/* Dark overlay */}
  <div style={{
    position: "absolute", inset: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
  }} />
        {/* Hot badge */}
        {game.isHot && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-red-500/90 text-white text-xs !px-2 !py-1 rounded-full font-bold">
            <FaFire className="text-yellow-300" /> Trending
          </div>
        )}

        {/* New badge */}
        {game.isNew && (
          <div className="absolute top-3 left-3 bg-green-500/90 text-white text-xs !px-2 !py-1 rounded-full font-bold">
            NEW
          </div>
        )}

        {/* Hover play button */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <button className="bg-primary hover:bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl transition-transform hover:scale-110 shadow-lg shadow-primary/50">
            <FaPlay className="ml-1" />
          </button>
        </div>

        {/* RTP Tag */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-cyan text-xs px-2 py-1 rounded-lg font-mono">
          RTP {game.rtp}%
        </div>
      </div>

      {/* Card Content */}
      <div className="!p-4">
        <h3 className="font-bold text-white font-gaming !mb-1 text-[clamp(13px,1.2vw,18px)] tracking-[-0.02em]">{game.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{game.category}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 ">
            <FaStar className="text-gold text-sm" />
            <span className="text-white text-sm font-semibold">{game.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-sm !ml-[5px]">
            <FaUsers className="text-xs" />
            <span className="text-[12px]">{game.players} playing</span>
          </div>
        </div>

        <button className="w-full mt-auto bg-primary/20 hover:bg-primary text-primary hover:text-white border border-primary/50 hover:border-primary py-2.5 rounded-xl font-semibold transition-all duration-200 text-sm">
          Play Now
        </button>
      </div>
    </Link>
  )
}