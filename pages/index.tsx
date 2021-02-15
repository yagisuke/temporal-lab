import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Temporary Lab.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Welcome to <a href="https://github.com/yagisuke/temporal-lab" target="_blank" rel="noopener noreferrer">Temporary Lab.</a>
        </h1>
        <ol>
          <li><Link href="/format">日付日時のフォーマット</Link></li>
          <li><Link href="/calc">日付の加算・減算</Link></li>
          <li><Link href="/difference">2つの日付の差</Link></li>
        </ol>
      </main>
    </div>
  )
}
