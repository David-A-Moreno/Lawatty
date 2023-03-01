import './globals.css'

export const metadata = {
  title: 'Lawatty',
  description: 'Helps you manage better your time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>        
        {children}
      </body>
    </html>
  )
}
 