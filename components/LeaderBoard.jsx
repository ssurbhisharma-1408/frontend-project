import { useEffect, useState } from "react"

function LeaderboardRow({ player, index }) {
  const [flash, setFlash] = useState(false)
  const [currentAmount, setCurrentAmount] = useState(player.amount)

  // Har 3-6 second mein random row flash hoti hai — live update feel
  useEffect(() => {
    const randomDelay = 3000 + index * 1200 + Math.random() * 2000
    const interval = setInterval(() => {
      setFlash(true)
      // Amount thoda change karo
      const base = parseInt(player.amount.replace("₹","").replace("K","")) 
      const newVal = base + Math.floor(Math.random() * 3)
      setCurrentAmount(`₹${newVal}K`)
      setTimeout(() => setFlash(false), 600)
    }, randomDelay)
    return () => clearInterval(interval)
  }, [index, player.amount])

  const rankColor =
    player.rank === 1 ? "text-amber-400" :
    player.rank === 2 ? "text-slate-400" :
    player.rank === 3 ? "text-orange-400" : "text-slate-600"

  const rankEmoji =
    player.rank === 1 ? "🥇" :
    player.rank === 2 ? "🥈" :
    player.rank === 3 ? "🥉" : `${player.rank}`

  return (
    <div
      className="flex items-center gap-[8px] !px-[12px] !py-[8px] border-b border-white/[0.04] last:border-0 transition-all duration-300"
      style={{
        background: flash ? "rgba(16,185,129,0.08)" : "transparent",
      }}
    >
      {/* Rank */}
      <div className={`text-[11px] font-extrabold w-[16px] text-center ${rankColor}`}>
        {rankEmoji}
      </div>

      {/* Avatar */}
      <div
        className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${player.color}, ${player.color}99)` }}
      >
        {player.avatar}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-semibold text-slate-300 truncate">{player.name}</div>
        <div className="text-[9px] text-slate-600 truncate">{player.game}</div>
      </div>

      {/* Amount — flash hone pe green glow */}
      <div
        className="text-[10px] font-bold transition-all duration-300"
        style={{
          color: flash ? "#10b981" : "#34d399",
          textShadow: flash ? "0 0 8px rgba(16,185,129,0.8)" : "none",
        }}
      >
        {currentAmount}
        {flash && (
          <span className="text-[8px] text-emerald-300 ml-[2px]">↑</span>
        )}
      </div>
    </div>
  )
}
export default LeaderboardRow;