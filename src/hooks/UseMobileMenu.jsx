

import { useState, useEffect } from "react"

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener("resize", closeMenu)
    return () => window.removeEventListener("resize", closeMenu)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return { isOpen, toggleMenu }
}

