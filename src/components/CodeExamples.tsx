import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Copy, Check, Terminal, Database, Shield, Zap } from 'lucide-react';

const CodeExamples = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const codeExamples = [
    {
      title: 'AI-Driven Error Handling',
      icon: Code,
      language: 'python',
      code: `import logging
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# AI-powered predictive error handling
def predict_errors(code_features):
    """Predict potential errors using machine learning"""
    X_train, X_test, y_train, y_test = train_test_split(
        code_features, error_labels, test_size=0.2
    )
    
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X_train, y_train)
    predictions = model.predict(X_test)
    
    return predictions

# Enhanced logging with context
logging.basicConfig(
    filename='alientech_errors.log',
    level=logging.ERROR,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

class AlienTechErrorHandler:
    def __init__(self):
        self.ml_model = self.load_trained_model()
    
    def handle_error(self, error_context):
        prediction = self.ml_model.predict([error_context])
        suggested_fix = self.generate_fix(prediction)
        return suggested_fix`,
    },
    {
      title: 'Real-Time Monitoring',
      icon: Terminal,
      language: 'python',
      code: `import prometheus_client
from prometheus_client import Counter, Histogram, Gauge
import time

# Prometheus metrics for real-time monitoring
REQUEST_COUNT = Counter('requests_total', 'Total Requests')
REQUEST_LATENCY = Histogram('request_duration_seconds', 'Request latency')
ACTIVE_USERS = Gauge('active_users', 'Active Users')

class AlienTechMonitor:
    def __init__(self):
        self.start_time = time.time()
        
    @REQUEST_LATENCY.time()
    def monitor_request(self, func):
        """Decorator for monitoring request performance"""
        def wrapper(*args, **kwargs):
            REQUEST_COUNT.inc()
            start_time = time.time()
            
            try:
                result = func(*args, **kwargs)
                return result
            except Exception as e:
                self.log_error(e)
                raise
            finally:
                duration = time.time() - start_time
                self.track_performance(duration)
        
        return wrapper
    
    def track_performance(self, duration):
        """Track performance metrics"""
        if duration > 1.0:  # Alert for slow requests
            self.send_alert(f"Slow request detected: {duration}s")

# Start Prometheus metrics server
prometheus_client.start_http_server(8000)`,
    },
    {
      title: 'Security Implementation',
      icon: Shield,
      language: 'python',
      code: `from cryptography.fernet import Fernet
import subprocess
import hashlib

class AlienTechSecurity:
    def __init__(self):
        self.cipher_key = Fernet.generate_key()
        self.cipher_suite = Fernet(self.cipher_key)
    
    def encrypt_sensitive_data(self, data):
        """Encrypt sensitive data using Fernet"""
        if isinstance(data, str):
            data = data.encode()
        
        encrypted_data = self.cipher_suite.encrypt(data)
        return encrypted_data
    
    def decrypt_data(self, encrypted_data):
        """Decrypt data safely"""
        try:
            decrypted_data = self.cipher_suite.decrypt(encrypted_data)
            return decrypted_data.decode()
        except Exception as e:
            self.log_security_event(f"Decryption failed: {e}")
            return None
    
    def run_vulnerability_scan(self, target_path):
        """Run automated vulnerability scanning with bandit"""
        try:
            result = subprocess.run([
                'bandit', '-r', target_path, '-f', 'json'
            ], capture_output=True, text=True)
            
            return self.parse_scan_results(result.stdout)
        except Exception as e:
            self.log_security_event(f"Vulnerability scan failed: {e}")
    
    def hash_password(self, password):
        """Secure password hashing"""
        salt = hashlib.sha256().hexdigest()
        return hashlib.pbkdf2_hmac('sha256', 
                                   password.encode(), 
                                   salt.encode(), 
                                   100000)`,
    },
    {
      title: 'Serital Bug System',
      icon: Zap,
      language: 'python',
      code: `import platform
import psutil
import winreg
from sklearn.cluster import KMeans
import numpy as np

class SeritalBugAspect:
    def __init__(self):
        self.system_profile = self.create_system_profile()
        self.bug_patterns = self.load_bug_patterns()
        
    def create_system_profile(self):
        """Create detailed Windows 10 64-bit system profile"""
        profile = {
            'os_version': platform.platform(),
            'architecture': platform.architecture(),
            'processor': platform.processor(),
            'memory': psutil.virtual_memory().total,
            'python_version': platform.python_version(),
            'installed_packages': self.get_installed_packages(),
            'registry_keys': self.scan_relevant_registry_keys()
        }
        return profile
    
    def analyze_bug_patterns(self, error_logs):
        """Use ML to analyze bug patterns specific to this system"""
        features = self.extract_features(error_logs)
        
        # Cluster similar bugs
        kmeans = KMeans(n_clusters=5)
        clusters = kmeans.fit_predict(features)
        
        # Generate system-specific fixes
        fixes = []
        for cluster_id in np.unique(clusters):
            cluster_bugs = [bug for i, bug in enumerate(error_logs) 
                          if clusters[i] == cluster_id]
            fix = self.generate_targeted_fix(cluster_bugs)
            fixes.append(fix)
        
        return fixes
    
    def scan_relevant_registry_keys(self):
        """Scan Windows registry for relevant configuration"""
        keys_to_check = [
            r"SOFTWARE\\Python",
            r"SOFTWARE\\Microsoft\\Windows\\CurrentVersion",
            r"SYSTEM\\CurrentControlSet\\Services"
        ]
        
        registry_data = {}
        for key_path in keys_to_check:
            try:
                with winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, key_path) as key:
                    registry_data[key_path] = self.read_registry_values(key)
            except Exception as e:
                self.log_registry_error(key_path, e)
        
        return registry_data
    
    def generate_targeted_fix(self, similar_bugs):
        """Generate fixes tailored to this specific system configuration"""
        fix_strategies = {
            'memory_issues': self.fix_memory_problems,
            'registry_conflicts': self.fix_registry_issues,
            'dependency_errors': self.fix_dependency_conflicts,
            'permission_errors': self.fix_permission_issues
        }
        
        bug_type = self.classify_bug_type(similar_bugs)
        return fix_strategies.get(bug_type, self.generic_fix)(similar_bugs)`,
    },
  ];

  const copyToClipboard = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(-1), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <section id="code-examples" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Code Examples</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore real implementation examples showcasing AlienTech's powerful features 
            and AI-driven capabilities in action.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {codeExamples.map((example, index) => (
            <motion.button
              key={example.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                  : 'glass-effect text-gray-300 hover:text-white hover:bg-white/20'
              }`}
            >
              <example.icon className="h-5 w-5" />
              <span className="hidden sm:inline">{example.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Code Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            {/* Code Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-error-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 font-mono text-sm">
                  {codeExamples[activeTab].title.toLowerCase().replace(/\s+/g, '_')}.py
                </span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => copyToClipboard(codeExamples[activeTab].code, activeTab)}
                className="flex items-center space-x-2 px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-sm"
              >
                {copiedIndex === activeTab ? (
                  <>
                    <Check className="h-4 w-4 text-success-400" />
                    <span className="text-success-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-gray-300" />
                    <span className="text-gray-300">Copy</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Code Content */}
            <div className="p-6">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto">
                <code>{codeExamples[activeTab].code}</code>
              </pre>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Implementation Notes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="glass-effect p-6 rounded-xl text-center">
            <Database className="h-8 w-8 text-primary-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Machine Learning</h3>
            <p className="text-sm text-gray-400">Scikit-learn for predictive modeling</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl text-center">
            <Terminal className="h-8 w-8 text-accent-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Monitoring</h3>
            <p className="text-sm text-gray-400">Prometheus for real-time metrics</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl text-center">
            <Shield className="h-8 w-8 text-success-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm text-gray-400">Cryptography for data protection</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl text-center">
            <Zap className="h-8 w-8 text-warning-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Windows Integration</h3>
            <p className="text-sm text-gray-400">Native Windows API integration</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeExamples;