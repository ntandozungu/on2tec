import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ON2Tech - Smart Software. Secure Solutions.",
  description:
    "South African IT solutions provider specializing in software development, web applications, cloud solutions, and digital transformation services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Script id="scroll-animations">
          {`
            function checkScroll() {
              const elements = document.querySelectorAll('.scroll-animation');
              elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight * 0.85;
                
                if(elementPosition < screenPosition) {
                  element.classList.add('animate');
                }
              });
            }
            
            // Initial check
            window.addEventListener('load', checkScroll);
            // Check on scroll
            window.addEventListener('scroll', checkScroll);
          `}
        </Script>
      </body>
    </html>
  )
}
