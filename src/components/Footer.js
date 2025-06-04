import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const services = [
    "Business Restructuring & Recovery",
    "Debt Relief & Creditor Negotiation", 
    "Pre-bankruptcy Guidance",
    "Legal Advisory in Insolvency",
    "Tax Debt Management",
    "International Legal Structuring",
    "Psychological Support",
    "Cash Flow Optimization"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Emergency Help", href: "/emergency" }
  ];

  return (
    <footer className="bg-navy-900 text-white">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-navy-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Save Your Business?</h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Don't let financial challenges destroy what you've built. Contact us today for expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Call Emergency Line
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-navy-700 p-2 rounded-lg">
                  <span className="text-white font-bold text-xl">NCG</span>
                </div>
                <div>
                  <div className="text-xl font-bold">NOVARE</div>
                  <div className="text-xs text-blue-300 font-medium">CONSULTING GROUP</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Business Restructuring & Legal Advisory. Combining legal, financial, fiscal, 
                and psychological expertise to prevent bankruptcy and restore business health.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">info@novareconsultinggroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+31 85 250 2065</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Piet Heinkade 55, 1019 GM Amsterdam, The Netherlands</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="/services" 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h5 className="text-md font-semibold mb-4 text-blue-400">Business Hours</h5>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>Monday - Friday: 8:00 - 18:00</div>
                  <div>Saturday: 9:00 - 14:00</div>
                  <div>Sunday: Emergency only</div>
                  <div className="text-red-400 font-medium">24/7 Emergency Line Available</div>
                </div>
              </div>
            </motion.div>

            {/* Newsletter & Emergency */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">Stay Informed</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Subscribe to our newsletter for business recovery insights and legal updates.
              </p>
              
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200 mb-3"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Subscribe
                </motion.button>
              </div>

              {/* Emergency Box */}
              <div className="bg-red-600/20 border border-red-400/30 rounded-lg p-4">
                <h5 className="text-red-400 font-semibold mb-2">Emergency Assistance</h5>
                <p className="text-gray-300 text-sm mb-2">
                  Facing immediate bankruptcy proceedings or urgent financial crisis?
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  Call Emergency Line
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2018 Novare Consulting Group. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
