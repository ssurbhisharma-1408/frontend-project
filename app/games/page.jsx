'use client'

import GameCard from "@/components/GameCard";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


const GAMES = [
  { id: 1, name: "Lucky Slots",    emoji: "🎰", category: "Slots",       rating: "4.8", players: "1,234", rtp: 96.5, isHot: true  },
  { id: 2, name: "Blackjack Pro",  emoji: "🃏", category: "Card Games",  rating: "4.9", players: "856",   rtp: 99.1, isNew: true  },
  { id: 3, name: "Roulette Elite", emoji: "🎡", category: "Table Games", rating: "4.7", players: "654",   rtp: 97.3, isHot: true  },
  { id: 4, name: "Mega Jackpot",   emoji: "💎", category: "Progressive", rating: "4.6", players: "2,100", rtp: 94.5, isNew: true  },
  { id: 5, name: "Teen Patti",     emoji: "🀄", category: "Indian",      rating: "4.9", players: "4,500", rtp: 97.0, isHot: true  },
  { id: 6, name: "Live Poker",     emoji: "♠️", category: "Poker",       rating: "4.9", players: "780",   rtp: 98.0, isHot: true  },
 { id: 7, name: "Roulette Elite", emoji: "🎡", category: "Table Games", rating: "4.7", players: "654",   rtp: 97.3, isHot: true  },
  { id: 8, name: "Blast Jackpot ",   emoji: "💎", category: "Progressive", rating: "4.6", players: "2,100", rtp: 94.5, isNew: true  },
  { id: 9, name: "Teen Patti",     emoji: "🀄", category: "Indian",      rating: "4.9", players: "4,500", rtp: 97.0, isHot: true  },
  { id: 10, name: "Live Poker",     emoji: "♠️", category: "Poker",       rating: "4.9", players: "780",   rtp: 98.0, isHot: true  },
]
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

function AnimatedCard({ children, delay = 0,direction='left', style = {} }) {
  const [ref, visible] = useFadeIn()
  const fromX = direction === "right"?"60px":"-60px"
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : `translateX(${fromX})`,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function GamePage() {
    return ( 
        <main style={{ background: "#050b14", color: "#e2e8f0", minHeight: "100vh",paddingLeft: "68px"  }}>
            <Navbar/>
        <div className=" text-center" style={{margin:"80px"}}>
  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
    Welcome to the Playground
  </h1>
  <p className="mt-4 text-slate-500 text-lg font-medium tracking-wide">
    Your ultimate gaming destination 🎮
  </p>

</div>
        
            <div style={{ position: "absolute", top: "10%",  left: "5%",   width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.34) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%",  width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.43) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "40%",  left: "40%",   width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />

                <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",
                    gap:30,
                    margin:"20px",
                    padding:"0 68px",
                    alignItems:"flex-start"
                    }}>
                  
                    {GAMES.map((game,i)=>(
                         <AnimatedCard key={game.id} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
                     <GameCard game={game} />
                 </AnimatedCard>
                    )
                    )}
                </div>
           
            </main>
            
     );
}

export default GamePage;

