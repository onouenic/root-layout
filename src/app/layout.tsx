import Header from "@/component/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <h1>RootLayout</h1>
        <Header>
          {children}
        </Header>
      </body>
    </html>
  )
}
