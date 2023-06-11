import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { AboutCompany } from "../../components/AboutCompany/AboutCompany";
import { ClientSay } from "../../components/ClientSay/ClientSay";
import { OurClient } from "../../components/OurClient/OurClient";
import { SubscribeAsside } from "../../components/SubscribeAsside/SubscribeAsside";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />

      <main className="site-main">
        {/* HERO  */}
        <Hero />

        {/* 2-SECTION  */}
        <OurClient />

        {/* 3-SECTION  */}

        {/* 4-SECTION  */}
        <AboutCompany />

        {/* 5-SECTION  */}
        <ClientSay />

        {/* 6-SECTION  */}

        <SubscribeAsside />
      </main>

      <Footer />
    </>
  );
};
