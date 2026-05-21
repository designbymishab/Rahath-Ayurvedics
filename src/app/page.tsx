import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChoose from '@/components/WhyChoose';
import Specialities from '@/components/Specialities';
import GoogleReviews from '@/components/GoogleReviews';
import Process from '@/components/Process';
import LocalSEO from '@/components/LocalSEO';
import FAQSection from '@/components/FAQSection';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallBackPopup from '@/components/CallBackPopup';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChoose />
      <Specialities />
      <GoogleReviews />
      <Process />
      <LocalSEO />
      <FAQSection />
      <EnquiryForm />
      <Footer />
      <WhatsAppButton />
      <CallBackPopup />
    </main>
  );
}
