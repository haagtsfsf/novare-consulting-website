import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronDown, ChevronUp, Award, Users, Shield } from 'lucide-react';

const Team = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Joost van der Linden",
      title: "Founder & Senior Partner",
      email: "j.vanderlinden@novareconsultinggroup.com",
      photo: "/images/Joost-van-der-linden.png",
      shortBio: "Joost is the founder of Novare Consulting Group and a leading expert in restructuring and legal advisory for SMEs. With sharp strategic insight and deep empathy, he supports business owners through financial crises with clarity and care. Clients often say, \"We wish we had contacted you sooner.\"",
      longBio: "Joost van der Linden is the founder and senior partner of Novare Consulting Group, where he leads restructuring and legal advisory for SMEs in crisis. His career is defined by the ability to quickly assess complex situations and craft clear, practical solutions. He combines sharp analytical skills with deep human empathy—understanding the emotional toll financial stress takes on business owners and teams.\n\nHe has guided numerous companies through reorganization and legal restructuring, earning a reputation for calm, strategic leadership under pressure. Joost provides not only effective business strategies but also personal reassurance. His work helps clients regain direction and confidence when it matters most. The feedback he hears most? \"We wish we had contacted you sooner.\"",
      expertise: ["Restructuring", "Legal Advisory", "Crisis Strategy"]
    },
    {
      id: 2,
      name: "Jan de Vries",
      title: "Founder & Senior Partner",
      email: "j.devries@novareconsultinggroup.com",
      photo: "/images/Jan-de-Vries.png",
      shortBio: "Jan is co-founder of Novare Consulting Group and an expert in financial restructuring and crisis support for SMEs. He is known for his calm, focused approach, helping entrepreneurs regain control, stability, and strategic clarity in turbulent times.",
      longBio: "As co-founder and senior partner of Novare Consulting Group, Jan de Vries brings over 20 years of experience in financial restructuring and strategic crisis management. He works closely with SMEs to analyze structures, negotiate with creditors, and develop realistic, sustainable turnaround plans.\n\nJan is highly regarded for his composed presence and clear communication. He excels at guiding clients through uncertainty—balancing financial logic with a deep understanding of people. Entrepreneurs value his ability to restore calm and focus during high-pressure situations.\n\nAt Novare, Jan leads multiple crisis response teams and contributes to long-term recovery strategies. His insight, experience, and reassuring leadership make him a trusted guide for businesses navigating critical phases.",
      expertise: ["Financial Restructuring", "Crisis Management", "Strategy"]
    },
    {
      id: 3,
      name: "Constantijn van Heumen",
      title: "Tax Advisor",
      email: "c.vanheumen@novareconsultinggroup.com",
      photo: "/images/Constantijn-van-Heumen.png",
      shortBio: "Constantijn specializes in tax resolution and negotiations with the Dutch Tax Authority. He brings clarity and structure to complex tax problems, helping entrepreneurs regain control and avoid escalation.",
      longBio: "Constantijn van Heumen is a tax advisor at Novare Consulting Group, focused on resolving tax issues for companies under financial pressure. He works closely with the Dutch Tax Authority on behalf of clients, negotiating payment arrangements and reducing risk.\n\nHis strength lies in turning complexity into clarity. With a strong legal and fiscal background, he assesses risks and builds workable solutions that avoid escalation. Clients trust his pragmatic mindset, attention to detail, and ability to communicate clearly.\n\nAt Novare, Constantijn leads all tax-related matters in restructuring projects, providing essential guidance at the intersection of law, finance, and compliance.",
      expertise: ["Tax Resolution", "Dutch Tax Authority Negotiation"]
    },
    {
      id: 4,
      name: "Sanne Walkis",
      title: "Financial Specialist – Accounts Receivable",
      email: "s.walkis@novareconsultinggroup.com",
      photo: "/images/Sanne-Walkis.png",
      shortBio: "Sanne supports SMEs in recovering outstanding invoices and improving cash flow. With a practical and firm approach, she strengthens financial stability without damaging client relationships.",
      longBio: "Sanne Walkis is a specialist in accounts receivable and cash flow recovery at Novare Consulting Group. She helps companies regain control over delayed payments, strained customer accounts, and liquidity challenges.\n\nWith strong process insight and communication skills, she builds payment plans and designs collection strategies tailored to each client. Sanne is known for her fair yet firm approach, improving outcomes while preserving business relationships.\n\nHer work reduces financial pressure and improves daily operations. Within Novare, she leads initiatives in payment negotiations and receivables optimization—restoring breathing room for struggling businesses.",
      expertise: ["Accounts Receivable", "Collections", "Cash Flow"]
    },
    {
      id: 5,
      name: "Elise Marquet",
      title: "International Legal & Tax Consultant",
      email: "e.marquet@novareconsultinggroup.com",
      photo: "/images/Elise-Marquet.png",
      shortBio: "Elise is an expert in international tax and legal structuring. She supports companies with cross-border operations by simplifying complex matters and offering clear, strategic advice tailored to global challenges.",
      longBio: "Elise Marquet is an international legal and tax consultant at Novare Consulting Group. She specializes in cross-border legal structures, compliance, and tax optimization for companies with international scope.\n\nHer expertise includes treaty application, corporate structuring, and transfer pricing. With a calm, professional presence, Elise simplifies complex legal frameworks and helps clients build sustainable international operations.\n\nClients appreciate her ability to balance technical precision with practical advice. At Novare, she leads all international projects, focusing on risk management, regulatory alignment, and growth strategy across jurisdictions.",
      expertise: ["International Tax", "Legal Structuring", "Risk Management"]
    },
    {
      id: 6,
      name: "Sophie Boeren",
      title: "Client Relations & Communications Manager",
      email: "s.boeren@novareconsultinggroup.com",
      photo: "/images/Sophie-Boeren.png",
      shortBio: "Sophie is Novare's first point of contact and manages all communication with clarity and care. She ensures that clients feel informed, respected, and supported from first contact to resolution.",
      longBio: "Sophie Boeren is the communications manager at Novare Consulting Group. She handles all client interactions—ensuring entrepreneurs feel heard, informed, and supported at every stage of the process.\n\nHer background in communication and service allows her to translate complex topics into accessible language. She brings empathy, precision, and structure to conversations, even in sensitive situations.\n\nAt Novare, Sophie plays a key role in shaping the client experience. Her calm demeanor and clear communication help clients stay grounded and confident throughout challenging processes.",
      expertise: ["Client Communication", "Relationship Management"]
    },
    {
      id: 7,
      name: "Jifke van Gils",
      title: "Psychologist & Business Consultant",
      email: "j.vangils@novareconsultinggroup.com",
      photo: "/images/Jifke-van-Gils.png",
      shortBio: "Jifke supports entrepreneurs and teams during transitions. She combines psychological insight with business acumen to improve communication, restore trust, and strengthen resilience in times of change.",
      longBio: "Jifke van Gils is a psychologist and business consultant at Novare Consulting Group. She focuses on the human side of restructuring—helping entrepreneurs and teams deal with stress, uncertainty, and leadership challenges.\n\nHer background in organizational psychology gives her a unique edge in high-pressure environments. Jifke provides support around communication, trust rebuilding, and team dynamics—bringing structure and clarity during difficult transitions.\n\nShe is valued for her empathetic yet grounded approach, making complex emotional processes easier to navigate. At Novare, she leads the psychological support for restructuring projects and crisis leadership.",
      expertise: ["Organizational Psychology", "Leadership", "Resilience"]
    },
    {
      id: 8,
      name: "Quirine de Vries",
      title: "Legal Specialist – Bankruptcy Law",
      email: "q.devries@novareconsultinggroup.com",
      photo: "/images/Quirine-de-Vries.png",
      shortBio: "Quirine advises SMEs on bankruptcy and liability risk. She helps businesses avoid insolvency, limit exposure, and regain control through strategic legal planning.",
      longBio: "Quirine de Vries is a legal expert in insolvency and bankruptcy law at Novare Consulting Group. She supports entrepreneurs at critical legal turning points—analyzing risks, protecting directors, and exploring paths forward through WHOA or restructuring.\n\nHer advice is clear, grounded, and practical. Quirine is known for her legal accuracy and ability to stay calm and solution-focused, even under intense pressure.\n\nShe leads legal workstreams around insolvency risk, liability protection, and creditor negotiations. Her guidance often makes the difference between crisis and recovery.",
      expertise: ["Insolvency Law", "Liability", "Crisis Legal Strategy"]
    },
    {
      id: 9,
      name: "Meike Tonis",
      title: "Office Manager",
      email: "m.tonis@novareconsultinggroup.com",
      photo: "/images/Meike-Tonis.png",
      shortBio: "Meike keeps Novare's daily operations running smoothly. She brings structure, calm, and reliability—supporting consultants and clients with seamless coordination.",
      longBio: "Meike Tonis is the office manager at Novare Consulting Group. She oversees operations, planning, and internal coordination—keeping everything on track behind the scenes.\n\nKnown for her calm professionalism and hands-on mentality, Meike manages logistics, supports consultants, and ensures that the work environment stays efficient and focused.\n\nClients and colleagues alike rely on her for consistency, clarity, and trust. Meike plays a vital role in creating the foundation where others can focus, serve, and deliver.",
      expertise: ["Office Management", "Operations", "Internal Coordination"]
    }
  ];

  const toggleExpanded = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

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
              Meet Our <span className="text-blue-300">Expert Team</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Cross-disciplinary specialists combining legal, financial, and psychological expertise 
              to guide your business through challenging times
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-navy-50 rounded-2xl p-8"
            >
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-navy-900 mb-2">9</h3>
              <p className="text-gray-600">Expert Team Members</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-navy-50 rounded-2xl p-8"
            >
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-navy-900 mb-2">20+</h3>
              <p className="text-gray-600">Years Combined Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-navy-50 rounded-2xl p-8"
            >
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-navy-900 mb-2">200+</h3>
              <p className="text-gray-600">Businesses Successfully Helped</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
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
              Our <span className="text-blue-600">Professional Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead Novare Consulting Group with expertise, 
              empathy, and unwavering commitment to your business success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Member Header */}
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Profile Photo */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-24 h-24 rounded-2xl bg-cover bg-center border-2 border-blue-200 shadow-lg"
                        style={{
                          backgroundImage: `url('${member.photo}')`
                        }}
                      ></div>
                    </div>
                    
                    {/* Member Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
                      
                      {/* Contact */}
                      <div className="flex items-center space-x-2 mb-4">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                        >
                          {member.email}
                        </a>
                      </div>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Short Bio */}
                  <div className="mt-6">
                    <p className="text-gray-700 leading-relaxed">{member.shortBio}</p>
                  </div>
                  
                  {/* Expand Button */}
                  <button
                    onClick={() => toggleExpanded(member.id)}
                    className="mt-6 flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    <span>{expandedMember === member.id ? 'Show Less' : 'Read Full Bio'}</span>
                    {expandedMember === member.id ? 
                      <ChevronUp className="h-4 w-4" /> : 
                      <ChevronDown className="h-4 w-4" />
                    }
                  </button>
                </div>
                
                {/* Expanded Bio */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedMember === member.id ? 'auto' : 0,
                    opacity: expandedMember === member.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 border-t border-gray-100">
                    <div className="pt-6">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4">Full Biography</h4>
                      {member.longBio.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                      
                      {/* Contact Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = `mailto:${member.email}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Contact {member.name.split(' ')[0]}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Work with Our Expert Team?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our experienced professionals are standing by to help guide your business through its challenges.
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
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
