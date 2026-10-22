import {
  Header,
  Hero,
  Listings,
  WhyUs,
  Pricing,
  Footer,
} from "@/components/Sections";
import EnquiryForm from "@/components/EnquiryForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Listings />
      <WhyUs />
      <Pricing />
      <EnquiryForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
