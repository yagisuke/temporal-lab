import Head from 'next/head'
import { Temporal } from 'proposal-temporal'
import Footer from '../components/Footer'

type Props = {
  now: string
}

export default function Page(props: Props) {
  const now = Temporal.PlainDateTime.from(props.now)
  return (
    <div className="container">
      <Head>
        <title>日付の加算・減算 | Temporary Lab.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>日付の加算・減算</h1>
        <p>現在日時: {now.toString()}</p>

        <h2>日付の加算</h2>
        <p>10年後: {now.add({ months: 10 }).toString()}</p>
        <p>10ヶ月後: {now.add({ months: 10 }).toString()}</p>
        <p>10日後: {now.add({ days: 10 }).toString()}</p>
        <p>10時間後: {now.add({ hours: 10 }).toString()}</p>
        <p>10分後: {now.add({ minutes: 10 }).toString()}</p>
        <p>10秒後: {now.add({ seconds: 10 }).toString()}</p>

        <h2>日付の減算</h2>
        <p>10年前: {now.subtract({ years: -10 }).toString()}</p>
        <p>10ヶ月前: {now.subtract({ months: 10 }).toString()}</p>
        <p>10日前: {now.subtract({ days: 10 }).toString()}</p>
        <p>10時間前: {now.subtract({ hours: 10 }).toString()}</p>
        <p>10分前: {now.subtract({ minutes: 10 }).toString()}</p>
        <p>10秒前: {now.subtract({ seconds: 10 }).toString()}</p>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      now: Temporal.now.plainDateTimeISO().toString(),
    },
  }
}
