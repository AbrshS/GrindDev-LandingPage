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
import Contact from "@/sections/Contact";

export default function Home() {
    return (
        <>
            {/* Navigation always comes first */}
            <Navbar /> 
            
            {/* Hero section to capture attention immediately */}
            <Hero/> 
            
           
            
            {/* Introduction to explain what your product/service is */}
            <Introduction/>
            
            {/* Key features to highlight benefits */}
            <Features/>  
            
            {/* Product showcase to demonstrate the product */}
            <ProductShowcase/>
            
            {/* Impact numbers to provide evidence of success */}
            <ImpactNumbers />
            
            {/* Integrations to show compatibility and ecosystem */}
            <Integrations/>
            
            {/* FAQs to address common questions */}
            <Faqs/> 
            
            {/* Contact section for user engagement */}
            <Contact />
            
            {/* Call to action to convert visitors */}
            <CallToAction/> 
            
            {/* Footer with additional information */}
            <Footer/>
        </>
    )
}
 