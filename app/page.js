import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import CourseGrid from '@/components/CourseGrid';
import InstructorCTA from '@/components/InstructorCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <CourseGrid />
      <InstructorCTA />
      <Footer />
    </main>
  );
}
