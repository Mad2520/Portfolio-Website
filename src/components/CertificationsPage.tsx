import { motion } from 'motion/react';
import { Award, BookOpen, Globe, ShieldCheck, UserCheck } from 'lucide-react';

export function CertificationsPage() {
  const certifications = [
    {
      title: 'OpenClassrooms • Menez une investigation d’incident numérique (forensic)',
      description: 'Certification axée sur l’analyse des incidents numériques et les méthodologies forensic.',
      badge: 'OpenClassrooms',
      image: '/certifForensic.png'
    },
    {
      title: 'OpenClassrooms • Créez votre site web avec HTML et CSS',
      description: 'Certification couvrant la création d’un site web responsive avec HTML et CSS.',
      badge: 'OpenClassrooms',
      image: '/certifWeb.png'
    },
    {
      title: 'OpenClassrooms • Planifiez vos tâches avec PowerShell',
      description: 'Certification portant sur l’automatisation et l’organisation des tâches avec PowerShell.',
      badge: 'OpenClassrooms',
      image: '/CertifPowershell.png'
    },
    {
      title: 'OpenClassrooms • Optimisez votre déploiement avec des conteneurs Docker',
      description: 'Certification dédiée à la conteneurisation et à l’optimisation des déploiements Docker.',
      badge: 'OpenClassrooms',
      image: '/CertifDocker.png'
    },
    {
      title: 'SecNum Académie • Cybersécurité',
      description: 'Certification reconnue sur les fondamentaux de la cybersécurité et la protection des systèmes.',
      badge: 'SecNum Académie',
      image: '/CertifSecNum.png'
    }
  ];

  return (
    <div className="min-h-full bg-slate-900 p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications obtenues
          </h1>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1c1b22] rounded-3xl border border-[#2b2a33] p-6 shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <img src={cert.image} alt={cert.title} className="w-full max-w-[320px] h-auto object-contain rounded-2xl" />
              </div>

              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{cert.badge}</p>
                <p className="text-gray-400 leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
