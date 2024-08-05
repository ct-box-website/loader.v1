import Hero from "@/components/home/Hero";
import RecommendForWebDev from "@/components/home/RecommendForWebDev";
import SpecialOffer from "@/components/home/SpecialOffer";
import Summary from "@/components/home/Summary";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col p-4">
            <Hero />
            <Summary />
            <SpecialOffer />
            <RecommendForWebDev />
        </main>
    );
}
