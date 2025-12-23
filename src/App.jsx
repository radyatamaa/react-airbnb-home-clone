import Header from './components/Header.jsx'
import HeroEstimate from './components/HeroEstimate.jsx'
import EasyListSection from './components/EasyListSection.jsx'
import CohostSection from './components/CohostSection.jsx'
import AirCoverSection from './components/AirCoverSection.jsx'
import ToolsSection from './components/ToolsSection.jsx'
import HostingPromo from './components/HostingPromo.jsx'
import FAQSection from './components/FAQSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <HeroEstimate />
        <EasyListSection />
        <CohostSection />
        <AirCoverSection />
        <ToolsSection />
        <HostingPromo />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
