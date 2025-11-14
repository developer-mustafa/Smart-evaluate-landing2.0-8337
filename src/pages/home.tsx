import { motion } from "motion/react";
import type { MotionProps } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Clock,
  BookOpen,
  MessageSquare,
  Shield,
  TrendingUp,
  Award,
  Target,
  CheckCircle2,
  XCircle,
  Eye,
  BarChart3,
  Trophy,
  GraduationCap,
  Sparkles,
  ArrowRight,
  UserCircle,
  MapPin,
  Globe,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const fadeInUp: MotionProps = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer: MotionProps = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

const scaleIn: MotionProps = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

const problems = [
  {
    icon: UserCircle,
    title: "একক ও বিচ্ছিন্ন শিখা",
    description: "শিক্ষার্থী শুধু শিক্ষক-নির্ভর, নিজেদের মধ্যে সহযোগিতা নেই",
  },
  {
    icon: XCircle,
    title: "দুর্বল শিক্ষার্থীর অবহেলা",
    description: "প্রশ্ন করতে লজ্জা বা ভয়, ফলে পিছিয়ে পড়ে",
  },
  {
    icon: TrendingUp,
    title: "দলীয় উৎসাহ অনুপস্থিত",
    description: "কোনো দলীয় প্রতিযোগিতা বা টিমওয়ার্ক নেই",
  },
  {
    icon: Eye,
    title: "শিক্ষক মনিটরিং জটিল",
    description: "প্রতিটি শিক্ষার্থীকে ব্যক্তিগতভাবে মনিটর করা কঠিন",
  },
  {
    icon: Target,
    title: "অ্যাক্টিভ লার্নিং নেই",
    description: "শুধু শোনা ও মুখস্থ করা, কোনো বাস্তব প্রয়োগ নেই",
  },
];

const solutions = [
  {
    icon: Users,
    title: "সহযোগিতামূলক শিখা",
    description: "প্রতি গ্রুপে ৪-৬ জন, সবার নির্দিষ্ট দায়িত্ব",
    color: "text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "দুর্বল শিক্ষার্থীর অগ্রগতি",
    description: "গ্রুপ সহায়তায় কেউ পিছিয়ে থাকে না",
    color: "text-blue-600",
  },
  {
    icon: Sparkles,
    title: "তাৎক্ষণিক মূল্যায়ন",
    description: "সফটওয়্যারে রিয়েল-টাইম ফিডব্যাক",
    color: "text-indigo-600",
  },
  {
    icon: Award,
    title: "সফট স্কিল উন্নয়ন",
    description: "Leadership, Communication, Time Management",
    color: "text-violet-600",
  },
  {
    icon: BarChart3,
    title: "শিক্ষকের সুবিধা",
    description: "ডেটা-ড্রিভেন শিক্ষাদান ও সহজ মনিটরিং",
    color: "text-purple-600",
  },
];

const teamRoles = [
  {
    icon: Shield,
    title: "টিম লিডার",
    subtitle: "Team Leader",
    description: "গ্রুপের প্রধান, সকলকে নেতৃত্ব দেয় এবং দলকে সংগঠিত রাখে",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: Clock,
    title: "টাইম কিপার",
    subtitle: "Time Keeper",
    description: "সময় নিয়ন্ত্রণ করে এবং নির্ধারিত সময়ে কাজ শেষ করতে সাহায্য করে",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: BookOpen,
    title: "রিসোর্স ম্যানেজার",
    subtitle: "Resource Manager",
    description: "ডকুমেন্ট ও রিসোর্স সংরক্ষণ এবং সবার সাথে শেয়ার করে",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: MessageSquare,
    title: "রিপোর্টার",
    subtitle: "Reporter",
    description: "গ্রুপের কাজ উপস্থাপন করে এবং ফলাফল শেয়ার করে",
    color: "from-violet-500 to-violet-700",
  },
  {
    icon: Users,
    title: "পিস মেকার",
    subtitle: "Peace Maker",
    description: "শৃঙ্খলা নিয়ন্ত্রণ করে এবং দ্বন্দ্ব সমাধান করে",
    color: "from-purple-500 to-pink-600",
  },
];

