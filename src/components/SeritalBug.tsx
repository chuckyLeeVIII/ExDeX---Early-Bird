import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Cpu, Target, Zap, Settings, BarChart3 } from 'lucide-react';

const SeritalBug = () => {
  const features = [
    {
      icon: Target,
      title: 'System Profiling',
      description: 'Captures specific Windows 10 64-bit configurations and software versions for targeted analysis.',
    },
    {
      icon: BarChart3,
      title: 'Bug Pattern Analysis',
      description: 'Uses machine learning to analyze bug patterns specific to local configurations.',
    },
    {
      icon: Settings,
      title: 'Customized Fixes',
      description: 'Provides tailored solutions based on your unique system environment and setup.',
    },
  ];

  return (
    <section id="serital-bug" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Bug className="h-16 w-16 text-error-400" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-error-400/20 rounded-full blur-xl"
              />
            </motion.div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Serital Bug Aspect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionary bug detection and resolution system specifically designed for 
            Windows 10 64-bit environments, leveraging machine learning for personalized debugging.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 group"
              >
                <div className="bg-error-500/20 p-3 rounded-lg group-hover:bg-error-500/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-error-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-error-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">System Analysis</h3>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Cpu className="h-6 w-6 text-primary-400" />
                </motion.div>
              </div>

              {/* System Info */}
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">OS Version</span>
                  <span className="text-primary-400 font-mono">Windows 10 64-bit</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">Python Version</span>
                  <span className="text-success-400 font-mono">3.12.0</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300">Bugs Detected</span>
                  <span className="text-error-400 font-mono">3 Critical</span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Analysis Progress</span>
                    <span className="text-primary-400">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '87%' }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Fix Generation</span>
                    <span className="text-success-400">94%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '94%' }}
                      transition={{ duration: 2, delay: 1 }}
                      className="bg-gradient-to-r from-success-500 to-success-400 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-error-600 to-error-500 hover:from-error-500 hover:to-error-400 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Zap className="h-5 w-5" />
                <span>Apply Serital Fixes</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
            Technical Implementation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-400">Machine Learning Models</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Random Forest for bug classification</li>
                <li>• Neural networks for pattern recognition</li>
                <li>• Ensemble methods for fix recommendation</li>
                <li>• Continuous learning from user feedback</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent-400">System Integration</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Windows API integration</li>
                <li>• Registry analysis and monitoring</li>
                <li>• Process and memory profiling</li>
                <li>• Real-time system state tracking</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeritalBug;