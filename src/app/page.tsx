import HomePage from "@/components/hero";
import LoadingPage from "@/components/loading";

export default function Home() {
  return (
    <>
      <section id="home" className="font-roboto" > 
      <LoadingPage />
      <HomePage />
      </section>
    </>
  );
}
