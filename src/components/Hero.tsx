import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text">AlienTech</span>
            <br />
            <span className="text-gray-300">AI-Driven Framework</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Revolutionary development framework with AI-powered error handling, 
            real-time monitoring, and the unique Serital Bug Aspect for Windows 10 64-bit systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
          >
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
              <Brain className="h-5 w-5 text-primary-400" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
              <Zap className="h-5 w-5 text-accent-400" />
              <span>Real-Time</span>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-success-400" />
              <span>Secure</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(14, 165, 233, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect hover:bg-white/20 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 neon-border"
            >
              View Documentation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-16 bg-primary-500/20 rounded-lg blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-12 h-12 bg-accent-500/20 rounded-full blur-sm"
        />
      </div>
    </section>
  );
};

export default Hero;