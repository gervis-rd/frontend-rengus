import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import type { ContactFormData } from '@/types';
import { isValidEmail } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { generateSEOMeta } from '@/config/seo';
import { CONTACT_INFO } from '@/lib/constants';

const iconSize = 24;
const iconClass = 'flex-shrink-0 text-[#2A3C8E]';

const ContactIcons: Record<keyof typeof CONTACT_INFO, React.ReactNode> = {
  email: (
    <svg className={iconClass} width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  ),
  phone: (
    <svg className={iconClass} width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  address: (
    <svg className={iconClass} width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  workHours: (
    <svg className={iconClass} width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
};

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
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gestion des changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { name, value, type } = target;
    const checked = 'checked' in target ? target.checked : undefined;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

    // Clear errors and reset status
    if (errors[name as keyof ContactFormData]) setErrors(prev => ({ ...prev, [name]: undefined }));
    if (submitError) setSubmitError(null);
    if (submitSuccess) setSubmitSuccess(false);
  };

  // Envoi du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    else if (!isValidEmail(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    if (!formData.privacyAgree) newErrors.privacyAgree = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // URL relative : l'API est sur le même serveur Next.js (évite Failed to fetch en dev)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitError(data.error || 'Une erreur est survenue lors de l’envoi.');
        return;
      }

      // Réinitialisation du formulaire après succès
      setFormData({ name: '', email: '', subject: '', message: '', privacyAgree: false });
      setErrors({});
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error('Erreur lors de l’envoi du formulaire:', err);
      setSubmitError("Impossible d'envoyer le message. Vérifiez la configuration SMTP.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const seoMeta = generateSEOMeta({
    title: `Contact - ${siteConfig.name}`,
    description: `Contactez ${siteConfig.name} pour vos besoins en digitalisation du transport.`,
  });

  return (
    <>
      <Head>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
      </Head>

      <Layout>
        <section className="relative pt-28 md:pt-36 lg:pt-40 pb-16 min-h-screen overflow-hidden">
          {/* Background animé (même style que le Hero) */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/hero-land.gif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'linear-gradient(45deg, rgba(42, 60, 142, 0.2) 0%, rgba(177, 17, 42, 0.15) 50%, rgba(42, 60, 142, 0.2) 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 15s ease infinite',
              }}
            />
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/15"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4">
                N&apos;hésitez pas à nous contacter
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Rengus Digital, agence digitale spécialisée en développement web et solutions numériques, vous accompagne dans votre transformation digitale.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Formulaire */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                      Votre message a été envoyé avec succès.
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
                        <input
                          name="name"
                          placeholder="Nom"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <input
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <input
                      name="subject"
                      placeholder="Sujet"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />

                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="privacyAgree"
                        checked={formData.privacyAgree}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      J'accepte la politique de confidentialité
                    </label>
                    {errors.privacyAgree && <p className="text-red-500 text-sm mt-1">Veuillez accepter la politique de confidentialité.</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 text-white rounded-lg transition-colors bg-[#2A3C8E] hover:bg-[#1e2a6b] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
                    </button>
                  </form>
                </div>

                {/* Infos Contact avec icônes */}
                <div className="bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  {(Object.entries(CONTACT_INFO) as [keyof typeof CONTACT_INFO, string][]).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-4 mb-6 last:mb-0">
                      <span className="mt-0.5" aria-hidden>
                        {ContactIcons[key]}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900 capitalize">{key === 'workHours' ? 'Horaires' : key === 'address' ? 'Adresse' : key === 'phone' ? 'Téléphone' : 'Email'}</p>
                        <p className="text-gray-700">{value}</p>
                      </div>
                    </div>
                  ))}
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
