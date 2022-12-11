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
      <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <Landing/>
      </main>
      <section className='relative z-40 -mt-[100vh] min-h-screen  bg-[#1b1b1b]'>
        <div className='space-y-10 py-16'>
        <h1 className='text-center text-4xl text-white tracking-wide font-medium md:text-5xl'>New promos</h1>
        </div>
      </section>
    </div>
  )
}
