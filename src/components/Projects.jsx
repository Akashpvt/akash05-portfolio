import React, { useState } from 'react';

const projects = [
  {
    id: 'water',
    emoji: '💧',
    tag: 'Automation System',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    title: 'AI-Based Water Delivery Automation System',
    description:
      'A fully automated order management system for a water delivery business. Customers place orders via WhatsApp, the system auto-assigns delivery agents, sends confirmation messages, and generates daily reports — zero manual effort required.',
    stack: ['Python', 'WhatsApp API', 'Google Sheets', 'Make.com'],
    results: ['80% reduction in manual work', 'Orders handled 24/7', 'Auto billing & tracking'],
    status: 'Completed',
  },
  {
    id: 'content',
    emoji: '🎬',
    tag: 'AI Content System',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    title: 'Automated AI Content Generation Pipeline',
    description:
      'An end-to-end content pipeline that takes a topic idea and outputs a complete video-ready package: script, AI voiceover (ElevenLabs), stock visuals, captions, and scheduled social media posts. One input, full content output.',
    stack: ['ChatGPT API', 'ElevenLabs', 'Make.com', 'Canva API'],
    results: ['10x content output speed', 'Consistent brand voice', 'Fully automated workflow'],
    status: 'Completed',
  },
  {
    id: 'chatbot',
    emoji: '🤖',
    tag: 'Web Development',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    title: 'Smart Business Website with AI Chatbot',
    description:
      'A modern business website with a custom-trained AI chatbot that answers FAQs, captures leads, and books appointments — all without human involvement. Integrated with WhatsApp for instant lead notifications.',
    stack: ['React', 'Node.js', 'ChatGPT API', 'Tailwind CSS'],
    results: ['Lead capture rate up 3x', '24/7 customer support', 'Zero support staff needed'],
    status: 'Completed',
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium mb-6">
            My Work
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Projects That <span className="text-gradient">Delivered Results</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real projects, real solutions. Each one built to solve a specific business problem with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              id={`project-${p.id}`}
              className="border-gradient rounded-3xl p-6 bg-card flex flex-col gap-5 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              onClick={() => setExpanded(expanded === p.id ? null : p.id)}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-2xl flex-shrink-0">
                  {p.emoji}
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${p.tagColor}`}>
                  {p.tag}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug">{p.title}</h3>
                <p className={`text-gray-400 text-sm leading-relaxed transition-all duration-300 ${expanded === p.id ? '' : 'line-clamp-3'}`}>
                  {p.description}
                </p>
              </div>

              {/* Results */}
              {expanded === p.id && (
                <div className="space-y-2">
                  {p.results.map((r) => (
                    <div key={r} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-400">📈</span> {r}
                    </div>
                  ))}
                </div>
              )}

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-surface border border-border text-gray-400">
                    {s}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="flex items-center gap-1.5 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> {p.status}
                </span>
                <span className="text-xs text-violet-400 group-hover:translate-x-1 transition-transform duration-300">
                  {expanded === p.id ? 'Show less ↑' : 'Read more →'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Want a similar solution for your business?</p>
          <a
            href="#contact"
            id="projects-cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-1"
          >
            Let's Build Yours →
          </a>
        </div>
      </div>
    </section>
  );
}
