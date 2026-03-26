import { motion } from 'motion/react';
import { X, ExternalLink, Calendar, Tag, BookOpen } from 'lucide-react';

interface VeilleDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  articleId: number;
}

export const articleDetails: Record<number, {
  title: string;
  content: string;
  sources: Array<{ name: string; url: string; date: string }>;
}> = {
  1: {
    title: "Thème 1 : Les Ransomware-as-a-Service (RaaS)",
    content: `Problématique : Comment les plateformes de cybercriminalité "as-a-service" redéfinissent-elles les menaces informatiques actuelles ?

1. Qu'est-ce que le RaaS ? (Analyse du Modèle Économique)

Le Ransomware-as-a-Service est une adaptation du modèle Cloud "SaaS" (Software as a Service) au monde criminel. Il ne s'agit plus d'un pirate isolé créant son propre code, mais d'une industrie structurée :

    Les Opérateurs (Développeurs) : Ils conçoivent le rançongiciel, gèrent l'infrastructure de paiement (portails de paiement en crypto-monnaies) et fournissent les outils de déchiffrement.

    Les Affiliés (Clients) : Ce sont les attaquants qui louent le service. Ils n'ont pas besoin de compétences en programmation. Leur rôle est de trouver une faille (phishing, vulnérabilité VPN, etc.) pour infiltrer le réseau cible.

    Le Partage des revenus : En 2026, le modèle standard repose sur une commission. L'affilié conserve généralement entre 70% et 80% de la rançon, le reste revenant aux opérateurs.

2. L'évolution des tactiques en 2025-2026

Ma veille montre que la menace ne se limite plus au simple chiffrement de fichiers. Les groupes RaaS utilisent désormais des méthodes de pression psychologique et technique accrues :

    La Triple Extorsion :

        Chiffrement : Les données sont rendues inaccessibles.

        Exfiltration (Double Extorsion) : Les données sont volées avant d'être chiffrées. Si la victime restaure ses sauvegardes sans payer, l'attaquant menace de publier des informations sensibles (données patients, secrets industriels).

        DDoS & Harcèlement (Triple Extorsion) : En 2026, les attaquants lancent des attaques par déni de service (DDoS) sur le site web de la victime ou appellent directement les clients/partenaires de l'entreprise pour nuire à sa réputation.

    L'IA Générative au service de l'intrusion : Les kits RaaS récents intègrent des modules d'IA pour automatiser le Spear-Phishing. L'IA analyse les réseaux sociaux de l'entreprise pour rédiger des mails de piège parfaits, sans fautes d'orthographe, imitant le style de la direction.

    Attaques "Identity-First" : Plutôt que de casser un pare-feu, les affiliés préfèrent voler des jetons de session (cookies) ou utiliser des "Infostealers" pour usurper l'identité d'un administrateur et contourner le MFA (authentification multi-facteur).

3. Impact et Mitigation pour le technicien SISR

Face à cette industrialisation, les mesures de défense traditionnelles sont insuffisantes. Ma veille souligne trois piliers indispensables :

    Sauvegardes Immuables : Utilisation de technologies "WORM" (Write Once Read Many). Si le ransomware accède au serveur de sauvegarde, il ne peut ni supprimer ni modifier les archives.

    Segmentation Réseau & Zero Trust : Isoler les serveurs critiques pour éviter le mouvement latéral (qu'un attaquant puisse passer d'un simple PC de bureau au serveur de base de données).

    E-réputation et Plan de Continuité (PCA) : Le volet juridique (RGPD) impose désormais de notifier une fuite de données sous 72h. Le technicien doit donc savoir extraire des logs pour prouver l'étendue du vol.`,
    sources: [
      { name: "ANSSI - Panorama de la menace 2025", url: "https://www.ssi.gouv.fr", date: "Mars 2026" },
      { name: "Trend Micro", url: "https://www.trendmicro.com", date: "Mars 2026" },
      { name: "SOS Ransomware", url: "https://www.sosransomware.com", date: "Janvier 2026" },
      { name: "CyberSécurité Management", url: "https://www.cybersecurite-management.com", date: "Mars 2026" },
      { name: "Board of Cyber", url: "https://www.boardofcyber.com", date: "2025-2026" }
    ]
  }
};

