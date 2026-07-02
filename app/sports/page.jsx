"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { FaFire } from "react-icons/fa"
import LeaderboardRow from "@/components/LeaderBoard"

// ─── Data ────────────────────────────────────────────────────────────────────

const SPORTS_TABS = [
  { name: "Cricket",      emoji: "🏏" },
  { name: "Football",     emoji: "⚽" },
  { name: "Tennis",       emoji: "🎾" },
  { name: "Basketball",   emoji: "🏀" },
  { name: "Hockey",       emoji: "🏒" },
  { name: "Table Tennis", emoji: "🏓" },
  { name: "Boxing",       emoji: "🥊" },
  { name: "F1",           emoji: "🏎️" },
]

const LEAGUES = [
  { name: "All Leagues", emoji: "🏆", count: 48 },
  { name: "IPL 2024",    emoji: "🇮🇳", count: 12 },
  { name: "World Cup",   emoji: "🌍", count: 8  },
  { name: "The Ashes",   emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", count: 5  },
  { name: "BBL",         emoji: "🇦🇺", count: 6  },
]

const BET_TYPES = ["Match Winner", "Top Batsman", "Total Runs", "First Over"]

const LIVE_MATCHES = [
  {
    id: 1,
    league: "🏆 IPL 2024 • Match 42",
    status: "18.3 Overs",
    team1: { name: "Mumbai Indians", emoji: "🔵" },
    team2: { name: "Chennai Super Kings", emoji: "🟡" },
    score: "142/3",
    odds: [
      { label: "Mumbai Win", val: "1.85" },
      { label: "Draw",       val: "12.0" },
      { label: "Chennai Win",val: "2.10" },
    ],
  },
  {
    id: 2,
    league: "🌍 India vs Australia",
    status: "2nd Innings",
    team1: { name: "India",     emoji: "🇮🇳" },
    team2: { name: "Australia", emoji: "🇦🇺" },
    score: "287/6",
    odds: [
      { label: "India Win", val: "1.65" },
      { label: "Draw",      val: "8.50" },
      { label: "Aus Win",   val: "2.40" },
    ],
  },
]

const UPCOMING_MATCHES = [
  {
    id: 3,
    league: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 The Ashes • 3rd Test",
    time: "Tomorrow 9:30 AM",
    team1: { name: "England",   emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    team2: { name: "Australia", emoji: "🇦🇺" },
    odds: [
      { label: "Eng Win", val: "2.20" },
      { label: "Draw",    val: "3.50" },
      { label: "Aus Win", val: "1.90" },
    ],
  },
  {
    id: 4,
    league: "🇮🇳 IPL 2024 • Match 43",
    time: "Today 7:30 PM",
    team1: { name: "RCB",   emoji: "🔴" },
    team2: { name: "KKR",   emoji: "🟣" },
    odds: [
      { label: "RCB Win", val: "2.05" },
      { label: "Draw",    val: "11.0" },
      { label: "KKR Win", val: "1.80" },
    ],
  },
]

const POPULAR_BETS = [
  { flag: "🏏", name: "Rohit Sharma 50+",  count: "1,240", odds: "3.20" },
  { flag: "⚽", name: "Man City Win",       count: "980",   odds: "1.75" },
  { flag: "🎾", name: "Djokovic Win",       count: "654",   odds: "1.45" },
  { flag: "🏏", name: "India Win Series",   count: "2,100", odds: "1.60" },
]
const LEADERBOARD = [
  { rank: 1, name: "Rahul S.",  game: "Teen Patti", amount: "₹84K", avatar: "RS", color: "#f59e0b" },
  { rank: 2, name: "Priya K.",  game: "Roulette",   amount: "₹61K", avatar: "PK", color: "#6366f1" },
  { rank: 3, name: "Arjun M.",  game: "Slots",      amount: "₹48K", avatar: "AM", color: "#10b981" },
  { rank: 4, name: "Sneha K.",  game: "Poker",      amount: "₹32K", avatar: "SK", color: "#334155" },
  { rank: 5, name: "Vikram R.", game: "Blackjack",  amount: "₹27K", avatar: "VR", color: "#334155" },
]
const STATS = [
  { value: "240+", label: "Live Events"  },
  { value: "20+",  label: "Sports"       },
  { value: "₹500", label: "Min Bet"      },
  { value: "98%",  label: "Payout Rate"  },
]

// ─── Match Card ───────────────────────────────────────────────────────────────

function MatchCard({ match, isLive }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-gradient-to-br from-[#0d1f35] to-[#111827] border border-white/[0.06] rounded-[14px] !p-[14px] !mb-[10px] hover:border-emerald-500/30 transition-all duration-300">

      {/* Top */}
      <div className="flex items-center justify-between !mb-[10px]">
        <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">
          {match.league}
        </span>
        {isLive ? (
          <span className="flex items-center gap-[4px] bg-red-500/10 border border-red-500/25 text-red-400 text-[9px] font-bold !px-[8px] !py-[2px] rounded-full">
            <span className="w-[5px] h-[5px] rounded-full bg-red-400 animate-pulse inline-block" />
            {match.status}
          </span>
        ) : (
          <span className="text-[10px] text-slate-500">{match.time}</span>
        )}
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between !mb-[12px]">
        <div className="flex flex-col items-center gap-[4px] flex-1">
          <span className="text-[22px]">{match.team1.emoji}</span>
          <span className="text-[10px] font-600 text-slate-300 text-center">{match.team1.name}</span>
        </div>
        <div className="flex items-center gap-[6px]">
          {isLive ? (
            <span className="text-[18px] font-extrabold text-slate-100">{match.score}</span>
          ) : (
            <span className="text-[14px] text-slate-600 font-bold">vs</span>
          )}
        </div>
        <div className="flex flex-col items-center gap-[4px] flex-1">
          <span className="text-[22px]">{match.team2.emoji}</span>
          <span className="text-[10px] font-600 text-slate-300 text-center">{match.team2.name}</span>
        </div>
      </div>

      {/* Odds */}
      <div className="grid grid-cols-3 gap-[6px]">
        {match.odds.map((odd, i) => (
          <button
            key={i}
            onClick={() => setSelected(selected === i ? null : i)}
            className={`rounded-[8px] !py-[7px] !px-[6px] text-center transition-all duration-200 border ${
              selected === i
                ? "bg-emerald-500/15 border-emerald-500/40"
                : "bg-white/[0.03] border-white/[0.07] hover:border-emerald-500/25"
            }`}
          >
            <div className="text-[8px] text-slate-500 !mb-[2px]">{odd.label}</div>
            <div className={`text-[13px] font-extrabold ${selected === i ? "text-emerald-400" : "text-slate-100"}`}>
              {odd.val}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SportsPage() {
  const [activeSport,   setActiveSport]   = useState("Cricket")
  const [activeLeague,  setActiveLeague]  = useState("All Leagues")
  const [activeBetType, setActiveBetType] = useState("Match Winner")
  const [betAmount,     setBetAmount]     = useState("")

  return (
    <main className="bg-[#050b14] text-slate-200 min-h-screen" style={{ paddingLeft: "68px" }}>
      <Navbar />

      {/* Blobs */}
      <div className="blob-1 fixed top-[5%] left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)", zIndex: 0 }} />
      <div className="blob-2 fixed bottom-[5%] right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", zIndex: 0 }} />

      <div className="relative" style={{ zIndex: 1 }}>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-white/[0.04]" style={{ background: "linear-gradient(135deg, #0d0b1e 0%, #1a0a3e 30%, #0d1b3e 60%, #0d0b1e 100%)", paddingTop: 100, paddingBottom: 40 }}>
          <div className="max-w-[1200px] !mx-auto !px-[24px]">

            <div className="flex items-center gap-[6px] bg-red-500/10 border border-red-500/25 text-red-400 text-[11px] font-bold !px-[12px] !py-[4px] rounded-full w-fit !mb-[14px]">
              <span className="w-[6px] h-[6px] rounded-full bg-red-400 animate-pulse inline-block" />
              240 Live Events
            </div>

            <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold leading-tight !mb-[12px]" style={{ letterSpacing: "-0.02em" }}>
              Sports{" "}
              <span style={{ background: "linear-gradient(90deg,#10b981,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Betting
              </span>
            </h1>

            <p className="text-slate-500 text-[16px] !mb-[28px] max-w-[480px]">
              Cricket, Football, Tennis aur 20+ sports — live odds pe bet lagao
            </p>

            {/* Stats */}
            <div className="flex gap-[32px] flex-wrap">
              {STATS.map((s, i) => (
                <div key={i}>
                  <div className="text-[22px] font-extrabold text-slate-100">{s.value}</div>
                  <div className="text-[11px] text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPORT TABS ── */}
        <div className="bg-white/[0.02] border-b border-white/[0.05] !px-[24px] flex gap-0 overflow-x-auto" style={{scrollbarWidth:"none"}}>
          {SPORTS_TABS.map((sport) => (
            <button
              key={sport.name}
              onClick={() => setActiveSport(sport.name)}
              className={`flex items-center gap-[6px] !px-[16px] !py-[12px] text-[12px] font-semibold whitespace-nowrap border-b-2 transition-all duration-200 bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer ${
                activeSport === sport.name
                  ? "text-emerald-400 border-emerald-400"
                  : "text-slate-500 border-transparent hover:text-slate-300"
              }`}
            >
              {sport.emoji} {sport.name}
            </button>
          ))}
        </div>

        {/* ── BODY ── */}
        <div className="max-w-[1400px] !mx-auto flex flex-col lg:flex-row">

          {/* Sidebar */}
          <div className="w-[170px] flex-shrink-0 !p-[16px] border-r border-white/[0.04]">

            <div className="text-[9px] font-bold text-slate-700 uppercase tracking-widest !mb-[8px]">Leagues</div>
            {LEAGUES.map((l) => (
              <button
                key={l.name}
                onClick={() => setActiveLeague(l.name)}
                className={`w-full flex items-center justify-between !px-[9px] !py-[7px] rounded-[7px] !mb-[3px] border text-left transition-all duration-200 cursor-pointer ${
                  activeLeague === l.name
                    ? "bg-emerald-500/10 border-emerald-500/20"
                    : "border-transparent hover:border-white/[0.06] bg-transparent"
                }`}
              >
                <span className={`text-[11px] font-medium ${activeLeague === l.name ? "text-emerald-400" : "text-slate-500"}`}>
                  {l.emoji} {l.name}
                </span>
                <span className={`text-[9px] !px-[5px] !py-[1px] rounded-full ${activeLeague === l.name ? "bg-emerald-500/15 text-emerald-400" : "bg-white/[0.04] text-slate-600"}`}>
                  {l.count}
                </span>
              </button>
            ))}

            <hr className="border-white/[0.05] my-[12px]" />

            <div className="text-[9px] font-bold text-slate-700 uppercase tracking-widest !mb-[8px]">Bet Type</div>
            {BET_TYPES.map((bt) => (
              <button
                key={bt}
                onClick={() => setActiveBetType(bt)}
                className={`w-full text-left !px-[9px] !py-[7px] rounded-[7px] !mb-[3px] border text-[11px] font-medium transition-all duration-200 cursor-pointer ${
                  activeBetType === bt
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    : "border-transparent text-slate-500 bg-transparent hover:border-white/[0.06]"
                }`}
              >
                {bt}
              </button>
            ))}

            <hr className="border-white/[0.05] my-[12px]" />

            <div className="text-[9px] font-bold text-slate-700 uppercase tracking-widest !mb-[8px]">Show</div>
            <div className="flex flex-col gap-[6px]">
              {["Live Only", "Today", "Tomorrow"].map((opt) => (
                <label key={opt} className="flex items-center gap-[6px] text-[10px] text-slate-500 cursor-pointer">
                  <input type="checkbox" defaultChecked={opt === "Live Only"} className="accent-emerald-500 w-[11px] h-[11px]" />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 !p-[16px]">

            {/* Live Matches */}
            <div className="flex items-center gap-[8px] !mb-[12px]">
              <span className="flex items-center gap-[4px] bg-red-500/10 border border-red-500/25 text-red-400 text-[9px] font-bold !px-[8px] !py-[3px] rounded-full">
                <span className="w-[5px] h-[5px] rounded-full bg-red-400 animate-pulse inline-block" />
                LIVE
              </span>
              <span className="text-[13px] font-bold text-slate-100">Live Matches</span>
            </div>

            {LIVE_MATCHES.map((match) => (
              <MatchCard key={match.id} match={match} isLive={true} />
            ))}

            {/* Upcoming */}
            <div className="text-[13px] font-bold text-slate-100 !mt-[20px] !mb-[12px]">
              📅 Upcoming Matches
            </div>

            {UPCOMING_MATCHES.map((match) => (
              <MatchCard key={match.id} match={match} isLive={false} />
            ))}
          </div>

          {/* Right Column */}
          <div className="w-[200px] flex-shrink-0 border-l border-white/[0.04] !p-[14px] flex flex-col gap-[14px]">

            {/* Bet Slip */}
            <div className="bg-gradient-to-br from-[#0d1f35] to-[#111827] border border-white/[0.06] rounded-[12px] overflow-hidden">
              <div className="flex items-center justify-between !px-[12px] !py-[10px] border-b border-white/[0.05]">
                <span className="text-[11px] font-bold text-slate-100">🎫 Bet Slip</span>
                <span className="text-[9px] text-emerald-400 font-bold">2 Bets</span>
              </div>

              <div className="!px-[12px] !py-[8px] border-b border-white/[0.04]">
                <div className="text-[10px] font-semibold text-slate-300 !mb-[2px]">Mumbai Indians Win</div>
                <div className="flex justify-between">
                  <span className="text-[9px] text-emerald-400 font-semibold">IPL 2024</span>
                  <span className="text-[9px] text-slate-500">@ 1.85</span>
                </div>
              </div>

              <div className="!px-[12px] !py-[8px] border-b border-white/[0.04]">
                <div className="text-[10px] font-semibold text-slate-300 !mb-[2px]">Australia Win</div>
                <div className="flex justify-between">
                  <span className="text-[9px] text-emerald-400 font-semibold">IND vs AUS</span>
                  <span className="text-[9px] text-slate-500">@ 2.40</span>
                </div>
              </div>

              <div className="flex justify-between !px-[12px] !py-[10px] border-b border-white/[0.05]">
                <div>
                  <div className="text-[9px] text-slate-500 !mb-[2px]">Total Odds</div>
                  <div className="text-[12px] font-bold text-slate-100">4.44x</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-slate-500 !mb-[2px]">Max Win</div>
                  <div className="text-[11px] font-bold text-emerald-400">₹2,220</div>
                </div>
              </div>

              <div className="!px-[12px] !py-[10px]">
                <input
                  type="number"
                  placeholder="₹ Enter amount..."
                  value={betAmount}
                  onChange={e => setBetAmount(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-[7px] !px-[10px] !py-[7px] text-[11px] text-slate-400 outline-none !mb-[8px]"
                />
                <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 border-none text-white !py-[9px] rounded-[8px] text-[12px] font-bold cursor-pointer hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200">
                  Place Bet
                </button>
              </div>
            </div>

            {/* Popular Bets */}
            <div className="bg-gradient-to-br from-[#0d1f35] to-[#111827] border border-white/[0.06] rounded-[12px] overflow-hidden">
              <div className="!px-[12px] !py-[10px] border-b border-white/[0.05]">
                <span className="text-[11px] font-bold text-slate-100 flex items-center gap-[5px]">
                  <FaFire className="text-orange-400 text-[10px]" /> Popular Bets
                </span>
              </div>
              {POPULAR_BETS.map((bet, i) => (
                <div key={i} className="flex items-center gap-[8px] !px-[12px] !py-[8px] border-b border-white/[0.04] last:border-0">
                  <span className="text-[16px]">{bet.flag}</span>
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold text-slate-300">{bet.name}</div>
                    <div className="text-[9px] text-slate-600">{bet.count} bets today</div>
                  </div>
                  <span className="text-[10px] font-bold text-amber-400">{bet.odds}</span>
                </div>
              ))}
            </div>
            {/* Leaderboard */}
<div className="bg-gradient-to-br from-[#0d1f35] to-[#111827] border border-white/[0.06] rounded-[12px] overflow-hidden">
  
  {/* Header */}
  <div className="!px-[12px] !py-[10px] border-b border-white/[0.05] flex items-center justify-between">
    <span className="text-[11px] font-bold text-slate-100">🏆 Leaderboard</span>
    <span className="flex items-center gap-[4px] text-[9px] text-red-400 font-bold">
      <span className="w-[5px] h-[5px] rounded-full bg-red-400 animate-pulse inline-block" />
      Live
    </span>
  </div>

  {/* Rows */}
  {LEADERBOARD.map((player, i) => (
    <LeaderboardRow key={player.rank} player={player} index={i} />
  ))}

  {/* Footer */}
  <div className="!px-[12px] !py-[8px] border-t border-white/[0.05] text-center">
    <span className="text-[10px] text-emerald-400 font-semibold cursor-pointer hover:text-emerald-300 transition-colors">
      View Full Leaderboard →
    </span>
  </div>
</div>

          </div>
        </div>
      </div>
    </main>
  )
}