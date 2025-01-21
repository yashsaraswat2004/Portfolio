import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  level?: number; // 1-5 for skill proficiency
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, level = 5, index }) => {
  const dots = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`inline-block w-1.5 h-1.5 rounded-full mx-0.5 ${
        i < level ? 'bg-indigo-500' : 'bg-gray-200'
      }`}
    />
  ));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-between px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all w-full"
    >
      <span className="text-gray-800 font-medium">{skill}</span>
      <div className="flex items-center">{dots}</div>
    </motion.div>
  );
};

export default SkillBadge;