// src/app/page.tsx
import Image from 'next/image';
import sl from './sl.jpg';
import logo from './logo.png';
import services from './services.png';
import wax from './wax.jpg';
import laser from './laser.jpg';
import thread from './thread.jpg';
import facial from './facial.jpg';






import { ChevronRight, Phone, MapPin, Clock, Star, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">

{/* Navigation */}
{/* Navigation */}
<nav className="fixed w-full z-50 bg-white shadow-md">
  <div className="w-full max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
    
    {/* Logo + Brand */}
    <div className="flex items-center min-w-0">
      <div className="relative w-12 sm:w-16 h-6 sm:h-8 flex-shrink-0">
        <Image
          src={logo}
          alt="Skinlogica Logo"
          fill
          sizes="(max-width: 640px) 48px, 64px"
          className="object-contain"
          priority
        />
      </div>
      <span className="ml-2 text-base sm:text-lg font-semibold text-purple-800 whitespace-nowrap overflow-hidden text-ellipsis">
        SKINLOGICA
      </span>
    </div>

    {/* Nav Links (hidden on small screens) */}
    <div className="hidden md:flex space-x-6">
      <a href="#services" className="text-gray-600 hover:text-purple-600">Services</a>
      <a href="#testimonials" className="text-gray-600 hover:text-purple-600">Testimonials</a>
      <a href="#contact" className="text-gray-600 hover:text-purple-600">Contact</a>
    </div>

    {/* Book Now button */}
    <div className="flex-shrink-0">
      <a
        href="https://your-booking-link.com"
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all"
      >
        Book Now
      </a>
    </div>
  </div>
</nav>



{/* Hero Section */}
{/* Hero Section */}
<div className="relative min-h-screen flex items-center bg-purple-50">
  <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto px-4 py-32 gap-20 items-center">
    
    {/* Left Image */}
    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
      <Image
        src={sl}
        alt="Glowing skin treatment"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Right Content */}
    <div className="text-center md:text-left animate-fadeIn">
      <h1 className="text-5xl md:text-6xl font-extrabold text-purple-900 mb-6 leading-tight">
        Reveal Your Radiance
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
      At Skinlogica, excellent service is important to us. That is why we use a variety of products that suit your skin type. We also offer facials which include LED light, ultrasonic machines and high frequency machines to enhance your skin and target problem areas.       </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="https://your-booking-link.com"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all"
        >
          Book Appointment <ChevronRight className="ml-2" />
        </a>
        <a
          href="#services"
          className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all"
        >
          Explore Services
        </a>
      </div>
    </div>
  </div>
</div>
{/* Services Section */}
<section id="services" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    
    {/* Services Banner Image */}
    <div className="mb-16">

    </div>

    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: 'HydraFacial',
          description: 'Deeply cleanses, exfoliates, and hydrates your skin using advanced serums and suction.',
          image: facial,
        },
        {
          title: 'Acne Treatment Facial',
          description: 'Targets breakouts and reduces inflammation with LED therapy and custom products.',
          image: thread,
        },
        {
          title: 'Laser Hair Removal',
          description: 'Say goodbye to unwanted hair with our painless and precise laser sessions.',
          image: laser,
        },
        {
          title: 'Eyebrow Threading',
          description: 'Get perfectly shaped brows with our expert threading service.',
          image: wax,
        },
      ].map((service, index) => (
        <div key={index} className="bg-purple-50 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
          <div className="relative w-full h-40">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-purple-900 mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
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
      
      {/* First Testimonial */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          “Most recently tried the hydra-facial and my skin came out super clean and glowing. She’s a kind professional and absolute angel! Shahana has made me feel comfortable and at ease from day one and her knowledge in skincare is incredible!! Definitely recommend you go see her for all your skincare needs”
        </p>
      </div>
      {/* Third Testimonial */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          “I got an Acne Treatment facial with Shahana, and my skin looks and feels incredible!! Best experience with a facial I’ve had- I couldn’t recommend a better and cozier place to get aesthetics done!”
        </p>
      </div>
      {/* Second Testimonial */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          “I’ve been going to see Shahana for waxing, threading, facials and laser hair removal for the past 3 years. My eyebrows always come out beautifully. I’ve done 3-4 sessions of laser and my underarms are pretty much done!”
        </p>
      </div>

    </div>
  </div>
</section>


{/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="py-20 bg-purple-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

    <div className="flex flex-wrap justify-between gap-8 text-sm sm:text-base">

      {/* Location */}
      <div className="flex items-start space-x-4 min-w-[250px]">
        <MapPin className="w-6 h-6 text-purple-600 mt-1" />
        <div>
          <h3 className="font-semibold mb-1">Location</h3>
          <p className="text-gray-700 leading-relaxed">
            2760 Derry Rd W, Unit 9<br />
            Mississauga, ON<br />
            L5N 3N5
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start space-x-4 min-w-[200px]">
        <Phone className="w-6 h-6 text-purple-600 mt-1" />
        <div>
          <h3 className="font-semibold mb-1">Phone</h3>
          <p className="text-gray-700">647-854-2589</p>
        </div>
      </div>

      {/* Hours */}
      <div className="flex items-start space-x-4 min-w-[200px]">
        <Clock className="w-6 h-6 text-purple-600 mt-1" />
        <div>
          <h3 className="font-semibold mb-1">Hours</h3>
          <p className="text-gray-700">Mon–Sat: 9AM–7PM<br />Sun: 10AM–5PM</p>
        </div>
      </div>

      {/* Email + Instagram */}
      <div className="flex items-start space-x-4 min-w-[220px]">
        <div className="flex flex-col items-center justify-start gap-3">
          {/* Gmail Icon */}
          <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z" fill="none" />
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <Instagram className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Socials</h3>
          <p className="text-gray-700 mb-1">skinlogica@gmail.com</p>
          <a
            href="https://instagram.com/skinlogica"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:underline"
          >
            @skinlogica
          </a>
        </div>
      </div>

    </div>
  </div>
</section>






    </main>
  );
}