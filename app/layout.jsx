import './globals.css'

export const metadata = {
  title: 'CineTrack',
  description: 'Cinema Analytics Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}