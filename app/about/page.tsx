import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users2 } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower educational institutions with cutting-edge technology that simplifies management and enhances learning outcomes.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the global leader in educational management systems, transforming how schools operate worldwide.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our product, from design to customer support.",
    },
    {
      icon: Users2,
      title: "Customer First",
      description:
        "Our customers are at the heart of everything we do. Their success is our success.",
    },
  ];

  const timeline = [
    {
      year: "2015",
      event: "Company Founded",
      description: "Started with a vision to digitize school management",
    },
    {
      year: "2017",
      event: "100+ Schools",
      description: "Reached our first major milestone",
    },
    {
      year: "2019",
      event: "Mobile App Launch",
      description: "Extended our reach to mobile platforms",
    },
    {
      year: "2021",
      event: "AI Integration",
      description: "Introduced AI-powered analytics",
    },
    {
      year: "2023",
      event: "500+ Schools",
      description: "Serving institutions across 15 countries",
    },
    {
      year: "2025",
      event: "Next Generation",
      description: "Launching our most advanced platform yet",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6 font-heading">
              About Smart School ERP
            </h1>
            <p className="text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto">
              Empowering educational institutions with innovative technology
              solutions since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Smart School ERP was born from a simple observation:
                  educational institutions were struggling with outdated,
                  fragmented systems that hindered their ability to focus on
                  what truly matters – education.
                </p>
                <p>
                  Founded in 2015 by a team of educators and technologists, we
                  set out to create a comprehensive solution that would
                  streamline school operations while being intuitive enough for
                  everyone to use.
                </p>
                <p>
                  Today, we proudly serve over 500 schools across 15 countries,
                  helping them manage over 100,000 students and empowering
                  10,000+ teachers to focus on what they do best – teaching.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
              <div className="h-full w-full bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/image/team-work-sms.jpg"
                  alt="Our Story - Team Collaboration"
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

      {/* Values Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-100 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-4 font-heading">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 font-heading">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-4 font-heading">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">
              Milestones that shaped who we are today
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600/30" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6 inline-block shadow-sm">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-500 mb-2 font-heading">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 font-heading">
                        {item.event}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="h-4 w-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
