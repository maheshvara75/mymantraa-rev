import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Monitor, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Layout, 
  Server,
  Search
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    price: '2499',
    description: "Essential design for startups and small businesses to establish an online presence.",
    icon: Layout,
    features: [
      'Standard Design',
      'Up to 4 Pages',
      'Speed Optimization',
      'Responsive Design',
      '1 Revision',
      'Basic Firewall Security',
      '1 Month Support',
      'Basic SEO'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '3799',
    description: "Enhanced branding with professional design, security, and performance features.",
    icon: Globe,
    features: [
      'Premium Design',
      'Up to 10 Pages',
      'Speed Optimization + CDN',
      'Responsive Design',
      '3 Revisions',
      'Firewall + Malware',
      '6 Months Support',
      'Standard SEO',
      'Blog/News',
      'Google Analytics'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '5199',
    description: "Advanced design for business growth with premium security and SEO.",
    icon: Zap,
    features: [
      'Premium Design',
      'Up to 20 Pages',
      'Caching + CDN',
      'Responsive Design',
      '6 Revisions',
      'Firewall + Malware',
      '1 Year Support',
      'Advanced SEO',
      'Blog/News',
      'Google Analytics',
      'Free 1 Year Hosting',
      'Daily Backup'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '6999',
    description: "A top-tier solution with premium branding, security, and strategic online presence.",
    icon: ShieldCheck,
    features: [
      'Premium Design',
      'Up to 30 Pages',
      'Premium Caching + CDN',
      'Responsive Design',
      '10 Revisions',
      'Firewall + Malware + DDOS',
      '3 Years Support',
      'Advanced SEO + Content',
      'Blog/News',
      'Google Analytics',
      'Free 3 Years Hosting',
      'Daily Backup',
      'Premium Functionalities'
    ]
  }
];

export default function WebsiteDesignPage() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <PageLayout 
      title="Website Design" 
      subtitle="Crafting high-performance websites tailored to your business needs."
      backgroundImage="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mantraa-red font-bold tracking-widest uppercase text-sm mb-4 block">Web & Digital</span>
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Modern Web Solutions for Growth</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Your website is often the first point of contact for your potential customers. We create responsive, fast, and secure websites that not only look stunning but are built to convert visitors into loyal clients.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              From simple landing pages to complex corporate portals, our tiered website design packages provide the right balance of features, security, and performance for your business.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-6 bg-white rounded-3xl shadow-lg border border-slate-100">
               <Monitor className="w-8 h-8 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy text-sm">Responsive</h4>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-lg border border-slate-100 mt-8">
               <Zap className="w-8 h-8 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy text-sm">Fast Loading</h4>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-lg border border-slate-100 -mt-8">
               <ShieldCheck className="w-8 h-8 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy text-sm">Secure</h4>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-lg border border-slate-100">
               <Search className="w-8 h-8 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy text-sm">SEO Ready</h4>
            </div>
          </motion.div>
        </div>

        {/* Pricing Toggle Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-mantraa-navy mb-6">Website Design Packages</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            Select the engagement level that fits your digital strategy and business requirements.
          </p>

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-slate-50 rounded-[3rem] p-8 lg:p-16 border border-slate-200 shadow-sm">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-mantraa-red text-white p-4 rounded-2xl inline-flex items-center gap-3">
              {(() => {
                const PkgIcon = packages.find(p => p.id === activeTab)?.icon || Monitor;
                return <PkgIcon className="w-6 h-6" />;
              })()}
              <span className="font-bold tracking-wider uppercase text-xs">
                {packages.find(p => p.id === activeTab)?.name} Design
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-lg group"
            >
              Consult Our Developers
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
              Service Deliverables:
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

        {/* Future comparison or more info */}
        <div className="mt-32 text-center bg-mantraa-navy rounded-[3rem] p-16 text-white">
            <h3 className="text-3xl font-serif mb-6">Need a Custom Solution?</h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                For e-commerce, custom web applications, or enterprise-grade portals, we offer bespoke development services tailored to your specific technical requirements.
            </p>
            <Link 
                to="/contact" 
                className="px-10 py-5 bg-white text-mantraa-navy rounded-full font-bold hover:bg-mantraa-red hover:text-white transition-all inline-flex items-center gap-3 shadow-xl"
            >
                Request a Custom Quote <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </PageLayout>
  );
}
