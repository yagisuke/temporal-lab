import Head from 'next/head'
import { Temporal } from 'proposal-temporal'
import Footer from '../components/Footer'

export default function Page() {
  const pastDate = Temporal.PlainDate.from('1989-02-09')
  const featureDate = Temporal.PlainDate.from('2089-02-09')
  const result = (() => {
    switch (Temporal.PlainDate.compare(pastDate, featureDate)) {
      case 1:
        return 'Aの方が未来です'
      case 0:
        return 'AもBも同じ日付です'
      case -1:
        return 'Bの方が未来です'
      default:
        throw new Error('error!')
    }
  })()

  return (
    <div className="container">
      <Head>
        <title>2つの日付の比較 | Temporary Lab.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>2つの日付の比較</h1>
        <p>A: {pastDate.toString()}</p>
        <p>B: {featureDate.toString()}</p>
        <p>結果: {result}</p>
      </main>
      <Footer />
    </div>
  )
}
