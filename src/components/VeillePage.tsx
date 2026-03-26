import { motion, AnimatePresence } from 'motion/react';
import { Rss, ExternalLink, Calendar, Tag, TrendingUp, BookOpen, X } from 'lucide-react';
import { useState } from 'react';

interface VeilleArticle {
  id: number;
  title: string;
  source: string;
  date: string;
  category: string;
  summary: string;
  link: string;
  tags: string[];
}

const articles: VeilleArticle[] = [
  {
    id: 1,
    title: "Ransomwares-as-a-Service (RaaS)",
    source: "Le Monde Informatique",
    date: "Décembre 2024",
    category: "Cybercriminalité",
    summary: "Problématique : Comment les plateformes de cybercriminalité “as-a-service” redéfinissent-elles les menaces informatiques actuelles ? Analyse des modèles RaaS, vecteurs d'attaque et pistes de mitigation.",
    link: "https://www.lemondeinformatique.fr",
    tags: ["RaaS", "Cybercriminalité", "Sécurité"]
  },
  {
    id: 2,
    title: "Virtualisation et Conteneurisation",
    source: "Red Hat",
    date: "Novembre 2024",
    category: "Virtualisation",
    summary: "Problématique : Comment la virtualisation et les conteneurs optimisent-ils la flexibilité et la sécurité des systèmes d’information ? Comparaison des approches et recommandations.",
    link: "https://www.redhat.com/fr",
    tags: ["Virtualisation", "Conteneurs", "Sécurité"]
  },
  {
    id: 3,
    title: "Biométrie comportementale",
    source: "IT-Connect",
    date: "Octobre 2024",
    category: "Biométrie",
    summary: "Problématique : Peut-on renforcer la cybersécurité sans mot de passe grâce à la reconnaissance comportementale ? Étude des limites et usages possibles en milieu professionnel.",
    link: "https://www.it-connect.fr",
    tags: ["Biométrie", "Auth", "Innovation"]
  },
  {
    id: 4,
    title: "RGPD et Santé (HDS)",
    source: "CNIL / ANSSI",
    date: "2025-2026",
    category: "Juridique",
    summary: "Focus : La protection des données de santé en 2026. Le point majeur de 2026 est la fin de la période transitoire pour la certification HDS v2.0.",
    link: "https://www.cnil.fr",
    tags: ["RGPD", "HDS", "Santé", "Conformité"]
  }
];

const sources = [
  { name: "Le Monde Informatique", url: "https://www.lemondeinformatique.fr", icon: "📰" },
  { name: "ANSSI - CERT", url: "https://www.cert.ssi.gouv.fr", icon: "🛡️" },
  { name: "Cybermalveillance", url: "https://www.cybermalveillance.gouv.fr", icon: "⚠️" },
  { name: "IT-Connect", url: "https://www.it-connect.fr", icon: "📘" },
  { name: "Red Hat", url: "https://www.redhat.com/fr", icon: "🔴" },
  { name: "CNIL", url: "https://www.cnil.fr", icon: "⚖️" },
];

