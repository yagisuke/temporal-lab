import Head from 'next/head'
import { Temporal } from 'proposal-temporal'
import Footer from '../components/Footer'

export default function Page() {
  const a = '2020-01-23T17:04:36.491865121-08:00'
  const b = '2020-02-10T17:04:36.491865121-08:00'
  const c = '2020-04-01T05:01:00-04:00[Asia/Tokyo]'
  const d = '2020-04-01T10:00:00+01:00[Europe/London]'
  const e = '2020-04-01T11:02:00+02:00[Europe/Berlin]'
  const result = ((strings: string[]) => {
    const sortedInstants = strings
      .map((v) => [v, Temporal.Instant.from(v)])
      .sort(([, i1], [, i2]) => Temporal.Instant.compare(i1, i2))
      .map(([str]) => str)
    return sortedInstants.reverse()
  })([a, b, c, d, e])

  return (
    <div className="container">
      <Head>
        <title>日付日時のソート | Temporary Lab.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>日付日時のソート</h1>
        <ol>
          {result.map((date, i) => (
            <li key={i}>{date}</li>
          ))}
        </ol>
      </main>
      <Footer />
    </div>
  )
}
