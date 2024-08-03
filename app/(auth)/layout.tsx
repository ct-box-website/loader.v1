import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Login",
    description: "Dashboard for admin",
}
export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>

    )
}