import React from 'react';

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  opacity: Math.random() * 0.4 + 0.1,
  duration: Math.random() * 4 + 4,
}));

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(to right, #7C3AED 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-violet-400 pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.id * 0.2}s`,
          }}
        />
      ))}

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for Work · AI Developer & Content Creator
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          I Build{' '}
          <span className="text-gradient">AI-Powered</span>
          <br />
          Websites, Apps &amp;{' '}
          <span className="text-gradient">Content</span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-semibold">
            That Drive Real Growth
          </span>
        </h1>

        {/* Branding Name */}
        <div className="mb-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="font-signature text-branding glow-branding capitalize">Akash</span>{' '}
            <span className="font-poppins text-branding glow-branding uppercase">Kumar</span>
          </h2>
        </div>

        {/* Branding Subtitle */}
        <p className="text-violet-300 font-medium tracking-widest uppercase text-xs md:text-sm mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          AI Developer · AI App Builder · AI Content Creator
        </p>

        {/* Subheading */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From smart websites with chatbots to automated content pipelines — I help businesses, startups, and creators harness the power of AI to work smarter, not harder.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            id="hero-hire-btn"
            href="#contact"
            className="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-1 w-full sm:w-auto"
          >
            Hire Me →
          </a>
          <a
            id="hero-work-btn"
            href="#projects"
            className="px-8 py-4 rounded-full border border-[#1E1E2E] hover:border-violet-500/50 text-white font-semibold text-base transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto bg-surface/50 backdrop-blur-sm"
          >
            View Work
          </a>
          <a
            id="hero-contact-btn"
            href="#contact"
            className="px-8 py-4 rounded-full border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-300 font-semibold text-base transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
          >
            Let's Talk
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {[
            { value: '10+', label: 'Projects Delivered' },
            { value: '5+', label: 'AI Tools Mastered' },
            { value: '100%', label: 'Client-Focused' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-display font-bold text-gradient">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs animate-bounce">
        <span>Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
