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

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Restructuring & Recovery",
      description: "Strategic intervention to restore business health and prevent bankruptcy through comprehensive restructuring plans.",
      features: ["Operational restructuring", "Financial reorganization", "Strategic planning", "Implementation support"]
    },
    {
      icon: Scale,
      title: "Debt Relief & Creditor Negotiation",
      description: "Expert negotiation with creditors to achieve sustainable debt relief solutions and payment plans.",
      features: ["Creditor negotiations", "Payment plan structuring", "Debt consolidation", "Settlement agreements"]
    },
    {
      icon: Shield,
      title: "Pre-bankruptcy Guidance",
      description: "Comprehensive guidance to explore all alternatives before considering bankruptcy proceedings.",
      features: ["Risk assessment", "Alternative solutions", "Legal consultation", "Financial analysis"]
    },
    {
      icon: FileText,
      title: "Legal Advisory in Insolvency & Liability",
      description: "Specialized legal expertise in insolvency matters and liability protection for business owners.",
      features: ["Insolvency procedures", "Liability protection", "Legal representation", "Compliance guidance"]
    },
    {
      icon: Calculator,
      title: "Tax Debt Management & Negotiation",
      description: "Expert handling of tax authority negotiations and development of sustainable tax debt solutions.",
      features: ["Tax authority negotiations", "Payment plan agreements", "Penalty reductions", "Compliance restoration"]
    },
    {
      icon: Globe,
      title: "International Legal & Tax Structuring",
      description: "Cross-border expertise for international businesses facing complex legal and tax challenges.",
      features: ["International compliance", "Cross-border structuring", "Tax optimization", "Multi-jurisdiction advice"]
    },
    {
      icon: Heart,
      title: "Psychological Support for Entrepreneurs",
      description: "Compassionate psychological support to help business owners navigate the emotional challenges of financial distress.",
      features: ["Stress management", "Decision support", "Emotional guidance", "Resilience building"]
    },
    {
      icon: TrendingUp,
      title: "Cash Flow Control & Receivables Optimization",
      description: "Systematic approach to improve cash flow management and optimize accounts receivable processes.",
      features: ["Cash flow analysis", "Collection strategies", "Process optimization", "Performance monitoring"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive assessment of your business situation and challenges"
    },
    {
      step: "02",
      title: "Strategic Analysis",
      description: "Deep dive into financial, legal, and operational aspects"
    },
    {
      step: "03",
      title: "Solution Development",
      description: "Customized action plan with clear timelines and milestones"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Hands-on support throughout the entire recovery process"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-900 via-blue-800 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive <span className="text-blue-300">Business Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert guidance across legal, financial, and psychological dimensions to restore your business health
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support across all aspects of business recovery and restructuring
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Schedule Consultation
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures comprehensive support throughout your business recovery journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't wait until it's too late. Our expert team is ready to help you navigate through financial challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Request a Call Back
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
