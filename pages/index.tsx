import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className="container">
      <Head>
        <title>Temporary Lab.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Temporary Lab.</h1>
        <ol>
          <li>
            <Link href="/format">日付日時のフォーマット</Link>
          </li>
          <li>
            <Link href="/calc">日付の加算・減算</Link>
          </li>
          <li>
            <Link href="/difference">2つの日付の差</Link>
          </li>
          <li>
            <Link href="/compare">2つの日付の比較</Link>
          </li>
          <li>
            <Link href="/sort">日付日時のソート</Link>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  )
}
