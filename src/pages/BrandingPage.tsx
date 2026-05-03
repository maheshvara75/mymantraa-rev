import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Palette, 
  ShieldCheck, 
  Star, 
  Zap,
  Layout,
  Briefcase
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    price: '949',
    description: "A streamlined design solution to establish your brand's visual identity.",
    icon: Palette,
    features: [
      'Logo design',
      'Logo Usage Guidelines',
      '2 Concepts',
      'Source file',
      'Color palette creation'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '2299',
    description: "A comprehensive branding package with essential creative assets to enhance your brand presence.",
    icon: ShieldCheck,
    features: [
      'Logo design',
      'Logo Usage Guidelines',
      '4 Concepts',
      'Source file',
      'Color palette creation',
      'Typography Guidelines',
      'Social Media Kit',
      'E-Signature',
      'Full Stationary Kit',
      'Stamp Design',
      'Do\'s & Don\'t',
      'LEER'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '3499',
    description: "A premium creative service designed for business growth and performance-driven branding.",
    icon: Star,
    features: [
      'Logo design',
      'Logo Usage Guidelines',
      '7 Concepts',
      'Source file',
      'Color palette creation',
      'Typography Guidelines',
      'Social Media Kit',
      'E-Signature',
      'Full Stationary Kit',
      'Stamp Design',
      'Do\'s & Don\'t',
      'Packaging Design'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '6999',
    description: "The ultimate branding solution for businesses looking for premium, high-impact visual identity and strategic brand positioning.",
    icon: Zap,
    features: [
      'Logo design',
      'Logo Usage Guidelines',
      '10 Concepts',
      'Source file',
      'Color palette creation',
      'Typography Guidelines',
      'Social Media Kit',
      'E-Signature',
      'Full Stationary Kit',
      'Stamp Design',
      'Do\'s & Don\'t',
      'Packaging Design',
      'Company Profile'
    ]
  }
];

export default function BrandingPage() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <PageLayout 
      title="Branding Solutions" 
      subtitle="Crafting impactful brand identities that tell your story and connect with your audience."
      backgroundImage="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mantraa-red font-bold tracking-widest uppercase text-sm mb-4 block">Identity & Design</span>
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Build a Brand That Commands Attention</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Branding is more than just a logo—it's the emotional connection between your business and your customers. At Mantraa, we provide structured branding solutions designed to give your business a cohesive and professional visual identity.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Whether you are a startup looking for a strong entry or an established firm needing a strategic refresh, our tiered branding packages ensure you get exactly what you need to scale your impact.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Branding Design" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Pricing Toggle Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-mantraa-navy mb-6">Pricing Packages</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            Choose the perfect branding solution tailored to your business stage and objectives.
          </p>

          {/* New Toggle Control */}
          <div className="inline-flex p-1 bg-slate-100 rounded-full mb-12 shadow-inner">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActiveTab(pkg.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === pkg.id 
                    ? 'bg-white text-mantraa-navy shadow-md' 
                    : 'text-slate-500 hover:text-mantraa-navy'
                }`}
              >
                {pkg.name}
              </button>
            ))}
          </div>
        </div>

        {/* Highlighted Selected Package */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-slate-50 rounded-[3rem] p-8 lg:p-16 border border-slate-200">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-mantraa-navy text-white p-4 rounded-2xl inline-flex items-center gap-3">
              {(() => {
                const PkgIcon = packages.find(p => p.id === activeTab)?.icon || Palette;
                return <PkgIcon className="w-6 h-6" />;
              })()}
              <span className="font-bold tracking-wider uppercase text-xs">
                {packages.find(p => p.id === activeTab)?.name} Package
              </span>
            </div>
            
            <h3 className="text-5xl font-serif text-mantraa-navy">
              <span className="text-xl align-top mr-1">AED</span>
              {packages.find(p => p.id === activeTab)?.price}
            </h3>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              {packages.find(p => p.id === activeTab)?.description}
            </p>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-lg group"
            >
              Get Started with this Plan
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            key={activeTab + '-features'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100"
          >
            <h4 className="font-bold text-mantraa-navy mb-8 flex items-center gap-2">
              <Check className="w-5 h-5 text-mantraa-red" />
              What's Included:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {packages.find(p => p.id === activeTab)?.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-mantraa-red shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Grid View for Desktop Comparison (Alternative) */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-mantraa-navy mb-4">Compare All Plans</h3>
            <p className="text-slate-500">Quick overview of our branding solutions at a glance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`p-8 rounded-3xl border transition-all cursor-pointer group ${
                  activeTab === pkg.id 
                    ? 'border-mantraa-red bg-white shadow-xl scale-105 z-10' 
                    : 'border-slate-100 bg-white/50 hover:border-slate-200 shadow-sm'
                }`}
                onClick={() => setActiveTab(pkg.id)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-2xl transition-colors ${
                    activeTab === pkg.id ? 'bg-mantraa-red text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                  }`}>
                    <pkg.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{pkg.name}</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-slate-400">AED</span>
                  <div className="text-3xl font-serif font-bold text-mantraa-navy">{pkg.price}</div>
                </div>

                <p className="text-slate-500 text-xs mb-8 line-clamp-2">{pkg.description}</p>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.slice(0, 5).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-slate-500">
                      <Check className="w-3 h-3 text-mantraa-red shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                  {pkg.features.length > 5 && (
                    <div className="text-[10px] text-slate-400 italic">+{pkg.features.length - 5} more items...</div>
                  )}
                </div>

                <button 
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === pkg.id 
                      ? 'bg-mantraa-navy text-white' 
                      : 'bg-slate-100 text-slate-600 group-hover:bg-mantraa-red group-hover:text-white'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
