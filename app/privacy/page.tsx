'use client';

import { useState, useEffect } from 'react';
import Footer from '../../components/footer';

export default function PrivacyPage() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // Generar partículas suaves
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: '#151515' }}>
      {/* Fondo animado sutil */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Partículas suaves flotantes */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-25 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Líneas de flujo sutiles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-flow" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-flow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-flow" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Content Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white font-sans mx-auto">
              ZENTRAIS PRIVACY POLICY
            </h1>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              Zentrais is built to protect people first. Your data is yours; your identity is yours, and your interactions belong to you. This Privacy Policy explains what we collect, how we use it, and how we safeguard every interaction across Dialog, Perspective, and Exchange. If you disagree with this policy, please stop using Zentrais.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              1. WHO WE ARE
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Zentrais, Inc. operates a human-AI ecosystem designed for authentic, transparent, and integrity-driven interactions.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We follow global privacy frameworks, including:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4 space-y-2 ml-4">
              <li>GDPR (European Union)</li>
              <li>CCPA/CPRA (California)</li>
              <li>LGPD (Brazil)</li>
              <li>PIPEDA (Canada)</li>
              <li>UK GDPR</li>
              <li>APPI (Japan)</li>
              <li>Global Privacy Control (GPC) standards</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              We design for privacy-by-default, privacy-by-design, and data minimization.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              2. WHAT WE COLLECT
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              We collect only what is necessary to operate safely, prevent abuse, and improve the platform.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              2.1 Information You Provide
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Account details (if you create an account): name, username, email.
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 space-y-2 ml-4">
              <li>Profile information (optional).</li>
              <li>Content you create: messages, posts, uploads, interactions.</li>
              <li>Communication data when you contact support.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              2.2 Automatic Data
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Collected only for safety, security, and performance:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 space-y-2 ml-4">
              <li>Device and browser data</li>
              <li>IP address (anonymized where possible)</li>
              <li>Usage logs</li>
              <li>Cookies and local storage (minimal, essential-only)</li>
              <li>Error logs</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              2.3 Sensitive Data
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We do not request or store sensitive data unless you voluntarily provide it in content.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              If you do, we treat it with <strong className="text-white">maximum security and zero exploitation</strong>.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              2.4 Identity Verification Data (When Applicable)
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              If we use third-party anonymous identity verification (e.g., Co3), you may choose to verify through them.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              We do not receive your government documents. We only receive a verified <strong className="text-white">yes/no token</strong>.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We use your data for the following lawful purposes:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 space-y-2 ml-4">
              <li>To operate core platform functions</li>
              <li>To maintain safety and prevent fraud, spam, and abuse</li>
              <li>To improve performance and user experience</li>
              <li>To comply with legal obligations</li>
              <li>To protect the integrity of our ecosystem</li>
              <li>To provide you with opt-in features such as account creation</li>
              <li>To show your contributions inside the platform based on your chosen visibility settings</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-2">
              We do not sell your data.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-2">
              We do not monetize your data.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-2">
              We do not use your data to manipulate behavior.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans font-bold">
              Ever.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              4. HOW WE SHARE INFORMATION
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              4.1 With Your Consent
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              Information is shared for integrations, collaborations, or external services chosen by the user.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              4.2 With Service Providers
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Information is shared with service providers who are strictly bound by confidentiality and data protection contracts. Examples provided include:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 space-y-2 ml-4">
              <li>Cloud hosting</li>
              <li>Security and monitoring</li>
              <li>Analytics</li>
              <li>Identity verification partners</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              4.3 Legal Requirements
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              Information may be shared if required by law, subpoena, or legal process, with notification to the user unless legally prohibited.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              4.4 Protection of Zentrais and Its Users
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              Information is shared to detect, prevent, or respond to fraud, misuse, or threats to safety. It explicitly states that third parties are not allowed to use data for advertising or profiling.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              5. HOW WE PROTECT YOUR DATA
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>End-to-end encryption for data in motion.</li>
              <li>AES-256 encryption for data at rest.</li>
              <li>Zero Trust security model.</li>
              <li>Secure access controls and audit trails.</li>
              <li>Minimal data retention.</li>
              <li>Regular penetration testing.</li>
              <li>Obfuscation and anonymization of interaction data.</li>
              <li>Role-based access controls for internal teams.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              6. COOKIES & TRACKING TECHNOLOGY
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Zentrais uses minimal, essential cookies for:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4 space-y-2 ml-4">
              <li>Login</li>
              <li>Security</li>
              <li>User preferences</li>
              <li>Platform functionality</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We do not use:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4 space-y-2 ml-4">
              <li>Third-party advertising cookies</li>
              <li>Behavioral tracking cookies</li>
              <li>Cross-site profiling tools</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              You can adjust cookie settings at any time.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              7. DATA RETENTION
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Data is kept only long enough to fulfill platform operations or legal requirements.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Users can request deletion at any time.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans font-bold">
              Once deleted, it cannot be restored.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              8. YOUR RIGHTS
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 space-y-2 ml-4">
              <li>Access your data</li>
              <li>Correct your data</li>
              <li>Delete your data</li>
              <li>Export your data</li>
              <li>Restrict or object to processing</li>
              <li>Withdraw consent</li>
              <li>Opt-out of data sale or sharing (we don&apos;t sell data anyway)</li>
              <li>File a complaint with your data protection authority</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We honor these rights worldwide—not just where legally required.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-2">
              To exercise your rights:
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed font-sans">
              privacy@zentrais.com
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              9. CHILDREN&apos;S PRIVACY
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Zentrais is not intended for individuals under 16.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We do not knowingly collect data from minors.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              If we learn a minor has used the platform, we delete the data immediately.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              10. INTERNATIONAL DATA TRANSFERS
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We may store or process your data in the United States or other locations with equivalent protections.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We use:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Data Processing Agreements (DPAs)</li>
              <li>GDPR-compliant safeguards</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              11. AI, PRIVACY & TRANSPARENCY
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Zentrais uses AI to enhance user experience and ensure safety.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We do not:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 space-y-2 ml-4">
              <li>Train external AI models with your data</li>
              <li>Share your private content with AI vendors</li>
              <li>Use your data to build commercial datasets</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We may use your data internally for:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Safety detection</li>
              <li>Abuse prevention</li>
              <li>Performance optimization</li>
              <li>Integrity scoring (non-personal, anonymized behavioral signals)</li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              12. NO DATA SALE, EVER
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Zentrais does not sell your personal information.</li>
              <li>We reject the surveillance economy.</li>
              <li>Your trust is the currency of the Integrity Economy.</li>
            </ul>
          </div>

          {/* Section 13 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              13. THIRD-PARTY LINKS
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              The platform may connect to third-party services, their privacy policies apply, and Zentrais is not responsible for their practices.
            </p>
          </div>

          {/* Section 14 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              14. CHANGES TO THIS POLICY
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              The policy may be updated and material changes will result in direct notification and an updated effective date.
            </p>
          </div>

          {/* Section 15 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              15. CONTACT US
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              For privacy questions, data requests, or concerns:
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed font-sans mb-2">
              Zentrais Privacy Office
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed font-sans mb-2">
              Email: privacy@zentrais.com
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-sans">
              Address: [Zentrais Delaware or FL Address ???]
            </p>
          </div>

          {/* Final Note */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Zentrais is built on <strong className="text-white">Truth. Trust. Transparency.</strong>
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              Our privacy policy honors that commitment. You own your data. You control your identity. We protect what you share—and what you don&apos;t.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

