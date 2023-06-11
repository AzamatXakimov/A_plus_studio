import { AboutCompany } from "../../components/AboutCompany/AboutCompany"
import { ClientSay } from "../../components/ClientSay/ClientSay"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { HowHelp } from "../../components/HowHelp/HowHelp"
import { OurClients } from "../../components/OurClients/OurClients"
import { SubscribeAsside } from "../../components/SubscribeAsside/SubscribeAsside"

export const Home = () => {
    return <>
        <Header/>

        <main className="site-main">
            {/* HERO  */}


            {/* 2-SECTION  */}
            <OurClients/>

            {/* 3-SECTION  */}
            <HowHelp/>

            {/* 4-SECTION  */}
            <AboutCompany/>

            {/* 5-SECTION  */}
            <ClientSay/>

            {/* 6-SECTION  */}

            <SubscribeAsside/>
        </main>

        <Footer/>
    </>
}
