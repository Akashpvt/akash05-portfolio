import React, { useState } from 'react';

const services = [
  {
    id: 'web',
    emoji: '🌐',
    title: 'AI Website Development',
    tagline: 'Smart Websites That Think',
    features: [
      'Custom websites with integrated AI chatbots',
      'Lead generation with automated follow-ups',
      'Smart contact forms & CRM integration',
      'SEO-ready, fast-loading, mobile-first',
      'Landing pages that actually convert',
    ],
    deliverables: ['Business Website', 'Portfolio', 'Landing Page', 'Chatbot Integration'],
  },
  {
    id: 'app',
    emoji: '⚙️',
    title: 'AI App Development',
    tagline: 'Custom Tools. Real Automation.',
    features: [
      'Custom AI tools tailored to your workflow',
      'Automated data processing & reporting',
      'WhatsApp & Email automation bots',
      'Order & delivery management systems',
      'AI-powered dashboards & admin panels',
    ],
    deliverables: ['Automation System', 'AI Tool', 'WhatsApp Bot', 'Admin Dashboard'],
  },
  {
    id: 'content',
    emoji: '🎬',
    title: 'AI Content Creation',
    tagline: 'Content That Scales Without Burnout',
    features: [
      'Short-form videos & reels with AI voiceover',
      'Automated script writing & content calendars',
      'AI-generated faceless YouTube content',
      'ElevenLabs voice cloning integration',
      'Social media content in bulk via automation',
    ],
    deliverables: ['Reels / Shorts', 'Scripts', 'Voiceovers', 'Content System'],
  },
];

export default function Services() {
  const [active, setActive] = useState('web');
  const svc = services.find((s) => s.id === active);

  return (
    <section id="services" className="py-24 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6">
            What I Do
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Services That <span className="text-gradient">Actually Move the Needle</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Three focused service areas. All powered by AI. All built to deliver real business value.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          {services.map((s) => (
            <button
              key={s.id}
              id={`service-tab-${s.id}`}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                active === s.id
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-card border border-border text-gray-400 hover:text-white'
              }`}
            >
              <span>{s.emoji}</span> {s.title.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>

        {svc && (
          <div className="border-gradient rounded-3xl p-8 md:p-12 bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center text-3xl mb-6">
                  {svc.emoji}
                </div>
                <h3 className="font-display font-bold text-3xl text-white mb-1">{svc.title}</h3>
                <p className="text-violet-400 mb-6">{svc.tagline}</p>
                <ul className="space-y-3">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">What You Get</p>
                  <div className="grid grid-cols-2 gap-3">
                    {svc.deliverables.map((d) => (
                      <div key={d} className="bg-surface border border-border rounded-xl px-4 py-3 text-center text-sm text-gray-300 hover:border-violet-500/40 transition-colors">
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl p-6 border border-violet-500/20 bg-violet-600/5">
                  <p className="text-white font-semibold mb-1">Ready to get started?</p>
                  <p className="text-gray-400 text-sm mb-4">Let's discuss your project and build something that works.</p>
                  <a href="#contact" id={`service-cta-${svc.id}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-300">
                    Get a Free Quote →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
