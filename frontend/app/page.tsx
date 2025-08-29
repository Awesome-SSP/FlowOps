"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  // Helper to get a cookie by name
  const getCookie = (name: string) => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="))
      ?.split("=")[1]
  }

  useEffect(() => {
    const token = getCookie("token") // get token using helper

    if (token) {
      router.replace("/dashboard") // logged in → go dashboard
    } else {
      router.replace("/login") // not logged in → go login
    }
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
}
