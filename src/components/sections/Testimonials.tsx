import React from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

interface TestimonialsProps {
  className?: string;
  teamMembers?: TeamMember[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ className = '', teamMembers = [] }) => {
  const defaultTeam: TeamMember[] = [
    {
      id: '1',
      name: 'Madeleine Orlane Renguila Ikana',
      role: 'Fondatrice & CEO',
      avatar: 'https://ui-avatars.com/api/?name=Madeleine+Orlane&size=128&background=2A3C8E&color=fff',
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: '2',
      name: 'Ardeche',
      role: 'Directeur Technique',
      avatar: 'https://ui-avatars.com/api/?name=Ardeche&size=128&background=2A3C8E&color=fff',
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: '4',
      name: 'Gad ',
      role: 'Développeur fullstack',
      avatar: 'https://ui-avatars.com/api/?name=Gad&size=128&background=2A3C8E&color=fff',
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: '5',
      name: 'Gervis',
      role: 'Développeur fullstack',
      avatar: 'https://ui-avatars.com/api/?name=Gervis&size=128&background=2A3C8E&color=fff',
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: '6',
      name: 'Synthia',
      role: 'Sécrétaire particulière de la fondatrice',
      avatar: 'https://ui-avatars.com/api/?name=Synthia&size=128&background=2A3C8E&color=fff',
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: '7',
      name: 'Michel',
      role: 'Responsable Communication',
      avatar: 'https://ui-avatars.com/api/?name=Michel&size=128&background=2A3C8E&color=fff',
      socialLinks: {
        linkedin: '#',
      },
    },
 
  ];

  const teamToDisplay = teamMembers.length > 0 ? teamMembers : defaultTeam;

  return (
    <section id="team" className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black relative inline-block">
            Rencontrez Nos{' '}
            <span className="relative">
              Talents
              {/* Sparkle/Starburst effect */}
              <svg
                className="absolute -top-2 -right-2 w-8 h-8 text-accent opacity-80"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
                <path d="M19 2L19.5 5.5L23 6L19.5 6.5L19 10L18.5 6.5L15 6L18.5 5.5L19 2Z" />
                <path d="M5 2L5.5 5.5L9 6L5.5 6.5L5 10L4.5 6.5L1 6L4.5 5.5L5 2Z" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Obtenez le conseil professionnel adapté de Rengus Digital. Nous sommes là pour vous conseiller selon vos besoins en matière de digitalisation du transport.
          </p>
        </div>

        {/* Team Grid - 3 colonnes : 3 cartes + 3 cartes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {teamToDisplay.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden border border-gray-100"
            >
              {/* Abstract Background Shapes */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
                  style={{ backgroundColor: 'rgba(42, 60, 142, 0.2)' }}
                ></div>
                <div 
                  className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-15"
                  style={{ backgroundColor: 'rgba(177, 17, 42, 0.15)' }}
                ></div>
                <svg 
                  className="absolute top-4 right-4 w-20 h-20 opacity-10"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path 
                    d="M20 20 Q50 50 80 20 T80 80 Q50 50 20 80 T20 20" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="text-primary"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Avatar - Square */}
                <div className="flex justify-center mb-4">
                  {member.avatar ? (
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-32 h-32 rounded-lg object-cover shadow-md"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-lg bg-primary flex items-center justify-center shadow-md">
                      <span className="text-white text-3xl font-bold">
                        {member.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Name */}
                <h3 className="text-base md:text-lg font-bold text-center mb-1 text-black">
                  {member.name}
                </h3>
                
                {/* Role */}
                <p className="text-center text-gray-500 text-sm mb-4">
                  {member.role}
                </p>
                
                {/* Social Media Icons */}
                <div className="flex justify-center gap-3">
                  {member.socialLinks?.facebook && (
                    <a 
                      href={member.socialLinks.facebook}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                  {member.socialLinks?.instagram && (
                    <a 
                      href={member.socialLinks.instagram}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {member.socialLinks?.linkedin && (
                    <a 
                      href={member.socialLinks.linkedin}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

