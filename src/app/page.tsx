import { FetchHeader } from "@/actions/fetchHeader";
import {
  DesignEvents,
  Footer,
  Header,
  Hero,
  IdeasSection,
  JoinSection,
  LevelUpSection,
  TargetSection,
  ToolsSection,
  WorkSection,
} from "@/components";
import { Suspense } from "react";

export default async function Home() {
  const headerData = await FetchHeader();

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <Hero />
      <JoinSection />
      <IdeasSection />
      <ToolsSection />
      <TargetSection />
      <WorkSection />
      <LevelUpSection />
      <DesignEvents />
      <Footer />
    </main>
  );
}
