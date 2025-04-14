// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
    title: 'Lista de Produtos',
    description: 'Aplicação com lista de produtos usando Next.js 15',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-BR">
        <body className="bg-gray-100 text-gray-800 min-h-screen">
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <h1 className="text-xl font-bold">Minha Lista de Produtos</h1>
        </header>

        <main className="p-6">{children}</main>

        <footer className="bg-gray-200 text-center p-4 mt-10 text-sm">
            © 2025 - Lista de Produtos com Next.js
        </footer>
        </body>
        </html>
    )
}
