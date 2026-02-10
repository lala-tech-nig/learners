import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Courses from '@/components/Courses';
import RequestConcept from '@/components/RequestConcept';
import InstructorCTA from '@/components/InstructorCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyUs />
      <Courses />
      <RequestConcept />
      <InstructorCTA />
      <Footer />
    </main>
  );
}
