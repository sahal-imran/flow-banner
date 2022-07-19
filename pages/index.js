import Head from 'next/head'
import Image from 'next/image'
import {
    AboutSection,
    CustomNftSection,
    HeroSection,
    MarqueSection,
    PricingSection,
    QuoteSection,
    RoadmapSection
} from "../components";


const Home = () => {
    return (
        <div>
            <HeroSection/>
            <MarqueSection/>
            <QuoteSection/>
            <AboutSection/>
            <PricingSection/>
            <CustomNftSection/>
            <RoadmapSection/>
        </div>
    )
}

export default Home
