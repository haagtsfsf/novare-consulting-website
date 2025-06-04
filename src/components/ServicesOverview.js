import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Scale, 
  Shield, 
  Calculator, 
  Globe, 
  Heart, 
  TrendingUp, 
  FileText,
  ArrowRight
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Restructuring",
      description: "Strategic intervention to restore business health and prevent bankruptcy",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Scale,
      title: "Debt Relief & Negotiation",
      description: "Expert creditor negotiations for sustainable debt relief solutions",
      color: "from-navy-500 to-navy-600"
    },
    {
      icon: Shield,
      title: "Pre-bankruptcy Guidance",
      description: "Comprehensive guidance exploring all alternatives before bankruptcy",
      color: "from-blue-600 to-navy-600"
    },
    {
      icon: FileText,
      title: "Legal Advisory",
      description: "Specialized expertise in insolvency matters and liability protection",
      color: "from-navy-600 to-blue-700"
    },
    {
      icon: Calculator,
      title: "Tax Debt Management",
      description: "Expert handling of tax authority negotiations and solutions",
      color: "from-blue-500 to-navy-500"
    },
    {
      icon: Globe,
      title: "International Structuring",
      description: "Cross-border expertise for complex international business challenges",
      color: "from-navy-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Psychological Support",
      description: "Compassionate support for entrepreneurs facing financial distress",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: TrendingUp,
      title: "Cash Flow Optimization",
      description: "Systematic approach to improve cash flow and receivables management",
      color: "from-navy-600 to-navy-700"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Comprehensive <span className="text-blue-600">Business Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our multidisciplinary approach combines legal, financial, and psychological expertise 
            to provide complete support for your business recovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="flex items-center text-blue-600 text-sm font-medium"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
export default ServicesOverview;
