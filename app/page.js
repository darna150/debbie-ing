import { Dock } from "./components/Nav/Dock"
import Header from "./components/Header"
import Details from "./components/Details"
import About from "./sections/about/About"
import BI from "./components/Works/01_boehringer/BI"
import NutriChunks from "./components/Works/02_nutrichunks/NutriChunks"
import JFC from "./components/Works/03_jfc/JFC"
import Kemin from "./components/Works/04_kemin/Kemin"
import DOST from "./components/Works/05_dost/DOST"
import DOST_PCAARD from "./components/Works/06_dost-pcaard/DOST_PCAARD"
import GIZ from "./components/Works/07_giz/GIZ"
import SEARCA from "./components/Works/08_searca/SEARCA"
import ChickenEssentials from "./components/Works/09_ce/ChickenEssentials"
import Footer from "./components/Footer"

export const metadata = {
  metadataBase: new URL('https://www.justdebbie.ing/'),
  title: 'Just Debbie',
  description: "Hey, I'm Debbie, here to sprinkle some creativity and fun in your day— all while just debbie-ing!",
  authors: [{ name: 'Just Debbie', url: '/' }],
  creator: 'Just Debbie',
  publisher: 'Just Debbie',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Just Debbie',
    description: "Hey, I'm Debbie, here to sprinkle some creativity and fun in your day— all while just debbie-ing!",
    type: 'website',
    url: '/',
    locale: 'en_us',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 600,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
  }
}

export default function Home() {
  return (
    <>
      <Dock />
      <main>
        <div className="px-5">
          <Header />
          <Details />
        </div>
        <About />
        <BI />
        <NutriChunks />
        <JFC />
        <Kemin />
        <DOST />
        <DOST_PCAARD />
        <GIZ />
        <SEARCA />
        <ChickenEssentials />
        <Footer />
      </main>

    </>
  )
}
