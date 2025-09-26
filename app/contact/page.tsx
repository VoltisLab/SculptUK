'use client';

import React, { useState } from 'react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Mock form submission
        alert('Thank you for your message. We will get back to you within 24 hours.');
        console.log('Contact form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                        <h1 className="serif-font text-5xl md:text-6xl font-light mb-8 fade-in text-black">
                            Contact Us
                        </h1>
                        <div className="w-24 h-px bg-black mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 leading-relaxed fade-in">
                            We'd love to hear from you. Get in touch with our team of experts.
                        </p>
                    </div>
                </section>

                {/* Contact Information & Form */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Contact Information */}
                            <div className="slide-in-left">
                                <h2 className="serif-font text-3xl font-light mb-8 text-black">Get in Touch</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-black font-medium mb-2">Clinic Address</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                123 Aesthetic Lane<br />
                                                Beauty District<br />
                                                London SW1A 1AA<br />
                                                United Kingdom
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-black font-medium mb-2">Phone</h3>
                                            <p className="text-gray-600">+44 20 1234 5678</p>
                                            <p className="text-gray-500 text-sm mt-1">Mon-Fri: 9:00 AM - 6:00 PM</p>
                                            <p className="text-gray-500 text-sm">Sat: 9:00 AM - 4:00 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-black font-medium mb-2">Email</h3>
                                            <p className="text-gray-600">info@sculptbyuk.com</p>
                                            <p className="text-gray-600">training@sculptbyuk.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-black font-medium mb-2">Opening Hours</h3>
                                            <div className="text-gray-600 space-y-1">
                                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                                <p>Saturday: 9:00 AM - 4:00 PM</p>
                                                <p>Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="mt-12">
                                    <h3 className="text-black font-medium mb-4">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.887 2.747.097.118.112.222.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001.012.001z.017 0z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="slide-in-right">
                                <h2 className="serif-font text-3xl font-light mb-8 text-black">Send us a Message</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-black text-sm font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors rounded-lg"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-black text-sm font-medium mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors rounded-lg"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-black text-sm font-medium mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors rounded-lg"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-black text-sm font-medium mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-300 text-black focus:border-black focus:outline-none transition-colors rounded-lg"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="appointment">Appointment Enquiry</option>
                                            <option value="treatment">Treatment Information</option>
                                            <option value="training">Training Courses</option>
                                            <option value="general">General Enquiry</option>
                                            <option value="complaint">Complaint/Feedback</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-black text-sm font-medium mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors resize-vertical rounded-lg"
                                            placeholder="Please share your message or enquiry..."
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="btn-primary serif-font text-lg w-full md:w-auto min-w-[200px]"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section (Mock) */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                        <div className="text-center mb-12">
                            <h2 className="serif-font text-3xl font-light mb-4 text-black">Find Us</h2>
                            <div className="w-16 h-px bg-black mx-auto"></div>
                        </div>

                        <div className="bg-gray-100 h-96 flex items-center justify-center border border-gray-300 rounded-lg">
                            <div className="text-center">
                                <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-gray-600">Interactive Map</p>
                                <p className="text-gray-500 text-sm mt-2">123 Aesthetic Lane, London SW1A 1AA</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;