import { create } from "zustand"

const useAuthStore = create((set) => ({
  // State
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,

  // Login action
  login: async (email, password) => {
    set({ isLoading: true, error: null })

    // Real API call ki jagah abhi fake delay hai
    
    await new Promise((resolve) => setTimeout(resolve, 1000))
    //

    if (email === "test@pro.com" && password === "123456") {
      set({
        isLoggedIn: true,
        isLoading: false,
        user: {
          name: "Rahul Sharma",
          email: email,
          balance: 5000,
          avatar: "RS",
        },
      })
      return { success: true }
    } else {
      set({ isLoading: false, error: "Invalid email or password" })
      return { success: false }
    }
  },

  // Signup action
  signup: async (name, email, password) => {
    set({ isLoading: true, error: null })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Har signup successful maano abhi
    set({
      isLoggedIn: true,
      isLoading: false,
      user: {
        name: name,
        email: email,
        balance: 5000, // welcome bonus
        avatar: name.slice(0, 2).toUpperCase(),
      },
    })
    return { success: true }
  },

  // Logout action
  logout: () => {
    set({ user: null, isLoggedIn: false, error: null })
  },

  // Error clear karo
  clearError: () => set({ error: null }),
}))

export default useAuthStore