import Header from "./components/Header"
import Details from "./components/Details"
import About from "./sections/about/About"
import BI from "./components/Works/boehringer/BI"
import NutriChunks from "./components/Works/nutrichunks/NutriChunks"

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
