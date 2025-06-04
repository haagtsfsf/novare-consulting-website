import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-blue-600/70"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Preventing <span className="text-blue-300">Bankruptcy</span><br />
            Through Expert <span className="text-blue-300">Guidance</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Novare Consulting Group combines legal, financial, fiscal, and psychological expertise 
            to provide comprehensive business restructuring and debt relief solutions.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Request a Call Back
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Shield className="h-8 w-8 text-blue-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Comprehensive Protection</h3>
                <p className="text-blue-100 text-sm">Legal, financial, and psychological support under one roof</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Users className="h-8 w-8 text-blue-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-blue-100 text-sm">Cross-disciplinary specialists working together for your success</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Award className="h-8 w-8 text-blue-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-blue-100 text-sm">Successfully preventing bankruptcies through strategic intervention</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
