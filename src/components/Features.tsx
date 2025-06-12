import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Activity, 
  Shield, 
  Layers, 
  Users, 
  Zap,
  Eye,
  Lock,
  Code,
  GitBranch,
  MessageSquare,
  TrendingUp
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Driven Error Handling',
      description: 'Predictive modeling using machine learning algorithms to analyze code patterns and predict potential errors.',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/10',
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Track performance metrics, error rates, response times, and user interactions with session replays.',
      color: 'text-accent-400',
      bgColor: 'bg-accent-500/10',
    },
    {
      icon: Shield,
      title: 'Security Enhancements',
      description: 'Automated vulnerability scanning with bandit and secure data encryption using cryptography libraries.',
      color: 'text-success-400',
      bgColor: 'bg-success-500/10',
    },
    {
      icon: Layers,
      title: 'Modular Architecture',
      description: 'Microservices architecture with automated dependency management using pip and pipenv.',
      color: 'text-warning-400',
      bgColor: 'bg-warning-500/10',
    },
    {
      icon: Code,
      title: 'AI-Driven Debugging',
      description: 'AI-powered debugging assistant that analyzes code and suggests fixes based on best practices.',
      color: 'text-error-400',
      bgColor: 'bg-error-500/10',
    },
    {
      icon: Users,
      title: 'Collaboration Tools',
      description: 'Real-time code sharing with GitHub Live Share and automated code reviews using pylint.',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/10',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Load balancing with nginx/HAProxy and caching with Redis for improved performance.',
      color: 'text-accent-400',
      bgColor: 'bg-accent-500/10',
    },
    {
      icon: Eye,
      title: 'User-Centric Feedback',
      description: 'Comprehensive user feedback system to collect and analyze user reports for continuous improvement.',
      color: 'text-success-400',
      bgColor: 'bg-success-500/10',
    },
    {
      icon: GitBranch,
      title: 'GitHub Integration',
      description: 'Seamless integration with GitHub APIs for version control and collaborative development.',
      color: 'text-warning-400',
      bgColor: 'bg-warning-500/10',
    },
    {
      icon: MessageSquare,
      title: 'Slack Integration',
      description: 'Real-time communication and alerts through Slack integration for team collaboration.',
      color: 'text-error-400',
      bgColor: 'bg-error-500/10',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'AI-powered updates that analyze new technologies and update the framework accordingly.',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/10',
    },
    {
      icon: Lock,
      title: 'System Profiling',
      description: 'Advanced system profiling for Windows 10 64-bit configurations with tailored solutions.',
      color: 'text-accent-400',
      bgColor: 'bg-accent-500/10',
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            AlienTech combines cutting-edge AI technology with robust development tools 
            to create the ultimate framework for modern software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`${feature.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;