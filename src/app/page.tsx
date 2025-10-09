"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Globe,
  ChevronRight,
  Play,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import Plasma from "@/components/ui/plasma";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Plasma Background - Full Page */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Plasma
          color="#9333ea"
          speed={0.3}
          direction="forward"
          scale={1.2}
          opacity={0.15}
          mouseInteractive={true}
        />
      </div>

      {/* Content with glassmorphism */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section
          className="relative pb-20 px-6"
          style={{ paddingTop: "15rem" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <Badge
                variant="secondary"
                className="glass mb-6 px-4 py-2 text-xs rounded-full"
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                Trusted by 10,000+ teams worldwide
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
                Analytics Dashboard
                <br />
                <span className="text-muted-foreground">
                  Built for Modern Teams
                </span>
              </h1>

              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Transform raw data into actionable insights. Velora helps teams
                visualize metrics, track KPIs, and make data-driven decisions
                with beautiful real-time dashboards.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 glass text-sm"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button size="default" className="h-10 px-5 text-sm">
                    Get Started
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </motion.div>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mt-6">
                <span className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-green-600" />
                  Free 14-day trial
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-green-600" />
                  No credit card
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-3 w-3 text-green-600" />
                  Cancel anytime
                </span>
              </div>
            </div>

            {/* Dashboard Preview - Glass */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.0,
                duration: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="relative max-w-[1400px] mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent blur-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div className="relative glass-card rounded-2xl shadow-2xl p-3">
                  <div className="aspect-video rounded-xl glass relative overflow-hidden border">
                    <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-transparent to-muted/5"></div>
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-8 h-full">
                      {[
                        {
                          icon: TrendingUp,
                          iconColor: "text-primary",
                          value: "$24.5k",
                          label: "Monthly Revenue",
                          change: "+12.5% from last month",
                          delay: 0.2,
                        },
                        {
                          icon: Users,
                          iconColor: "text-blue-600",
                          value: "1,429",
                          label: "Active Users",
                          change: "+8.2% growth",
                          delay: 0.4,
                        },
                        {
                          icon: Zap,
                          iconColor: "text-yellow-600",
                          value: "98.9%",
                          label: "Uptime",
                          change: "Last 30 days",
                          delay: 0.6,
                        },
                      ].map((card, index) => (
                        <motion.div
                          key={index}
                          className="glass-card rounded-xl p-5 cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 1.2 + card.delay,
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <card.icon
                            className={`h-5 w-5 ${card.iconColor} mb-3`}
                          />
                          <p className="text-2xl font-bold mb-0.5">
                            {card.value}
                          </p>
                          <p className="text-xs text-muted-foreground mb-2">
                            {card.label}
                          </p>
                          <div className="flex items-center text-xs text-green-600">
                            <ChevronRight className="h-3 w-3" />
                            <span>{card.change}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="glass mb-3 text-xs rounded-full"
              >
                <Sparkles className="h-3 w-3 mr-1.5" />
                Features
              </Badge>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Everything you need to succeed
              </h2>

              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Powerful analytics tools designed for teams who move fast and
                make data-driven decisions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  color: "text-primary",
                  title: "Real-time Analytics",
                  description:
                    "Watch your data come alive with live updates, interactive charts, and instant insights that keep you ahead.",
                },
                {
                  icon: Users,
                  color: "text-blue-600",
                  title: "Team Collaboration",
                  description:
                    "Work seamlessly with role-based permissions, shared dashboards, and real-time collaboration features.",
                },
                {
                  icon: Shield,
                  color: "text-green-600",
                  title: "Enterprise Security",
                  description:
                    "Bank-grade encryption, GDPR compliance, and SOC 2 certification ensure your data stays secure.",
                },
                {
                  icon: BarChart3,
                  color: "text-purple-600",
                  title: "Custom Dashboards",
                  description:
                    "Build dashboards that match your workflow with drag-and-drop widgets and custom metrics.",
                },
                {
                  icon: Globe,
                  color: "text-orange-600",
                  title: "Global Infrastructure",
                  description:
                    "Lightning-fast performance worldwide with edge computing and multi-region data centers.",
                },
                {
                  icon: Clock,
                  color: "text-pink-600",
                  title: "24/7 Support",
                  description:
                    "Get help whenever you need it with round-the-clock support from our expert team.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-card rounded-2xl p-6 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4">
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>

                  <h3 className="text-base font-semibold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="glass-card rounded-3xl p-10 md:p-14"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to transform your data?
              </h2>

              <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of teams already using Velora to make better
                decisions
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button size="lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button size="lg" variant="outline" className="glass">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
