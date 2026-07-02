"use client"

import { useState, useRef, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import { FaStar, FaUsers, FaPlay, FaFire } from "react-icons/fa"
import PopularGameCard from "@/components/PopularGames"

// ─── Data ──

const CASINO_GAMES = [
  { id: 1,  name: "Live Roulette",    emoji: "images/ic1.png", category: "Live",       rating: "4.9", players: "2,341", rtp: 97.3, isHot: true  },
  { id: 2,  name: "Blackjack VIP",    emoji: "images/ic2.png", category: "Live",       rating: "4.9", players: "1,856", rtp: 99.1, isHot: true  },
  { id: 3,  name: "Baccarat Pro",     emoji: "images/ic3.png", category: "Live",       rating: "4.8", players: "934",   rtp: 98.9, isNew: true  },
  { id: 4,  name: "Dragon Tiger",     emoji: "images/ic4.png", category: "Live",       rating: "4.7", players: "1,200", rtp: 96.3, isHot: true  },
  { id: 5,  name: "Andar Bahar",      emoji: "images/ic5.png", category: "Indian",     rating: "4.9", players: "3,400", rtp: 97.0, isHot: true  },
  { id: 6,  name: "Teen Patti Live",  emoji: "images/ic1.png", category: "Indian",     rating: "4.9", players: "5,100", rtp: 97.5, isHot: true  },
  { id: 7,  name: "Lucky Wheel",      emoji: "images/ic3.png", category: "Game Shows", rating: "4.6", players: "876",   rtp: 95.0, isNew: true  },
  { id: 8,  name: "Mega Ball",        emoji: "images/ic4.png", category: "Game Shows", rating: "4.7", players: "654",   rtp: 96.1, isNew: true  },
  { id: 9,  name: "Casino Hold'em",   emoji: "images/ic9.png", category: "Poker",      rating: "4.8", players: "720",   rtp: 97.8, isHot: true  },
]

const CATEGORIES = ["All", "Live", "Indian", "Game Shows", "Poker"]

const STATS = [
  { value: "200+", label: "Live Tables" },
  { value: "24/7", label: "Live Dealers" },
  { value: "₹100", label: "Min Bet" },
  { value: "HD",   label: "Stream Quality" },
]

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function AnimatedCard({ children, delay = 0, direction = "left" }) {
  const [ref, visible] = useFadeIn()
  const fromX = direction === "right" ? "60px" : "-60px"

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : `translateX(${fromX})`,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ─── Casino Card ─────────────────────────────────────────────────────────────

function CasinoCard({ game }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "linear-gradient(145deg, #0d1f35, #111827)",
        border: hovered ? "1px solid rgba(75, 63, 119, 0.4)" : "1px solid rgba(255,255,255,0.06)",
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 48px rgba(115, 103, 172, 0.15)" : "none",
        cursor: "pointer"
      }}
    >
      {/* Top/Image */}
      <div className="" style={{
        height: 180,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        <div style={{background: `url(${game.emoji})`,
         backgroundSize: "cover",
        backgroundPosition: "center",
        width:"100%",
        height:"100%"
        }}/>

        {/* Live badge */}
        <div style={{
          position: "absolute", top: 12, left: 12,
          display: "flex", alignItems: "center", gap: 5,
          background: "rgba(239,68,68,0.15)",
          border: "1px solid rgba(239,68,68,0.3)",
          color: "#ef4444",
          fontSize: 11, fontWeight: 700,
          padding: "4px 10px", borderRadius: 999,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444", display: "inline-block", animation: "pulse 1.5s infinite" }} />
          LIVE
        </div>

        {game.isHot && (
          <div style={{
            position: "absolute", top: 12, right: 12,
            display: "flex", alignItems: "center", gap: 4,
            background: "rgba(245,158,11,0.15)",
            border: "1px solid rgba(245,158,11,0.3)",
            color: "#f59e0b",
            fontSize: 11, fontWeight: 700,
            padding: "4px 10px", borderRadius: 999,
          }}>
            <FaFire style={{ fontSize: 10 }} /> HOT
          </div>
        )}
        {game.isNew && (
          <div style={{
            position: "absolute", top: 12, right: 12,
            background: "rgba(16,185,129,0.15)",
            border: "1px solid rgba(16,185,129,0.3)",
            color: "#10b981",
            fontSize: 11, fontWeight: 700,
            padding: "4px 10px", borderRadius: 999,
          }}>
            NEW
          </div>
        )}

        {/* Hover play overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}>
          <div className="bg-primary hover:bg-purple-500" style={{
            width: 56, height: 56, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 24px rgba(90, 74, 151, 0.5)",
            transform: hovered ? "scale(1)" : "scale(0.8)",
            transition: "transform 0.3s ease",
          }}>
            <FaPlay style={{ color: "#fff", fontSize: 18, marginLeft: 3 }} />
          </div>
        </div>

        {/* RTP */}
        <div style={{
          position: "absolute", bottom: 10, right: 10,
          background: "rgba(0,0,0,0.6)",
          color: "#10b981", fontSize: 11,
          padding: "3px 8px", borderRadius: 6,
          fontWeight: 600, fontFamily: "monospace",
        }}>
          RTP {game.rtp}%
        </div>
      </div>

      {/* Bottom */}
      <div style={{ padding: "16px 18px" }}>
        <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "clamp(12px,1.2vw,19px)", marginBottom: 4 }}>{game.name}</h3>
        <p style={{ color: "#475569", fontSize: 13, marginBottom: 12 }}>{game.category}</p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#f59e0b", fontSize: 13 }}>
            <FaStar style={{ fontSize: 11 }} />
            <span style={{ color: "#f1f5f9", fontWeight: 600 }}>{game.rating}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#475569", fontSize: 12,marginLeft:"12px" }}>
            <FaUsers style={{ fontSize: 11 }} />
            <span>{game.players} playing</span>
          </div>
        </div>

        <button
          style={{
            width: "100%",
            background: hovered ? "linear-gradient(135deg, #10b981, #059669)" : "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.3)",
            color: hovered ? "#fff" : "#10b981",
            padding: "10px",
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Join Table
        </button>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function CasinoPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? CASINO_GAMES
    : CASINO_GAMES.filter((g) => g.category === activeCategory)

  return (
    <main style={{ background: "#050b14", color: "#e2e8f0", minHeight: "100vh", paddingLeft: "68px" }}>
      <Navbar />

      {/* Blobs */}
      <div className="blob-1" style={{ position: "fixed", top: "5%",    left: "0%",  width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",  pointerEvents: "none", zIndex: 0 }} />
      <div className="blob-2" style={{ position: "fixed", bottom: "5%", right: "0%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>



        {/* ── HERO ── */}
        <section style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 100,
          paddingBottom: 60,
          background: "linear-gradient(135deg, #0d0b1e 0%, #1a0a3e 30%, #0d1b3e 60%, #0d0b1e 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", textAlign: "center" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)",
              color: "#ef4444", fontSize: 12, fontWeight: 600,
              padding: "5px 14px", borderRadius: 999, marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444", display: "inline-block", animation: "pulse 1.5s infinite" }} />
              Live Casino Open
            </div>

            <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
              Live{" "}
              <span style={{ background: "linear-gradient(90deg, #10b981, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Casino
              </span>
            </h1>

            <p style={{ color: "#64748b", fontSize: 18, maxWidth: 520, margin: "0 auto 40px" }}>
              Real dealers, real tables, real thrill. HD streaming ke saath live casino experience lo.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "center", gap: 0, flexWrap: "wrap" }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  padding: "16px 40px",
                  borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#475569", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GAMES ── */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 120px" }}>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? "linear-gradient(135deg, #10b981, #059669)" : "rgba(255,255,255,0.03)",
                  border: activeCategory === cat ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)",
                  color: activeCategory === cat ? "#fff" : "#64748b",
                  padding: "9px 22px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: activeCategory === cat ? "0 4px 16px rgba(16,185,129,0.3)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 32 }}>
            {filtered.map((game, i) => (
              <AnimatedCard key={game.id} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                <CasinoCard game={game} />
              </AnimatedCard>
            ))}
          </div>
        </section>

      </div>

   

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </main>
  )
}