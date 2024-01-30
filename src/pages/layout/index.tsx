import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export function Layout() {
  return (
    <div>
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
