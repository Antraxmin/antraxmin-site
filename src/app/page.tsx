import CareerHistory from '@/components/CareerHistory';
import ProjectSection from '@/components/ProjectSection';
import TechStack from '@/components/TechStack';
import Header from '@/components/Header';
import ProfileHero from '@/components/ProfileHero';

export default function Home() {
  return (
    <div className="text-white min-h-screen p-4 md:p-8">
      <Header />
      <ProfileHero />
      <CareerHistory />
      <TechStack />
      <ProjectSection />
    </div>
  );
}