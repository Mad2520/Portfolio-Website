import { motion } from 'motion/react';
import { Rss, ExternalLink, Calendar, Tag, TrendingUp, BookOpen } from 'lucide-react';
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
    title: "RGPD et conformité",
    source: "CNIL",
    date: "2023",
    category: "Juridique",
    summary: "Suivi des évolutions RGPD et implications pour la gestion des données patients, consentement et conservation des données.",
    link: "https://www.cnil.fr",
    tags: ["RGPD", "Conformité", "Données"]
  },
  {
    id: 5,
    title: "Sécurité des données de santé (HDS)",
    source: "Cybermalveillance",
    date: "2024",
    category: "Juridique",
    summary: "Normes et obligations pour les données de santé : HDS, bonnes pratiques et contrôles à mettre en place pour les établissements de santé.",
    link: "https://www.cybermalveillance.gouv.fr",
    tags: ["HDS", "Santé", "Sécurité"]
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

export function VeillePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

                  <motion.a whileHover={{ x: 5 }} href={article.link} className="text-orange-400 flex items-center gap-2 hover:text-orange-300"><span>Lire</span><ExternalLink className="w-4 h-4" /></motion.a>
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
      </div>
    </div>
  );
}