import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar"; 
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import ProductShowcase from "@/sections/ProductShowcase";
import ImpactNumbers from "@/sections/ImpactNumbers";

export default function Home() {
    return (
        <>
            <Navbar /> 
            <Hero/> 
            <ImpactNumbers />
            <LogoTicker/>
            <Introduction/>
            <Features/>  
            <ProductShowcase/>
            <Integrations/>
            <Faqs/> 
            <CallToAction/> 
            <Footer/>
        </>
    )
}
 