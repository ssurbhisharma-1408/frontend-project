"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GiCardAceSpades } from "react-icons/gi"
import {
  FaHome, FaGamepad, FaDice, FaFutbol, FaGift,
  FaCrown, FaTrophy, FaChartBar
} from "react-icons/fa"
import useAuthStore from "@/store/authStore"
import LoginModal from "./LoginModal"
import SignupModal from "./SignUpModal"

const MENU_ITEMS = [
  { name: "Home",       icon: FaHome,    href: "/" },
  { name: "Games",      icon: FaGamepad, href: "/games" },
  { name: "Casino",     icon: FaDice,    href: "/casino" },
  { name: "Sports",     icon: FaFutbol,  href: "/sports" },
  { name: "Promotions", icon: FaGift,    href: "/promotions", badge: "3", badgeColor: "#ef4444" },
]

const MORE_ITEMS = [
  { name: "VIP Club",     icon: FaCrown,    href: "/vip", badge: "NEW", badgeColor: "#f59e0b" },
  { name: "Tournaments",  icon: FaTrophy,   href: "/tournaments" },
  { name: "Leaderboard",  icon: FaChartBar, href: "/leaderboard" },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  const pathname = usePathname()
  const { isLoggedIn, user, logout } = useAuthStore()

  return (
    <>
      {/* Sidebar — fixed, overlays content on hover */}
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: expanded ? 240 : 68,
          background: "#13112b",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: expanded ? "18px 14px" : "18px 0",
          alignItems: expanded ? "stretch" : "center",
          zIndex: 2000,
          transition: "width 0.25s ease, padding 0.25s ease",
          overflow: "hidden",
        }}
        className="hidden md:flex"
      >
        {/* Logo */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: expanded ? "0 6px 24px" : "0 0 24px",
          justifyContent: expanded ? "flex-start" : "center",
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, flexShrink: 0,
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
          }}>
            <GiCardAceSpades style={{ color: "#fff", fontSize: 17 }} />
          </div>
          {expanded && (
            <span style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              PRO<span style={{
                background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>GAMER</span>
            </span>
          )}
        </div>

        {/* Main Menu */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", alignItems: expanded ? "stretch" : "center" }}>
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: expanded ? 12 : 0,
                  justifyContent: expanded ? "flex-start" : "center",
                  width: expanded ? "100%" : 44,
                  height: 44,
                  borderRadius: expanded ? 11 : 12,
                  padding: expanded ? "0 12px" : 0,
                  position: "relative",
                  background: isActive ? "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(79,70,229,0.1))" : "transparent",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent" }}
              >
                {isActive && expanded && (
                  <span style={{
                    position: "absolute", left: -14, top: 9, bottom: 9, width: 3,
                    background: "linear-gradient(180deg, #a78bfa, #7c3aed)", borderRadius: 2,
                  }} />
                )}
                <Icon style={{
                  fontSize: 17,
                  width: expanded ? 20 : "auto",
                  textAlign: "center",
                  color: isActive ? "#c4b5fd" : "#6b6490",
                  flexShrink: 0,
                }} />
                {expanded && (
                  <span style={{
                    fontSize: 13, fontWeight: 600,
                    color: isActive ? "#fff" : "#8b83b0",
                    flex: 1, whiteSpace: "nowrap",
                  }}>
                    {item.name}
                  </span>
                )}
                {item.badge && (
                  expanded ? (
                    <span style={{
                      fontSize: 8, fontWeight: 800, padding: "2px 6px", borderRadius: 999,
                      background: item.badgeColor, color: item.badgeColor === "#f59e0b" ? "#000" : "#fff",
                      flexShrink: 0,
                    }}>
                      {item.badge}
                    </span>
                  ) : (
                    <span style={{
                      position: "absolute", top: 6, right: 6,
                      width: 6, height: 6, borderRadius: "50%",
                      background: item.badgeColor,
                      border: "2px solid #13112b",
                    }} />
                  )
                )}
              </Link>
            )
          })}
        </div>

        {/* Divider */}
        <div style={{
          width: expanded ? "100%" : 28,
          height: 1,
          background: "rgba(255,255,255,0.06)",
          margin: "10px 0",
        }} />

        {/* More Menu */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", alignItems: expanded ? "stretch" : "center" }}>
          {MORE_ITEMS.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: expanded ? 12 : 0,
                  justifyContent: expanded ? "flex-start" : "center",
                  width: expanded ? "100%" : 44,
                  height: 44,
                  borderRadius: expanded ? 11 : 12,
                  padding: expanded ? "0 12px" : 0,
                  background: isActive ? "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(79,70,229,0.1))" : "transparent",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent" }}
              >
                <Icon style={{ fontSize: 17, width: expanded ? 20 : "auto", textAlign: "center", color: isActive ? "#c4b5fd" : "#6b6490", flexShrink: 0 }} />
                {expanded && (
                  <span style={{ fontSize: 13, fontWeight: 600, color: isActive ? "#fff" : "#8b83b0", flex: 1, whiteSpace: "nowrap" }}>
                    {item.name}
                  </span>
                )}
                {item.badge && expanded && (
                  <span style={{
                    fontSize: 8, fontWeight: 800, padding: "2px 6px", borderRadius: 999,
                    background: item.badgeColor, color: item.badgeColor === "#f59e0b" ? "#000" : "#fff",
                    flexShrink: 0,
                  }}>
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </div>

        {/* Bottom — User / Auth */}
        <div style={{ marginTop: "auto" }}>
          {isLoggedIn ? (
            <div
              onClick={() => expanded && logout()}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: expanded ? "10px" : 0,
                borderRadius: 12,
                background: expanded ? "rgba(255,255,255,0.03)" : "transparent",
                cursor: "pointer",
                justifyContent: expanded ? "flex-start" : "center",
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg, #f59e0b, #f97316)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 800, color: "#000",
              }}>
                {user?.avatar}
              </div>
              {expanded && (
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>{user?.name}</div>
                  <div style={{ fontSize: 9, color: "#f59e0b", fontWeight: 600, whiteSpace: "nowrap" }}>Click to logout</div>
                </div>
              )}
            </div>
          ) : (
            <div
              onClick={() => expanded && setShowLogin(true)}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: expanded ? "10px" : 0,
                borderRadius: 12,
                background: expanded ? "rgba(124,58,237,0.1)" : "transparent",
                cursor: "pointer",
                justifyContent: expanded ? "flex-start" : "center",
                border: expanded ? "1px solid rgba(124,58,237,0.25)" : "none",
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                background: "rgba(124,58,237,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 15, color: "#a78bfa",
              }}>
                👤
              </div>
              {expanded && (
                <div style={{ fontSize: 12, fontWeight: 700, color: "#c4b5fd", whiteSpace: "nowrap" }}>
                  Login / Sign Up
                </div>
              )}
            </div>
          )}
        </div>
      </div>


      {/* Modals */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={() => { setShowLogin(false); setShowSignup(true) }}
        />
      )}
      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => { setShowSignup(false); setShowLogin(true) }}
        />
      )}
    </>
  )
}

