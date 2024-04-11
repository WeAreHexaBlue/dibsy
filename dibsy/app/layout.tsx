import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "dibsy",
    description: ""
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}