"use client"

import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GameCard from "@/components/GameCard"
import { FaTrophy, FaBolt, FaShieldAlt, FaFire, FaStar, FaChevronRight } from "react-icons/fa"
import { GiCardAceSpades } from "react-icons/gi"
import AnimatedCard from "@/components/AnimatedCard"
import VipCard from "@/components/VipCard"
import PopularGameCard from "@/components/PopularGames"

// ─── Data ───────────────────────────────────────────────────────────────────


const badgeStyles = {
  hot:    { label: "🔥 HOT",     bg: "rgba(245,158,11,0.9)", color: "#000" },
  new:    { label: "NEW",        bg: "#10b981",              color: "#fff" },
  hotrtp: { label: "HOT RTP",    bg: "#ef4444",              color: "#fff" },
}



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



// Cards ko screen par aate waqt animate karta hai
function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting) },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}


// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-[6px] bg-[#10b9811a] border border-[rgba(16,185,129,0.3)] text-[#10b981] text-[12px] font-semibold tracking-[0.1em] uppercase !px-[14] !py-[5px] rounded-full !mb-4">
      <span className="animate-pulse w-[6px] h-[6px] border rounded-full bg-[#10b981] inline-block" />
      {children}
    </span>
  )
}





// ─── Main Component ───────────────────────────────────────────────────────────

