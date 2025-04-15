// src/components/Navbar/Navbar.tsx
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
// import { useEffect, useState } from 'react'

export const Navbar = () => {
    const { theme, setTheme } = useTheme()
    // const [mounted, setMounted] = useState(false)

    // useEffect(() => {
    //     setMounted(true)
    // }, [])

    return (
        <header className="w-full bg-white dark:bg-gray-900 shadow">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/">
                    <span className="font-bold text-xl">Eduardo Andrade</span>
                </Link>
                <nav className="flex gap-6 items-center">
                    <Link href="/about">Sobre</Link>
                    <Link href="/projects">Projetos</Link>
                    <Link href="/contact">Contato</Link>
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </nav>
            </div>
        </header>
    )
}