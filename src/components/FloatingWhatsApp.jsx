import React, { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const pulseTimer = setTimeout(() => setPulse(false), 8000);
    return () => { clearTimeout(timer); clearTimeout(pulseTimer); };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <a
        id="floating-whatsapp"
        href="https://wa.me/919297514528?text=Hi!%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 shadow-2xl shadow-green-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/60"
        title="Chat on WhatsApp"
      >
        {/* Ping animation */}
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
        )}
        {/* WhatsApp SVG icon */}
        <svg
          className="w-7 h-7 text-white relative z-10"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.11 1.527 5.829L.057 23.857l6.251-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.886a9.87 9.87 0 01-5.031-1.375l-.36-.214-3.735.979.997-3.648-.235-.374A9.845 9.845 0 012.114 12C2.114 6.54 6.54 2.114 12 2.114S21.886 6.54 21.886 12 17.46 21.886 12 21.886z" />
        </svg>
      </a>
    </div>
  );
}
