import Head from 'next/head'
import { Temporal } from 'proposal-temporal'
import Footer from '../components/Footer'

type Props = {
  now: string
}

export default function Page(props: Props) {
  const now = Temporal.PlainDateTime.from(props.now)
  const twoDigit = (n: number) => ('0' + n).slice(-2)

  return (
    <div className="container">
      <Head>
        <title>日付日時のフォーマット | Temporary Lab.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>日付日時のフォーマット</h1>
        {now.toString()}
        <br />
        {now.toLocaleString('ja-JP', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
        <br />
        {`${now.year}年${twoDigit(now.month)}月${twoDigit(
          now.day
        )}日 ${twoDigit(now.hour)}時${twoDigit(now.minute)}分${twoDigit(
          now.second
        )}秒`}
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
