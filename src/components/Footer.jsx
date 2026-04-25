import React from 'react';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tools', href: '#tools' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { id: 'footer-instagram', icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/akash__.x05?igsh=MTRqMm0xZXVhZTU5Zg==' },
  { id: 'footer-linkedin', icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/akash-kumar-39b9b4235?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { id: 'footer-github', icon: '🐙', label: 'GitHub', href: 'https://github.com/Akashpvt' },
  { id: 'footer-whatsapp', icon: '💬', label: 'WhatsApp', href: 'https://wa.me/919297514528' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Pre-footer CTA band */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-1">
              Let's Build Something Powerful with AI
            </h3>
            <p className="text-gray-400 text-sm">Start a conversation — no commitment, no pressure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              id="footer-whatsapp-cta"
              href="https://wa.me/919297514528"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              id="footer-email-cta"
              href="mailto:pvt.akash9@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-violet-500/40 hover:bg-violet-600/10 text-violet-300 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              📧 Send an Email
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm font-display">
                AI
              </div>
              <span className="font-display font-bold text-white text-lg">DevPortfolio</span>
            </div>
            <p className="text-gray-500 text-[10px] tracking-widest uppercase text-center md:text-left">
              AI Developer · AI Content Creator
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.id}
                id={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-9 h-9 rounded-full border border-border hover:border-violet-500/50 bg-card hover:bg-violet-600/10 flex items-center justify-center text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center">
            © 2026 <span className="text-branding font-semibold glow-branding/50 transition-all duration-300 hover:glow-branding cursor-default">Akash Kumar</span>. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs text-center">
            Built with React + Tailwind + ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
