import Header from "./components/Header"
import Details from "./components/Details"
import About from "./sections/about/About"
import BI from "./components/Works/boehringer/BI"
import NutriChunks from "./components/Works/nutrichunks/NutriChunks"

export const metadata = {
  metadataBase: new URL('https://debbie.ing/'),
  title: 'Debbie Melgarejo',
  description: "Hey, I'm Debbie, here to sprinkle some creativity and fun in your day— all while just debbie-ing!",
  authors: [{ name: 'Debbie Melgarejo', url: '/' }],
  creator: 'Debbie Melgarejo',
  publisher: 'Debbie Melgarejo',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Debbie Melgarejo',
    description: "Hey, I'm Debbie, here to sprinkle some creativity and fun in your day— all while just debbie-ing!",
    type: 'website',
    url: '/',
    locale: 'en_us',
    // images: [
    //   {
    //     url: '/cover.jpg',
    //     width: 1200,
    //     height: 600,
    //   }
    // ]
  },
  twitter: {
    card: 'summary_large_image',
  }

}

export default function Home() {
  return (
    <main>
      <div className="px-5">
        <Header />
        <Details />
      </div>
      <About />
      <BI />
      <NutriChunks />
    </main>
  )
}
