import CareerHistory from '@/components/CareerHistory';
import ProjectSection from '@/components/ProjectSection';
import TechStack from '@/components/TechStack';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="text-white min-h-screen p-8">
      <Header />
      <CareerHistory />
      <TechStack />
      <ProjectSection />
    </div>
  );
}