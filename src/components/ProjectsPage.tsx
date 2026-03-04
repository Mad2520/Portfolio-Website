import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Award, Calendar, Tag } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  competences: string[];
  technologies: string[];
  date: string;
  preuves: string[];
  category: string;
  link?: string;
  github?: string;
  sections?: { title: string; content: string }[];
  procedureExample?: { title: string; image: string };
  gallery?: { image: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Automatisation – Interface Diane",
    description: "Script PowerShell de surveillance et redémarrage automatique de l'interface Diane",
    category: "Automatisation & Scripts",
    longDescription: `Contexte / Problématique :
Au bloc opératoire, l’application métier Diane, utilisée par les anesthésistes, communique avec un autre logiciel pour remplir les dossiers patients. Nous avons constaté que les tables de communication se remplissaient trop rapidement, provoquant la création de doublons de patients. Cela entraînait un travail manuel important pour l’équipe applicative et un risque d’erreurs dans le suivi des dossiers patients.

Objectif :
Assurer la continuité du service anesthésie, réduire les doublons de dossiers patients et automatiser la surveillance du service pour anticiper les problèmes.

Solution mise en place :
J’ai développé un script PowerShell qui :

Vérifie régulièrement le nombre de fichiers dans les tables de communication.

Si le seuil critique est atteint (300 fichiers), envoie une alerte par mail à l’équipe concernée.

Redémarre automatiquement le service Diane pour libérer les tables.

Confirme par mail que le service a bien redémarré et fonctionne normalement.

Le script a été planifié via le Planificateur de tâches Windows, ce qui permet son exécution automatique toutes les heures, sans intervention manuelle.

Pourquoi cette méthode :

Planificateur de tâches Windows : simple à configurer, fiable et intégré à l’environnement existant.

Automatisation via script : réduit les erreurs humaines et le temps passé à surveiller le service manuellement.

Alertes par mail : garantissent la traçabilité et la réactivité en cas de problème.

Résultats obtenus :

Réduction significative des doublons de dossiers patients.

Continuité de service renforcée pour le bloc anesthésie.

Gain de temps pour l’équipe applicative, qui n’a plus besoin de fusionner manuellement les dossiers.

Intervention rapide et proactive de l’équipe IT en cas d’incident.

Compétences mobilisées :

Scripting PowerShell

Automatisation via Planificateur de tâches Windows

Surveillance de services critiques et gestion des alertes

Collaboration avec les équipes médicales pour comprendre les besoins métier

Respect des bonnes pratiques et sécurité des systèmes critiques`,
    image: "/diane.png",
    competences: ["Scripting PowerShell", "Automatisation"],
    technologies: ["PowerShell", "SMTP"],
    date: "2023",
    preuves: ["Script PowerShell", "Logs d'alerte", "Capture d'email de notification"],
    sections: [
      {
        title: "Contexte / Problématique",
        content: "Au bloc opératoire, l'application métier Diane gère les dossiers patients via une base de données et communique avec un autre logiciel. Les fichiers IN correspondent aux dossiers patients envoyés depuis cet autre applicatif.\nLorsqu'un grand nombre de fichiers IN s'accumule sans traitement, cela provoque des doublons dans la base de données, obligeant la personne qui gère Diane à fusionner manuellement les dossiers. Cette tâche est répétitive, longue et comporte un risque d'erreurs."
      },
      {
        title: "Objectif",
        content: "Assurer la continuité du service anesthésie, éviter les doublons dans la base de données et automatiser la surveillance du serveur Diane pour prévenir les incidents."
      },
      {
        title: "Solution mise en place",
        content: "J'ai développé un script PowerShell qui : Surveille régulièrement le nombre de fichiers IN sur le serveur Diane, Lorsque le seuil critique (300 fichiers IN) est atteint, envoie une alerte par mail à la personne responsable de l'application, Redémarre automatiquement le service Diane, permettant à la base de données de traiter correctement les fichiers IN, Envoie un second mail pour confirmer que le service fonctionne correctement après le redémarrage, Le script est exécuté via le Planificateur de tâches Windows, garantissant une exécution automatique toutes les heures, sans intervention manuelle."
      },
      {
        title: "Pourquoi cette méthode",
        content: "Automatisation : réduit les interventions manuelles et limite les erreurs humaines.Planificateur de tâches Windows : simple, fiable et intégré à l'environnement existant.Alertes par mail : assurent la traçabilité et permettent une réaction rapide en cas de problème."
      },
      {
        title: "Résultats obtenus",
        content: "Réduction significative des doublons dans la base de données, Gain de temps pour la personne qui gère Diane, plus besoin de fusionner manuellement les dossiers, Surveillance proactive du serveur et de la base de données"
      }
    ]
  },
  {
    id: 2,
    title: "Sécurisation des impressions – SafeQ",
    description: "Mise en place de SafeQ pour sécuriser les impressions sensibles",
    category: "Sécurité",
    image: "/SAFEQ.png",
    competences: ["Sécurité des impressions", "Integration AD", "Serveur d'impression"],
    technologies: ["SafeQ", "Active Directory", "Serveur d'impression"],
    date: "2022",
    preuves: ["Schéma d'architecture", "Procédure de configuration", "Test de dépôt/libération"],
    sections: [
      {
        title: "Contexte / Problématique",
        content: "Dans le service qualité de la Clinique Saint‑Martin, de nombreux documents imprimés contiennent des informations sensibles sur les patients. Avant le projet, n'importe qui pouvait récupérer les impressions sur les imprimantes, ce qui représentait un risque pour la confidentialité et la sécurité des données médicales."
      },
      {
        title: "Objectif",
        content: "Garantir la confidentialité des documents imprimés, sécuriser l'accès aux imprimantes et améliorer la traçabilité des impressions."
      },
      {
        title: "Solution mise en place",
        content: "Nous avons déployé SafeQ, un service fourni par Konica, qui fonctionne en lien avec le système de badges et Active Directory (AD). Lors de la première utilisation, l'utilisateur saisit son nom d'utilisateur AD pour confirmer qu'il est bien un utilisateur de la clinique. Ensuite, pour récupérer ses impressions, l'utilisateur doit badger sur l'imprimante avec son badge professionnel. SafeQ vérifie que le badge correspond à un utilisateur valide et libère le document uniquement pour cette personne, assurant confidentialité et traçabilité. Une procédure claire a été rédigée pour l'équipe et les utilisateurs afin de faciliter la prise en main du service."
      },
      {
        title: "Pourquoi cette méthode",
        content: "Connexion AD à la première utilisation garantit que seuls les utilisateurs de l'établissement peuvent accéder au système, badgeage obligatoire est simple pour l'utilisateur et efficace pour sécuriser les impressions, SafeQ centralisé permet de suivre toutes les impressions et de maintenir la confidentialité des documents sensibles."
      },
      {
        title: "Résultats obtenus",
        content: "Les documents sensibles sont désormais sécurisés et accessibles uniquement par leur destinataire, réduction des risques liés à la confidentialité des données patients, processus standardisé et simplifié pour les utilisateurs, traçabilité complète des impressions et contrôle sur le volume imprimé."
      }
    ]
  },
  {
    id: 3,
    title: "Renouvellement de baie réseau",
    description: "Remplacement des switchs, nouveau brassage et schéma de baie clair",
    category: "Infrastructure & Réseaux",
    image: "/synoptique.png",
    competences: ["Administration réseau", "Câblage", "Planification"],
    technologies: ["Switches", "Câblage structuré", "Monitoring réseau"],
    date: "2021",
    preuves: ["Schéma de baie", "Photos avant/après", "Rapport de tests"],
    sections: [
      {
        title: "Contexte / Problématique",
        content: "Dans un des services de la Clinique Saint‑Martin, la baie réseau existante était désorganisée. Le câblage était mal structuré rendant les interventions compliquées, le switch principal devenait obsolète et limitait la capacité du réseau, le service manquait de ports réseau ce qui compliquait l'ajout de nouveaux équipements."
      },
      {
        title: "Objectif",
        content: "Assurer une baie réseau organisée, fonctionnelle et évolutive, capable de répondre aux besoins actuels et futurs du service."
      },
      {
        title: "Solution mise en place",
        content: "Remplacement du switch obsolète par un équipement récent, ajout d'un switch stacker pour augmenter le nombre de ports disponibles et permettre la connexion de nouveaux équipements, réorganisation complète du brassage des prises avec un câblage clair et logique, création d'un schéma détaillé de la baie pour documenter les connexions et faciliter la maintenance, tests de continuité et de fonctionnement pour s'assurer que tous les équipements du service sont opérationnels."
      },
      {
        title: "Pourquoi cette méthode",
        content: "Brassage optimisé facilite la gestion et la maintenance future, switch stacker augmente les ports disponibles sans avoir à ajouter une nouvelle baie, tests après installation assurent la continuité du service et détectent rapidement tout problème technique."
      },
      {
        title: "Résultats obtenus",
        content: "Baie réseau réorganisée et documentée plus facile à maintenir, nombre de ports suffisant pour le service grâce au switch stacker, remplacement du switch obsolète pour garantir la stabilité et la performance du réseau, continuité de service assurée pour tous les utilisateurs du service."
      }
    ]
  },
  {
    id: 4,
    title: "Gestion Active Directory & GPO",
    description: "Création/gestion de comptes, droits et GPO pour homogénéiser la sécurité",
    category: "Administration Systèmes",
    longDescription: "Administration quotidienne d'Active Directory : création et gestion des comptes utilisateurs, attribution de droits, rattachement aux groupes de sécurité et mise à jour des GPO pour uniformiser les paramètres de sécurité sur le parc.",
    image: "/GPO.png",
    competences: ["Active Directory", "GPO", "Gestion des droits"],
    technologies: ["Active Directory", "GPO", "PowerShell"],
    date: "2020-2024",
    preuves: ["Extraits GPO", "Scripts de création de comptes", "Procédures internes"]
  },
  {
    id: 5,
    title: "Migrations DFS et passage à Windows 11",
    description: "Reconstruction de serveur de fichiers (DFS) et montée de version vers Windows 11",
    category: "Infrastructure & Réseaux",
    longDescription: "Refonte d'une arborescence DFS, reconstruction d'un serveur de fichiers et correction des droits utilisateurs. Pilotage du déploiement de Windows 11 avec suivi hebdomadaire et reporting d'avancement.",
    image: "/DFS.png",
    competences: ["DFS", "Migration système", "Gestion de projet"],
    technologies: ["DFS", "Windows 11", "Scripting de déploiement"],
    date: "2023-2024",
    preuves: ["Plan de migration", "Rapports hebdomadaires", "Scripts de migration"]
  },
  {
    id: 6,
    title: "Réponse aux incidents & assistance",
    description: "Gestion des tickets avec iTop, masterisation et procédures utilisateurs",
    category: "Support & Assistance",
    longDescription: "Utilisation d'iTop pour le suivi des incidents et demandes (création de comptes, pannes, problèmes applicatifs). Masterisation des postes (image de base + applications métier) et rédaction de procédures (SafeQ, ClickShare) pour autonomiser les utilisateurs.",
    image: "/itop.png",
    competences: ["Support utilisateur", "Masterisation", "Rédaction de procédures"],
    technologies: ["iTop", "Outils d'imagerie", "PDQ Deploy"],
    date: "2020-2024",
    preuves: ["Exemples de tickets", "Images système", "Procédures utilisateurs"],
    procedureExample: {
      title: "Exemple de procédure utilisateur – ClickShare",
      image: "/clickshare.png"
    }
  },
  {
    id: 7,
    title: "Affichage dynamique – Players",
    description: "Déploiement de players d'affichage dynamique pour la communication interne",
    category: "Déploiements",
    longDescription: "Installation et configuration de players d'affichage dynamique dans plusieurs services pour diffuser informations institutionnelles et messages aux patients, en respectant la confidentialité et les contraintes juridiques.",
    image: "/player.webp",
    competences: ["Affichage dynamique", "Gestion de contenu", "Conformité"],
    technologies: ["Players d'affichage", "Validation juridique"],
    date: "2022",
    preuves: ["Liste des emplacements", "Templates de contenu", "Procédures de publication"]
  },
  {
    id: 8,
    title: "Projets Gériatrie & Pôle Gastro",
    description: "Installation matérielle et brassage réseau après analyse des besoins",
    category: "Infrastructure & Réseaux",
    longDescription: "Travail en mode projet avec analyse des besoins en réunion avec les responsables de service, installation de nouveaux matériels, brassage réseau et suivi hebdomadaire via Suite ProG.",
    image: "/projet.png",
    competences: ["Travail en mode projet", "Installation matérielle", "Coordination"],
    technologies: ["Suite ProG", "Infrastructure réseau"],
    date: "2023",
    preuves: ["Capture Suite ProG"]
  },
  {
    id: 9,
    title: "Mise à disposition de services & déploiements",
    description: "Déploiements matériels et tests d'intégration avant mise en production",
    category: "Déploiements",
    longDescription: "Tests d'intégration sur poste avant déploiement, installation de postes, déploiement de bornes WiFi Aruba, remplacement des pousses seringues au bloc avec la mise en place de la configuration réseau et mise en place d'imprimantes sécurisées SafeQ. Rédaction de procédures et accompagnement utilisateurs.",
    image: "/clickshare.png",
    competences: ["Déploiement matériel", "Tests intégration", "Accompagnement"],
    technologies: ["Aruba WiFi", "SafeQ", "Procédures"],
    date: "2021-2024",
    preuves: ["Procedures de déploiement"],
    gallery: [
      { image: "/pousse-seringue.png" },
      { image: "/borne.jpg" }
    ]
  },
  {
    id: 10,
    title: "Projets réalisés en formation",
    description: "Veille technologique, apprentissage continu et gestion de portfolio",
    category: "Formation",
    longDescription: "Mise en place d’une infrastructure réseau complète, avec configuration des services d’infrastructure tels qu’un serveur DHCP et DNS. Nous avons également sécurisé les accès à l’aide d’OpenSSL. Par ailleurs, nous avons déployé plusieurs services, notamment un serveur LAMP, un serveur FTP, un serveur de messagerie, un annuaire LDAP ainsi qu’un serveur HAProxy configuré en reverse proxy.",
    image: "/formation.png",
    competences: ["Mise en place service", "Formation continue"],
    technologies: ["Ressources en ligne", "Formations"],
    date: "En continu",
    preuves: ["Liste de formations"]
  }
];

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const allCategories = Array.from(
    new Set(projects.map(p => p.category))
  ).sort();

  const filteredProjects = filterCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === filterCategory);

  return (
    <div className="min-h-full bg-slate-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Mes Réalisations Professionnelles
        </h1>
        <p className="text-gray-400 text-xl mb-8">
          {projects.length} projets réalisés - Compétences mobilisées et éléments de preuve
        </p>

        {/* Filters */}
        <div className="mb-8 flex gap-3 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilterCategory('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filterCategory === 'all' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                : 'bg-[#2b2a33] text-gray-300 hover:bg-[#38373f] border border-[#3a3944]'
            }`}
          >
            Tous les projets
          </motion.button>
          {allCategories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterCategory(cat)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filterCategory === cat 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'bg-[#2b2a33] text-gray-300 hover:bg-[#38373f] border border-[#3a3944]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project} 
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group ${project.id === 10 ? 'md:col-span-1 lg:col-span-1' : ''}`}
    >
      <div className={`relative overflow-hidden ${project.id === 10 ? 'h-80' : 'h-64'} bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center`}>
        <div className={project.id === 10 ? 'w-full h-full flex items-center justify-center' : ''}>
          <ProjectImage query={project.image} alt={project.title} isFullSize={project.id === 10} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl mb-1">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4" />
          {project.date}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.competences.slice(0, 2).map((comp) => (
            <span key={comp} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {comp}
            </span>
          ))}
          {project.competences.length > 2 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              +{project.competences.length - 2}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <motion.div
            whileHover={{ x: 5 }}
            className="text-purple-600 flex items-center gap-1"
          >
            <span>Voir détails</span>
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
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
            <h2 className="text-3xl mb-2">{project.title}</h2>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              {project.date}
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
          <div className="relative h-96 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-blue-500 to-purple-500">
            <ProjectImage query={project.image} alt={project.title} />
          </div>

          {project.sections ? (
            <div className="mb-6 space-y-6">
              {project.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl mb-3 text-purple-600 font-semibold">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{section.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-6">
              <h3 className="text-2xl mb-3 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-600" />
                Description du projet
              </h3>
              <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
            </div>
          )}

          {project.procedureExample && (
            <div className="mb-6">
              <h3 className="text-2xl mb-3 text-purple-600 font-semibold">{project.procedureExample.title}</h3>
              <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
                <ProjectImage query={project.procedureExample.image} alt={project.procedureExample.title} />
              </div>
            </div>
          )}

          {project.gallery && (
            <div className="mb-6 flex gap-4">
              {project.gallery.map((item, idx) => (
                <div key={idx} className="flex-1">
                  <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <ProjectImage query={item.image} alt={`Galerie ${idx + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-2xl mb-3 flex items-center gap-2">
              <Tag className="w-6 h-6 text-blue-600" />
              Compétences mobilisées
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.competences.map((comp) => (
                <motion.span
                  key={comp}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full"
                >
                  {comp}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl mb-3">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl mb-3">Éléments de preuve</h3>
            <ul className="space-y-2">
              {project.preuves.map((preuve, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  {preuve}
                </motion.li>
              ))}
            </ul>
          </div>

          {(project.link || project.github) && (
            <div className="flex gap-4">
              {project.link && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Voir le projet
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  className="px-6 py-3 bg-gray-800 text-white rounded-full flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  Code source
                </motion.a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectImage({ query, alt, isFullSize }: { query: string; alt: string; isFullSize?: boolean }) {
  const [imageUrl, setImageUrl] = useState<string>('');

  useState(() => {
    // Si c'est un chemin local (commence par /), l'utiliser directement
    if (query.startsWith('/')) {
      setImageUrl(query);
    } else {
      // Sinon, chercher sur Unsplash
      import('../lib/unsplash').then(module => {
        module.getUnsplashImage(query).then(url => setImageUrl(url));
      });
    }
  });

  if (!imageUrl) {
    return <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600"></div>;
  }

  return <img src={imageUrl} alt={alt} className={isFullSize ? 'w-full h-full object-cover' : 'w-full h-auto object-contain'} />;
}