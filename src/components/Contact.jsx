import React, { useState } from 'react';

const WHATSAPP_NUMBER = '919297514528';
const EMAIL = 'pvt.akash9@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi! I'm ${form.name}.\n\nService interested in: ${form.service}\n\nMessage: ${form.message}\n\nEmail: ${form.email}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Want a Website, App, or<br />
            <span className="text-gradient">AI Content? Let's Talk.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No long processes. Just tell me what you need — I'll respond within a few hours with a clear plan and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="flex flex-col gap-6">
            {/* Primary WhatsApp CTA */}
            <a
              id="contact-whatsapp-primary"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20saw%20your%20portfolio%20and%20I%20have%20a%20project%20in%20mind.%20Let%27s%20talk!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/40 group"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.11 1.527 5.829L.057 23.857l6.251-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.886a9.87 9.87 0 01-5.031-1.375l-.36-.214-3.735.979.997-3.648-.235-.374A9.845 9.845 0 012.114 12C2.114 6.54 6.54 2.114 12 2.114S21.886 6.54 21.886 12 17.46 21.886 12 21.886z"/>
              </svg>
              <span>Chat on WhatsApp</span>
              <span className="text-green-200 text-xs font-normal ml-1 opacity-80 group-hover:opacity-100">+91 92975 14528</span>
            </a>

            {/* Have a project in mind CTA */}
            <div className="mb-2 animate-fade-up">
              <p className="text-violet-300 font-medium text-sm">
                Have a project in mind? Let’s connect via email.
              </p>
            </div>

            {/* Quick contact cards */}
            <div className="flex flex-col gap-4">
              {/* WhatsApp Card */}
              <a
                id="whatsapp-link"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-green-500/30 hover:border-green-500/60 bg-green-500/5 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-2xl flex-shrink-0">
                  💬
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-xs mb-0.5">WhatsApp (Primary · Fastest Reply)</p>
                  <p className="text-white font-semibold truncate">+91 92975 14528</p>
                </div>
                <div className="text-xs px-2.5 py-1 rounded-full text-green-400 bg-green-400/10 flex-shrink-0">
                  Usually replies in mins
                </div>
              </a>

              {/* Email Card */}
              <div className="relative group">
                <a
                  id="email-link"
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-violet-500/30 hover:border-violet-500/60 bg-violet-500/5 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-2xl flex-shrink-0 group-hover:glow-branding transition-all">
                    📧
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-xs mb-0.5 font-medium">Email Me</p>
                    <p className="text-white font-semibold truncate group-hover:text-violet-300 transition-colors">{EMAIL}</p>
                  </div>
                  <div className="text-xs px-2.5 py-1 rounded-full text-violet-400 bg-violet-400/10 flex-shrink-0">
                    Reply within 24 hrs
                  </div>
                </a>
                
                {/* Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 px-3 py-1.5 rounded-lg bg-surface/80 border border-border text-xs text-gray-400 hover:text-white hover:border-violet-500/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 mr-28"
                  title="Copy Email"
                >
                  {copied ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Find Me Online</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { id: 'social-instagram', label: 'Instagram', icon: '📸', href: 'https://www.instagram.com/akash__.x05?igsh=MTRqMm0xZXVhZTU5Zg==' },
                  { id: 'social-linkedin', label: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/akash-kumar-39b9b4235?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                  { id: 'social-github', label: 'GitHub', icon: '🐙', href: 'https://github.com/Akashpvt' },
                  { id: 'social-whatsapp', label: 'WhatsApp', icon: '💬', href: `https://wa.me/${WHATSAPP_NUMBER}` },
                ].map((s) => (
                  <a
                    key={s.id}
                    id={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-violet-500/40 bg-surface text-gray-300 text-sm transition-all duration-300 hover:text-white"
                  >
                    <span>{s.icon}</span> {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick pitch */}
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
              <p className="text-cyan-300 font-semibold mb-1">🎯 What happens next?</p>
              <ol className="space-y-1.5 text-gray-400 text-sm list-decimal list-inside">
                <li>You send me a message with your project idea</li>
                <li>I review and reply with a plan + price estimate</li>
                <li>We finalize scope and I get to work</li>
                <li>You get a delivered project — on time</li>
              </ol>
            </div>
          </div>

          {/* Right: Form */}
          <div className="border-gradient rounded-3xl p-8 bg-card">
            <h3 className="font-display font-bold text-2xl text-white mb-6">Send Me a Message</h3>

            {sent && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center gap-2">
                <span>✅</span> Opening WhatsApp with your message...
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-xs text-gray-400 block mb-1.5">Your Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-xs text-gray-400 block mb-1.5">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-service" className="text-xs text-gray-400 block mb-1.5">What do you need?</label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors appearance-none"
                >
                  <option value="" className="bg-surface">Select a service...</option>
                  <option value="AI Website Development" className="bg-surface">AI Website Development</option>
                  <option value="AI App / Automation" className="bg-surface">AI App / Automation</option>
                  <option value="AI Content Creation" className="bg-surface">AI Content Creation</option>
                  <option value="Other / Not Sure" className="bg-surface">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs text-gray-400 block mb-1.5">Tell me about your project *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe what you want to build or achieve..."
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                Send via WhatsApp 💬
              </button>

              <p className="text-center text-gray-600 text-xs">
                Your message opens directly in WhatsApp for faster response
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
