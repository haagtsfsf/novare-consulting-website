import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Managing Director, Tech Startup",
      company: "Amsterdam-based SaaS Company",
      content: "We wish we had contacted Novare sooner. Their cross-disciplinary approach not only saved our business but also provided the emotional support we desperately needed during our darkest period.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/7789849/pexels-photo-7789849.jpeg"
    },
    {
      name: "CEO, Manufacturing Company",
      company: "Rotterdam Industrial Firm", 
      content: "The psychological support alongside the financial restructuring was game-changing. Novare's team understood that business recovery isn't just about numbers—it's about people too.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497701175-00c200fd57f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8Ymx1ZXwxNzQ4ODc3NzEwfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      name: "Founder, Retail Chain",
      company: "Multi-location Business",
      content: "Their hands-on approach during implementation made all the difference. Novare didn't just give us advice—they worked alongside us every step of the way to execute the recovery plan.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/418285/pexels-photo-418285.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Client <span className="text-blue-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from business leaders who successfully navigated financial challenges with our expert guidance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-blue-600 rounded-full p-3">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-blue-200"
                  style={{
                    backgroundImage: `url('${testimonial.avatar}')`
                  }}
                ></div>
                <div>
                  <div className="font-semibold text-navy-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-700 font-medium">Success Rate</div>
            <div className="text-sm text-gray-600 mt-1">Businesses successfully restructured</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-700 font-medium">Companies Helped</div>
            <div className="text-sm text-gray-600 mt-1">Across various industries</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-gray-700 font-medium">Years Experience</div>
            <div className="text-sm text-gray-600 mt-1">In business restructuring</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
