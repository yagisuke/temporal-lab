import Head from 'next/head'
import { Temporal } from 'proposal-temporal'
import Footer from '../components/Footer'

type Props = {
  birthday: string
  today: string
}

export default function Page(props: Props) {
  const birthday = Temporal.PlainDate.from(props.birthday)
  const today = Temporal.PlainDate.from(props.today)

  return (
    <div className="container">
      <Head>
        <title>2つの日付の差 | Temporary Lab.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>2つの日付の差</h1>
        <p>誕生日: {birthday.toString()}</p>
        <p>今日: {today.toString()}</p>

        <h2>何年離れてるか</h2>
        <p>until: {birthday.until(today, { largestUnit: 'years' }).years}</p>
        <p>since: {birthday.since(today, { largestUnit: 'years' }).years}</p>

        <h2>何日離れてるか</h2>
        <p>until: {birthday.until(today, { largestUnit: 'days' }).days}</p>
        <p>since: {birthday.since(today, { largestUnit: 'days' }).days}</p>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      birthday: Temporal.PlainDate.from('1989-02-09').toString(),
      today: Temporal.now.plainDateISO().toString(),
    },
  }
}
