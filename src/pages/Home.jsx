import React from 'react';
import { Shield, Clock, Heart, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Dog Walking',
      description: 'Energetic walks tailored to your dog\'s fitness level and personality.',
      rate: 'R150 / session',
      icon: <Clock className="h-8 w-8 text-primary-600" />,
    },
    {
      title: 'Pet Sitting',
      description: 'Professional care in the comfort of your home. We keep your pets happy while you are away.',
      rate: 'R200 / visit',
      icon: <Shield className="h-8 w-8 text-primary-600" />,
    },
    {
      title: 'Overnight Care',
      description: 'Dedicated overnight stays for pets that need extra company and security.',
      rate: 'R450 / night',
      icon: <Heart className="h-8 w-8 text-primary-600" />,
    },
    {
      title: 'Grooming',
      description: 'Premium grooming services to keep your pets looking and feeling their best.',
      rate: 'R350 / session',
      icon: <Star className="h-8 w-8 text-primary-600" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2000" 
            alt="Happy dog and cat" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-600 leading-tight mb-6">
              Professional, Loving Care <span className="text-gray-900">for Your Family Members</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-xl">
              Premium pet care services operating across South Africa. We give you peace of mind while your pets get the royal treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center">
                Book a Service <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/about" className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all border border-gray-200 shadow-md flex items-center justify-center">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-base font-bold text-secondary-500 uppercase tracking-widest mb-3">Our Services & Rates</h2>
            <p className="text-4xl font-extrabold text-gray-900 mb-6">Tailored Care for Every Pet</p>
            <p className="text-lg text-gray-600">We offer a wide range of professional services designed to meet the unique needs of your furry family members.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full">
                <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {React.cloneElement(service.icon, { className: 'h-8 w-8 transition-colors' })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-accent-500 font-bold mb-4">{service.rate}</div>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Subscription Package */}
          <div className="max-w-4xl mx-auto bg-primary-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
             <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary-500 rounded-full opacity-50 blur-2xl" />
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Daily Walkies Package</h3>
                  <p className="text-primary-100 text-lg mb-0">The ultimate subscription for busy owners. Guaranteed daily exercise and enrichment for your best friend.</p>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-5xl font-extrabold mb-2">R2,500</div>
                  <div className="text-primary-100 font-bold mb-6">Per Month</div>
                  <Link to="/contact" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                    Subscribe Now
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to give your pet the best?</h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Book your free consultation today and discover why KTPS is the most trusted pet service in the region.
          </p>
          <Link to="/contact" className="bg-white text-primary-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-50 transition-all shadow-2xl">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