const articleDetails: { [key: number]: { sections: { title: string; content: string }[]; sources: {name: string, url: string}[] } } = {
  1: {
    sections: [
      {
        title: "Contexte et Problématique",
        content: "Les Ransomwares-as-a-Service (RaaS) représentent une évolution majeure de la cybercriminalité. Ces plateformes permettent à des individus sans compétences techniques avancées de lancer des attaques par rançon. Le modèle \"as-a-service\" démocratise l'accès aux outils de cyberattaque, rendant les menaces plus accessibles et plus fréquentes.\n\nLa problématique principale réside dans la baisse des barrières à l'entrée pour les cybercriminels : il suffit désormais d'un paiement pour accéder à des kits d'attaque sophistiqués, incluant des ransomwares personnalisables, des infrastructures d'hébergement et des services de support."
      },
      {
        title: "Fonctionnement des RaaS",
        content: "Les plateformes RaaS opèrent sur le modèle SaaS traditionnel :\n\n1. **Affiliés et Opérateurs** : Les créateurs de la plateforme (opérateurs) développent et maintiennent les outils. Les affiliés paient pour utiliser ces outils et reversent un pourcentage des rançons obtenues.\n\n2. **Modèle Économique** : Les affiliés paient généralement un abonnement mensuel ou une commission (souvent 20-30%) sur les rançons collectées.\n\n3. **Services Offerts** : Kits de ransomware, serveurs de commande et contrôle (C2), support technique, mises à jour, et parfois même des services de négociation avec les victimes.\n\n4. **Exemples Notables** : Conti, REvil, LockBit, qui ont généré des millions de dollars de revenus."
      },
      {
        title: "Vecteurs d'Attaque et Techniques",
        content: "Les RaaS utilisent des techniques éprouvées :\n\n- **Phishing et Ingénierie Sociale** : Vecteur principal d'infection initiale\n- **Exploitation de Vulnérabilités** : Utilisation de zero-days ou de failles connues non patchées\n- **Attaques par Chaîne d'Approvisionnement** : Compromission de fournisseurs ou de mises à jour logicielles\n- **Double Extorsion** : Chiffrement des données + menace de fuite des informations sensibles\n\nLes ransomwares modernes incluent des fonctionnalités avancées comme l'évasion des antivirus, la propagation latérale automatique, et l'exfiltration de données avant chiffrement."
      },
      {
        title: "Impacts et Conséquences",
        content: "Les conséquences des attaques RaaS sont multiples :\n\n- **Économiques** : Coûts directs (rançons) et indirects (arrêts d'activité, pertes de productivité)\n- **Opérationnels** : Interruptions de service, pertes de données, impacts sur les soins patients\n- **Réputationnels** : Perte de confiance des patients et partenaires\n- **Juridiques** : Obligations de notification RGPD, sanctions potentielles\n\nDans le secteur de la santé, les attaques RaaS peuvent avoir des conséquences vitales, retardant des soins critiques ou compromettant des données médicales sensibles."
      },
      {
        title: "Mesures de Mitigation",
        content: "Face à cette menace, plusieurs stratégies de défense :\n\n1. **Prévention** :\n   - Formation et sensibilisation des utilisateurs\n   - Mise à jour régulière des systèmes\n   - Segmentation réseau et principe du moindre privilège\n   - Sauvegardes régulières et tests de restauration\n\n2. **Détection** :\n   - Solutions EDR/XDR pour la détection d'anomalies\n   - Monitoring des logs et alertes automatisées\n   - Chasse aux menaces proactive\n\n3. **Réponse** :\n   - Plans de réponse aux incidents (PDI)\n   - Isolation rapide des systèmes compromis\n   - Coordination avec les autorités (CERT, ANSSI)\n\n4. **Récupération** :\n   - Procédures de restauration éprouvées\n   - Communication transparente avec les parties prenantes"
      },
      {
        title: "Perspectives d'Évolution",
        content: "L'évolution des RaaS suit plusieurs tendances :\n\n- **Sophistication Croissante** : Intégration d'IA pour l'évasion des défenses\n- **Spécialisation** : RaaS ciblant des secteurs spécifiques (santé, finance)\n- **Diversification** : Au-delà du chiffrement, inclusion d'autres types d'attaques\n- **Régulation** : Pressions internationales pour limiter les cryptomonnaies utilisées pour les paiements\n\nLa veille technologique doit rester vigilante face à ces évolutions pour adapter continuellement les stratégies de défense."
      }
    ],
    sources: [
      { name: "Le Monde Informatique - 'Ransomwares-as-a-Service : la démocratisation de la cybercriminalité'", url: "https://www.lemondeinformatique.fr" },
      { name: "ANSSI - Rapports sur les menaces cyber", url: "https://www.ssi.gouv.fr" },
      { name: "Cybermalveillance.gouv.fr - Guides de prévention", url: "https://www.cybermalveillance.gouv.fr" },
      { name: "Kaspersky Threat Intelligence Reports", url: "https://www.kaspersky.com" },
      { name: "Mandiant M-Trends Reports", url: "https://www.mandiant.com" }
    ]
  },
  2: {
    sections: [
      {
        title: "Thème 2 : La Virtualisation et la Conteneurisation",
        content: "Problématique : Comment la virtualisation et les conteneurs optimisent-ils la flexibilité et la sécurité des systèmes d'information ?"
      },
      {
        title: "1. Analyse Technique : Complémentarité vs Opposition",
        content: "En tant que technicien SISR, ma veille montre que le débat \"VM contre Conteneur\" est révolu. En 2026, l'enjeu est l'orchestration hybride.\n\nVirtualisation (Isolation matérielle) : Les VMs (ESXi, Proxmox, Hyper-V) simulent un matériel complet. Leur force réside dans l'isolation forte du noyau (kernel). Si une VM est compromise, l'attaquant reste bloqué dans l'environnement virtualisé sans accès direct à l'hôte physique.\n\nConteneurisation (Agilité logicielle) : Les conteneurs (Docker, Podman) partagent le noyau de l'OS hôte. Ils sont 10 à 100 fois plus légers que les VMs, permettant un déploiement en quelques secondes. C'est l'outil idéal pour le DevOps et les architectures en microservices."
      },
      {
        title: "2. Optimisation de la Flexibilité et de la Sécurité",
        content: "Le modèle \"Container-on-VM\" : Pour maximiser la sécurité, la tendance actuelle est de déployer des clusters de conteneurs (Kubernetes) à l'intérieur de machines virtuelles. On profite de la flexibilité des conteneurs pour les mises à jour applicatives sans interruption, tout en conservant la barrière de sécurité étanche de la VM.\n\nLe Edge Computing : En 2026, la conteneurisation permet de déporter la puissance de calcul au plus près des utilisateurs (ex: capteurs IoT dans un hôpital) tout en gardant une gestion centralisée.\n\nSécurité (Hardening) : L'optimisation passe par le \"Scan d'images\". Avant déploiement, les conteneurs sont analysés pour détecter des vulnérabilités connues (CVE), réduisant drastiquement la surface d'attaque par rapport à un serveur physique classique."
      }
    ],
    sources: [
      { name: "Red Hat (Janvier 2026) : L'orchestration hybride : pourquoi Kubernetes a besoin de la virtualisation", url: "https://www.redhat.com/fr" },
      { name: "L'Informaticien (Mars 2026) : Dossier : Proxmox et l'alternative souveraine à VMware en 2026", url: "https://www.linformaticien.com" },
      { name: "IT-Connect (Février 2026) : Sécuriser ses conteneurs avec Podman : le mode \"Rootless\" expliqué", url: "https://www.it-connect.fr" },
      { name: "VMware by Broadcom (Rapport 2025) : Optimisation des ressources : la montée en puissance du Cloud hybride", url: "https://www.vmware.com" }
    ]
  },
  3: {
    sections: [
      {
        title: "Thème 3 : La Biométrie Comportementale",
        content: "Problématique : Peut-on renforcer la cybersécurité sans mot de passe grâce à la reconnaissance comportementale ?"
      },
      {
        title: "1. Au-delà du mot de passe : L'identité dynamique",
        content: "La biométrie statique (empreinte, visage) a ses limites : une fois volée (hack d'une base de données), elle ne peut être changée. Ma veille porte sur la biométrie comportementale, qui est infalsifiable car elle repose sur l'humain en mouvement.\n\nIndicateurs analysés : La vitesse de frappe (keystroke dynamics), l'angle d'inclinaison du smartphone, la pression exercée sur l'écran, ou encore la manière de déplacer la souris.\n\nAuthentification Continue (Zéro Trust) : Contrairement au mot de passe qui ne vérifie l'identité qu'au moment du \"Login\", la biométrie comportementale surveille l'utilisateur tout au long de sa session. Si un pirate prend le contrôle à distance du poste, le système détecte immédiatement un changement de rythme et verrouille l'accès."
      },
      {
        title: "2. Réponse à la problématique : Un renfort indispensable",
        content: "Élimination du Phishing : Même si un utilisateur donne son mot de passe par erreur, l'attaquant ne pourra pas reproduire la \"signature comportementale\" de la victime pour entrer sur le réseau.\n\nRéduction de la friction : Pour l'utilisateur, c'est invisible (pas de code SMS à recopier toutes les heures), ce qui améliore la productivité tout en augmentant le niveau de sécurité réel.\n\nConformité : En 2026, c'est une réponse directe aux exigences de la directive NIS2 pour l'accès aux infrastructures critiques (santé, énergie)."
      }
    ],
    sources: [
      { name: "Thales Digital Identity (Mars 2026) : La biométrie comportementale : le futur du Passwordless", url: "https://www.thalesgroup.com" },
      { name: "Journal du Net (Janvier 2026) : Pourquoi 60% des entreprises auront abandonné le mot de passe classique d'ici fin 2026", url: "https://www.journaldunet.com" },
      { name: "ANSSI / CERT-FR (2025) : Recommandations sur l'authentification multi-facteurs (MFA) de nouvelle génération", url: "https://www.ssi.gouv.fr" },
      { name: "CPO Magazine (Février 2026) : Behavioral Biometrics: The invisible shield against session hijacking", url: "https://www.cpomagazine.com" }
    ]
  },
  4: {
    sections: [
      {
        title: "Veille Juridique : RGPD et Santé (HDS)",
        content: "Focus : La protection des données de santé en 2026."
      },
      {
        title: "Développement",
        content: "Le point majeur de 2026 est la fin de la période transitoire pour la certification HDS v2.0.\n\nÉchéance : Au 16 mai 2026, tous les hébergeurs de données de santé doivent être certifiés selon le nouveau référentiel aligné sur l'ISO 27001:2022.\n\nImpact : Cela impose une souveraineté accrue (contrôle des prestataires soumis à des lois extra-européennes comme le Cloud Act) et une gestion des risques plus granulaire pour les établissements de santé."
      }
    ],
    sources: [
      { name: "Agence du Numérique en Santé (20 novembre 2025) : Certification HDS v2.0 : Six mois avant l'échéance du 16 mai 2026", url: "https://www.ans.fr" },
      { name: "DSIH (23 mars 2026) : Health Data Hub et Cloud Souverain : le cadre juridique 2026", url: "https://www.drees.solidarites-sante.gouv.fr" },
      { name: "AFNOR (Mars 2026) : Mode d'emploi vers la conformité HDS et ISO 27001", url: "https://www.afnor.org" }
    ]
  }
};

