import Header from "./components/Header"
import Details from "./components/Details"
import About from "./sections/about/About"
import Company1 from "./components/Works/Company1/Company1"
import BI from "./components/Works/boehringer/BI"

export default function Home() {
  return (
    <main>
      <div className="px-5">
        <Header />
        <Details />
      </div>
      <About />
      <BI />
      {/* <div className="px-5">
        <Header />
        <Details />
      </div> */}
    </main>
  )
}
