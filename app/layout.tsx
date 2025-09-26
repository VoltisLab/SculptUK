import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SculptUK - Body Sculpting & Wellness',
    description: 'Professional body sculpting, wellness treatments and training services',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}