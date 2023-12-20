import Header from "./components/Header"
import Details from "./components/Details"
import Company1 from "./components/Works/Company1"

export default function Home() {
  return (
    <main>
      <div className="px-5">
        <Header />
        <Details />
      </div>
      <Company1 />
      <div className="px-5">
        <Header />
        <Details />
      </div>
    </main>
  )
}