export default function HomePage() {
  const [heroRef, heroVisible] = useFadeIn()
 
  return (
    <main className="bg-[#050b14] text-[#e2e8f0] min-h-screen" style={{ paddingLeft: "68px" }}>
     {/* ── HERO BANNER*/}
<section className="relative w-full h-full overflow-hidden border-b border-white/[0.04]" style={{
  background: "url('/images/heroimage.png')",
  backgroundSize:"cover",
   backgroundPosition: "center",
}}>
  

<AnimatedCard>
  <div className="flex flex-col items-center justify-center text-center !py-[60px] relative" style={{ zIndex: 1 }}>
    <span className="!text-[13px] font-bold !text-purple-300 uppercase tracking-widest !mb-[6px]">
      Welcome Package
    </span>
    <h1 className="!text-[72px] font-extrabold !text-white leading-none" style={{ textShadow: "0 0 40px rgba(124,58,237,0.6)" }}>
      ₹50,000
    </h1>
    <div className="!text-[18px] font-bold !text-purple-300 !my-[10px]">
      + 150 FREE SPINS
    </div>
    <button className="bg-gradient-to-r from-amber-500 to-orange-500 !text-black !px-[40px] !py-[14px] rounded-[10px] !text-[15px] font-extrabold cursor-pointer transition-all duration-200 hover:scale-105" style={{ boxShadow: "0 6px 24px rgba(245,158,11,0.4)" }}>
      JOIN NOW
    </button>
    <div className="flex items-center gap-[12px] !mt-[16px] !text-[12px] text-slate-500">
      <span>VISA</span><span>Mastercard</span><span>UPI</span><span>₿ Crypto</span>
    </div>
  </div>
  </AnimatedCard>
</section>
{/* ── TRUST SCORES ── */}
<section className="max-w-[100vw] !pl-[20px]">
<div className="bg-[#100e24] border-y border-white/[0.05] !py-[12px]">
  <div className="flex flex-wrap justify-center !gap-0">
    {[
      { score: "9.3/10", name: "AskGamblers" },
      { score: "8/10",   name: "CasinoGuru"  },
      { score: "7.9/10", name: "The Pogg"    },
      { score: "4/5",    name: "AboutSlots"  },
      { score: "4/5",    name: "CasinoGrounds" },
      { score: "5/5",    name: "LiveChat"    },
    ].map((item, i, arr) => (
      <div key={i} className={`flex flex-col items-center !px-[24px] ${i < arr.length - 1 ? "border-r border-white/[0.05]" : ""}`}>
        <div className="!text-[13px] font-bold text-white">
          <span className="text-amber-400">{item.score.split("/")[0]}</span>/{item.score.split("/")[1]}
        </div>
        <div className="!text-[9px] text-slate-600 uppercase tracking-wide !mt-[2px]">{item.name}</div>
      </div>
    ))}
  </div>
</div>
</section>
{/* ── POPULAR GAMES ── */}
<section className="!max-w-[1200px] !mx-auto !px-[20px] !pt-[24px]">
  <div className="flex items-center justify-between !mb-[16px]">
    <h2 className="!text-[20px] font-bold text-white tracking-wide">POPULAR GAMES</h2>
    <button className="!text-[12px] text-purple-400 font-semibold bg-purple-500/10 border border-purple-500/25 !px-[12px] !py-[5px] rounded-[6px] cursor-pointer transition-all duration-200 hover:text-purple-300">
      View All →
    </button>
  </div>

  <div className="flex flex-wrap gap-[6px] !mb-[16px] overflow-x-auto"
  style={{scrollbarWidth:"none"}}>
    {["🔥 All", "🎰 Slots", "🃏 Live Casino", "🀄 Indian", "♠️ Poker", "🎡 Table", "💎 Jackpots"].map((tab, i) => (
      <button key={tab} className={`!px-[14px] !py-[6px] rounded-[7px] !text-[11px] font-bold whitespace-nowrap cursor-pointer transition-all duration-200 ${
        i === 0 ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent" : "bg-transparent border border-white/[0.07] text-slate-500"
      }`}>
        {tab}
      </button>
    ))}
  </div>

<AnimatedCard>
  <div className="grid grid-cols-5 !gap-[10px]">
    
    {POPULAR_GAMES.map((game) => (
      <PopularGameCard key={game.id} game={game} />
    ))}
  </div>
  </AnimatedCard>

  
  <button className="block !w-[200px] !mx-auto !mt-[20px] bg-transparent border border-purple-500/35 text-purple-300 !py-[11px] rounded-[10px] !text-[13px] font-bold cursor-pointer transition-all duration-200 hover:bg-purple-500/10">
    <Link href={"/games"}>VIEW MORE GAMES</Link>
  </button>
  

</section>
{/* ── VIP SERVICES ── */}
{/* ── VIP SERVICES ── */}
<section className="!max-w-[1200px] !mx-auto !px-[20px] !pt-[80px]">
  <h2 className="!text-[28px] font-bold text-white text-center !mb-[32px] tracking-wide">
    VIP SERVICES
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 !gap-[16px]">
    {[
      { icon: "🏅", title: "Expert Service",   desc: "Our support team provides the best gaming experience and is always ready to help." },
      { icon: "🎁", title: "Personal Bonuses", desc: "We value your time gaming with us, and our managers are willing to surprise you." },
      { icon: "⏰", title: "Lots of Events",    desc: "There's always something happening at BetPro. Events are waiting 24/7." },
    ].map((vip, i) => (
      <VipCard key={i} vip={vip} />
    ))}
  </div>
</section>

{/* ── MOBILE APP ── */}
<section className="!max-w-[1200px] !mx-auto !px-[20px] !pt-[100px]">
  <div className="grid grid-cols-2 items-center !gap-[20px]">
   
    <div className="text-center">
      <h2 className="!text-[26px] font-bold text-white !mb-[14px] tracking-wide">
        AVAILABLE ON YOUR PHONE
      </h2>
      <p className="!text-[14px] text-slate-500 leading-relaxed !mb-[24px]">
        ProGamer is an online gaming platform where players from around India can enjoy their favourite games and dive into live casino, sports betting and more.
      </p>
     <button className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white !px-[28px] !py-[14px] rounded-[12px] text-[14px] font-bold cursor-pointer transition-all duration-300 hover:scale-105">
  
  <span className="relative z-10">📱 Download on your phone</span>

  <span className="absolute inset-0 bg-black opacity-0 hover:opacity-100 transition-all duration-100"></span>
</button>
    </div>
     <img src="/images/mobile_icon.png" style={{animation:"slideup 3s ease-in infinite"}}></img>
  </div>
</section>
{/* ── PAYMENT & PROVIDERS ── */}
<section className="max-w-[1200px] !mx-auto !px-[20px] !pt-[100px] overflow-hidden">
  <h3 className="text-[14px] font-bold text-slate-600 text-center uppercase tracking-widest !mb-[20px]">
    The Best Payment Solutions and Game Providers
  </h3>

  <div className="relative w-full overflow-hidden">
    <div className="flex gap-[24px] whitespace-nowrap"
    style={{animation: "scroll 8s ease-in infinite"}}>
      
      {[...["Bank Transfer", "Skrill", "Neteller", "NetEnt", "Play'n GO", "Pragmatic Play", "UPI", "Crypto"],
        ...["Bank Transfer", "Skrill", "Neteller", "NetEnt", "Play'n GO", "Pragmatic Play", "UPI", "Crypto"]
      ].map((p, i) => (
        <span key={i} className="text-[12px] font-extrabold text-white uppercase tracking-wide">
          {p}
        </span>
      ))}
      </div>

    
  </div>
</section>

      
      <style>{`
        @keyframes scroll {
          0%{ transform : translateX(1) }
          100%      { transform : translateX(-50%) }
        }
          
          @keyframes slideup{
          0%{transform :translateY(1)}
          50%{transform:translatey(5%)}
         100%{transform:translateY(-5%)
      }
      }
      `}</style>
    </main>
    
    
  )
}