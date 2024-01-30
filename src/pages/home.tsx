import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex h-screen items-center justify-center">
        <h1>Home</h1>
      </div>
    </>
  )
}
