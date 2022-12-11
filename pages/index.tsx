import Head from 'next/head'
import Header from '../Components/Header'
import Landing from '../Components/Landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apple store clone</title>
        <meta name="description" content="Apple store clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <Landing/>
        
      </main>
    </div>
  )
}
