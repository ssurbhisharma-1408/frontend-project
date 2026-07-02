import Link from "next/link"
import { FaTwitter, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa"
import { GiCardAceSpades } from "react-icons/gi"


export default function Footer() {
  const links = {
    Games: ["Casino", "Sports Betting", "Live Games", "Slots", "Poker"],
    Support: ["Help Center", "Contact Us", "Responsible Gaming", "Terms", "Privacy"],
    Company: ["About Us", "Blog", "Affiliates", "Careers", "Press"],
  }

  return (
<footer className="!mt-[100px] border-t border-white/[0.05] bg-[#0d0b1e] !pl-[68px]">
  <div className="max-w-[1200px] !mx-auto !px-[20px] !py-[48px]">

    {/* GRID */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] !mb-[40px]">

      {/* COLUMN 1 */}
      <div>
        <h4 className="text-[12px] font-bold text-white uppercase !mb-[14px]">PROGAMER</h4>
        {["About Us", "Payments", "Registration Procedure", "Rules of the Games", "Responsible Gaming"].map((l) => (
          <div key={l} className="text-[12px] text-slate-500 !mb-[10px] cursor-pointer hover:text-slate-300">
            {l}
          </div>
        ))}
      </div>

      {/* COLUMN 2 */}
      <div>
        <h4 className="text-[12px] font-bold text-white uppercase !mb-[14px]">Need Help?</h4>
        {["FAQ", "Terms and Conditions", "Privacy Policy", "Bonus Terms", "Complaints"].map((l) => (
          <div key={l} className="text-[12px] text-slate-500 !mb-[10px] cursor-pointer hover:text-slate-300">
            {l}
          </div>
        ))}
      </div>

      {/* COLUMN 3 */}
      <div>
        <h4 className="text-[12px] font-bold text-white uppercase !mb-[14px]">Actions</h4>
        {["Promotions", "VIP Program", "Tournaments", "Leaderboard"].map((l) => (
          <div key={l} className="text-[12px] text-slate-500 !mb-[10px] cursor-pointer hover:text-slate-300">
            {l}
          </div>
        ))}
      </div>

      {/* COLUMN 4 */}
      <div>
        <h4 className="text-[12px] font-bold text-white uppercase !mb-[14px]">Games</h4>
        {["Lobby", "All Games", "Live Casino", "Sports"].map((l) => (
          <div key={l} className="text-[12px] text-slate-500 !mb-[10px] cursor-pointer hover:text-slate-300">
            {l}
          </div>
        ))}
      </div>
    </div>

    {/* BOTTOM BAR */}
    <div className="flex flex-col md:flex-row items-center justify-between !pt-[24px] border-t border-white/[0.05] gap-[16px]">

      {/* LEFT */}
      <div className="flex gap-[12px]">
        <span className="text-[10px] !px-[8px] !py-[3px] rounded bg-white/[0.05] text-slate-500">18+</span>
        <span className="text-[10px] !px-[8px] !py-[3px] rounded bg-white/[0.05] text-slate-500">🔒 SSL Secure</span>
      </div>

      {/* SOCIAL */}
      <div className="flex gap-[12px]">
        {["📷", "👍", "✈️", "🐦"].map((icon, i) => (
          <div key={i} className="w-[28px] h-[28px] rounded-full bg-white/[0.05] flex items-center justify-center text-[12px] cursor-pointer hover:bg-white/[0.1]">
            {icon}
          </div>
        ))}
      </div>
    </div>

    {/* COPYRIGHT */}
    <p className="text-[10px] text-slate-700 !mt-[20px] leading-relaxed text-center md:text-left">
      Copyright © 2024 ProGamer. This can be addictive. Play responsibly.
    </p>
  </div>
</footer>
  )
}