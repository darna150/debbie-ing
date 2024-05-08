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

export const metadata = {
  metadataBase: new URL('https://www.justdebbie.ing/'),
  title: 'Just Debbie',
  description: "Her goal isn't just a job—it's a mission to make the world better, bit by bit, leaving behind a trail of awesome projects that bring big changes to people's lives.",
  authors: [{ name: 'Just Debbie', url: '/' }],
  creator: 'Just Debbie',
  publisher: 'Just Debbie',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Just Debbie',
    description: "Her goal isn't just a job—it's a mission to make the world better, bit by bit, leaving behind a trail of awesome projects that bring big changes to people's lives.",
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
    </main>
  )
}
