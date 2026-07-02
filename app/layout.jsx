import Navbar from "@/components/Navbar"
import './globals.css'
import ChatComp from "@/components/ChatComp"
import Sidebar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "ProGamer - Premium Gaming Platform",
  description: "Play the best casino games, sports betting and more",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Sidebar/>
        {children}
        <Footer/>
        {/*<ChatComp/>*/}
      </body>
    </html>
  )
}