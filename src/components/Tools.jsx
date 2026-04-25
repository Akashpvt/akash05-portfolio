import React from 'react';

const tools = [
  { name: 'ChatGPT', icon: '🤖', category: 'AI Assistant', color: 'from-green-600 to-emerald-800' },
  { name: 'Claude', icon: '🧠', category: 'AI Assistant', color: 'from-orange-600 to-amber-800' },
  { name: 'Gemini', icon: '✨', category: 'AI Assistant', color: 'from-blue-600 to-indigo-800' },
  { name: 'Cursor', icon: '⌨️', category: 'AI Coding', color: 'from-violet-600 to-purple-800' },
  { name: 'ElevenLabs', icon: '🔊', category: 'Voice AI', color: 'from-cyan-600 to-blue-800' },
  { name: 'Meta AI', icon: '🌐', category: 'AI Assistant', color: 'from-pink-600 to-rose-800' },
  { name: 'Runway ML', icon: '🎬', category: 'Video AI', color: 'from-red-600 to-orange-800' },
  { name: 'Sora / Pika', icon: '🎥', category: 'Video Gen', color: 'from-yellow-600 to-orange-700' },
  { name: 'React + Vite', icon: '⚛️', category: 'Frontend', color: 'from-sky-600 to-cyan-800' },
  { name: 'Node.js', icon: '🟢', category: 'Backend', color: 'from-green-700 to-teal-800' },
  { name: 'Python', icon: '🐍', category: 'Scripting', color: 'from-yellow-600 to-blue-700' },
  { name: 'Make.com', icon: '🔗', category: 'Automation', color: 'from-violet-700 to-indigo-900' },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-medium mb-6">
            My Tech Stack
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Tools I Use to Build <span className="text-gradient">AI-Powered Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            The best AI tools combined with solid development skills — that's how I deliver fast, smart, and scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group border-gradient rounded-2xl p-4 bg-card flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-xl shadow-lg`}>
                {tool.icon}
              </div>
              <div className="text-center">
                <div className="text-white text-sm font-semibold">{tool.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{tool.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            + More tools added regularly as AI evolves 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
