'use client'
import AnimatedCard from "@/components/AnimatedCard";
import Navbar from "@/components/Navbar";
import { PromoCard } from "@/components/PromoCard";
import { useEffect, useState } from "react";


const CATEGORIES = ["All", "Welcome", "Casino", "Sports", "VIP", "Free Spins"]
const PROMOS = [
  { id: 1, emoji: "🎰", title: "Daily Free Spins", desc: "10 free spins — No deposit", value: "10 Spins", expiry: "Resets Daily", tag: "HOT", tagColor: "#ef4444", tagBg: "rgba(239,68,68,0.15)", tagBorder: "rgba(239,68,68,0.3)", category: "Free Spins" },
  { id: 2, emoji: "⚽", title: "Sports Cashback", desc: " 10% cashback", value: "10% Back", expiry: "Weekly Reset", tag: "NEW", tagColor: "#10b981", tagBg: "rgba(16,185,129,0.15)", tagBorder: "rgba(16,185,129,0.3)", category: "Sports" },
  { id: 3, emoji: "👑", title: "VIP Reload Bonus", desc: " 50% extra chips", value: "50% Bonus", expiry: "VIP Only", tag: "VIP", tagColor: "#f59e0b", tagBg: "rgba(245,158,11,0.15)", tagBorder: "rgba(245,158,11,0.3)", category: "VIP" },
  { id: 4, emoji: "🎯", title: "Refer & Earn", desc: "refer and get ₹500", value: "₹500", expiry: "Per Referral", tag: "LIMITED", tagColor: "#818cf8", tagBg: "rgba(99,102,241,0.15)", tagBorder: "rgba(99,102,241,0.3)", category: "Casino" },
  { id: 5, emoji: "🃏", title: "Blackjack Boost", desc: " 2x rewards ", value: "2x Points", expiry: "Weekends Only", tag: "HOT", tagColor: "#ef4444", tagBg: "rgba(239,68,68,0.15)", tagBorder: "rgba(239,68,68,0.3)", category: "Casino" },
  { id: 6, emoji: "🎁", title: "Birthday Bonus", desc: "Birthday special ₹1,000 free bonus", value: "₹1,000", expiry: "Your Birthday", tag: "SPECIAL", tagColor: "#f59e0b", tagBg: "rgba(245,158,11,0.15)", tagBorder: "rgba(245,158,11,0.3)", category: "Welcome" },
]

function PromotionPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [timeLeft, setTimeLeft] = useState({ hrs: 10, min: 34, sec: 18 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hrs, min, sec } = prev
        if (sec > 0) return { hrs, min, sec: sec - 1 }
        if (min > 0) return { hrs, min: min - 1, sec: 59 }
        if (hrs > 0) return { hrs: hrs - 1, min: 59, sec: 59 }
        clearInterval(timer)
        return { hrs: 0, min: 0, sec: 0 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main style={{ minheight: "100vh", background: "#050b14", color: "#e2e8f0", paddingLeft: "68px" }}>
      <Navbar />
      <div style={{ position: "absolute", top: "5%", left: "0%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "5%", right: "0%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/*HERO*/}
        <section style={{
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 100,
          paddingBottom: 60,
          background: "linear-gradient(135deg, #0d0b1e 0%, #1a0a3e 30%, #0d1b3e 60%, #0d0b1e 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.04)"
        }}>
          <div style={{ maxWidth: 1200, width: "100%", margin: "0", textAlign: "center" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              color: "#10b981",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "999px",
              marginBottom: "16px"
            }}>
              <span className="animate-pulse" style={{ height: "6px", width: "6px", borderRadius: "50%", background: "#10b981" }}></span>
              12 active offers
            </div>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(36px, 5vw, 64px)", marginBottom: 20, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Exclusive{' '}
              <span style={{ background: "linear-gradient(90deg, #10b981, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Promotions</span>
            </h1>
            <p style={{ color: "#64748b", fontSize: 18, maxWidth: 520, margin: "0 auto 40px" }}>Every Day new offers. SIGN UP NOW and UNLOCK big bonuses</p>


          </div>

        </section>
        <section style={{ maxWidth: 1500, padding: "30px 24px", width: "100%" }}>
          <AnimatedCard>
            <div style={{

              background: "linear-gradient(135deg, #0d2818 0%, #0a1628 50%, #1a1028 100%)",
              border: "1px solid rgba(16,185,129,0.15)",
              borderRadius: 28,
              padding: "72px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative blob */}
              <div style={{ position: "absolute", top: "-60px", right: "-60px", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

              <div style={{ position: "relative", display: "flex", gap: 40, justifyContent: "space-around" }}>
                <div style={{
                  marginLeft: "2px"
                }}><h2 style={{ fontSize: "clamp(59px, 4vw, 48px)", fontWeight: 800, color: "#f1f5f9", marginBottom: 16, letterSpacing: "-0.02em", color: "#f59e0b" }}>
                    ₹5,000
                  </h2>
                  <p style={{ color: "#6a6d72", fontSize: 14, marginBottom: 10 }}>Welcome Bonus + 50 Free spins</p>
                  <p style={{ color: "#64748b", fontSize: 18, marginBottom: 36 }}>
                    ONLY FOR TODAY!{" "}
                    <span style={{ color: "#f59e0b", fontWeight: 700 }}>₹5,000 Welcome Bonus </span>
                  </p>
                  <button style={{
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    color: "#fff",
                    border: "none",
                    padding: "18px 48px",
                    borderRadius: 14,
                    fontSize: 17,
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 8px 40px rgba(16,185,129,0.4)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                    onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 16px 48px rgba(16,185,129,0.55)" }}
                    onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 40px rgba(16,185,129,0.4)" }}
                  >
                    🎁 Claim Bonus Now
                  </button></div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column-reverse",
                  fontSize: 100, marginBottom: 16,
                  transition: "animation 2s ease-out", animation: "win 3s ease-in infinite "
                }}>🏆</div>


              </div>
            </div>

          </AnimatedCard>

        </section>
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "4px 24px" }}>
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

        </section>
        <section style={{ margin: "0 auto", maxwidth: 1200, width: "100%", padding: "4px 24px" }}>
          <div className="bg-gradient-to-br from-primary/30 to-dark" style={{
            border: "1px solid #543cc0",
            borderRadius: "16px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            padding: "20px 18px"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "40px" }}>⏰</div>
              <div style={{ padding: "2px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 700, lineHeight: 1.1, marginBottom: 3 }}> Flash Offer  -- 200% Deposit Bonus</h2>
                <p style={{ color: '#a6a6a8' }}> Limited time offer  ---  CLAIM NOW!</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 15, flexWrap:"wrap" }}>
              <div className="bg-gradient-to-br from-primary/30 to-dark" style={{
                border: "1px solid #543cc0",
                borderRadius: "8px",
                color: "#fff", padding: "4px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ fontSize: "28px", lineHeight: 1, fontWeight: "900", color: "#95a5fd" }}>{String(timeLeft.hrs).padStart(2, "0")}</span><p style={{ color: "#585858", margin: 0 }}>HRS</p>
              </div>
              <div className="bg-gradient-to-br from-primary/30 to-dark" style={{
                border: "1px solid #543cc0",
                borderRadius: "8px",
                color: "#fff", padding: "4px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ fontSize: "28px", lineHeight: 1, fontWeight: "900", color: "#95a5fd" }}>{String(timeLeft.min).padStart(2, "0")}</span><p style={{ color: "#585858", margin: 0 }}>MIN</p>
              </div>
              <div className="bg-gradient-to-br from-primary/30 to-dark" style={{
                border: "1px solid #543cc0",
                borderRadius: "8px",
                color: "#fff", padding: "4px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ fontSize: "28px", lineHeight: 1, fontWeight: "900", color: "#95a5fd" }}>{String(timeLeft.sec).padStart(2, "0")}</span><p style={{ color: "#585858", margin: 0 }}>SEC</p>
              </div>


            </div>
          </div>
        </section>
        {/* Promo Cards */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 24px 80px" }}>

          <div style={{ marginBottom: 24 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
              color: "#10b981", fontSize: 11, fontWeight: 700,
              padding: "3px 12px", borderRadius: 999, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 8, display: "block", width: "fit-content"
            }}>All Offers</span>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#f1f5f9", margin: 0, letterSpacing: "-0.01em" }}>
              Current Promotions
            </h2>
          </div>

          <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-[20px]" >
            {PROMOS
              .filter(p => activeCategory === "All" || p.category === activeCategory)
              .map((promo, i) => (
                <AnimatedCard key={promo.id} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
                  <PromoCard promo={promo} />
                </AnimatedCard>
              ))
            }
          </div>
        </section>

        {/* How to Claim */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 100px" }}>
          <div style={{ marginBottom: 24, display: "flex", flexWrap: "wrap" }}>
            <span style={{
              display: "inline-block",
              background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
              color: "#10b981", fontSize: 11, fontWeight: 700,
              padding: "3px 12px", borderRadius: 999, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 8
            }}>Process</span>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#f1f5f9", margin: 0, letterSpacing: "-0.01em" }}>
              How to Claim
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, overflow: "scroll", scrollbarWidth: "none" }}>
            {[
              { num: "1", emoji: "📝", title: "Sign Up", },
              { num: "2", emoji: "💳", title: "Deposit" },
              { num: "3", emoji: "🎁", title: "Claim" },
              { num: "4", emoji: "🏆", title: "Play & Win" },
            ].map((step, i) => (
              <div key={i} style={{
                background: "linear-gradient(145deg, #0d1f35, #111827)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 16, padding: "24px 20px", textAlign: "center",
                position: "relative",
              }}>

                {i < 3 && (
                  <div style={{ position: "absolute", right: -18, top: "50%", transform: "translateY(-50%)", color: "#334155", fontSize: 18, zIndex: 2 }}>→</div>
                )}
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)",
                  color: "#10b981", fontSize: 16, fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 12px",
                }}>{step.num}</div>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{step.emoji}</div>
                <h4 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{step.title}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
      <style>{`
        @keyframes win {
          0%, 100% { transform : scale(1) }
          50%       { transform : scale(1.2) }
        }
      `}</style>
    </main>
  );
}

export default PromotionPage;