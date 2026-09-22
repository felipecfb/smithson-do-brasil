import { ArrowUpIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from './ui/button'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  function toggleVisibility() {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-md bg-primary p-0"
        >
          <ArrowUpIcon className="h-6 w-6 text-primary-foreground" />
        </Button>
      )}
    </>
  )
}
