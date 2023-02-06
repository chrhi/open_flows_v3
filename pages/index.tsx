import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import  Head  from 'next/head'
import Features from '@/components/landing/Features'





export default function Home() {
  return (
    <>
      <Head>
        <title>Open Flows</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
       <Header />
       <Hero />
       
       <Features />
      </main>
    </>
  )
}