"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { FaStar, FaUsers, FaArrowLeft, FaFire } from "react-icons/fa"

const GAMES = [
  { id: 1,  name: "Lucky Slots",    emoji: "🎰", category: "Slots",       rating: "4.8", players: "1,234", rtp: 96.5, isHot: true,  desc: "Classic slots machine with 5 reels and 25 paylines. Big jackpots and free spins!" },
  { id: 2,  name: "Blackjack Pro",  emoji: "🃏", category: "Card Games",  rating: "4.9", players: "856",   rtp: 99.1, isNew: true,  desc: "ProfClassic slots machine with 5 reels and 25 paylines. Big jackpots and free spins!" },
  { id: 3,  name: "Roulette Elite", emoji: "🎡", category: "Table Games", rating: "4.7", players: "654",   rtp: 97.3, isHot: true,  desc: "Classic slots machine with 5 reels and 25 paylines. Big jackpots and free spins!" },
  { id: 4,  name: "Mega Jackpot",   emoji: "💎", category: "Progressive", rating: "4.6", players: "2,100", rtp: 94.5, isNew: true,  desc: "ProClassic slots machine with 5 reels and 25 paylines. Big jackpots and free spins!" },
  { id: 5,  name: "Teen Patti",     emoji: "🀄", category: "Indian",      rating: "4.9", players: "4,500", rtp: 97.0, isHot: true,  desc: "India Classic slots machine with 5 reels and 25 paylines. Big jackpots and free spins!" },
  { id: 6,  name: "Live Poker",     emoji: "♠️", category: "Poker",       rating: "4.9", players: "780",   rtp: 98.0, isHot: true,  desc: "TexaClassic slots machine with 5 reels and 25 paylines. Big jackpots and free spins!" },
  { id: 7,  name: "Roulette Elite", emoji: "🎡", category: "Table Games", rating: "4.7", players: "654",   rtp: 97.3, isHot: true,  desc: "Classic slots machine with 5 reels and 25 paylines. Big jackpots and free spins!" },
  { id: 8,  name: "Blast Jackpot",  emoji: "💎", category: "Progressive", rating: "4.6", players: "2,100", rtp: 94.5, isNew: true,  desc: "Classic slots machine with 5 reels and 25 paylines. Big jackpots and free spins!" },
  { id: 9,  name: "Teen Patti",     emoji: "🀄", category: "Indian",      rating: "4.9", players: "4,500", rtp: 97.0, isHot: true,  desc: "India Classic slots machine with 5 reels and 25 paylines. Big jackpots and free spins!" },
  { id: 10, name: "Live Poker",     emoji: "♠️", category: "Poker",       rating: "4.9", players: "780",   rtp: 98.0, isHot: true,  desc: "TexaClassic slots machine with 5 reels and 25 paylines. Big jackpots and free spins!"}

]
  export default function GameDetailPage() {
  const { id } = useParams()
  const game = GAMES.find((g) => g.id === Number(id))

  // Game nahi mila
  if (!game) {
    return (
      <main style={{ background: "#050b14", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>😕</div>
          <h2 style={{ color: "#f1f5f9", fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Game not found</h2>
          <Link href="/games" style={{ color: "#10b981", textDecoration: "none", fontWeight: 600 }}>
            Back
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: "#050b14", color: "#e2e8f0", minHeight: "100vh" }}>
      <Navbar />

      {/* Blobs */}
      <div className="blob-1" style={{ position: "fixed", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div className="blob-2" style={{ position: "fixed", bottom: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "120px 24px 80px", position: "relative", zIndex: 1 }}>

        {/* Back button */}
        <Link href="/games" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          color: "#64748b",
          textDecoration: "none",
          fontSize: 14,
          fontWeight: 500,
          marginBottom: 40,
          transition: "color 0.2s",
        }}
          onMouseEnter={e => e.target.style.color = "#10b981"}
          onMouseLeave={e => e.target.style.color = "#64748b"}
        >
          <FaArrowLeft style={{ fontSize: 12 }} /> Back to Games
        </Link>

        {/* Main Game Card */}
        <div style={{
          background: "linear-gradient(145deg, #0d1f35, #111827)",
          border: "1px solid rgba(16,185,129,0.2)",
          borderRadius: 28,
          overflow: "hidden",
        }}>

          {/* Top Banner */}
          <div style={{
            background: "linear-gradient(135deg, #0a2e1f, #0a1628)",
            padding: "60px 48px",
            textAlign: "center",
            position: "relative",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}>
            {game.isHot && (
              <div style={{
                position: "absolute", top: 20, right: 20,
                display: "flex", alignItems: "center", gap: 6,
                background: "rgba(239,68,68,0.15)",
                border: "1px solid rgba(239,68,68,0.3)",
                color: "#ef4444",
                fontSize: 12, fontWeight: 700,
                padding: "5px 12px", borderRadius: 999,
              }}>
                <FaFire /> HOT
              </div>
            )}
            {game.isNew && (
              <div style={{
                position: "absolute", top: 20, right: 20,
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "#10b981",
                fontSize: 12, fontWeight: 700,
                padding: "5px 12px", borderRadius: 999,
              }}>
                NEW
              </div>
            )}
            <div style={{ fontSize: 96, marginBottom: 16 }}>{game.emoji}</div>
            <h1 style={{ fontSize: 40, fontWeight: 800, color: "#f1f5f9", marginBottom: 8, letterSpacing: "-0.02em" }}>
              {game.name}
            </h1>
            <span style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              color: "#10b981",
              fontSize: 13, fontWeight: 600,
              padding: "4px 14px", borderRadius: 999,
            }}>
              {game.category}
            </span>
          </div>

          {/* Stats Row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}>
            {[
              { label: "Rating",  value: `⭐ ${game.rating}` },
              { label: "Players", value: `👥 ${game.players}` },
              { label: "RTP",     value: `${game.rtp}%` },
            ].map((stat, i) => (
              <div key={i} style={{
                textAlign: "center",
                padding: "24px 16px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", marginBottom: 4 }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: "#475569", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Description + CTA */}
          <div style={{ padding: "40px 48px" }}>
            <h3 style={{ color: "#94a3b8", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              About This Game
            </h3>
            <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
              {game.desc}
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button style={{
                flex: 1,
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "#fff",
                border: "none",
                padding: "16px 32px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 8px 32px rgba(16,185,129,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(16,185,129,0.5)" }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 32px rgba(16,185,129,0.35)" }}
              >
                🎮 Play Now
              </button>
              <button style={{
                flex: 1,
                background: "transparent",
                color: "#94a3b8",
                border: "1px solid rgba(148,163,184,0.2)",
                padding: "16px 32px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
                onMouseEnter={e => { e.target.style.borderColor = "#10b981"; e.target.style.color = "#10b981" }}
                onMouseLeave={e => { e.target.style.borderColor = "rgba(148,163,184,0.2)"; e.target.style.color = "#94a3b8" }}
              >
                🎯 Try Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}