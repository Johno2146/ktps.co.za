import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Pet Sitting',
    petType: 'Dog',
    petName: '',
    breed: '',
    age: '',
    dates: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to submit booking'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to book or have questions? Our team is here to help you and your pets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-4 rounded-2xl mr-6">
                    <Phone className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 text-lg">+27 82 801 8700</p>
                    <p className="text-gray-600 text-lg">+27 82 791 1068</p>
                    <p className="text-gray-500 text-sm">Mon-Fri from 8am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-4 rounded-2xl mr-6">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                    <a 
                      href="https://wa.me/27828018700" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-4 rounded-2xl mr-6">
                    <Mail className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 text-lg">bookings@ktps.co.za</p>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-4 rounded-2xl mr-6">
                    <MapPin className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600 text-lg">Benoni, Gauteng</p>
                    <p className="text-gray-500 text-sm">Serving Benoni and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-gray-100">
              {submitted ? (
                <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Request Sent!</h2>
                  <p className="text-gray-600 text-lg mb-10">
                    Thank you for reaching out. A confirmation has also been sent to you, and we will get back to you from <span className="font-bold">bookings@ktps.co.za</span> shortly!
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="bg-primary-600 text-white px-10 py-4 rounded-full font-bold hover:bg-primary-700 transition-all"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Book a Service</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all" 
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all" 
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Service Needed</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all appearance-none bg-white"
                        >
                          <option>Pet Sitting</option>
                          <option>Dog Walking</option>
                          <option>Grooming</option>
                          <option>Overnight Care</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Pet Type</label>
                        <select 
                          name="petType"
                          value={formData.petType}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all appearance-none bg-white"
                        >
                          <option>Dog</option>
                          <option>Cat</option>
                          <option>Rabbit</option>
                          <option>Bird</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Pet Name</label>
                        <input 
                          type="text" 
                          name="petName"
                          value={formData.petName}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all" 
                          placeholder="Buddy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Breed</label>
                        <input 
                          type="text" 
                          name="breed"
                          value={formData.breed}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all" 
                          placeholder="Golden Retriever"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Age</label>
                        <input 
                          type="text" 
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all" 
                          placeholder="2 years"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Preferred Dates</label>
                      <input 
                        type="text" 
                        name="dates"
                        value={formData.dates}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all" 
                        placeholder="e.g. July 1st to July 5th"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Special Care Instructions</label>
                      <textarea 
                        rows="3" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all" 
                        placeholder="Any medications, allergies, or specific requirements..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-primary-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-2xl flex items-center justify-center"
                    >
                      Send Booking Request <Send className="ml-3 h-6 w-6" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
