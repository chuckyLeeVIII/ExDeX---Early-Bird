import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Settings, 
  Play, 
  CheckCircle, 
  ArrowRight,
  Terminal,
  Package,
  Rocket
} from 'lucide-react';

const Deployment = () => {
  const deploymentSteps = [
    {
      icon: Download,
      title: 'Setup Environment',
      description: 'Install Python 3.12 and create virtual environment',
      command: 'python -m venv alientech_env',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/10',
    },
    {
      icon: Package,
      title: 'Install Dependencies',
      description: 'Install required packages and AI libraries',
      command: 'pip install -r requirements.txt',
      color: 'text-accent-400',
      bgColor: 'bg-accent-500/10',
    },
    {
      icon: Settings,
      title: 'Configure Components',
      description: 'Set up AI models, monitoring, and security',
      command: 'python setup_alientech.py',
      color: 'text-success-400',
      bgColor: 'bg-success-500/10',
    },
    {
      icon: Play,
      title: 'Deploy Services',
      description: 'Start microservices and monitoring systems',
      command: 'python deploy.py --production',
      color: 'text-warning-400',
      bgColor: 'bg-warning-500/10',
    },
    {
      icon: CheckCircle,
      title: 'Verify Installation',
      description: 'Run tests and validate system functionality',
      command: 'python -m pytest tests/',
      color: 'text-error-400',
      bgColor: 'bg-error-500/10',
    },
  ];

  const requirements = [
    'Python 3.12+',
    'Windows 10 64-bit',
    '8GB RAM minimum',
    'Docker (optional)',
    'Git for version control',
  ];

  return (
    <section id="deployment" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Deployment Guide</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get AlienTech up and running in your environment with our comprehensive 
            deployment guide and automated setup process.
          </p>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-primary-400">
            System Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {requirements.map((req, index) => (
              <motion.div
                key={req}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg text-center"
              >
                <CheckCircle className="h-6 w-6 text-success-400 mx-auto mb-2" />
                <span className="text-sm text-gray-300">{req}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deployment Steps */}
        <div className="space-y-8">
          {deploymentSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-8"
            >
              {/* Step Number and Icon */}
              <div className="flex-shrink-0">
                <div className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center relative`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                  <div className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-grow glass-effect p-6 rounded-xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className={`text-xl font-semibold mb-2 ${step.color}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Command */}
                  <div className="lg:w-1/3">
                    <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <Terminal className="h-4 w-4 text-gray-400" />
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-white transition-colors"
                          onClick={() => navigator.clipboard.writeText(step.command)}
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </motion.button>
                      </div>
                      <code className="text-primary-400">{step.command}</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow (except for last step) */}
              {index < deploymentSteps.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className="h-6 w-6 text-gray-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect p-8 rounded-2xl"
        >
          <div className="text-center mb-8">
            <Rocket className="h-12 w-12 text-accent-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Quick Start Script
            </h3>
            <p className="text-gray-400 mb-6">
              Use our automated installation script for a one-command setup
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">PowerShell (Run as Administrator)</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => navigator.clipboard.writeText('curl -sSL https://alientech.dev/install.ps1 | powershell')}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </motion.button>
            </div>
            <code className="text-primary-400">
              curl -sSL https://alientech.dev/install.ps1 | powershell
            </code>
          </div>

          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(217, 70, 239, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <Download className="h-5 w-5" />
              <span>Download AlienTech</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Deployment;