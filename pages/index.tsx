import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import WhyOpenFlow from "@/components/landing/WhyOpenFlow"
import Features from '@/components/landing/Features'
import Footer from '@/components/landing/Footer'
import AboutUs from "@/components/landing/AboutUs"
export default function Home() {
  return (
    <>
     
      <main >
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
