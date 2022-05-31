import { ReactNode } from 'react'

interface MainContentProps {
  children: ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <>
      <main style={{ marginTop: 100 }}>{children}</main>
    </>
  )
}
