import Link from 'next/link'
import Head from 'next/head'  //追記
import Layout, { Profile } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function SecoundPost() {
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Self Introduction</h1>
        <ul>
          <li>理学部数学科</li>
          <li>出身：長野県</li>
          <li>趣味：将棋、散歩、読書、ポーカー</li>
        </ul>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </section>
    </Layout>
  )
}