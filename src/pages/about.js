import Superheroes from '@/components/about/SuperHeroes/Superheroes';
import OurWorkSection from '@/components/about/OurWork/OurWorkSection';
import Hero from "@/components/about/Hero/Hero";
import WWLayout from "@/components/about/WhatwedoandWhoweare/WWLayout";
import CoreValues from "@/components/about/CoreValues/CoreValues";

export default function About() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <WWLayout />
            <CoreValues />
            <Superheroes />
            <OurWorkSection />
        </div>
    )
}

