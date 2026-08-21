import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LandingNavbar from '@/components/LandingNavbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import CareerJourneySection from '@/components/CareerJourneySection';
import MetricsSection from '@/components/MetricsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    if (navigator.onLine) {
      setIsOffline(false);
      window.location.reload();
    } else {
      setIsOffline(true);
    }
  };

  // Network error state
  if (isOffline) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="w-full max-w-md rounded-2xl border bg-white p-8 text-center shadow-lg">
          <h1 className="mb-3 text-2xl font-bold text-slate-900">
            Network Error
          </h1>

          <p className="mb-6 text-slate-600">
            Please check your internet connection and try again.
          </p>

          <button
            type="button"
            onClick={handleRetry}
            className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>AI Career Navigator - From Resume to Real Employment</title>

        <meta
          name="description"
          content="Your personal AI mentor guiding you from resume creation to job success. Get ATS-optimized resumes, skill gap analysis, and personalized career paths."
        />

        <meta
          name="keywords"
          content="AI resume, career guidance, ATS optimization, job matching, skill gap analysis, career navigator"
        />

        <link
          rel="canonical"
          href="https://aicareernavigator.com"
        />

        <meta
          property="og:title"
          content="AI Career Navigator - From Resume to Real Employment"
        />

        <meta
          property="og:description"
          content="Transform your career with AI-powered resume optimization, skill gap analysis, and intelligent job matching."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <LandingNavbar />

        <section id="hero">
          <HeroSection />
        </section>

        <ProblemSection />

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="journey">
          <CareerJourneySection />
        </section>

        <MetricsSection />

        <section id="about">
          <CTASection />
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Index;