import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Purpose from "@/components/Purpose";
import Metrics from "@/components/Metrics";
import Agenda from "@/components/Agenda";
import Timeline75Days from "@/components/Timeline75Days";
import LessonsLearned from "@/components/LessonsLearned";
import EmbeddingModel from "@/components/EmbeddingModel";
import ProgramImpact from "@/components/ProgramImpact";
import Outcomes from "@/components/Outcomes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Purpose />
        <Metrics />
        <Agenda />
        <Timeline75Days />
        <LessonsLearned />
        <EmbeddingModel />
        <ProgramImpact />
        <Outcomes />
      </main>
      <Footer />
    </>
  );
}
