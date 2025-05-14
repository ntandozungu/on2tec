"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LucideCode,
  LucideGlobe,
  LucideCloud,
  LucideShieldCheck,
  LucideHeadphones,
  LucideBuilding,
  LucideMenu,
  LucideX,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sections = ["hero", "about", "services", "team", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#ebe9e8]">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 ${scrollY > 50 ? "bg-white/95 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="ON2Tech Logo" width={40} height={40} className="h-10 w-auto" />
            <Image src="/name.png" alt="ON2Tech" width={120} height={30} className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${activeSection === "hero" ? "text-teal-600" : ""}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${activeSection === "services" ? "text-teal-600" : ""}`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${activeSection === "team" ? "text-teal-600" : ""}`}
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${activeSection === "about" ? "text-teal-600" : ""}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${activeSection === "contact" ? "text-teal-600" : ""}`}
            >
              Contact
            </button>
          </nav>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="hidden md:flex border-teal-600 text-teal-600 hover:bg-teal-50 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <LucideX className="h-6 w-6" /> : <LucideMenu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 absolute w-full left-0 shadow-md animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-sm font-medium hover:text-teal-600 transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium hover:text-teal-600 transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-sm font-medium hover:text-teal-600 transition-colors py-2"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-teal-600 transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-teal-600 transition-colors py-2"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-teal-600 hover:bg-teal-700 text-white w-full mt-2"
              >
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden bg-[#ebe9e8] py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-in slide-in-from-left duration-700">
                <div className="flex items-center mb-6">
                  <Image src="/name.png" alt="ON2Tech" width={240} height={60} className="h-16 w-auto" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Smart Software. Secure Solutions.
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  We build secure, scalable software solutions that power government and enterprise digital
                  transformation.
                </p>
                <Button
                  onClick={() => scrollToSection("services")}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 h-auto text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Explore Our Services
                </Button>
              </div>
              <div className="hidden md:block relative h-[400px] animate-in slide-in-from-right duration-700">
                <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-teal-400 rounded-full opacity-20 animate-pulse"></div>
                  <div
                    className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="ON2Tech Logo"
                    width={180}
                    height={180}
                    className="h-44 w-auto transition-transform duration-500 hover:rotate-12"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </section>

        {/* Company Overview */}
        <section id="about" className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 scroll-animation">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Overview</h2>
              <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
              <p className="text-gray-700 leading-relaxed">
                ON2Tech (Pty) Ltd is a South African-based IT solutions provider (Reg No: 2025/298759/07) specializing
                in software development, web applications, cloud solutions, and digital transformation services. With a
                B-BBEE Level 1 certification and CSD registration, we're equipped to support government and enterprise
                clients with secure, scalable, and innovative IT solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#ebe9e8] rounded-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md scroll-animation">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 text-sm">67 Eagle Rd, Kikuyu Estate, Johannesburg, Gauteng, 2090</p>
              </div>
              <div
                className="bg-[#ebe9e8] rounded-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md scroll-animation"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600 text-sm">ntandozungu11@gmail.com</p>
                <p className="text-gray-600 text-sm">+27 744 950 785</p>
              </div>
              <div
                className="bg-[#ebe9e8] rounded-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md scroll-animation"
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
                <a href="http://on2tec.co.za" className="text-blue-600 hover:underline text-sm transition-colors">
                  on2tec.co.za
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section id="services" className="py-16 bg-[#ebe9e8]">
          <div className="container">
            <div className="text-center mb-12 scroll-animation">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
              <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We provide comprehensive IT solutions tailored to meet the unique needs of government and enterprise
                clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<LucideCode className="h-6 w-6" />}
                title="Custom Software Development"
                description="Tailored solutions for government and enterprise needs."
                delay={0}
              />
              <ServiceCard
                icon={<LucideGlobe className="h-6 w-6" />}
                title="Web Application Development"
                description="Modern, user-friendly web platforms."
                delay={0.1}
              />
              <ServiceCard
                icon={<LucideCloud className="h-6 w-6" />}
                title="Cloud Solutions"
                description="Scalable cloud computing, hosting, and migration."
                delay={0.2}
              />
              <ServiceCard
                icon={<LucideShieldCheck className="h-6 w-6" />}
                title="Cybersecurity & Data Protection"
                description="Safeguarding sensitive data and systems."
                delay={0.3}
              />
              <ServiceCard
                icon={<LucideHeadphones className="h-6 w-6" />}
                title="IT Consulting & Support"
                description="Strategic guidance and expert support."
                delay={0.4}
              />
              <ServiceCard
                icon={<LucideBuilding className="h-6 w-6" />}
                title="E-Government Solutions"
                description="Digital platforms to improve public service delivery."
                delay={0.5}
              />
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section id="team" className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12 scroll-animation">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
              <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our team of experts is dedicated to delivering innovative solutions and exceptional service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TeamMember
                name="Olwethu Nguza"
                position="Cloud Engineer / Software Engineer"
                skills="AWS Certified | Infrastructure as Code | DevOps | Python | Well-Architected Reviews"
                location="Based in Johannesburg"
                delay={0}
              />
              <TeamMember
                name="Ntandoyenkosi Zungu"
                position="Software Engineer"
                skills="C#, Python, Angular, SQL, SSRS, PowerBI"
                location="Based in Durban"
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* Why Choose ON2Tech */}
        <section className="py-16 bg-[#ebe9e8]">
          <div className="container">
            <div className="text-center mb-12 scroll-animation">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ON2Tech</h2>
              <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md scroll-animation">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">B-BBEE Level 1 Certified</h3>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md scroll-animation"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Registered on the Central Supplier Database</h3>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md scroll-animation"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m16 6-4 4-4-4" />
                    <path d="M16 18a4 4 0 0 0-8 0" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cloud-native & security-first approach</h3>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md scroll-animation"
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4" />
                    <path d="m6.41 6.41 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="m6.41 17.59 2.83-2.83" />
                    <path d="M12 18v4" />
                    <path d="m14.76 17.59 2.83 2.83" />
                    <path d="M18 12h4" />
                    <path d="m14.76 6.41 2.83-2.83" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Track record of innovation, reliability, and compliance
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center scroll-animation">
              <h2 className="text-3xl font-bold mb-6">Let's build your next digital solution.</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Ready to transform your business with innovative technology solutions? Get in touch with our team today.
              </p>
              <Button
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 h-auto text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => (window.location.href = "mailto:ntandozungu11@gmail.com")}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="ON2Tech Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto brightness-200"
                />
                <Image src="/name.png" alt="ON2Tech" width={120} height={30} className="h-8 w-auto brightness-200" />
              </div>
              <p className="mb-4 text-sm">
                ON2Tech (Pty) Ltd is a South African-based IT solutions provider specializing in software development,
                web applications, cloud solutions, and digital transformation services.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a href="mailto:ntandozungu11@gmail.com" className="hover:text-white transition-colors">
                    ntandozungu11@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+27744950785" className="hover:text-white transition-colors">
                    +27 744 950 785
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Johannesburg</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" x2="22" y1="12" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <a href="http://on2tec.co.za" className="hover:text-white transition-colors">
                    on2tec.co.za
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("team")} className="hover:text-white transition-colors">
                    Team
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>Copyright © 2025 ON2Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <Card
      className="border-none shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 bg-white scroll-animation"
      style={{ transitionDelay: `${delay}s` }}
    >
      <CardHeader className="pb-2">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function TeamMember({ name, position, skills, location, delay = 0 }) {
  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-md scroll-animation"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-blue-600 mb-2">{position}</p>
          <p className="text-gray-600 text-sm mb-1">{skills}</p>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
    </div>
  )
}
