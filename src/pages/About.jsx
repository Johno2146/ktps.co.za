import React from 'react';
import { Heart, Users, Award, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
                Our Passion is <span className="text-primary-600">Your Pets</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Kaylea and Tenielles' Pet Services (KTPS) was born out of a simple idea: every pet deserves to be treated like family. Founded in South Africa, we've grown from a small local service to a premium pet care provider.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We understand that your pets are more than just animals—they're beloved members of your household. That's why we've dedicated ourselves to providing the highest level of care, security, and affection.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Two founders with dogs" 
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose KTPS?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our values define everything we do and how we care for your pets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Personalized Care', desc: 'Every pet is unique. We tailor our services to match their personality and needs.', icon: <Heart /> },
              { title: 'Highly Professional', desc: 'Our team is trained, certified, and fully insured for your peace of mind.', icon: <Award /> },
              { title: 'Absolute Reliability', desc: 'We show up on time, every time. You can count on us no matter what.', icon: <ShieldCheck /> },
              { title: 'Community Focused', desc: 'We are proud to serve the South African pet owner community.', icon: <Users /> }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="bg-primary-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-primary-600">
                  {React.cloneElement(value.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Meet the Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div>
              <div className="aspect-square bg-gray-200 rounded-3xl mb-8 overflow-hidden shadow-lg">
                <img src="/kaylea.jpg" alt="Kaylea" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Kaylea</h3>
              <p className="text-primary-600 font-bold mb-4 uppercase tracking-wider">Co-Founder</p>
            </div>
            <div>
              <div className="aspect-square bg-gray-200 rounded-3xl mb-8 overflow-hidden shadow-lg">
                <img src="/tenielle.jpg" alt="Tenielle" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Tenielle</h3>
              <p className="text-primary-600 font-bold mb-4 uppercase tracking-wider">Co-Founder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
