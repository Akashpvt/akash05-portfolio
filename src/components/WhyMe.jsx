import React from 'react';

const reasons = [
  {
    id: 'fast',
    icon: '⚡',
    title: 'Fast Delivery',
    desc: 'No long waiting periods. Most projects are delivered in days, not months. I respect your time and your deadlines.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'budget',
    icon: '💰',
    title: 'Budget-Friendly',
    desc: "Premium quality doesn't have to cost a fortune. I offer competitive pricing designed for startups, small businesses, and solo entrepreneurs.",
    color: 'from-green-500 to-emerald-700',
  },
  {
    id: 'ai-first',
    icon: '🤖',
    title: 'AI-First Approach',
    desc: 'Everything I build has AI baked in — not added as an afterthought. Smarter systems, better results, less manual work for you.',
    color: 'from-violet-500 to-purple-700',
  },
  {
    id: 'results',
    icon: '📈',
    title: 'Focused on Real Results',
    desc: "I don't build just to look good. Every project has a clear goal — more leads, more sales, less effort, more growth.",
    color: 'from-cyan-500 to-blue-700',
  },
  {
    id: 'communication',
    icon: '💬',
    title: 'Clear Communication',
    desc: 'You always know what stage your project is at. No ghosting, no confusion — regular updates from start to delivery.',
    color: 'from-pink-500 to-rose-700',
  },
  {
    id: 'scalable',
    icon: '🚀',
    title: 'Built to Scale',
    desc: 'The systems I build grow with your business. Start small, scale big — without rebuilding from scratch.',
    color: 'from-indigo-500 to-violet-700',
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-medium mb-6">
            Why Choose Me
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            What Makes Working With Me{' '}
            <span className="text-gradient">Different</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Not just another developer. A growth partner who uses AI to help your business move faster and smarter.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.id}
              id={`why-${r.id}`}
              className="group border-gradient rounded-3xl p-6 bg-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col gap-4"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {r.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 rounded-3xl border border-border bg-card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-display font-bold text-2xl mb-1">Ready to get results?</p>
            <p className="text-gray-400 text-sm">Tell me your problem. I'll tell you how AI can fix it.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/919297514528"
              id="whyme-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>💬</span> WhatsApp Me
            </a>
            <a
              href="#contact"
              id="whyme-contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-violet-500/40 hover:bg-violet-600/10 text-violet-300 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              Send a Message →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
