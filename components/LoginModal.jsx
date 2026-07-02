"use client"

import { useState } from "react"
import useAuthStore from "@/store/authStore"

export default function LoginModal({ onClose, onSwitchToSignup }) {
  const [email, setEmail]       = useState("")
  const [password, setPassword] = useState("")

  const { login, isLoading, error, clearError } = useAuthStore()

  const handleSubmit = async () => {
    const result = await login(email, password)
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
          <div style={{ fontSize: 40, marginBottom: 12 }}>🎮</div>
          <h2 style={{ color: "#f1f5f9", fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>
            Welcome Back
          </h2>
          <p style={{ color: "#475569", fontSize: 14, margin: 0 }}>
            Login and play
          </p>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
            color: "#ef4444", fontSize: 13, padding: "10px 14px",
            borderRadius: 10, marginBottom: 20, textAlign: "center",
          }}>
            {error}
          </div>
        )}

        {/* Email */}
        <div style={{ marginBottom: 16 }}>
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

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          style={{
            width: "100%",
            background: isLoading ? "rgba(16,185,129,0.4)" : "linear-gradient(135deg, #10b981, #059669)",
            color: "#fff", border: "none",
            padding: "14px", borderRadius: 12,
            fontSize: 16, fontWeight: 700, cursor: isLoading ? "not-allowed" : "pointer",
            boxShadow: "0 8px 32px rgba(16,185,129,0.3)",
            transition: "all 0.2s",
            marginBottom: 16,
          }}
        >
          {isLoading ? "Logging in..." : " Login"}
        </button>

        {/* Switch to Signup */}
        <p style={{ textAlign: "center", color: "#475569", fontSize: 14, margin: 0 }}>
          Account does not exist?{" "}
          <span
            onClick={onSwitchToSignup}
            style={{ color: "#10b981", fontWeight: 600, cursor: "pointer" }}
          >
            Sign Up Now!
          </span>
        </p>

        {/* Test credentials hint */}
        <div style={{
          marginTop: 20, padding: "10px 14px",
          background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)",
          borderRadius: 8, textAlign: "center",
        }}>
          <p style={{ color: "#f59e0b", fontSize: 12, margin: 0 }}>
            Test: test@pro.com / 123456
          </p>
        </div>
      </div>
    </div>
  )
}