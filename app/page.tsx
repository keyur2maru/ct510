// app/page.tsx
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import BeforeAfter from './components/BeforeAfter';
import QuoteForm from './components/QuoteForm';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <BeforeAfter 
        beforeImage="/ct510/images/before.jpg"
        afterImage="/ct510/images/after.jpg"
        title="Office Cleaning Transformation"
      />
      <QuoteForm />
    </>
  );
}