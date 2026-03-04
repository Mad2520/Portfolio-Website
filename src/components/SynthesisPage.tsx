import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';

export function SynthesisPage() {
  const downloadSynthesis = async () => {
    try {
      const res = await fetch('/tableau.pdf');
      if (!res.ok) throw new Error('missing');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Tableau-Synthese.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      alert('Le fichier Tableau-Synthese.pdf est introuvable. Placez votre fichier PDF à la racine du dossier public (public/Tableau-Synthese.pdf) et relancez le serveur.');
    }
  };

  return (
    <div className="min-h-full bg-slate-900 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Tableau de Synthèse
          </h1>
          <p className="text-gray-400 text-xl mt-2">
            Synthèse générale des projets, compétences et réalisations
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#2b2a33] rounded-2xl shadow-xl overflow-hidden border border-[#3a3944] p-8"
        >
          {/* Icon and Title */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl text-gray-100">Retrouvez ici le tableau de synthèse</h2>
              <p className="text-gray-400 mt-1">Document récapitulatif complet de vos réalisations</p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 mb-8 leading-relaxed"
          >
            Ce tableau synthétise l'ensemble de vos projets, compétences, réalisations professionnelles
            et contributions au sein de votre organisation. Il offre une vue d'ensemble complète et
            structurée de votre parcours et expertise.
          </motion.p>

          {/* Download Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadSynthesis}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow text-lg font-semibold"
          >
            <Download className="w-5 h-5" />
            Télécharger le Tableau de Synthèse
          </motion.button>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl"
          >
            <h3 className="text-lg text-gray-100 mb-2">Contenu du tableau :</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Récapitulatif des 10 projets et réalisations</li>
              <li>Compétences techniques et transversales mobilisées</li>
              <li>Timeline et jalons importants</li>
              <li>Impacts et résultats mesurables</li>
              <li>Preuves et documentations associées</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
