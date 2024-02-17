import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "dibsy",
    description: "A serverless social For Everything You.",
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}