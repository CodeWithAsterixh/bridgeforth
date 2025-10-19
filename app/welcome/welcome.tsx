import { Header, Hero, FeatureGrid, ReasonsSection, Footer, TrustBar, ValuePillars, ProcessSteps, CTABand } from '../components';
import TestimonialSlider from '../components/TestimonialSlider';
console.log(CTABand)
export function Welcome() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <ValuePillars />
      <FeatureGrid />
      <ProcessSteps />
      <div className="max-w-4xl mx-auto px-6">
        <TestimonialSlider items={[{ quote: 'Bridgeforth saved our family weeks of paperwork.', name: 'A. Smith', city: 'Atlanta' }, { quote: 'Clear guidance and steady follow-up.', name: 'J. Lee', city: 'McDonough' }]} />
      </div>
      <CTABand />
      <ReasonsSection />
      <Footer />
    </>
  );
}
