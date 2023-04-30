import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 text-orange-300">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Chainality">
              CHAINALITY
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/es"
                  className="btn-sm text-white bg-violet-600 hover:bg-violet-800 ml-3"
                >
                  Executive Summary
                </Link>
              </li>
              <li>
                <Link href="/pitch" className="btn-sm text-white bg-violet-600 hover:bg-violet-700 ml-3">
                  Pitch deck
                </Link>
              </li>
            </ul>
          </nav>

          {/* <MobileMenu /> */}

        </div>
      </div>
    </header>
  )
}
