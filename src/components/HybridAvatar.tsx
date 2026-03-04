import { motion } from 'motion/react';

export function HybridAvatar() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl overflow-hidden relative"
    >
      <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
    </motion.div>
  );
}