export function VeillePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<VeilleArticle | null>(null);

  const categories = Array.from(new Set(articles.map(a => a.category)));
  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-full bg-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="pt-12">
          <h1 className="text-3xl mb-8 pb-2 text-orange-400">
            Veille Technologique et Juridique
          </h1>
          <p className="text-gray-400 text-xl mb-8">Synthèses, problématiques et sources suivies</p>
        </motion.div>

        <motion.section className="mb-8 bg-[#2b2a33] border border-[#3a3944] rounded-2xl shadow-lg p-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-2xl mb-4 text-gray-100">Ma Méthodologie de Veille Technologique</h2>
          <p className="text-gray-300 mb-4">Dans le secteur de l'informatique, et particulièrement en systèmes et réseaux, les technologies évoluent à une vitesse fulgurante. Pour ne pas rester figé sur mes acquis et découvrir constamment de nouveaux sujets, j'ai mis en place une structure de veille automatisée et rigoureuse.</p>
          <p className="text-gray-300 mb-4">Cette démarche me permet de rester à l'écoute du marché, de comprendre les menaces émergentes comme le RaaS ou d'explorer des solutions d'avenir comme la biométrie comportementale et la conteneurisation avec Podman.</p>

          <h3 className="text-xl mb-2 text-orange-400">1. Mes Outils de Capture & d'Analyse</h3>
          <p className="text-gray-300 mb-4">Pour transformer le flux massif d'informations en une connaissance structurée, j'utilise deux leviers principaux :</p>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold">• Talkwalker Alerts (Le Web en temps réel)</h4>
              <p className="italic mb-4 text-justify">J'ai configuré des alertes précises sur des mots-clés stratégiques. Grâce à cet outil, je reçois directement par mail une sélection d'articles, de rapports de sécurité et de publications dès qu'un nouveau sujet émerge sur le web (blogs, forums, presse spécialisée). Cela me permet d'être réactif, notamment sur les évolutions juridiques comme le RGPD ou les normes HDS.</p>
              <div className="flex justify-center">
                <img src="/flux.png" alt="Flux Talkwalker" className="w-64 h-64 object-contain rounded-xl shadow-lg border border-orange-500/20" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold">• Feedly (Mon agrégateur de flux RSS)</h4>
              <p className="italic text-justify">C'est mon tableau de bord quotidien. J'y ai centralisé les flux de sources de référence telles que l'ANSSI, IT-Connect, Le Monde Informatique ou encore la CNIL. En compartimentant ma lecture par thématiques (Cybercriminalité, Virtualisation, Juridique), je peux suivre l'évolution d'une technologie sur le long terme.</p>
            </div>
          </div>

          <h3 className="text-xl mt-10 mb-2 text-orange-400">2. Pourquoi ces thèmes ?</h3>
          <p className="text-gray-300 mb-4">Les thèmes présents sur ce portfolio (Ransomware-as-a-Service, Virtualisation/Podman, Biométrie) ont été sélectionnés car ils représentent, selon moi, les piliers de l'infrastructure de demain : la sécurité offensive, l'agilité logicielle et la protection de l'identité.</p>
          <p className="text-gray-300">Cette veille n'est pas un simple exercice scolaire, c'est un véritable outil d'auto-formation qui me permet d'anticiper les besoins technologiques des infrastructures que je serai amené à administrer.</p>
        </motion.section>

        <motion.section className="mb-8 bg-[#2b2a33] border border-[#3a3944] rounded-2xl shadow-lg p-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-2xl mb-4 text-gray-100">Veille Technologique</h2>
          <p className="text-gray-300 mb-4">Observations et thèmes suivis concernant l'évolution des technologies et leurs impacts opérationnels.</p>

          <h3 className="text-xl mb-2 text-orange-400">Thèmes Suivis</h3>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold">Les Ransomwares-as-a-Service (RaaS)</h4>
              <p className="italic">Problématique : Comment les plateformes de cybercriminalité “as-a-service” redéfinissent-elles les menaces informatiques actuelles ?</p>
            </div>

            <div>
              <h4 className="font-semibold">La Virtualisation et la Conteneurisation</h4>
              <p className="italic">Problématique : Comment la virtualisation et les conteneurs optimisent-ils la flexibilité et la sécurité des systèmes d’information ?</p>
            </div>

            <div>
              <h4 className="font-semibold">La Biométrie comportementale</h4>
              <p className="italic">Problématique : Peut-on renforcer la cybersécurité sans mot de passe grâce à la reconnaissance comportementale ?</p>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-8 bg-[#2b2a33] border border-[#3a3944] rounded-2xl shadow-lg p-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <h2 className="text-2xl mb-4 text-gray-100">Veille Juridique</h2>
          <p className="text-gray-300 mb-4">Suivi des cadres réglementaires, conformité et protection des données, en particulier pour le secteur de la santé.</p>

          <div className="space-y-2 text-gray-300">
            <p><strong>Thèmes :</strong> RGPD · Sécurité des données de santé (HDS) · Cybercriminalité</p>
          </div>
        </motion.section>

        <motion.section className="mb-8 bg-[#2b2a33] border border-[#3a3944] rounded-2xl shadow-lg p-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl mb-4 text-gray-100">Impact sur mes Projets</h2>
          <p className="text-gray-300 mb-4">Conséquences et actions à intégrer : conformité légale, protection des données patients, mesures de mitigation et bonnes pratiques à appliquer lors des déploiements.</p>
        </motion.section>

        <motion.section className="mb-8 bg-[#2b2a33] border border-[#3a3944] rounded-2xl shadow-lg p-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <h2 className="text-2xl mb-4 flex items-center gap-2 text-gray-100"><Rss className="w-6 h-6 text-orange-400" />Mes Sources</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sources.map((source, index) => (
              <motion.a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.08 * index }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{source.icon}</div>
                <div className="text-sm text-gray-200">{source.name}</div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Articles et filtres */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mb-8">
          <div className="mb-6 flex gap-3 flex-wrap">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedCategory('all')} className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === 'all' ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white' : 'bg-[#2b2a33] text-gray-300 hover:bg-[#38373f] border border-[#3a3944]'}`}>Tous</motion.button>
            {categories.map(cat => (
              <motion.button key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedCategory(cat)} className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === cat ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white' : 'bg-[#2b2a33] text-gray-300 hover:bg-[#38373f] border border-[#3a3944]'}`}>{cat}</motion.button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.article key={article.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} whileHover={{ y: -5 }} className="bg-[#2b2a33] border border-[#3a3944] rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full text-sm">{article.category}</span>
                    <span className="text-gray-400 text-sm flex items-center gap-1"><Calendar className="w-4 h-4" />{article.date}</span>
                  </div>

                  <h3 className="text-2xl mb-2 text-gray-100 hover:text-orange-400 transition-colors">{article.title}</h3>

                  <p className="text-gray-400 text-sm mb-3 flex items-center gap-1"><BookOpen className="w-4 h-4" />Source: {article.source}</p>

                  <p className="text-gray-300 mb-4 leading-relaxed">{article.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800 text-gray-400 rounded-full text-sm flex items-center gap-1"><Tag className="w-3 h-3" />{tag}</span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedArticle(article)}
                    className="text-orange-400 flex items-center gap-2 hover:text-orange-300 cursor-pointer"
                  >
                    <span>Lire</span><ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.section className="mb-16 bg-[#2b2a33] border border-[#3a3944] rounded-2xl shadow-lg p-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-2xl mb-4 text-gray-100">Article / Document Juridique</h2>
          <p className="text-gray-300 mb-4">Liens et documents juridiques sélectionnés concernant la protection des données de santé et le RGPD :</p>
          <ul className="list-disc list-inside text-gray-300">
            <li><a href="https://www.it-connect.fr" target="_blank" rel="noreferrer" className="text-orange-400">IT-Connect (articles juridiques)</a></li>
            <li><a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="text-orange-400">CNIL - RGPD</a></li>
          </ul>
        </motion.section>

        <AnimatePresence>
          {selectedArticle && (
            <VeilleModal 
              article={selectedArticle} 
              onClose={() => setSelectedArticle(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function VeilleModal({ article, onClose }: { article: VeilleArticle; onClose: () => void }) {
  const details = articleDetails[article.id];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
          <div>
            <h2 className="text-3xl mb-2">{article.title}</h2>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {article.source}
              </div>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">{article.category}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-2xl mb-3 text-orange-600 font-semibold">Résumé</h3>
            <p className="text-gray-700 leading-relaxed">{article.summary}</p>
          </div>

          {details && (
            <div className="mb-6 space-y-6">
              {details.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl mb-3 text-orange-600 font-semibold">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{section.content}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-2xl mb-3 flex items-center gap-2">
              <Tag className="w-6 h-6 text-orange-600" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {details && details.sources.length > 0 && (
            <div className="mb-6">
              <h3 className="text-2xl mb-3">Sources et Références</h3>
              <ul className="space-y-2">
                {details.sources.map((source, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 underline">
                      {source.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}