"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MapPicker from "@/components/map-picker";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    message: "",
    latitude: null as number | null,
    longitude: null as number | null,
    address: "",
    placeId: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLocationSelect = (location: {
    latitude: number;
    longitude: number;
    address: string;
    placeId?: string;
  }) => {
    setFormData({
      ...formData,
      latitude: location.latitude,
      longitude: location.longitude,
      address: location.address,
      placeId: location.placeId || "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Location is optional. If not provided, latitude/longitude will be null.

    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name || null,
        email: formData.email || null,
        phone: formData.phone || null,
        institution_name: formData.school || null,
        message: formData.message || null,
        latitude: formData.latitude,
        longitude: formData.longitude,
        address: formData.address || null,
        place_id: formData.placeId || null,
        user_agent:
          typeof navigator !== "undefined" ? navigator.userAgent : null,
      };

      const { error } = await supabase.from("enquiry").insert([payload]);

      if (error) {
        console.error("Supabase insert error:", error);
        alert("Failed to submit form. Please try again later.");
      } else {
        alert("Thank you — your enquiry has been submitted.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          school: "",
          message: "",
          latitude: null,
          longitude: null,
          address: "",
          placeId: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["HSR Layout, Sector 2", "Bengaluru-560102", "India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Tel: +91 7355957231", "Mob: +91 9044329229"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@schoolerp.com", "support@schoolerp.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9AM - 6PM",
        "Saturday: 9AM - 2PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-slate-600 dark:text-gray-400"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Send us a Message
              </h2>
              <p className="text-slate-600 dark:text-gray-400 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="school"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    School/Institution Name
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="ABC School"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={`w-full bg-blue-600 hover:bg-blue-700 ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Map Picker */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Select Your Location (optional)
              </h2>
              <p className="text-slate-600 dark:text-gray-400 mb-8">
                Optionally click on the map or drag the marker to provide a
                precise location for your enquiry. This is not required.
                {formData.address && (
                  <span className="block mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                    Selected: {formData.address}
                  </span>
                )}
              </p>

              <MapPicker
                onLocationSelect={handleLocationSelect}
                selectedLocation={
                  formData.latitude && formData.longitude
                    ? {
                        latitude: formData.latitude,
                        longitude: formData.longitude,
                      }
                    : undefined
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-100 dark:bg-slate-900/30">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-gray-400">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is the implementation timeline?",
                a: "Typical implementation takes 2-4 weeks depending on the size of your institution and customization requirements.",
              },
              {
                q: "Do you provide training?",
                a: "Yes, we provide comprehensive training for all staff members and ongoing support to ensure smooth adoption.",
              },
              {
                q: "Is there a mobile app available?",
                a: "Yes, we offer native mobile apps for iOS and Android for students, parents, and teachers.",
              },
              {
                q: "What about data migration?",
                a: "We handle complete data migration from your existing systems with zero data loss guarantee.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 font-heading">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
