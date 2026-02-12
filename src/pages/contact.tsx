import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import type { ContactFormData } from '@/types';
import { isValidEmail } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { generateSEOMeta } from '@/config/seo';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacyAgree: false,
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }
    if (!formData.privacyAgree) {
      newErrors.privacyAgree = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitError(null);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const apiUrl = `${siteConfig.apiUrl}/api/contact`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject?.trim() || null,
          message: formData.message.trim(),
          privacyAgree: formData.privacyAgree,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const apiErrors: Partial<ContactFormData> = {};
          if (data.errors.name) apiErrors.name = data.errors.name[0];
          if (data.errors.email) apiErrors.email = data.errors.email[0];
          if (data.errors.message) apiErrors.message = data.errors.message[0];
          if (data.errors.privacyAgree) apiErrors.privacyAgree = true;
          setErrors(apiErrors);
        } else {
          setSubmitError(data.message || 'Une erreur est survenue. Veuillez réessayer.');
        }
        return;
      }

      setFormData({ name: '', email: '', subject: '', message: '', privacyAgree: false });
      setErrors({});
      setSubmitError(null);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError("Erreur de connexion. Vérifiez que l'API Laravel est démarrée.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitSuccess) setSubmitSuccess(false);
    if (submitError) setSubmitError(null);
  };

  const seoMeta = generateSEOMeta({
    title: `Contact - ${siteConfig.name}`,
    description: `Contactez ${siteConfig.name} pour vos besoins en digitalisation du transport.`,
  });

  // Icônes pour les cartes contact (couleurs type Blucorp)
  const LocationPinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
      <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08C5.16 1.8 5.4 3.48 5.84 5.08C5.96 5.56 5.84 6.08 5.48 6.44L3.62 8.3C5.06 11.18 7.82 13.94 10.7 15.38L12.56 13.52C12.92 13.16 13.44 13.04 13.92 13.16C15.52 13.6 17.2 13.84 18.92 13.84C19.52 13.84 20 14.32 20 14.92V17.92C20 18.52 19.52 19 18.92 19H22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6V12L16 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const EmailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 7L12 13L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const contactCards = [
    { id: 'office', label: 'Bureau', value: CONTACT_INFO.address, icon: <LocationPinIcon />, iconColor: 'text-[#7C3AED]' },
    { id: 'phone', label: 'Téléphone', value: CONTACT_INFO.phone, icon: <PhoneIcon />, iconColor: 'text-orange-500', href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
    { id: 'hours', label: 'Horaires', value: CONTACT_INFO.workHours, icon: <ClockIcon />, iconColor: 'text-[#7C3AED]' },
    { id: 'email', label: 'Email', value: CONTACT_INFO.email, icon: <EmailIcon />, iconColor: 'text-emerald-500', href: `mailto:${CONTACT_INFO.email}` },
  ];

  const socialLinks = [
    { name: 'Facebook', href: SOCIAL_LINKS.facebook, icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Twitter', href: SOCIAL_LINKS.twitter, icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Instagram', href: SOCIAL_LINKS.instagram, icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z' },
  ];

  return (
    <>
      <Head>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
        <meta name="keywords" content={siteConfig.keywords.join(', ')} />
        <meta property="og:title" content={seoMeta.openGraph.title} />
        <meta property="og:description" content={seoMeta.openGraph.description} />
        <meta property="og:url" content={`${siteConfig.url}/contact`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id="contact" className="relative pt-24 md:pt-28 lg:pt-32 pb-16 min-h-screen overflow-hidden">
          {/* Arrière-plan animé (conservé) */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/hero-moov.gif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
          </div>

          <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            {/* Hero - Titre principal */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                N'hésitez pas à nous contacter
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                Forts de notre expertise en digitalisation du transport, nous pouvons vous accompagner dans vos projets sans engagement ni coûts cachés.
              </p>
            </div>

            {/* Bloc principal : formulaire + infos (style Blucorp) */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Colonne gauche - Formulaire "Laissez votre message" */}
                <div className="p-6 md:p-8 lg:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Laissez votre message
                  </h2>

                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                      Votre message a été envoyé avec succès. Nous vous répondrons rapidement.
                    </div>
                  )}

                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block mb-1.5 font-semibold text-gray-700 text-sm">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A3C8E] focus:border-[#2A3C8E] transition-colors"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-1.5 font-semibold text-gray-700 text-sm">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Votre email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A3C8E] focus:border-[#2A3C8E] transition-colors"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block mb-1.5 font-semibold text-gray-700 text-sm">
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A3C8E] focus:border-[#2A3C8E] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-1.5 font-semibold text-gray-700 text-sm">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Message"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A3C8E] focus:border-[#2A3C8E] transition-colors resize-none"
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="privacyAgree"
                          checked={formData.privacyAgree ?? false}
                          onChange={handleChange}
                          className="w-4 h-4 rounded border-gray-300 text-[#2A3C8E] focus:ring-[#2A3C8E]"
                        />
                        <span className="text-gray-700 text-sm">J'accepte la politique de confidentialité</span>
                      </label>
                      {errors.privacyAgree && <p className="text-red-500 text-sm w-full">Veuillez accepter la politique de confidentialité.</p>}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="ml-auto px-6 py-3 bg-[#2A3C8E] text-white rounded-lg hover:bg-[#1e2d6b] transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-[#2A3C8E] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Colonne droite - "N'hésitez pas à nous contacter" + cartes + réseaux */}
                <div className="bg-gray-50 p-6 md:p-8 lg:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    N'hésitez pas à nous contacter
                  </h2>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    Notre équipe est à votre écoute pour toute question sur la digitalisation du transport et l'accompagnement de vos projets.
                  </p>

                  {/* 4 cartes contact (2x2) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {contactCards.map((card) => (
                      <div
                        key={card.id}
                        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${card.iconColor} bg-white border border-gray-100`}>
                          {card.icon}
                        </div>
                        <p className="font-bold text-gray-900 text-sm">{card.label}</p>
                        {card.href ? (
                          <a href={card.href} className="text-gray-600 text-sm hover:text-[#2A3C8E] transition-colors">
                            {card.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-sm">{card.value}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Réseaux sociaux */}
                  <div>
                    <p className="font-semibold text-gray-800 mb-3 text-sm">Réseaux sociaux :</p>
                    <div className="flex gap-2">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-[#2A3C8E] text-white flex items-center justify-center hover:bg-[#1e2d6b] transition-colors"
                          aria-label={social.name}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d={social.icon} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
