import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Brain, Scale, Calculator } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Users,
      title: "Cross-Disciplinary Team",
      description: "Legal experts, tax consultants, restructuring specialists, and psychologists working together"
    },
    {
      icon: Brain,
      title: "Psychological Support",
      description: "Unique approach including emotional and mental health support during crisis situations"
    },
    {
      icon: Scale,
      title: "Preventing Bankruptcy",
      description: "Strategic interventions designed to avoid bankruptcy through tailored recovery plans"
    },
    {
      icon: Calculator,
      title: "Complete Hands-On Support",
      description: "Not just advice, but complete implementation support during every phase of recovery"
    }
  ];

  const benefits = [
    "Highly personal, empathetic guidance in crisis situations",
    "Complete hands-on support during every phase of recovery", 
    "Strategic, tailored intervention preventing bankruptcy",
    "Cross-disciplinary expertise under one roof",
    "International legal and tax structuring capabilities",
    "Proven track record with successful case outcomes"
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-navy-50/30"></div>
      <div 
        className="absolute top-0 right-0 w-1/3 h-full bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg')"
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              Why Choose <span className="text-blue-600">Novare</span> Consulting Group?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We stand out by combining legal, financial, fiscal, and psychological expertise under one roof, 
              providing comprehensive support that addresses all aspects of business recovery.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Get Free Assessment
              </motion.button>
              <Link to="/team">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Meet Our Team
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-100 to-navy-100 p-3 rounded-xl w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-navy-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
            <blockquote className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
              "We wish we had contacted you sooner."
            </blockquote>
            <p className="text-blue-200 text-lg">
              - A recurring sentiment from our clients who discovered the value of early intervention
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
