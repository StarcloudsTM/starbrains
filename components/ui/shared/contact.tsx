"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Menu, X, Mail, MessageSquare, } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50">
        <Link className="flex items-center justify-center" href="/">
          <BrainCircuit className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Starbrains</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/contact">
            Contact
          </Link>
        </nav>
        <a href="/sign-up"><Button className="ml-4 hidden md:flex" variant="default">
          Get Started
        </Button></a>
        <Button
          className="ml-auto md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-gray-950 shadow-lg z-40"
          >
            <nav className="flex flex-col items-center py-4">
              <Link className="py-2 text-sm font-medium hover:text-primary transition-colors" href="/#features">
                Features
              </Link>
              <Link className="py-2 text-sm font-medium hover:text-primary transition-colors" href="/#about">
                About
              </Link>
              <Link className="py-2 text-sm font-medium hover:text-primary transition-colors" href="/contact">
                Contact
              </Link>
              <Button className="mt-4" variant="default">
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Get in Touch with <span className="text-primary">Starbrains</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We&apos;re here to answer any questions you have about our services. Reach out to us and let&apos;s start a conversation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to us through these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:lnhub@gmail.com" className="text-sm text-gray-500 hover:text-primary">lnhub@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Discord</p>
                        <a href="https://discord.starclouds.in" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-primary">discord.starclouds.in</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Starbrains. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}