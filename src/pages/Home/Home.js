import { AboutCompany } from "../../components/AboutCompany/AboutCompany"
import { ClientSay } from "../../components/ClientSay/ClientSay"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { HowHelp } from "../../components/HowHelp/HowHelp"
import { SubscribeAsside } from "../../components/SubscribeAsside/SubscribeAsside"
import { Hero } from "../../components/Hero/Hero";
import { OurClient } from "../../components/OurClient/OurClient"

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
        <HowHelp/>
        {/* 4-SECTION  */}
        <AboutCompany/>

        {/* 5-SECTION  */}
        <ClientSay/>

        {/* 6-SECTION  */}

        <SubscribeAsside />
      </main>

      <Footer />
    </>
  );
};
