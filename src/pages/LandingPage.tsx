
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  LayoutDashboard, 
  PackageSearch, 
  TrendingUp, 
  DollarSign, 
  Users, 
  BrainCircuit,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-invenstory-dark text-white">
      {/* Header/Navigation */}
      <header className="relative z-10">
        <nav className="container mx-auto py-6 px-4 flex items-center justify-between">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-invenstory-primary mr-2" />
            <span className="text-2xl font-bold">Invenstory</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-invenstory-primary transition-colors">Features</a>
            <a href="#benefits" className="hover:text-invenstory-primary transition-colors">Benefits</a>
            <a href="#testimonials" className="hover:text-invenstory-primary transition-colors">Testimonials</a>
            <Link to="/login">
              <Button variant="outline" className="border-invenstory-primary text-invenstory-primary hover:bg-invenstory-primary hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-invenstory-primary hover:bg-invenstory-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-invenstory-dark-accent p-4 shadow-lg z-20 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="hover:text-invenstory-primary transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#benefits" 
                className="hover:text-invenstory-primary transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#testimonials" 
                className="hover:text-invenstory-primary transition-colors py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-invenstory-primary text-invenstory-primary hover:bg-invenstory-primary hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-invenstory-primary hover:bg-invenstory-primary/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 wave-bg overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient">AI-Powered</span> Retail Optimization Platform
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Transform your inventory management, demand forecasting, and pricing strategies with intelligent automation and data-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button size="lg" className="bg-invenstory-primary hover:bg-invenstory-primary/90 text-white font-medium">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-lg shadow-neumorph bg-invenstory-dark-accent p-2 md:p-4 border border-white/5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Invenstory Dashboard Preview" 
                  className="rounded shadow-md w-full"
                />
                <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-invenstory-primary/20 rounded-full filter blur-xl animate-pulse-light"></div>
                <div className="absolute -right-5 -top-5 w-16 h-16 bg-invenstory-secondary/20 rounded-full filter blur-xl animate-pulse-light"></div>
              </div>
              
              {/* Floating Data Elements */}
              <div className="absolute -top-8 -right-8 md:top-5 md:right-5 w-20 h-16 glass-morph rounded-lg flex items-center justify-center animate-data-wave shadow-neumorph-sm">
                <LineChart className="h-8 w-8 text-invenstory-secondary" />
              </div>
              <div className="absolute -bottom-8 md:-left-8 w-20 h-16 glass-morph rounded-lg flex items-center justify-center animate-data-wave shadow-neumorph-sm" style={{ animationDelay: "1s" }}>
                <BarChart3 className="h-8 w-8 text-invenstory-primary" />
              </div>
              <div className="absolute top-1/2 -left-4 w-20 h-16 glass-morph rounded-lg flex items-center justify-center animate-data-wave shadow-neumorph-sm" style={{ animationDelay: "2s" }}>
                <PieChart className="h-8 w-8 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-invenstory-dark-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to optimize your retail operations in one integrated platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-invenstory-dark rounded-xl p-6 shadow-neumorph border border-white/5">
              <div className="w-14 h-14 rounded-full bg-invenstory-primary/10 flex items-center justify-center mb-6">
                <LayoutDashboard className="h-7 w-7 text-invenstory-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intuitive Dashboard</h3>
              <p className="text-gray-400">
                A sleek, comprehensive command center with real-time metrics and AI-powered insights at your fingertips.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-invenstory-dark rounded-xl p-6 shadow-neumorph border border-white/5">
              <div className="w-14 h-14 rounded-full bg-invenstory-primary/10 flex items-center justify-center mb-6">
                <PackageSearch className="h-7 w-7 text-invenstory-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inventory Management</h3>
              <p className="text-gray-400">
                Track, manage, and optimize your inventory with real-time updates, alerts, and automated reordering.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-invenstory-dark rounded-xl p-6 shadow-neumorph border border-white/5">
              <div className="w-14 h-14 rounded-full bg-invenstory-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-invenstory-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Demand Forecasting</h3>
              <p className="text-gray-400">
                AI-powered predictions to anticipate customer demand and optimize stock levels for maximum efficiency.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-invenstory-dark rounded-xl p-6 shadow-neumorph border border-white/5">
              <div className="w-14 h-14 rounded-full bg-invenstory-primary/10 flex items-center justify-center mb-6">
                <DollarSign className="h-7 w-7 text-invenstory-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pricing Optimization</h3>
              <p className="text-gray-400">
                Dynamic pricing strategies based on market conditions, inventory levels, and competitor analysis.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-invenstory-dark rounded-xl p-6 shadow-neumorph border border-white/5">
              <div className="w-14 h-14 rounded-full bg-invenstory-primary/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-invenstory-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Recommendations</h3>
              <p className="text-gray-400">
                Tailored product suggestions for customers based on shopping patterns and preferences.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-invenstory-dark rounded-xl p-6 shadow-neumorph border border-white/5">
              <div className="w-14 h-14 rounded-full bg-invenstory-primary/10 flex items-center justify-center mb-6">
                <BrainCircuit className="h-7 w-7 text-invenstory-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Assistant</h3>
              <p className="text-gray-400">
                Intelligent chatbot for real-time queries, insights, and operational assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-invenstory-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="p-1 bg-gradient-to-br from-invenstory-primary to-invenstory-secondary rounded-xl">
                <div className="bg-invenstory-dark p-6 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-invenstory-dark-accent p-4 rounded-lg shadow-neumorph-sm">
                      <h4 className="text-xl font-semibold text-invenstory-primary">+30%</h4>
                      <p className="text-sm text-gray-400">Inventory Turnover</p>
                    </div>
                    <div className="bg-invenstory-dark-accent p-4 rounded-lg shadow-neumorph-sm">
                      <h4 className="text-xl font-semibold text-invenstory-secondary">-25%</h4>
                      <p className="text-sm text-gray-400">Stock Holding Costs</p>
                    </div>
                    <div className="bg-invenstory-dark-accent p-4 rounded-lg shadow-neumorph-sm">
                      <h4 className="text-xl font-semibold text-green-400">+15%</h4>
                      <p className="text-sm text-gray-400">Profit Margins</p>
                    </div>
                    <div className="bg-invenstory-dark-accent p-4 rounded-lg shadow-neumorph-sm">
                      <h4 className="text-xl font-semibold text-yellow-400">-40%</h4>
                      <p className="text-sm text-gray-400">Manual Data Entry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unlock the Benefits of <span className="text-gradient">AI-Powered</span> Retail
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-invenstory-primary/20 flex items-center justify-center mt-1">
                    <ArrowRight className="h-3 w-3 text-invenstory-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Increase Revenue</h4>
                    <p className="text-gray-400">Optimize pricing strategies and inventory levels to maximize sales and profit margins.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-invenstory-primary/20 flex items-center justify-center mt-1">
                    <ArrowRight className="h-3 w-3 text-invenstory-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Reduce Costs</h4>
                    <p className="text-gray-400">Minimize excess inventory, prevent stockouts, and streamline supply chain operations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-invenstory-primary/20 flex items-center justify-center mt-1">
                    <ArrowRight className="h-3 w-3 text-invenstory-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Enhance Customer Satisfaction</h4>
                    <p className="text-gray-400">Deliver personalized experiences and ensure product availability when customers need it.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-invenstory-primary/20 flex items-center justify-center mt-1">
                    <ArrowRight className="h-3 w-3 text-invenstory-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Save Time</h4>
                    <p className="text-gray-400">Automate routine tasks and get actionable insights without manual analysis.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-invenstory-dark-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Retailers around the world trust Invenstory to optimize their operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-invenstory-dark p-6 rounded-xl shadow-neumorph border border-white/5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-invenstory-primary/20 flex items-center justify-center mr-3">
                  <span className="text-invenstory-primary font-medium">JD</span>
                </div>
                <div>
                  <h4 className="font-medium">Jane Doe</h4>
                  <p className="text-sm text-gray-400">Retail Director, Fashion Co.</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Invenstory has transformed how we manage our inventory across 50+ stores. 
                The AI forecasting is remarkably accurate, and we've reduced stockouts by 35%."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-invenstory-dark p-6 rounded-xl shadow-neumorph border border-white/5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-invenstory-primary/20 flex items-center justify-center mr-3">
                  <span className="text-invenstory-primary font-medium">MS</span>
                </div>
                <div>
                  <h4 className="font-medium">Mike Smith</h4>
                  <p className="text-sm text-gray-400">CEO, Electronics Outlet</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The pricing optimization tools alone paid for our annual subscription in the first month. 
                Our margins have increased by 12% without sacrificing sales volume."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-invenstory-dark p-6 rounded-xl shadow-neumorph border border-white/5">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-invenstory-primary/20 flex items-center justify-center mr-3">
                  <span className="text-invenstory-primary font-medium">AL</span>
                </div>
                <div>
                  <h4 className="font-medium">Amy Liu</h4>
                  <p className="text-sm text-gray-400">Operations Manager, Grocery Chain</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Invenstory's demand forecasting has dramatically reduced our food waste while 
                ensuring we never run out of high-demand items. It's been revolutionary."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-invenstory-dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of retailers optimizing their operations with Invenstory today.
            </p>
            <Link to="/login">
              <Button size="lg" className="bg-invenstory-primary hover:bg-invenstory-primary/90 text-white font-medium">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-invenstory-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-invenstory-secondary/10 rounded-full filter blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-invenstory-dark-accent py-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <BarChart3 className="h-6 w-6 text-invenstory-primary mr-2" />
                <span className="text-xl font-bold">Invenstory</span>
              </div>
              <p className="text-gray-400 mt-4 max-w-xs">
                AI-powered retail optimization platform for inventory management, demand forecasting, and pricing optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">Integrations</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">Roadmap</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">Case Studies</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">API</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">Press</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Invenstory. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-invenstory-primary transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