export function VeilleDetailModal({ isOpen, onClose, articleId }: VeilleDetailModalProps) {
  if (!isOpen) return null;

  const detail = articleDetails[articleId];

  // Rendu de fallback si pas de détail
  if (!detail) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-red-500 text-white p-8 rounded-2xl max-w-md text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4">🚨 ERREUR 🚨</h2>
          <p className="text-lg mb-4">Article ID: {articleId}</p>
          <p>Pas de contenu trouvé pour cet article.</p>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 bg-white text-red-500 rounded-lg font-bold"
          >
            Fermer
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#2b2a33] border border-[#3a3944] rounded-2xl shadow-2xl max-w-7xl w-full max-h-[94vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fixe */}
        <div className="p-6 border-b border-[#3a3944] flex-shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-orange-400">{detail.title}</h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 hover:bg-[#38373f] rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </motion.button>
          </div>
        </div>

        {/* Contenu scrollable */}
        <div className="overflow-y-auto p-8" style={{ maxHeight: 'calc(94vh - 96px)', scrollbarWidth: 'auto', scrollbarColor: '#fb923c #374151' }}>
          {/* TEST SCROLL - DÉBUT */}
          <div className="mb-8 p-6 bg-red-500 text-white text-2xl font-bold rounded-lg">
            🚨 DÉBUT DU CONTENU - SI VOUS VOYEZ CECI, LE MODAL FONCTIONNE 🚨
          </div>

          {/* Problématique */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-orange-400 mb-4 border-b border-orange-400/30 pb-2">
              Problématique
            </h3>
            <div className="text-gray-300 leading-relaxed bg-[#1a1921] p-6 rounded-lg border-l-4 border-orange-400 text-lg">
              Comment les plateformes de cybercriminalité "as-a-service" redéfinissent-elles les menaces informatiques actuelles ?
            </div>
          </div>

          {/* Contenu principal avec sections */}
          <div className="space-y-12" style={{ minHeight: '800px' }}>
            {/* LIGNE DE TEST VISUEL */}
            <div className="w-full h-2 bg-red-500 mb-4"></div>
            <div className="text-center text-4xl font-bold text-red-500 mb-8">🔴 LIGNE ROUGE - SI VOUS VOYEZ CECI, LE CONTENU EST LÀ 🔴</div>
            <div className="w-full h-2 bg-red-500 mb-8"></div>
            {/* Section 1 */}
            <div>
              <h4 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center text-orange-400 font-bold">1</span>
                Qu'est-ce que le RaaS ? (Analyse du Modèle Économique)
              </h4>
              <div className="text-gray-300 leading-relaxed pl-12 space-y-6">
                <p className="text-lg">Le Ransomware-as-a-Service est une adaptation du modèle Cloud "SaaS" (Software as a Service) au monde criminel. Il ne s'agit plus d'un pirate isolé créant son propre code, mais d'une industrie structurée :</p>

                <div className="space-y-4">
                  <div className="bg-[#1a1921] p-5 rounded-lg border-l-4 border-blue-400 hover:border-blue-300 transition-colors">
                    <strong className="text-blue-400 text-lg">Les Opérateurs (Développeurs)</strong> : Ils conçoivent le rançongiciel, gèrent l'infrastructure de paiement (portails de paiement en crypto-monnaies) et fournissent les outils de déchiffrement.
                  </div>

                  <div className="bg-[#1a1921] p-5 rounded-lg border-l-4 border-green-400 hover:border-green-300 transition-colors">
                    <strong className="text-green-400 text-lg">Les Affiliés (Clients)</strong> : Ce sont les attaquants qui louent le service. Ils n'ont pas besoin de compétences en programmation. Leur rôle est de trouver une faille (phishing, vulnérabilité VPN, etc.) pour infiltrer le réseau cible.
                  </div>

                  <div className="bg-[#1a1921] p-5 rounded-lg border-l-4 border-purple-400 hover:border-purple-300 transition-colors">
                    <strong className="text-purple-400 text-lg">Le Partage des revenus</strong> : En 2026, le modèle standard repose sur une commission. L'affilié conserve généralement entre 70% et 80% de la rançon, le reste revenant aux opérateurs.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h4 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center text-orange-400 font-bold">2</span>
                L'évolution des tactiques en 2025-2026
              </h4>
              <div className="text-gray-300 leading-relaxed pl-12 space-y-6">
                <p className="text-lg">Ma veille montre que la menace ne se limite plus au simple chiffrement de fichiers. Les groupes RaaS utilisent désormais des méthodes de pression psychologique et technique accrues :</p>

                <div className="space-y-6">
                  <div>
                    <strong className="text-orange-300 text-lg">La Triple Extorsion :</strong>
                    <ul className="list-disc list-inside mt-3 space-y-2 ml-6 text-lg">
                      <li><strong>Chiffrement</strong> : Les données sont rendues inaccessibles.</li>
                      <li><strong>Exfiltration (Double Extorsion)</strong> : Les données sont volées avant d'être chiffrées. Si la victime restaure ses sauvegardes sans payer, l'attaquant menace de publier des informations sensibles (données patients, secrets industriels).</li>
                      <li><strong>DDoS & Harcèlement (Triple Extorsion)</strong> : En 2026, les attaquants lancent des attaques par déni de service (DDoS) sur le site web de la victime ou appellent directement les clients/partenaires de l'entreprise pour nuire à sa réputation.</li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1921] p-5 rounded-lg border-l-4 border-red-400 hover:border-red-300 transition-colors">
                    <strong className="text-red-400 text-lg">L'IA Générative au service de l'intrusion</strong> : Les kits RaaS récents intègrent des modules d'IA pour automatiser le Spear-Phishing. L'IA analyse les réseaux sociaux de l'entreprise pour rédiger des mails de piège parfaits, sans fautes d'orthographe, imitant le style de la direction.
                  </div>

                  <div className="bg-[#1a1921] p-5 rounded-lg border-l-4 border-yellow-400 hover:border-yellow-300 transition-colors">
                    <strong className="text-yellow-400 text-lg">Attaques "Identity-First"</strong> : Plutôt que de casser un pare-feu, les affiliés préfèrent voler des jetons de session (cookies) ou utiliser des "Infostealers" pour usurper l'identité d'un administrateur et contourner le MFA (authentification multi-facteur).
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h4 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center text-orange-400 font-bold">3</span>
                Impact et Mitigation pour le technicien SISR
              </h4>
              <div className="text-gray-300 leading-relaxed pl-12 space-y-6">
                <p className="text-lg">Face à cette industrialisation, les mesures de défense traditionnelles sont insuffisantes. Ma veille souligne trois piliers indispensables :</p>

                <div className="grid md:grid-cols-1 gap-6">
                  <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-colors">
                    <strong className="text-blue-400 text-lg">Sauvegardes Immuables</strong> : Utilisation de technologies "WORM" (Write Once Read Many). Si le ransomware accède au serveur de sauvegarde, il ne peut ni supprimer ni modifier les archives.
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 p-6 rounded-lg border border-green-500/30 hover:border-green-400 transition-colors">
                    <strong className="text-green-400 text-lg">Segmentation Réseau & Zero Trust</strong> : Isoler les serveurs critiques pour éviter le mouvement latéral (qu'un attaquant puisse passer d'un simple PC de bureau au serveur de base de données).
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 p-6 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-colors">
                    <strong className="text-purple-400 text-lg">E-réputation et Plan de Continuité (PCA)</strong> : Le volet juridique (RGPD) impose désormais de notifier une fuite de données sous 72h. Le technicien doit donc savoir extraire des logs pour prouver l'étendue du vol.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sources */}
          <div className="mt-16 pt-10 border-t border-[#3a3944]">
            <h3 className="text-3xl font-semibold text-gray-100 mb-8 flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-orange-400" />
              📰 Sources Récentes (Sélection 2025-2026)
            </h3>
            <div className="grid gap-6">
              {detail.sources.map((source, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-[#1a1921] rounded-lg border border-[#3a3944] hover:border-orange-400/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    <div>
                      <span className="text-gray-200 font-medium text-lg block">{source.name}</span>
                      <span className="text-gray-400 text-sm">Publié en {source.date}</span>
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 flex items-center gap-3 px-4 py-3 bg-orange-500/10 rounded-lg hover:bg-orange-500/20 transition-colors text-lg"
                  >
                    Consulter <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              ))}

              {/* Contenu additionnel pour forcer le scroll */}
              <div className="mt-12 p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600">
                <h4 className="text-xl font-semibold text-orange-400 mb-4">📊 Analyse Complémentaire</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Pour compléter cette analyse du RaaS, il est essentiel de comprendre l'évolution du marché criminel. En 2026, le secteur du ransomware représente un marché estimé à plus de 20 milliards de dollars annuels, avec une croissance de 300% depuis 2020.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Les groupes les plus actifs comme Conti, REvil (désormais dissous), LockBit et BlackCat dominent le marché, chacun avec des spécialisations différentes : certains se concentrent sur les grandes entreprises, d'autres sur les PME, et certains développent des outils spécifiques pour les infrastructures critiques.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  L'industrialisation du crime cybernétique pose de nouveaux défis aux équipes de sécurité. Les attaquants peuvent désormais tester leurs outils sur des environnements virtuels avant de les déployer, réduisant considérablement les risques d'échec de leur côté.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/30">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">🔍 Perspectives d'Évolution 2026-2027</h4>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li>• <strong>IA et Automatisation</strong> : Les kits RaaS intégreront massivement l'IA pour l'exploration automatique des réseaux compromis</li>
                  <li>• <strong>Attaques Supply Chain</strong> : Focus accru sur les fournisseurs tiers comme point d'entrée privilégié</li>
                  <li>• <strong>Crypto-Monnaies Alternatives</strong> : Adoption de monnaies plus difficiles à tracer comme Monero</li>
                  <li>• <strong>Double Extorsion Standardisée</strong> : Tous les groupes adopteront ce modèle d'ici fin 2026</li>
                  <li>• <strong>Spécialisation Sectorielle</strong> : Kits spécialisés pour la santé, la finance, l'énergie</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg border border-red-500/30">
                <h4 className="text-xl font-semibold text-red-400 mb-4">⚠️ Recommandations Pratiques</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-200 mb-2">Mesures Préventives</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Formation continue des équipes</li>
                      <li>• Mise à jour régulière des systèmes</li>
                      <li>• Sauvegardes 3-2-1 (3 copies, 2 supports, 1 offsite)</li>
                      <li>• Segmentation réseau stricte</li>
                      <li>• Authentification multi-facteurs</li>
                      <li>• Monitoring continu des logs</li>
                      <li>• Tests de pénétration réguliers</li>
                      <li>• Politique de moindre privilège</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-200 mb-2">Réponse à l'Incident</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Plan de réponse aux incidents testé</li>
                      <li>• Isolation immédiate des systèmes compromis</li>
                      <li>• Notification CNIL sous 72h</li>
                      <li>• Collaboration avec autorités</li>
                      <li>• Communication transparente avec les parties prenantes</li>
                      <li>• Analyse post-incident détaillée</li>
                      <li>• Mise à jour des procédures de sécurité</li>
                      <li>• Formation complémentaire des équipes</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-900/10 rounded-lg border border-red-500/20">
                  <h5 className="font-semibold text-red-300 mb-2">🚨 Points Critiques à Retenir</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Le RaaS a industrialisé le crime cybernétique</li>
                    <li>• La triple extorsion est devenue la norme</li>
                    <li>• L'IA accélère les attaques automatisées</li>
                    <li>• Les sauvegardes immuables sont essentielles</li>
                    <li>• Zero Trust est la nouvelle norme de sécurité</li>
                    <li>• La formation continue est cruciale</li>
                    <li>• La réponse rapide sauve des vies (santé)</li>
                    <li>• La conformité RGPD est non-négociable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* TEST SCROLL - FIN */}
          <div className="mt-12 p-6 bg-green-500 text-white text-2xl font-bold rounded-lg">
            ✅ FIN DU CONTENU - SI VOUS VOYEZ CECI EN SCROLLANT, ÇA MARCHE ! ✅
          </div>

          {/* Contenu répétitif pour forcer le scroll */}
          <div className="mt-8 space-y-4">
            <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <h4 className="text-blue-400 font-bold">CONTENU TEST 1</h4>
              <p className="text-gray-300">Ceci est du contenu de test pour vérifier que le scroll fonctionne. Si vous pouvez lire ceci, c'est que le système de scroll marche correctement.</p>
            </div>
            <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-lg">
              <h4 className="text-purple-400 font-bold">CONTENU TEST 2</h4>
              <p className="text-gray-300">Plus de contenu pour tester le scroll. Le modal devrait permettre de faire défiler tout ce texte.</p>
            </div>
            <div className="p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
              <h4 className="text-yellow-400 font-bold">CONTENU TEST 3</h4>
              <p className="text-gray-300">Encore plus de contenu. Si la scrollbar apparaît et que vous pouvez descendre, alors tout fonctionne parfaitement.</p>
            </div>
            <div className="p-4 bg-pink-500/20 border border-pink-500/30 rounded-lg">
              <h4 className="text-pink-400 font-bold">CONTENU TEST 4</h4>
              <p className="text-gray-300">Test final du système de scroll. Vous devriez pouvoir voir tous ces blocs colorés en faisant défiler.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}