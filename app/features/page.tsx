import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  BookOpen,
  Calendar,
  BarChart,
  DollarSign,
  MessageSquare,
  Bell,
  FileText,
  ClipboardList,
  UserCheck,
  Bus,
  Library,
  Award,
  Smartphone,
  Cloud,
  Shield,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: Users,
      title: "Student Management",
      description:
        "Comprehensive student information system with admission, enrollment, and alumni tracking.",
      features: [
        "Student profiles",
        "Admission management",
        "Document management",
        "Student history",
      ],
    },
    {
      icon: BookOpen,
      title: "Academic Management",
      description:
        "Complete academic cycle management from curriculum to examination.",
      features: [
        "Curriculum planning",
        "Lesson management",
        "Subject allocation",
        "Class scheduling",
      ],
    },
    {
      icon: Calendar,
      title: "Attendance Tracking",
      description:
        "Real-time attendance monitoring with automated notifications to parents.",
      features: [
        "Biometric integration",
        "Daily attendance",
        "Leave management",
        "Attendance reports",
      ],
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description:
        "Advanced analytics and reporting for data-driven decision making.",
      features: [
        "Grade analysis",
        "Performance trends",
        "Custom reports",
        "Predictive insights",
      ],
    },
    {
      icon: DollarSign,
      title: "Fee Management",
      description:
        "Automated fee collection, tracking, and financial management.",
      features: [
        "Online payments",
        "Fee structure",
        "Invoicing",
        "Payment tracking",
      ],
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description:
        "Seamless communication between teachers, students, and parents.",
      features: [
        "Messaging system",
        "Announcements",
        "Notice board",
        "SMS/Email alerts",
      ],
    },
    {
      icon: FileText,
      title: "Examination Management",
      description:
        "Complete examination lifecycle from scheduling to result publication.",
      features: [
        "Exam scheduling",
        "Online exams",
        "Result processing",
        "Grade cards",
      ],
    },
    {
      icon: ClipboardList,
      title: "Homework & Assignments",
      description: "Digital homework assignment and submission system.",
      features: [
        "Assignment creation",
        "Online submission",
        "Grading system",
        "Progress tracking",
      ],
    },
    {
      icon: UserCheck,
      title: "Staff Management",
      description: "Comprehensive HR and staff management system.",
      features: [
        "Employee records",
        "Payroll management",
        "Leave tracking",
        "Performance review",
      ],
    },
    {
      icon: Bus,
      title: "Transport Management",
      description: "Complete transport and fleet management solution.",
      features: [
        "Route planning",
        "Vehicle tracking",
        "Driver management",
        "GPS integration",
      ],
    },
    {
      icon: Library,
      title: "Library Management",
      description:
        "Digital library management with book tracking and circulation.",
      features: [
        "Book catalog",
        "Issue/Return",
        "Fine management",
        "Digital resources",
      ],
    },
    {
      icon: Award,
      title: "Certificate Generation",
      description:
        "Automated generation of certificates and official documents.",
      features: [
        "Custom templates",
        "Bulk generation",
        "Digital signatures",
        "Document archive",
      ],
    },
  ];

  const advantages = [
    {
      icon: Smartphone,
      title: "Mobile First",
      description:
        "Access from anywhere with our mobile apps for iOS and Android",
    },
    {
      icon: Cloud,
      title: "Cloud Based",
      description: "Secure cloud infrastructure with 99.9% uptime guarantee",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description:
        "Bank-grade security with GDPR and data protection compliance",
    },
    {
      icon: Bell,
      title: "Real-time Updates",
      description: "Instant notifications and updates for all stakeholders",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6 font-heading">
            Powerful Features
          </h1>
          <p className="text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to run your educational institution efficiently,
            all in one place
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-all">
                      <Icon className="h-7 w-7 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-500"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-100 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-4 font-heading">
              Why Choose Our Platform
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">
              Built with modern technology for modern schools
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="h-20 w-20 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-10 w-10 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 font-heading">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-6 font-heading">
            Ready to Experience These Features?
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 mb-8">
            Schedule a personalized demo to see how our features can transform
            your institution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 dark:border-gray-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
