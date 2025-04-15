// src/components/Layout/Layout.tsx
import { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

interface LayoutProps {
    children: ReactNode
    title?: string
    description?: string
}

export const Layout = ({
    children,
    title = 'Eduardo Andrade | Desenvolvedor Front-End',
    description = 'Portfólio profissional de Eduardo Andrade, desenvolvedor Front-End especializado em React, Next.js e TypeScript'
}: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}