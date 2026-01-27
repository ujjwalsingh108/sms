import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  Calendar,
  FileText,
  DollarSign,
  Bus,
  Library,
  UserCheck,
  ClipboardList,
  MessageSquare,
  BarChart,
  Shield,
  Smartphone,
  Settings,
  Award,
} from "lucide-react";

export default function ModulesPage() {
  const modules = [
    {
      icon: Users,
      title: "Student Information System",
      description:
        "Complete student lifecycle management from admission to graduation.",
      features: [
        "Student registration & profiles",
        "Admission management",
        "Document management",
        "Student history tracking",
        "Medical records",
        "Alumni management",
      ],
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: GraduationCap,
      title: "Academic Management",
      description:
        "Comprehensive academic operations and curriculum management.",
      features: [
        "Curriculum planning",
        "Lesson planning",
        "Subject management",
        "Class scheduling",
        "Academic calendar",
        "Grade management",
      ],
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Calendar,
      title: "Attendance Management",
      description:
        "Real-time attendance tracking with multiple marking options.",
      features: [
        "Daily attendance",
        "Biometric integration",
        "Leave management",
        "Attendance reports",
        "Parent notifications",
        "Attendance analytics",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: FileText,
      title: "Examination System",
      description: "End-to-end examination and assessment management.",
      features: [
        "Exam scheduling",
        "Online examinations",
        "Grade book",
        "Result processing",
        "Report cards",
        "Progress reports",
      ],
      color: "from-orange-600 to-red-600",
    },
    {
      icon: DollarSign,
      title: "Fee Management",
      description: "Automated fee collection and financial tracking.",
      features: [
        "Fee structure setup",
        "Online payment gateway",
        "Invoice generation",
        "Payment tracking",
        "Fee defaulters",
        "Financial reports",
      ],
      color: "from-yellow-600 to-orange-600",
    },
    {
      icon: UserCheck,
      title: "Human Resources",
      description: "Complete staff and HR management solution.",
      features: [
        "Employee management",
        "Payroll processing",
        "Leave management",
        "Attendance tracking",
        "Performance reviews",
        "Document management",
      ],
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: Bus,
      title: "Transport Management",
      description: "Fleet and route management with GPS tracking.",
      features: [
        "Route planning",
        "Vehicle management",
        "Driver management",
        "GPS tracking",
        "Transport fees",
        "Trip management",
      ],
      color: "from-teal-600 to-cyan-600",
    },
    {
      icon: Library,
      title: "Library Management",
      description: "Digital library with book circulation and tracking.",
      features: [
        "Book catalog",
        "Issue & return",
        "Fine management",
        "Member management",
        "Digital resources",
        "Library reports",
      ],
      color: "from-rose-600 to-pink-600",
    },
    {
      icon: ClipboardList,
      title: "Homework & Assignments",
      description: "Digital homework and assignment management.",
      features: [
        "Assignment creation",
        "Online submission",
        "Grading system",
        "Plagiarism check",
        "Progress tracking",
        "Parent visibility",
      ],
      color: "from-violet-600 to-purple-600",
    },
    {
      icon: MessageSquare,
      title: "Communication Module",
      description: "Multi-channel communication platform.",
      features: [
        "Messaging system",
        "Announcements",
        "Notice board",
        "SMS alerts",
        "Email notifications",
        "Parent portal",
      ],
      color: "from-sky-600 to-blue-600",
    },
    {
      icon: BarChart,
      title: "Reports & Analytics",
      description: "Advanced reporting and data analytics.",
      features: [
        "Custom reports",
        "Performance analytics",
        "Attendance insights",
        "Financial reports",
        "Predictive analytics",
        "Export options",
      ],
      color: "from-emerald-600 to-green-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Application",
      description: "Native mobile apps for all stakeholders.",
      features: [
        "Student app",
        "Parent app",
        "Teacher app",
        "Push notifications",
        "Offline access",
        "Real-time updates",
      ],
      color: "from-fuchsia-600 to-pink-600",
    },
  ];

  const integrations = [
    {
      icon: Shield,
      title: "Biometric Systems",
      description:
        "Seamless integration with fingerprint and facial recognition",
    },
    {
      icon: MessageSquare,
      title: "SMS Gateway",
      description: "Multi-provider SMS integration for notifications",
    },
    {
      icon: DollarSign,
      title: "Payment Gateways",
      description: "Support for major payment processors",
    },
    {
      icon: Settings,
      title: "API Access",
      description: "RESTful APIs for custom integrations",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl mb-4 sm:mb-6 font-heading">
            Complete ERP Modules
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive modules designed to handle every aspect of school
            management
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all group overflow-hidden shadow-sm"
                >
                  <div className={`h-2 bg-gradient-to-r ${module.color}`} />
                  <CardContent className="p-5 sm:p-6">
                    <div
                      className={`h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3 font-heading">
                      {module.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 mb-4 text-sm sm:text-base">{module.description}</p>
                    <ul className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                          {feature}
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

      {/* Integrations Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-100 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">
              Connect with the tools and services you already use
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="h-16 w-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {integration.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">
                      {integration.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 overflow-hidden">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <Award className="h-12 w-12 sm:h-16 sm:w-16 text-white mx-auto mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 font-heading">
                Get Started with All Modules
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Access all modules with our comprehensive plans. No hidden fees,
                no surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto"
                >
                  View Pricing
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-blue-600 hover:border-white transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
