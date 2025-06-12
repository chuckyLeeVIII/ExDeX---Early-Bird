import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cloud, Cpu, Network, Monitor } from 'lucide-react';

const Architecture = () => {
  const components = [
    {
      icon: Cpu,
      title: 'AI Core Engine',
      description: 'Machine learning algorithms for predictive error handling and code analysis',
      position: 'top-10 left-1/2 transform -translate-x-1/2',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/20',
    },
    {
      icon: Server,
      title: 'Microservices Layer',
      description: 'Modular architecture with independent service components',
      position: 'top-1/3 left-10',
      color: 'text-accent-400',
      bgColor: 'bg-accent-500/20',
    },
    {
      icon: Database,
      title: 'Data Storage',
      description: 'Secure data management with encryption and caching',
      position: 'top-1/3 right-10',
      color: 'text-success-400',
      bgColor: 'bg-success-500/20',
    },
    {
      icon: Monitor,
      title: 'Real-Time Monitor',
      description: 'Performance tracking and session replay capabilities',
      position: 'bottom-1/3 left-10',
      color: 'text-warning-400',
      bgColor: 'bg-warning-500/20',
    },
    {
      icon: Network,
      title: 'Integration Hub',
      description: 'GitHub, Slack, and third-party service integrations',
      position: 'bottom-1/3 right-10',
      color: 'text-error-400',
      bgColor: 'bg-error-500/20',
    },
    {
      icon: Cloud,
      title: 'Deployment Engine',
      description: 'Load balancing and scalable cloud infrastructure',
      position: 'bottom-10 left-1/2 transform -translate-x-1/2',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/20',
    },
  ];

  return (
    <section id="architecture" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">System Architecture</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A sophisticated, modular architecture designed for scalability, 
            performance, and seamless integration across all development workflows.
          </p>
        </motion.div>

        <div className="relative h-96 md:h-[500px] glass-effect rounded-2xl p-8 overflow-hidden">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(14, 165, 233, 0.5)" />
                <stop offset="100%" stopColor="rgba(217, 70, 239, 0.5)" />
              </linearGradient>
            </defs>
            {/* Central hub connections */}
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              x1="50%" y1="20%" x2="20%" y2="40%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
              x1="50%" y1="20%" x2="80%" y2="40%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.9 }}
              x1="50%" y1="80%" x2="20%" y2="60%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.1 }}
              x1="50%" y1="80%" x2="80%" y2="60%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>

          {/* Architecture Components */}
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`absolute ${component.position} z-10`}
            >
              <div className={`${component.bgColor} p-4 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer`}>
                <div className="flex flex-col items-center text-center space-y-2">
                  <component.icon className={`h-8 w-8 ${component.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-white text-sm">{component.title}</h3>
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap max-w-48 text-center">
                    {component.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Central Data Flow Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center animate-pulse-slow">
              <div className="w-8 h-8 rounded-full bg-white/20 animate-ping"></div>
            </div>
          </motion.div>
        </div>

        {/* Architecture Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3 text-primary-400">Scalable</h3>
            <p className="text-gray-400">Microservices architecture ensures horizontal scaling and independent component updates.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3 text-accent-400">Resilient</h3>
            <p className="text-gray-400">AI-driven error handling and real-time monitoring provide robust fault tolerance.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3 text-success-400">Secure</h3>
            <p className="text-gray-400">End-to-end encryption and automated vulnerability scanning protect your applications.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;