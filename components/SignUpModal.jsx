"use client"

import { useState } from "react"
import useAuthStore from "@/store/authStore"

export default function SignupModal({ onClose, onSwitchToLogin }) {
  const [name,     setName]     = useState("")
  const [email,    setEmail]    = useState("")
  const [password, setPassword] = useState("")

  const { signup, isLoading, error, clearError } = useAuthStore()

  const handleSubmit = async () => {
    if (!name || !email || !password) return
    const result = await signup(name, email, password)
    if (result.success) onClose()
  }

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "24px",
    }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "linear-gradient(145deg, #0d1f35, #111827)",
          border: "1px solid rgba(16,185,129,0.2)",
          borderRadius: 24, padding: "40px 36px",
          width: "100%", maxWidth: 420,
          boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🏆</div>
          <h2 style={{ color: "#f1f5f9", fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>
            Join PROGAMER
          </h2>
          <p style={{ color: "#475569", fontSize: 14, margin: 0 }}>
            Sign up Now and get ₹5,000 bonus
          </p>
        </div>

        {error && (
          <div style={{
            background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
            color: "#ef4444", fontSize: 13, padding: "10px 14px",
            borderRadius: 10, marginBottom: 20, textAlign: "center",
          }}>
            {error}
          </div>
        )}

        {/* Name */}
        <div style={{ marginBottom: 14 }}>
          <label style={{ color: "#64748b", fontSize: 13, fontWeight: 500, display: "block", marginBottom: 6 }}>
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={e => { setName(e.target.value); clearError() }}
            placeholder="Rahul Sharma"
            style={{
              width: "100%", background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10, padding: "12px 16px",
              color: "#f1f5f9", fontSize: 15, outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: 14 }}>
          <label style={{ color: "#64748b", fontSize: 13, fontWeight: 500, display: "block", marginBottom: 6 }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => { setEmail(e.target.value); clearError() }}
            placeholder="your@email.com"
            style={{
              width: "100%", background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10, padding: "12px 16px",
              color: "#f1f5f9", fontSize: 15, outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ color: "#64748b", fontSize: 13, fontWeight: 500, display: "block", marginBottom: 6 }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => { setPassword(e.target.value); clearError() }}
            placeholder="••••••••"
            style={{
              width: "100%", background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10, padding: "12px 16px",
              color: "#f1f5f9", fontSize: 15, outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading || !name || !email || !password}
          style={{
            width: "100%",
            background: isLoading ? "rgba(16,185,129,0.4)" : "linear-gradient(135deg, #10b981, #059669)",
            color: "#fff", border: "none",
            padding: "14px", borderRadius: 12,
            fontSize: 16, fontWeight: 700,
            cursor: isLoading ? "not-allowed" : "pointer",
            boxShadow: "0 8px 32px rgba(16,185,129,0.3)",
            marginBottom: 16,
          }}
        >
          {isLoading ? "Creating Account..." : "Sign Up & Get Bonus"}
        </button>

        <p style={{ textAlign: "center", color: "#475569", fontSize: 14, margin: 0 }}>
          Account already exist?{" "}
          <span
            onClick={onSwitchToLogin}
            style={{ color: "#10b981", fontWeight: 600, cursor: "pointer" }}
          >
            Login Now!
          </span>
        </p>
      </div>
    </div>
  )
}