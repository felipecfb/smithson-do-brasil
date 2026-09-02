import { Helmet } from 'react-helmet-async'

import { AboutUs } from './components/about-us'
import { Dna } from './components/dna'
import { Introduction } from './components/introduction'
import { Numbers } from './components/numbers'
import { Partners } from './components/partners'
import { Products } from './components/products'
import { Services } from './components/services'

export function Home() {
  return (
    <>
      <Helmet title="Home" />

      <div className="space-y-8 bg-teal-200 text-foreground dark:bg-zinc-950 lg:space-y-16">
        <Introduction.Root>
          <Introduction.Button
            href="/servicos"
            title="Saiba o que fazemos"
            className="border-[1px] border-zinc-950 bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
          />
          <Introduction.Button
            href="/servicos"
            title="Fale com a gente"
            className="bg-zinc-950 text-zinc-50 hover:bg-zinc-700 dark:bg-teal-200 dark:text-zinc-950"
          />
        </Introduction.Root>
        <AboutUs />
        <Numbers />
        <Dna />
        <Services />
        <Products />

        <Partners />
        {/* <Review /> */}
      </div>
    </>
  )
}
