
import Navbar from "@/components/Navbar/Navbar";
import ContactusSection from "@/components/contactus/contactus";
import FooterSection from "@/components/footer/footer";
import Header from "@/components/header/header";
import SliderSection from "@/components/slider/slider";
import Image from "next/image";
export default function Home() {
return (
<>
 <Header/>
 <SliderSection/>
 <ContactusSection/>
 <FooterSection/>
</>
);
}