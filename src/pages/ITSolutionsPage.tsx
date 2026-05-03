import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Palette, 
  Monitor, 
  Share2, 
  Megaphone, 
  Search,
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ITSolutionsPage() {
  const services = [
    {
      title: 'Branding',
      desc: 'Creating impactful brand identities that resonate with your audience.',
      icon: Palette,
      href: '/services/it-solutions/branding'
    },
    {
      title: 'Website Design',
      desc: 'Crafting responsive, high-performance websites tailored to your business.',
      icon: Monitor,
      href: '/services/it-solutions/website-design'
    },
    {
      title: 'Social Media Marketing',
      desc: 'Building community and engagement through strategic social presence.',
      icon: Share2,
      href: '/services/it-solutions/social-media'
    },
    {
      title: 'Advertising',
      desc: 'Targeted ad campaigns designed to convert and scale your growth.',
      icon: Megaphone,
      href: '/services/it-solutions/advertising'
    },
    {
      title: 'SEO Solutions',
      desc: 'Optimizing your digital footprint to dominate search engine results.',
      icon: Search,
      href: '/services/it-solutions/seo'
    }
  ];

  return (
    <PageLayout 
      title="IT Solutions" 
      subtitle="Empowering your digital transformation with cutting-edge technology and creative strategies."
      backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Digital Excellence for Modern Business</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In today's fast-paced digital landscape, having a strong online presence is no longer optional—it's essential. Our IT Solutions team combines creativity with technical expertise to help your business stand out and thrive.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              From building your brand identity to optimizing your website for global reach, we provide end-to-end digital services that drive real results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-lg flex items-center gap-2"
              >
                Book a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: 'Responsive Design', icon: Monitor, desc: 'Flawless performance across all devices.' },
              { title: 'Global Reach', icon: Globe, desc: 'Connect with customers worldwide.' },
              { title: 'Brand Story', icon: Palette, desc: 'Engage with compelling visual narratives.' },
              { title: 'High Speed', icon: Zap, desc: 'Optimized performance for better UX.' }
            ].map((benefit, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-mantraa-paper flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-mantraa-navy" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-2">{benefit.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-20 text-white mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Our IT Services</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Choose from our range of specialized services designed to elevate your digital footprint.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link to={service.href} className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all" id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  Learn Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
            <h3 className="text-3xl font-serif text-mantraa-navy mb-8">Ready to transform your digital presence?</h3>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-2xl group"
            >
              Start Your Project
              <CheckCircle2 className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
        </div>
      </div>
    </PageLayout>
  );
}
