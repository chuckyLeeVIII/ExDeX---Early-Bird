import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Github, 
  Slack, 
  Mail, 
  ExternalLink,
  Heart,
  Code,
  Shield,
  Zap
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Architecture', href: '#architecture' },
      { name: 'Serital Bug', href: '#serital-bug' },
      { name: 'Documentation', href: '#' },
    ],
    developers: [
      { name: 'API Reference', href: '#' },
      { name: 'Code Examples', href: '#code-examples' },
      { name: 'SDK Downloads', href: '#' },
      { name: 'Deployment Guide', href: '#deployment' },
    ],
    community: [
      { name: 'GitHub', href: 'https://github.com', icon: Github },
      { name: 'Slack', href: 'https://slack.com', icon: Slack },
      { name: 'Discord', href: '#', icon: ExternalLink },
      { name: 'Support', href: '#', icon: Mail },
    ],
  };

  const features = [
    { icon: Code, text: 'AI-Driven Development' },
    { icon: Shield, text: 'Enterprise Security' },
    { icon: Zap, text: 'Real-Time Monitoring' },
  ];

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Cpu className="h-10 w-10 text-primary-400" />
              </motion.div>
              <span className="text-2xl font-bold gradient-text">AlienTech</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionary AI-driven development framework with advanced error handling, 
              real-time monitoring, and the unique Serital Bug Aspect for Windows 10 64-bit systems.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-sm"
                >
                  <feature.icon className="h-4 w-4 text-primary-400" />
                  <span className="text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Developer Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Developers</h3>
              <ul className="space-y-3">
                {footerLinks.developers.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-accent-400 transition-colors duration-200 flex items-center"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Community Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-success-400 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <link.icon className="h-4 w-4" />
                      <span>{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mb-12"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2 gradient-text">
              Stay Updated
            </h3>
            <p className="text-gray-400">
              Get the latest updates on AlienTech features and releases
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>&copy; 2025 AlienTech. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Built with</span>
            <Heart className="h-4 w-4 text-error-400 hidden md:inline" />
            <span className="hidden md:inline">for developers</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-gray-500"
        >
          <p>
            This framework and its unique Serital Bug Aspect are proprietary technology. 
            Unauthorized reproduction or distribution is strictly prohibited.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;