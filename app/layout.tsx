import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mike Butler - Senior Product Manager',
  description: 'Platform Product manager from the ad tech and payments space, creating features customers love.',
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
