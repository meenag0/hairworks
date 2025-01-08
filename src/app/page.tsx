// src/app/page.tsx
import Image from 'next/image';
import { ChevronRight, Phone, MapPin, Clock, Star, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-900">SALON</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-purple-600">Services</a>
            <a href="#gallery" className="text-gray-600 hover:text-purple-600">Gallery</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600">Contact</a>
          </div>
          <a
            href="https://your-booking-link.com"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/salon-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/50" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Transform Your Style</h1>
            <p className="text-xl text-gray-200 mb-8">Experience luxury hair care in a modern, sophisticated environment.</p>
            <div className="flex space-x-4">
              <a
                href="https://your-booking-link.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center transition-all"
              >
                Book Appointment <ChevronRight className="ml-2" />
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Haircut & Styling', price: 'from $50', image: '/haircut.jpg' },
              { title: 'Color & Highlights', price: 'from $80', image: '/color.jpg' },
              { title: 'Treatment & Care', price: 'from $60', image: '/treatment.jpg' },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder for image */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Absolutely amazing experience! The staff is professional and the results exceeded my expectations."
                </p>
                <p className="font-semibold">Sarah Johnson</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Visit Our Salon</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">123 Beauty Street, City</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Contact</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-gray-600">Mon-Sat: 9AM - 7PM</p>
                    <p className="text-gray-600">Sun: 10AM - 5PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SALON</h3>
              <p className="text-gray-400">Where beauty meets excellence</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Haircut & Styling</a></li>
                <li><a href="#" className="hover:text-white">Color & Highlights</a></li>
                <li><a href="#" className="hover:text-white">Treatment & Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>123 Beauty Street, City</li>
                <li>info@yoursalon.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Your Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}