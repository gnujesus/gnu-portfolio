import { motion } from 'framer-motion';

export default function SocialIcon({ children, color = 'red' }) {
  let iconColor: string =
    color == 'red'
      ? 'bg-red-500'
      : color == 'green'
      ? 'bg-green-500'
      : 'bg-yellow-500';

  return (
    <motion.div
      className={`w-4 h-4 ${iconColor} rounded-full`}
      initial={{
        scale: 1,
      }}
      whileHover={{ scale: 1.6 }}
      transition={{
        type: 'spring',
        duration: 0.2,
      }}
    />
  );
}
