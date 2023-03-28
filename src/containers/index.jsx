import { lazy, Suspense } from 'react';
import Section1 from '../components/Section1';
const Courses = lazy(() => import('../components/Courses'));
const Faq = lazy(() => import('../components/Faq'));
const Footer = lazy(() => import('../components/Footer'));
const Patners = lazy(() => import('../components/Patners'));
const Reviews = lazy(() => import('../components/Reviews'));
const Section2 = lazy(() => import('../components/Section2'));
const Section3 = lazy(() => import('../components/Section3'));
const Section4 = lazy(() => import('../components/Section4'));

export default function Index() {
  return (
    <>
    <Section1 />
    <Suspense fallback={<div>Loading...</div>}>
      <Patners />
      <Section2 />
      <Section3 />
      <Courses />
      <Reviews />
      <Section4 />
      <Faq />
      <Footer />
    </Suspense>
    </>
  );
}
