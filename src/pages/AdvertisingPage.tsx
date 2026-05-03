import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Megaphone, 
  Target, 
  TrendingUp, 
  MousePointerClick, 
  BarChart3,
  Globe,
  Zap,
  Percent
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    price: '1599',
    period: '/Month',
    description: "Ideal for startups, providing a single-channel ad campaign for lead or sales generation.",
    icon: Target,
    features: [
      'Account Setup & Verification',
      'Competitors Analysis & Strategy',
      '1 Platform Google/Social',
      'Spending Limit 6000 Dhs',
      'Campaign Setup',
      '1 Offer/Service',
      '1 Landing Page Creation',
      'Ad Creatives Design',
      'Simple Remarketing',
      'Monthly Reports'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '2799',
    period: '/Month',
    description: "Optimized for growing businesses, running targeted multi-platform ad campaigns.",
    icon: TrendingUp,
    features: [
      'Account Setup & Verification',
      'Competitors Analysis & Strategy',
      '2 Platform Google/Social',
      'Spending Limit 13000 Dhs',
      'Campaign Setup',
      '3 Offers/Services',
      '3 Landing Page Creation',
      'Ad Creatives Design',
      'Segmented remarketing',
      'Monthly Reports'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '4199',
    period: '/Month',
    description: "High-performance campaigns for businesses focused on scaling leads and sales.",
    icon: Zap,
    features: [
      'Account Setup & Verification',
      'Competitors Analysis & Strategy',
      '4 Platform Google/Social',
      'Spending Limit 25000 Dhs',
      'Campaign Setup',
      '6 Offers/Services',
      '6 Landing Page Creation',
      'Ad Creatives Design',
      'Segmented remarketing',
      'Monthly Reports',
      'Global Campaign'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '15%',
    period: ' Of Budget',
    description: "An all-inclusive solution with unlimited campaigns and strategic ad management.",
    icon: Percent,
    features: [
      'Account Setup & Verification',
      'Competitors Analysis & Strategy',
      '5 Platform Google/Social',
      'No Spending Limit',
      'Campaign Setup',
      'Unlimited Offers/Services',
      'Unlimited Landing Pages',
      'Ad Creatives Design',
      'Simple Remarketing',
      'Monthly Reports',
      'Global Campaign',
      'Dedicated Account Manager'
    ]
  }
];

export default function AdvertisingPage() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <PageLayout 
      title="Performance Advertising" 
      subtitle="Targeted ad campaigns designed to convert and scale your business growth."
      backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mantraa-red font-bold tracking-widest uppercase text-sm mb-4 block">Growth & ROI</span>
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Data-Driven Ads That Convert</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In the competitive digital landscape, organic reach is only half the battle. Our performance advertising services focus on placing your brand in front of the right audience at the right time.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We manage every aspect of your campaigns—from strategy and creative design to technical tracking and landing page optimization—ensuring every Dirham of your spend works towards your bottom line.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
               <MousePointerClick className="w-10 h-10 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy">Click-Through</h4>
               <p className="text-xs text-slate-500 mt-2">Optimized for high CTR</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100 mt-8">
               <Globe className="w-10 h-10 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy">Global Reach</h4>
               <p className="text-xs text-slate-500 mt-2">Scale without borders</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100 -mt-8">
               <BarChart3 className="w-10 h-10 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy">Analytics</h4>
               <p className="text-xs text-slate-500 mt-2">Transparent reporting</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
               <Megaphone className="w-10 h-10 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy">Amplification</h4>
               <p className="text-xs text-slate-500 mt-2">Maximum impact</p>
            </div>
          </motion.div>
        </div>

        {/* Pricing Toggle Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-mantraa-navy mb-6">Advertising Packages</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            Select a management plan that matches your monthly budget and growth objectives.
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
                const PkgIcon = packages.find(p => p.id === activeTab)?.icon || Target;
                return <PkgIcon className="w-6 h-6" />;
              })()}
              <span className="font-bold tracking-wider uppercase text-xs">
                {packages.find(p => p.id === activeTab)?.name} Advertising
              </span>
            </div>
            
            <h3 className="text-5xl font-serif text-mantraa-navy">
              {activeTab !== 'elite' && <span className="text-xl align-top mr-1">AED</span>}
              {packages.find(p => p.id === activeTab)?.price}
              <span className="text-lg font-sans text-slate-400 font-normal">
                {packages.find(p => p.id === activeTab)?.period}
              </span>
            </h3>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              {packages.find(p => p.id === activeTab)?.description}
            </p>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-lg group"
            >
              Consult With Our Experts
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
              Included Services:
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

        {/* Benefits section */}
        <div className="mt-32">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-serif text-mantraa-navy mb-4">Why Mantraa Ads?</h3>
                <p className="text-slate-500">We don't just run ads; we engineer profitable customer acquisitions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'Strategic Landing Pages', desc: 'Every campaign includes custom landing page creation designed for maximum conversion rate.' },
                    { title: 'Segmented Remarketing', desc: 'We bring back lost visitors with intelligent remarketing sequences that nurture them into customers.' },
                    { title: 'Transparent CPA', desc: 'We focus on Cost Per Acquisition (CPA), ensuring your marketing budget translates to actual business value.' }
                ].map((item, i) => (
                    <div key={i} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h5 className="font-bold text-mantraa-navy mb-4">{item.title}</h5>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
