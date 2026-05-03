import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Search, 
  BarChart, 
  Zap, 
  ShieldCheck, 
  FileText, 
  MapPin, 
  Globe,
  Settings,
  Users
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    price: '1399',
    period: '/Month',
    description: "Ideal for startups and small businesses looking for foundational SEO to establish an online presence.",
    icon: Search,
    features: [
      'Google Accounts Setup',
      '10 Keywords / 5 Pages',
      'On-Page SEO',
      'Technical SEO',
      'Speed (Caching + CDN)',
      'Basic Link Building',
      'Security Patches',
      'Monthly Reports',
      '2 Blogs/Month'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '2199',
    period: '/Month',
    description: "Designed for growing businesses aiming to improve search rankings and online visibility.",
    icon: BarChart,
    features: [
      'Google Accounts Setup',
      '20 Keywords/10 Pages',
      'On-Page SEO',
      'Technical SEO',
      'Speed (Caching + CDN)',
      'Standard Link Building',
      'Security Patches',
      'Monthly Reports',
      '4 Blogs/Month',
      'Website Content Writing',
      'GMB Optimization'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '3999',
    period: '/Month',
    description: "A comprehensive SEO solution for businesses focused on scaling and competitive growth.",
    icon: Zap,
    features: [
      'Google Accounts Setup',
      '40 Keywords/20 Pages',
      'On-Page SEO',
      'Technical SEO',
      'Speed (Caching + CDN)',
      'Premium Link Building',
      'Security Patches',
      'Monthly Reports',
      '8 Blogs/Month',
      'Website Content Writing',
      'GMB Optimization',
      'Live Reporting',
      'Monthly Meeting'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '7499',
    period: '/Month',
    description: "The ultimate SEO package for maximum online dominance and lead generation.",
    icon: Globe,
    features: [
      'Google Accounts Setup',
      '80 Keywords/40 Pages',
      'On-Page SEO',
      'Technical SEO',
      'Speed (Caching + CDN)',
      'Exclusive Link Building',
      'Security Patches',
      'Monthly Reports',
      '15 Blogs/Month',
      'Website Content Writing',
      'GMB Optimization',
      'Live Reporting',
      'Weekly Meeting'
    ]
  }
];

export default function SEOPage() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <PageLayout 
      title="Search Engine Optimization" 
      subtitle="Optimizing your digital footprint to dominate search engine results."
      backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mantraa-red font-bold tracking-widest uppercase text-sm mb-4 block">Visibility & Rank</span>
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Data-Driven SEO for Sustainable Growth</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Being invisible on Google is like not having a business at all. We employ white-hat SEO strategies to ensure your website ranks for the keywords that actually matter to your bottom line.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our holistic approach covers technical performance, on-page optimization, content strategy, and high-authority link building, providing a solid foundation for long-term organic traffic.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
               <Settings className="w-10 h-10 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy">Technical</h4>
               <p className="text-xs text-slate-500 mt-2">Crawlability & indexation</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100 mt-8">
               <FileText className="w-10 h-10 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy">Content</h4>
               <p className="text-xs text-slate-500 mt-2">Strategic copywriting</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100 -mt-8">
               <MapPin className="w-10 h-10 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy">Local SEO</h4>
               <p className="text-xs text-slate-500 mt-2">GMB dominance</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
               <Zap className="w-10 h-10 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy">Speed</h4>
               <p className="text-xs text-slate-500 mt-2">Core Web Vitals</p>
            </div>
          </motion.div>
        </div>

        {/* Pricing Toggle Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-mantraa-navy mb-6">SEO Packages</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            Choose an SEO plan that fits your current market position and long-term search objectives.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-slate-50 rounded-[3rem] p-8 lg:p-16 border border-slate-200">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-mantraa-navy text-white p-4 rounded-2xl inline-flex items-center gap-3">
              {(() => {
                const PkgIcon = packages.find(p => p.id === activeTab)?.icon || Search;
                return <PkgIcon className="w-6 h-6" />;
              })()}
              <span className="font-bold tracking-wider uppercase text-xs">
                {packages.find(p => p.id === activeTab)?.name} SEO Solution
              </span>
            </div>
            
            <h3 className="text-5xl font-serif text-mantraa-navy">
              <span className="text-xl align-top mr-1">AED</span>
              {packages.find(p => p.id === activeTab)?.price}
              <span className="text-lg font-sans text-slate-400 font-normal">/Month</span>
            </h3>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              {packages.find(p => p.id === activeTab)?.description}
            </p>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-lg group"
            >
              Start Your Optimization
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
              Monthly Optimization Services:
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

        {/* Deliverables detail */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-3xl border border-slate-100 text-center">
                <FileText className="w-12 h-12 text-mantraa-red mb-6 mx-auto" />
                <h5 className="font-bold text-mantraa-navy mb-4">Content Strategy</h5>
                <p className="text-slate-600 text-sm leading-relaxed">Regular blog posts and landing page content designed to target long-tail keywords and educate your users.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-slate-100 text-center">
                <Globe className="w-12 h-12 text-mantraa-red mb-6 mx-auto" />
                <h5 className="font-bold text-mantraa-navy mb-4">Authority Building</h5>
                <p className="text-slate-600 text-sm leading-relaxed">Ethical link building and outreach to improve your website's domain authority and competitive trust.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-slate-100 text-center">
                <BarChart className="w-12 h-12 text-mantraa-red mb-6 mx-auto" />
                <h5 className="font-bold text-mantraa-navy mb-4">Live Reporting</h5>
                <p className="text-slate-600 text-sm leading-relaxed">Available on Premium & Elite plans, get real-time dashboards to track your rankings, traffic, and conversions.</p>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
