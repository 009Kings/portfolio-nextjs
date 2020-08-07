import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Navbar() {
  useEffect(() => {
    document.getElementById('home').style.color = 'hotpink'
  }, [])

  return (
    <div>
      <Head>
        <title>King Kong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/"><a id='home'>Home</a></Link>
          </li>
          <li>
            <Link href="/about"><a>About</a></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}