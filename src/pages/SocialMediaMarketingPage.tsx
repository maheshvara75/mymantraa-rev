import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Share2, 
  TrendingUp, 
  Camera, 
  Users, 
  BarChart,
  Target,
  Zap,
  Globe
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    price: '2399',
    period: '/Month',
    description: "An essential social media package to establish and maintain a consistent online presence.",
    icon: Share2,
    features: [
      'Account Setup & Optimization',
      'Profile Cover/Highlights Design',
      '2 Social Platforms',
      'Content Strategy',
      'Platform Growth Strategy',
      'Monthly Calendar',
      'Monthly Reports',
      '12 Image Designs',
      'Weekly Story'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '3799',
    period: '/Month',
    description: "A balanced social media package to enhance engagement and audience growth.",
    icon: TrendingUp,
    features: [
      'Account Setup & Optimization',
      'Profile Cover/Highlights Design',
      '3 Social Platforms',
      'Content Strategy',
      'Platform Growth Strategy',
      'Monthly Calendar',
      'Monthly Reports',
      '8 Image Designs',
      '7 Reels',
      'Daily Story',
      'Target Audience'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '5499',
    period: '/Month',
    description: "A high-performance social media package for businesses focusing on audience expansion and engagement.",
    icon: Zap,
    features: [
      'Account Setup & Optimization',
      'Profile Cover/Highlights Design',
      '4 Social Platforms',
      'Content Strategy',
      'Platform Growth Strategy',
      'Monthly Calendar',
      'Monthly Reports',
      '10 Image Designs',
      '10 Reels',
      'Daily 2 Stories',
      '4 Hours Shooting',
      'Customized Marketing Plan'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '8499',
    period: '/Month',
    description: "The ultimate social media package for brands looking to dominate their industry with high-impact content and strategic collaborations.",
    icon: Globe,
    features: [
      'Account Setup & Optimization',
      'Profile Cover/Highlights Design',
      '6 Social Platforms',
      'Content Strategy',
      'Platform Growth Strategy',
      'Monthly Calendar',
      'Monthly Reports',
      '15 Image Designs',
      '15 Reels',
      'Daily 3 Stories',
      '8 Hours Shooting',
      'Customized Marketing Plan',
      'Collaboration with Influencers & Brands'
    ]
  }
];

export default function SocialMediaMarketingPage() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <PageLayout 
      title="Social Media Marketing" 
      subtitle="Building community and engagement through strategic social presence."
      backgroundImage="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mantraa-red font-bold tracking-widest uppercase text-sm mb-4 block">Social & Viral</span>
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Elevate Your Voice in a Digital World</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Social media is the heartbeat of modern marketing. It's where your brand comes to life and engages directly with your audience. We help you cut through the noise with data-driven strategies and creative content.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our tiered social media marketing packages are designed to grow with your business, providing everything from basic consistency to full-scale industry dominance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-mantraa-red mb-4" />
                <h4 className="font-bold text-mantraa-navy">Community</h4>
                <p className="text-xs text-slate-500 mt-2">Build loyal followings</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center mt-8">
                <BarChart className="w-10 h-10 text-mantraa-red mb-4" />
                <h4 className="font-bold text-mantraa-navy">Analytics</h4>
                <p className="text-xs text-slate-500 mt-2">Data-driven growth</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center -mt-8">
                <Camera className="w-10 h-10 text-mantraa-red mb-4" />
                <h4 className="font-bold text-mantraa-navy">Content</h4>
                <p className="text-xs text-slate-500 mt-2">Visual storytelling</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                <Target className="w-10 h-10 text-mantraa-red mb-4" />
                <h4 className="font-bold text-mantraa-navy">Engagement</h4>
                <p className="text-xs text-slate-500 mt-2">Meaningful interactions</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing Toggle Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-mantraa-navy mb-6">Marketing Packages</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            Choose a monthly plan that aligns with your engagement goals and platform strategy.
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
                const PkgIcon = packages.find(p => p.id === activeTab)?.icon || Share2;
                return <PkgIcon className="w-6 h-6" />;
              })()}
              <span className="font-bold tracking-wider uppercase text-xs">
                {packages.find(p => p.id === activeTab)?.name} Social Solution
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
              Start Growing Your Brand
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
              Monthly Deliverables:
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

        {/* FAQ or Info about shooting/influencers */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100">
                <h4 className="font-serif text-xl text-mantraa-navy mb-4">Content Shooting Sessions</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Our Premium and Elite packages include professional shooting hours where our team visits your location to capture high-quality photos and videos for your reels and posts.
                </p>
            </div>
            <div className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100">
                <h4 className="font-serif text-xl text-mantraa-navy mb-4">Influencer Collaborations</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Exclusively for Elite clients, we handle the end-to-end management of influencer partnerships, from sourcing the right profiles to managing campaign execution and reporting.
                </p>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
