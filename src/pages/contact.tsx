import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import type { ContactFormData } from '@/types';
import { isValidEmail } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { generateSEOMeta } from '@/config/seo';
import { CONTACT_INFO } from '@/lib/constants';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { name, value, type } = target;
    const checked = 'checked' in target ? target.checked : undefined;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

    // Clear error on change
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (submitError) setSubmitError(null);
    if (submitSuccess) setSubmitSuccess(false);
  };

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
        <section className="relative pt-24 pb-16 min-h-screen">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                N&apos;hésitez pas à nous contacter
              </h1>
              <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
                Forts de notre expertise en digitalisation du transport, nous pouvons vous accompagner dans vos projets sans engagement ni coûts cachés.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Formulaire */}
                <div className="p-6 md:p-8 lg:p-10">
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
                      <input
                        name="name"
                        placeholder="Nom"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      />
                      <input
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      />
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

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 p-6 md:p-8 lg:p-10">
                  {Object.entries(CONTACT_INFO).map(([key, value]) => (
                    <div key={key} className="mb-4">
                      <strong>{key}:</strong> <span>{value}</span>
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
