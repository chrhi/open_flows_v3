import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import WhyOpenFlow from "@/components/landing/WhyOpenFlow"
import Features from '@/components/landing/Features'
import Footer from '@/components/landing/Footer'
import AboutUs from "@/components/landing/AboutUs"
export default function Home() {
  return (
    <>
     
      <main className='bg-gradient-to-r from-sky-400 to-indigo-600' >
       <Header />
       <Hero />
       
       <Features />
       <AboutUs />
       <WhyOpenFlow />
       <Footer />
      </main>
    </>
  )
}
