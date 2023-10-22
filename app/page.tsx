'use client';

import './style.css';
import Header from '@/components/Header';
import Features from '@/components/Features';
import Purpose from '@/components/Purpose';
import UseCases from '@/components/UseCases';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Features />
      <Purpose />
      <UseCases />
      <Contact />
    </div>
  );
}
