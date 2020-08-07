import Head from 'next/head'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <Head>
        <title>King Kong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/about"><a>About</a></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}