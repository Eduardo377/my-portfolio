// src/components/Navbar/Navbar.tsx
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="w-full max-w-6xl mx-auto px-6 md:px-12 py-4 bg-white shadow flex justify-between items-center">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <Link href="/">
                    <span className="font-bold text-xl">Eduardo Andrade</span>
                </Link>
                <nav className=" flex justify-between items-center text-sm font-medium">
                    <Link href="/about" className="hover:text-primary transition-colors">Sobre</Link>
                    <Link href="/projects" className="hover:text-primary transition-colors">Projetos</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contato</Link>
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                        aria-label="Alternar tema"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </nav>
            </div>
        </header>
    )
}