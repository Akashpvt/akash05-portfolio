import React from 'react';

const skills = [
  { icon: '🤖', label: 'AI Development' },
  { icon: '🌐', label: 'Web Development' },
  { icon: '⚙️', label: 'Automation Systems' },
  { icon: '🎬', label: 'AI Content Creation' },
  { icon: '🔊', label: 'Voice & Video AI' },
  { icon: '📈', label: 'Growth Strategy' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Card */}
              <div className="border-gradient rounded-3xl p-8 bg-card glow-purple">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-2xl font-display font-black text-white">
                    AI
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg font-display">AI Developer</div>
                    <div className="text-gray-500 text-[10px] sm:text-xs tracking-[0.1em] uppercase font-medium">
                      AI Developer · AI Content Creator
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: 'AI Development', pct: 92 },
                    { label: 'Web & App Building', pct: 88 },
                    { label: 'Automation Systems', pct: 85 },
                    { label: 'AI Content Creation', pct: 90 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">{s.label}</span>
                        <span className="text-violet-400">{s.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-[#1E1E2E] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status badge */}
                <div className="flex items-center gap-2 text-xs text-green-400 bg-green-400/10 rounded-full px-3 py-1.5 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to new projects
                </div>
              </div>

              {/* Floating tags */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-3 py-2 text-xs text-cyan-300 font-medium shadow-lg animate-float">
                🚀 AI-First Approach
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-3 py-2 text-xs text-violet-300 font-medium shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                ⚡ Fast Delivery
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-medium mb-6">
              About Me
            </div>

            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              I Don't Just Build Websites —{' '}
              <span className="text-gradient">I Build Systems That Work For You</span>
            </h2>

            <div className="space-y-4 text-gray-400 text-base leading-relaxed mb-8">
              <p>
                Fresh B.Tech CSE graduate (2025) with a sharp focus on AI-powered solutions. I combine technical skills with a real understanding of how businesses work — building things that actually solve problems.
              </p>
              <p>
                Whether it's a smart website with a built-in chatbot, a custom automation tool that saves your team hours every week, or AI-generated content that keeps your audience engaged — I handle it end-to-end.
              </p>
              <p>
                My goal is simple: <span className="text-white font-medium">help you do more with less, using AI.</span>
              </p>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-gray-300 text-sm hover:border-violet-500/50 transition-colors duration-300"
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