const evaluationData = [
  { name: "এসাইনমেন্ট", value: 25, fill: "#8b5cf6" },
  { name: "টিম নম্বর", value: 15, fill: "#3b82f6" },
  { name: "অতিরিক্ত", value: 20, fill: "#6366f1" },
];

const criteriaData = [
  { criteria: "এখনো পারিনা", marks: -5, color: "bg-red-500" },
  { criteria: "শুধু বুঝেছি", marks: 5, color: "bg-yellow-500" },
  { criteria: "ভালো করে শিখেছি", marks: 10, color: "bg-green-500" },
  { criteria: "বাড়ির কাজ (সাপ্তাহিক)", marks: 5, color: "bg-blue-500" },
  { criteria: "নিয়মিত উপস্থিতি", marks: 10, color: "bg-purple-500" },
];

const rankingData = [
  { group: "গ্রুপ ১", score: 95 },
  { group: "গ্রুপ ২", score: 88 },
  { group: "গ্রুপ ৩", score: 82 },
  { group: "গ্রুপ ৪", score: 75 },
  { group: "গ্রুপ ৫", score: 70 },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm"
              >
                <Sparkles className="mr-2 inline-block h-4 w-4" />
                আধুনিক শিক্ষা মূল্যায়ন সিস্টেম
              </motion.div>
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Smart Evaluator
              </h1>
              <p className="mb-4 text-2xl font-semibold text-blue-100 md:text-3xl">
                সহযোগিতার মাধ্যমে উন্নয়ন
              </p>
              <p className="mb-8 text-lg text-blue-50 md:text-xl">
                Collaborate to Elevate
              </p>
              <p className="mb-10 text-lg leading-relaxed text-white/90">
                টিমওয়ার্ক, তাৎক্ষণিক মূল্যায়ন এবং সফট স্কিল উন্নয়নে একটি সম্পূর্ণ
                সমাধান। শিক্ষার্থীদের সহযোগিতামূলক শিখনের মাধ্যমে একসাথে এগিয়ে যান।
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-lg text-purple-700 hover:bg-white/90"
                  asChild
                >
                  <a
                    href="https://evaluate-app11-mustafasir.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ডেমো দেখুন
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white bg-transparent text-lg text-white hover:bg-white/10"
                >
                  আরও জানুন
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/hero-banner.png"
                  alt="Smart Evaluator Dashboard"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -top-4 rounded-2xl bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-500 p-2">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">৯৫% সফলতার হার</p>
                    <p className="text-xs text-gray-600">শিক্ষার্থী অগ্রগতি</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              গতানুগতিক পদ্ধতির সমস্যা
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              প্রচলিত শিক্ষা ব্যবস্থায় যেসব সমস্যার সম্মুখীন হতে হয়
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {problems.map((problem, index) => (
              <motion.div key={index} {...fadeInUp}>
                <Card className="h-full border-2 transition-all hover:border-purple-500 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                      <problem.icon className="h-7 w-7 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Smart Evaluator এর সমাধান
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              আধুনিক প্রযুক্তি ও সহযোগিতামূলক শিখনের মাধ্যমে সমাধান
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {solutions.map((solution, index) => (
              <motion.div key={index} {...scaleIn}>
                <Card className="h-full border-2 bg-white transition-all hover:border-purple-500 hover:shadow-xl">
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${
                        index % 2 === 0
                          ? "from-purple-500 to-blue-500"
                          : "from-blue-500 to-indigo-500"
                      }`}
                    >
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              টিম গঠন
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              প্রতি গ্রুপে ৫টি নির্দিষ্ট ভূমিকা এবং দায়িত্ব
            </p>
          </motion.div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              {...fadeInUp}
              className="lg:col-span-3 lg:mx-auto lg:w-2/3"
            >
              <Card className="overflow-hidden border-2 border-purple-200 shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/team-collaboration.png"
                    alt="Team Collaboration"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            {...staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {teamRoles.map((role, index) => (
              <motion.div
                key={index}
                {...scaleIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden border-2 transition-all hover:shadow-2xl">
                  <div
                    className={`bg-gradient-to-br ${role.color} p-6 text-white`}
                  >
                    <role.icon className="mb-4 h-12 w-12" />
                    <h3 className="mb-1 text-2xl font-bold">{role.title}</h3>
                    <p className="text-sm text-white/80">{role.subtitle}</p>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{role.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              মূল্যায়ন সিস্টেম
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              সুষ্ঠু ও স্বচ্ছ মূল্যায়নের জন্য সুনির্দিষ্ট মানদণ্ড
            </p>
          </motion.div>

          <div className="mx-auto mb-12 max-w-4xl">
            <motion.div {...fadeInUp}>
              <Card className="overflow-hidden border-2 border-purple-200 shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/evaluation-dashboard.png"
                    alt="Evaluation Dashboard"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div {...fadeInUp}>
              <Card className="h-full border-2 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">নম্বর বিতরণ</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={evaluationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(entry) => `${entry.name}: ${entry.value}`}
                        outerRadius={100}
                        dataKey="value"
                      >
                        {evaluationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-purple-50 p-3">
                      <span className="font-semibold">মোট নম্বর:</span>
                      <span className="text-2xl font-bold text-purple-600">৬০</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="h-full border-2 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">অতিরিক্ত মানদণ্ড</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {criteriaData.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between rounded-lg border-2 p-4 transition-all hover:border-purple-500 hover:shadow-md"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`h-4 w-4 rounded-full ${item.color}`} />
                          <span className="font-medium">{item.criteria}</span>
                        </div>
                        <span
                          className={`text-xl font-bold ${
                            item.marks < 0 ? "text-red-600" : "text-green-600"
                          }`}
                        >
                          {item.marks > 0 ? "+" : ""}
                          {item.marks}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              র‍্যাঙ্কিং সিস্টেম
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              প্রতিযোগিতামূলক পরিবেশ তৈরি করে শিখনে উৎসাহ বৃদ্ধি
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div {...fadeInUp}>
              <Card className="h-full border-2 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    গ্রুপ র‍্যাঙ্কিং
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={rankingData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="group" />
                      <YAxis />
                      <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                        {rankingData.map((_entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              index === 0
                                ? "#eab308"
                                : index === 1
                                  ? "#a855f7"
                                  : "#3b82f6"
                            }
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="h-full border-2 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Award className="h-6 w-6 text-purple-600" />
                    পুরস্কার ব্যবস্থা
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-xl bg-gradient-to-r from-yellow-100 to-yellow-50 p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <Trophy className="h-8 w-8 text-yellow-600" />
                      <h3 className="text-xl font-bold text-yellow-900">
                        সেরা ৩ গ্রুপ
                      </h3>
                    </div>
                    <p className="text-yellow-800">মাসিক ভিত্তিতে পুরস্কৃত</p>
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-purple-100 to-purple-50 p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <GraduationCap className="h-8 w-8 text-purple-600" />
                      <h3 className="text-xl font-bold text-purple-900">
                        টপ ১০ শিক্ষার্থী
                      </h3>
                    </div>
                    <p className="text-purple-800">বিশেষ মূল্যায়ন ও স্বীকৃতি</p>
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-blue-100 to-blue-50 p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <Sparkles className="h-8 w-8 text-blue-600" />
                      <h3 className="text-xl font-bold text-blue-900">
                        সার্টিফিকেট
                      </h3>
                    </div>
                    <p className="text-blue-800">সেমিস্টার শেষে ডিজিটাল সার্টিফিকেট</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              উপকারিতা
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              শিক্ষক এবং শিক্ষার্থী উভয়ের জন্য বিশেষ সুবিধা
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div {...scaleIn}>
              <Card className="h-full border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl">শিক্ষকদের জন্য</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-purple-600" />
                    <div>
                      <h4 className="mb-1 font-semibold">তৎক্ষণিক পারফরম্যান্স ট্র্যাক</h4>
                      <p className="text-sm text-muted-foreground">
                        রিয়েল-টাইমে সব শিক্ষার্থীর অগ্রগতি দেখুন
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-purple-600" />
                    <div>
                      <h4 className="mb-1 font-semibold">সহজ মনিটরিং</h4>
                      <p className="text-sm text-muted-foreground">
                        সফটওয়্যারের মাধ্যমে স্বয়ংক্রিয় ডেটা সংগ্রহ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-purple-600" />
                    <div>
                      <h4 className="mb-1 font-semibold">কাঙ্ক্ষিত ফলাফল অর্জন</h4>
                      <p className="text-sm text-muted-foreground">
                        ডেটা-ড্রিভেন সিদ্ধান্তে শিক্ষার মান উন্নয়ন
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...scaleIn}>
              <Card className="h-full border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl">শিক্ষার্থীদের জন্য</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                    <div>
                      <h4 className="mb-1 font-semibold">টিমওয়ার্কে ডাউট সলভ</h4>
                      <p className="text-sm text-muted-foreground">
                        দলের সাহায্যে সহজে সমস্যা সমাধান
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                    <div>
                      <h4 className="mb-1 font-semibold">পারস্পরিক সহযোগিতায় শেখা</h4>
                      <p className="text-sm text-muted-foreground">
                        একে অপরকে শেখানোর মাধ্যমে নিজেও শিখুন
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                    <div>
                      <h4 className="mb-1 font-semibold">বিশ্বমানের মূল্যায়ন</h4>
                      <p className="text-sm text-muted-foreground">
                        স্বচ্ছ ও ন্যায্য ক্রাইটেরিয়ায় মূল্যায়ন
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              উপস্থাপক
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Smart Evaluator Model এর স্রষ্টা ও উন্নয়নকারী
            </p>
          </motion.div>

          <motion.div {...scaleIn} className="mx-auto max-w-3xl">
            <Card className="overflow-hidden border-2 border-purple-200 shadow-2xl">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 text-center text-white">
                <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <UserCircle className="h-20 w-20" />
                </div>
                <h3 className="mb-2 text-3xl font-bold">Mustafa Rahman</h3>
                <p className="text-lg text-blue-100">
                  Software Engineer | ICT Lecturer
                </p>
              </div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-lg bg-purple-50 p-4">
                    <Globe className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">Istanbul, Turkey (Remote)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-blue-50 p-4">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Institution</p>
                      <p className="font-semibold">MMMC/MIFM, Instructor</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-indigo-50 p-4">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      <a
                        href="https://evaluate-app11-mustafasir.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-indigo-600 hover:underline"
                      >
                        evaluate-app11-mustafasir.netlify.app
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <motion.section
        {...fadeInUp}
        className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-20 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            আজই শুরু করুন Smart Evaluator দিয়ে
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100">
            আপনার ক্লাসরুমে সহযোগিতামূলক শিখন এবং আধুনিক মূল্যায়ন সিস্টেম চালু করুন।
            শিক্ষার্থীদের একসাথে এগিয়ে যাওয়ার সুযোগ দিন।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-white text-lg text-purple-700 hover:bg-white/90"
              asChild
            >
              <a
                href="https://evaluate-app11-mustafasir.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                ডেমো দেখুন
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white bg-transparent text-lg text-white hover:bg-white/10"
            >
              যোগাযোগ করুন
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
