"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  BarChart,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const carouselSlides = [
    {
      title: "Comprehensive School Management",
      description:
        "Streamline your school operations with our all-in-one ERP solution",
      image: "/hero-1.jpg",
      gradient: "from-blue-600/80 to-purple-600/80",
    },
    {
      title: "Smart Student Information System",
      description:
        "Manage student data, attendance, and performance effortlessly",
      image: "/hero-2.jpg",
      gradient: "from-purple-600/80 to-pink-600/80",
    },
    {
      title: "Efficient Staff Management",
      description: "Optimize your staff operations and communication",
      image: "/hero-3.jpg",
      gradient: "from-pink-600/80 to-red-600/80",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Student Management",
      description:
        "Complete student lifecycle management from admission to alumni",
    },
    {
      icon: BookOpen,
      title: "Academic Management",
      description:
        "Curriculum planning, lesson management, and academic tracking",
    },
    {
      icon: Calendar,
      title: "Attendance System",
      description: "Real-time attendance tracking with automated notifications",
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description:
        "Comprehensive reports and insights for better decision making",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security with 99.9% uptime guarantee",
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Automated timetable generation and schedule management",
    },
  ];

  const benefits = [
    "Reduce administrative workload by 50%",
    "Improve parent-teacher communication",
    "Real-time access to student performance",
    "Automated fee collection and tracking",
    "Cloud-based access from anywhere",
    "Mobile app for students and parents",
  ];

  const stats = [
    { value: "500+", label: "Schools Trust Us" },
    { value: "100K+", label: "Active Students" },
    { value: "10K+", label: "Teachers" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {carouselSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] md:h-[700px]">
                  {/* Background Image Placeholder */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
                  >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-20" />
                    <div className="absolute inset-0 bg-black/20 dark:bg-black/0" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex items-center">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 font-heading">
                            {slide.title}
                          </h1>
                          <p className="text-lg leading-8 text-gray-200 mb-8">
                            {slide.description}
                          </p>
                          <div className="flex gap-4">
                            <Button
                              size="lg"
                              className="bg-white text-slate-900 hover:bg-gray-100"
                            >
                              Get Started
                            </Button>
                            <Button
                              size="lg"
                              variant="outline"
                              className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300"
                            >
                              Watch Demo
                            </Button>
                          </div>
                        </div>
                        <div className="hidden lg:flex justify-center items-center">
                          {index === 0 && (
                            <svg
                              className="w-96 h-96"
                              viewBox="0 0 400 400"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {/* School Building */}
                              <rect x="80" y="120" width="240" height="200" fill="white" opacity="0.95" rx="8" />
                              <rect x="80" y="100" width="240" height="30" fill="white" opacity="0.95" />
                              <circle cx="200" cy="115" r="8" fill="#3B82F6" />
                              {/* Windows */}
                              <rect x="100" y="140" width="40" height="40" fill="#3B82F6" opacity="0.6" rx="4" />
                              <rect x="160" y="140" width="40" height="40" fill="#3B82F6" opacity="0.6" rx="4" />
                              <rect x="220" y="140" width="40" height="40" fill="#3B82F6" opacity="0.6" rx="4" />
                              <rect x="280" y="140" width="40" height="40" fill="#3B82F6" opacity="0.6" rx="4" />
                              <rect x="100" y="200" width="40" height="40" fill="#3B82F6" opacity="0.6" rx="4" />
                              <rect x="160" y="200" width="40" height="40" fill="#3B82F6" opacity="0.6" rx="4" />
                              <rect x="220" y="200" width="40" height="40" fill="#3B82F6" opacity="0.6" rx="4" />
                              <rect x="280" y="200" width="40" height="40" fill="#3B82F6" opacity="0.6" rx="4" />
                              {/* Door */}
                              <rect x="170" y="260" width="60" height="60" fill="#1E40AF" rx="4" />
                              <circle cx="215" cy="290" r="3" fill="white" />
                              {/* Digital Elements */}
                              <circle cx="320" cy="80" r="40" fill="white" opacity="0.9" />
                              <path d="M310 80 L320 90 L340 70" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="80" cy="80" r="40" fill="white" opacity="0.9" />
                              <path d="M70 75 L70 85 M75 80 L85 80" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg
                              className="w-96 h-96"
                              viewBox="0 0 400 400"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {/* Student Profile Card */}
                              <rect x="60" y="80" width="280" height="240" fill="white" opacity="0.95" rx="16" />
                              {/* Avatar */}
                              <circle cx="200" cy="140" r="40" fill="#A855F7" opacity="0.8" />
                              <circle cx="200" cy="135" r="15" fill="white" />
                              <path d="M170 165 Q200 175 230 165" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" />
                              {/* Info Lines */}
                              <rect x="120" y="200" width="160" height="12" fill="#A855F7" opacity="0.4" rx="6" />
                              <rect x="140" y="220" width="120" height="12" fill="#A855F7" opacity="0.3" rx="6" />
                              <rect x="130" y="240" width="140" height="12" fill="#A855F7" opacity="0.2" rx="6" />
                              {/* Stats Cards */}
                              <rect x="80" y="270" width="70" height="35" fill="#3B82F6" opacity="0.8" rx="8" />
                              <rect x="165" y="270" width="70" height="35" fill="#10B981" opacity="0.8" rx="8" />
                              <rect x="250" y="270" width="70" height="35" fill="#F59E0B" opacity="0.8" rx="8" />
                              {/* Floating Icons */}
                              <circle cx="320" cy="100" r="30" fill="white" opacity="0.9" />
                              <path d="M310 100 L320 110 L340 90" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="80" cy="220" r="25" fill="white" opacity="0.9" />
                              <rect x="70" y="215" width="20" height="15" fill="#3B82F6" rx="2" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg
                              className="w-96 h-96"
                              viewBox="0 0 400 400"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {/* Staff Management Dashboard */}
                              <rect x="50" y="70" width="300" height="260" fill="white" opacity="0.95" rx="16" />
                              {/* Header */}
                              <rect x="50" y="70" width="300" height="50" fill="#EC4899" opacity="0.8" rx="16" />
                              <circle cx="80" cy="95" r="15" fill="white" opacity="0.9" />
                              {/* Staff Cards */}
                              <rect x="70" y="140" width="120" height="80" fill="#EC4899" opacity="0.3" rx="12" />
                              <circle cx="130" cy="165" r="20" fill="#EC4899" opacity="0.8" />
                              <rect x="90" y="195" width="80" height="8" fill="#EC4899" opacity="0.6" rx="4" />
                              <rect x="100" y="210" width="60" height="8" fill="#EC4899" opacity="0.4" rx="4" />
                              
                              <rect x="210" y="140" width="120" height="80" fill="#EC4899" opacity="0.3" rx="12" />
                              <circle cx="270" cy="165" r="20" fill="#EC4899" opacity="0.8" />
                              <rect x="230" y="195" width="80" height="8" fill="#EC4899" opacity="0.6" rx="4" />
                              <rect x="240" y="210" width="60" height="8" fill="#EC4899" opacity="0.4" rx="4" />
                              
                              <rect x="70" y="235" width="120" height="80" fill="#EC4899" opacity="0.3" rx="12" />
                              <circle cx="130" cy="260" r="20" fill="#EC4899" opacity="0.8" />
                              <rect x="90" y="290" width="80" height="8" fill="#EC4899" opacity="0.6" rx="4" />
                              <rect x="100" y="305" width="60" height="8" fill="#EC4899" opacity="0.4" rx="4" />
                              
                              <rect x="210" y="235" width="120" height="80" fill="#EC4899" opacity="0.3" rx="12" />
                              <circle cx="270" cy="260" r="20" fill="#EC4899" opacity="0.8" />
                              <rect x="230" y="290" width="80" height="8" fill="#EC4899" opacity="0.6" rx="4" />
                              <rect x="240" y="305" width="60" height="8" fill="#EC4899" opacity="0.4" rx="4" />
                              
                              {/* Floating Action Icons */}
                              <circle cx="320" cy="120" r="35" fill="white" opacity="0.95" />
                              <path d="M310 120 L320 120 M315 115 L315 125" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
            <CarouselPrevious className="relative left-0 translate-y-0 bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 border-slate-300 dark:border-slate-700" />
            <CarouselNext className="relative right-0 translate-y-0 bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 border-slate-300 dark:border-slate-700" />
          </div>
        </Carousel>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-2 font-heading">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4 font-heading">
              Powerful Features for Modern Schools
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">
              Everything you need to manage your institution efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6 font-heading">
                Why Choose Smart School ERP?
              </h2>
              <p className="text-lg text-slate-600 dark:text-gray-400 mb-8">
                Transform your institution with cutting-edge technology designed
                specifically for educational excellence.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
                Learn More
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
              <div className="h-full w-full bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/image/sms-dashboard-img.jpg"
                  alt="Smart School ERP Dashboard"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6 font-heading">
            Ready to Transform Your School?
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 mb-8">
            Join hundreds of schools already using our platform to streamline
            their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 dark:border-gray-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
