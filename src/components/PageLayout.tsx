import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageLayout({ children, title, subtitle, backgroundImage }: PageLayoutProps) {
  const defaultBg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {title && (
        <div className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={backgroundImage || defaultBg} 
              alt={title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-mantraa-navy/40 backdrop-blur-[1px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-6 tracking-tight"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      )}
      <div className="min-h-[60vh]">
        {children}
      </div>
    </motion.div>
  );
}
