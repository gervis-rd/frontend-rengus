import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import type { ContactFormData } from '@/types';
import { isValidEmail } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { generateSEOMeta } from '@/config/seo';
import { CONTACT_INFO } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const contactItems = [
  { key: 'email', label: 'Email', value: CONTACT_INFO.email, icon: Mail },
  { key: 'phone', label: 'Téléphone', value: CONTACT_INFO.phone, icon: Phone },
  { key: 'address', label: 'Adresse', value: CONTACT_INFO.address, icon: MapPin },
  { key: 'workHours', label: 'Horaires', value: CONTACT_INFO.workHours, icon: Clock },
] as const;

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
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
    } catch {
      setSubmitError("Impossible d'envoyer le message. Vérifiez la configuration SMTP.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const seoMeta = generateSEOMeta({
    title: `Contact - ${siteConfig.name}`,
    description: `Contactez ${siteConfig.name} pour discuter de votre projet digital.`,
  });

  return (
    <>
      <Head>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
      </Head>

      <Layout>
        <Section className="bg-muted/30 pt-28 md:pt-32">
          <SectionHeader
            eyebrow="Contact"
            title="Parlons de votre projet"
            description="Une question, un besoin ou un projet en tête ? Notre équipe vous répond rapidement."
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5">
            <Card className="border-border/60 lg:col-span-3">
              <CardContent className="p-6 sm:p-8">
                {submitSuccess && (
                  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    Votre message a été envoyé avec succès.
                  </div>
                )}
                {submitError && (
                  <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sujet de votre message"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre projet ou votre besoin"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="privacyAgree"
                        checked={formData.privacyAgree}
                        onCheckedChange={(checked) => {
                          setFormData((prev) => ({ ...prev, privacyAgree: checked === true }));
                          if (errors.privacyAgree) {
                            setErrors((prev) => ({ ...prev, privacyAgree: undefined }));
                          }
                        }}
                      />
                      <Label htmlFor="privacyAgree" className="cursor-pointer font-normal">
                        J&apos;accepte la{' '}
                        <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
                          politique de confidentialité
                        </Link>
                      </Label>
                    </div>
                    {errors.privacyAgree && (
                      <p className="text-sm text-destructive">Veuillez accepter la politique de confidentialité.</p>
                    )}
                  </div>

                  <Button type="submit" disabled={isSubmitting} size="lg" className="h-11 px-6">
                    {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4 lg:col-span-2">
              {contactItems.map(({ key, label, value, icon: Icon }) => (
                <Card key={key} className="border-border/60">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default Contact;
