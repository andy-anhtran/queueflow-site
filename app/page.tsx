"use client";

import React, { useState } from "react";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Download,
  Clock,
  Sparkles,
  Building2,
  Mail,
  Zap,
  Kanban,
  FileCheck2,
  ChevronRight,
  Activity,
  Users2,
  Globe2,
} from "lucide-react";

export default function QueueFlowLanding() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-x-hidden font-sans">
      {/* Background radial gradients for Obsidian glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden opacity-30 z-0">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 blur-[130px] rounded-full" />
        <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 blur-[140px] rounded-full" />
      </div>

      {/* 1. STICKY HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Monogram */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1">
              QueueFlow
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#features"
              className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded px-1"
            >
              Features
            </a>
            <a
              href="#workflow"
              className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded px-1"
            >
              Workflow
            </a>
            <a
              href="#pricing"
              className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded px-1"
            >
              Pricing
            </a>
            <a
              href="#corporate-compliance"
              className="hover:text-cyan-400 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded px-1"
            >
              Compliance
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/25 hover:shadow-emerald-400/35 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* 2. HERO SECTION */}
        <section
          id="waitlist"
          className="pt-16 pb-20 md:pt-24 md:pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 mb-8 backdrop-blur-sm shadow-inner">
            <span className="text-cyan-400">🚀 Pre-Launch Beta</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Built by Techy Tinker, LLC</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Ditch the Timesheets. <br />
            Run Your Design Retainer on a{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Visual Queue.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
            QueueFlow gives boutique design and development agencies an
            asynchronous client portal and Kanban queue. No hourly billables, no
            chaotic email threads—just strict 1-task WIP limits and automated
            flat-rate Stripe subscriptions.
          </p>

          {/* Interactive Waitlist Form */}
          <div className="max-w-md mx-auto mb-10">
            {status === "success" ? (
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-4 flex items-center gap-3 text-emerald-300 text-sm text-left backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">You are on the priority waitlist!</p>
                  <p className="text-emerald-400/90 text-xs mt-0.5">
                    We will notify {email} when your workspace invite is ready.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your agency email..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 backdrop-blur-sm transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/35 disabled:opacity-70 cursor-pointer"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-slate-950"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Securing Spot...
                    </span>
                  ) : (
                    <>
                      <span>Request Early Access</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              Flat-rate $49/mo
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="h-3.5 w-3.5 text-emerald-400" />
              Built for Stripe Billing
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Users2 className="h-3.5 w-3.5 text-cyan-400" />
              Unlimited Clients
            </span>
          </div>
        </section>

        {/* 3. VISUAL KANBAN QUEUE PREVIEW CARD */}
        <section id="workflow" className="pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-md shadow-2xl shadow-black/60 relative overflow-hidden">
            {/* Top Bar / Client Portal Header Mockup */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-rose-500/70 inline-block"></div>
                <div className="h-3 w-3 rounded-full bg-amber-500/70 inline-block"></div>
                <div className="h-3 w-3 rounded-full bg-emerald-500/70 inline-block"></div>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  portal.queueflow.cloud/app/apex-studios
                </span>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Stripe Retainer: Active ($4,500/mo)
                </span>
                <span className="text-xs text-slate-400">WIP Concurrency: 1/1</span>
              </div>
            </div>

            {/* 3-Column Visual Kanban Queue */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Column 1: Pending */}
              <div className="bg-slate-950/60 border border-slate-800/70 rounded-xl p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-200">Pending Requests</span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
                      2
                    </span>
                  </div>
                  <Clock className="h-4 w-4 text-slate-400" />
                </div>

                <div className="space-y-3 flex-1">
                  {/* Card #1 */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3.5 hover:border-slate-700 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono">
                        QUEUE #1
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">Design Brief</span>
                    </div>
                    <p className="text-sm font-medium text-slate-200 leading-snug mb-2">
                      Homepage Redesign & Figma Component Handoff
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Submitted yesterday</span>
                      <span className="text-slate-400">Ready next</span>
                    </div>
                  </div>

                  {/* Card #2 */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3.5 hover:border-slate-700 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono">
                        QUEUE #2
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">Motion Ad</span>
                    </div>
                    <p className="text-sm font-medium text-slate-200 leading-snug mb-2">
                      Q3 Motion Graphics & Social Campaign Video Kit
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Submitted 2d ago</span>
                      <span className="text-slate-400">In Queue</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: In Progress (Active) with Emerald Pulse */}
              <div className="bg-slate-950/60 border-2 border-emerald-500/40 rounded-xl p-4 flex flex-col relative shadow-lg shadow-emerald-500/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-emerald-300">
                      In Progress (Active)
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      1 WIP
                    </span>
                  </div>
                  <Activity className="h-4 w-4 text-emerald-400 animate-pulse" />
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/40 rounded-lg p-3.5 relative flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        ACTIVE WIP (1 of 1 Limit)
                      </span>
                      <span className="text-[11px] text-emerald-400 font-medium">On Track</span>
                    </div>
                    <p className="text-sm font-semibold text-white leading-snug mb-2">
                      SaaS Billing Dashboard & Analytics Overhaul
                    </p>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      Lead designer currently refining interactive data tables and responsive
                      recharts tokens.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span>WIP Completion Est.</span>
                      <span className="text-emerald-400 font-mono">Today, 4:00 PM</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-4/5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Delivered */}
              <div className="bg-slate-950/60 border border-slate-800/70 rounded-xl p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-200">Delivered</span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
                      1
                    </span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                </div>

                <div className="space-y-3 flex-1">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3.5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/50 text-emerald-400">
                        COMPLETED
                      </span>
                      <span className="text-[11px] text-slate-400">Approved</span>
                    </div>
                    <p className="text-sm font-medium text-slate-200 leading-snug mb-3">
                      Mobile App Design System Tokens v2.1
                    </p>
                    <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileCheck2 className="h-4 w-4 text-cyan-400" />
                        <span className="text-xs text-slate-300 font-mono">tokens-v2.1.zip</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer">
                        <Download className="h-3 w-3" />
                        142 MB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VALUE PROPOSITION GRID (3 FEATURE CARDS) */}
        <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-3">
              Engineered for Retainer Agencies
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Predictable agency cashflow without the scope creep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-7 backdrop-blur-sm hover:border-slate-700 transition-all flex flex-col">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Kanban className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Strict WIP Concurrency</h3>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                Prevent scope creep by capping active client work to one request at a time.
                Clients prioritize their queue themselves, eliminating out-of-scope emergencies
                and infinite slack pings.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center text-xs font-semibold text-emerald-400">
                <span>Enforced queue limits</span>
                <ChevronRight className="h-3.5 w-3.5 ml-1" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-7 backdrop-blur-sm hover:border-slate-700 transition-all flex flex-col">
              <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automated Stripe Billing Sync</h3>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                Webhook-driven access control. Workspaces automatically pause or lock if client
                subscription payments fail, dispute, or lapse—protecting your agency hours with zero manual chasing.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center text-xs font-semibold text-cyan-400">
                <span>Real-time webhook triggers</span>
                <ChevronRight className="h-3.5 w-3.5 ml-1" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-7 backdrop-blur-sm hover:border-slate-700 transition-all flex flex-col">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">White-Label Client Portal</h3>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                Clients submit briefs, attach brand assets, and download deliverables on your custom
                domain without touching internal tools or complex project management software.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center text-xs font-semibold text-emerald-400">
                <span>Branded agency experience</span>
                <ChevronRight className="h-3.5 w-3.5 ml-1" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. PRICING SECTION */}
        <section id="pricing" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
              Transparent Flat-Rate Pricing
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              One simple tier for growing agencies.
            </p>
          </div>

          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950 border-2 border-emerald-500/30 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md">
              Early Adopter Beta Offer
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Agency Starter</h3>
                <p className="text-sm text-slate-400">
                  Everything required to automate async retainers and queue workflows.
                </p>
              </div>
              <div className="text-left md:text-right">
                <div className="flex items-baseline gap-1 md:justify-end">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    $49
                  </span>
                  <span className="text-slate-400 text-sm font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Billed monthly via Stripe. Cancel anytime.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "1 Agency Workspace",
                "Unlimited Client Portals",
                "1-Task Concurrent Active Queue",
                "Secure File Dropzones & Assets",
                "Self-Service Stripe Customer Portal",
                "Webhook-Powered Retainer Lockdown",
                "Custom Agency Branding & Logo",
                "Priority Technical Support",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#waitlist"
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-base hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
            >
              <span>Join Waitlist for Early Access</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* 6. CORPORATE OPERATOR & LEGAL VERIFICATION BLOCK */}
        <section
          id="corporate-compliance"
          className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Corporate Operator & Compliance Verification
                  <span className="inline-flex items-center gap-1 text-[11px] font-normal px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    <ShieldCheck className="h-3 w-3 text-emerald-400" />
                    Verified Operator
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Official disclosure for merchant underwriting, financial compliance, and banking review.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Operating Entity</span>
                  <p className="text-slate-100 font-bold text-base mt-0.5">Techy Tinker, LLC</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Legal Registration Status</span>
                  <p className="text-slate-200 mt-0.5 font-medium">
                    US Registered LLC (Delaware) • File Number Available Upon KYC Review
                  </p>
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Business Activity</span>
                  <p className="text-slate-200 mt-0.5 leading-snug">
                    QueueFlow is an asynchronous B2B SaaS workflow application engineered and
                    operated by Techy Tinker, LLC. Payments processed securely via Stripe.
                  </p>
                </div>
              </div>

              <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Direct Merchant Support</span>
                  <div className="flex items-center gap-2 mt-1 text-slate-200 font-mono text-sm">
                    <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                    <a
                      href="mailto:support@queueflow.cloud"
                      className="text-emerald-400 hover:underline"
                    >
                      support@queueflow.cloud
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Payment Architecture</span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Card data is tokenized directly via Stripe Elements. No payment card numbers, CVVs,
                    or raw banking credentials are ever stored on or transmitted across QueueFlow application servers.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Merchant Underwriting Status:</span>
                  <span className="text-emerald-400 font-medium">Stripe Atlas Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90 py-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Layers className="h-4 w-4" />
              </div>
              <span className="text-slate-200 font-bold text-sm">QueueFlow</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-mono">queueflow.cloud</span>
            </div>

            {/* Compliance Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <button
                type="button"
                onClick={() => setActiveModal("tos")}
                className="hover:text-slate-200 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={() => setActiveModal("privacy")}
                className="hover:text-slate-200 transition-colors cursor-pointer"
              >
                Privacy Policy (GDPR/CCPA)
              </button>
              <button
                type="button"
                onClick={() => setActiveModal("dpa")}
                className="hover:text-slate-200 transition-colors cursor-pointer"
              >
                Data Processing Addendum (DPA)
              </button>
              <button
                type="button"
                onClick={() => setActiveModal("subprocessors")}
                className="hover:text-slate-200 transition-colors cursor-pointer"
              >
                Subprocessors
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
            <p>© 2026 Techy Tinker, LLC. All rights reserved.</p>
            <p className="text-[11px] text-slate-400">
              QueueFlow™ is a registered commercial brand operated by Techy Tinker, LLC (Delaware).
            </p>
          </div>
        </div>
      </footer>

      {/* COMPLIANCE MODAL DIALOGS */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-slate-300 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <h4 className="text-lg font-bold text-white">
                {activeModal === "tos" && "Terms of Service"}
                {activeModal === "privacy" && "Privacy Policy (GDPR & CCPA Compliant)"}
                {activeModal === "dpa" && "Data Processing Addendum (DPA)"}
                {activeModal === "subprocessors" && "Authorized Subprocessors"}
              </h4>
              <button
                onClick={() => setActiveModal(null)}
                className="h-8 w-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-sm font-semibold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="text-xs sm:text-sm leading-relaxed space-y-4 text-slate-300">
              {activeModal === "tos" && (
                <>
                  <p>
                    <strong>Operator:</strong> Techy Tinker, LLC (Delaware, United States).
                  </p>
                  <p>
                    By accessing or using QueueFlow (queueflow.cloud), you agree to be bound by these
                    Terms of Service. QueueFlow provides an asynchronous visual task queue and client portal
                    SaaS platform for agencies and their authorized clients.
                  </p>
                  <p>
                    <strong>Subscriptions & Payments:</strong> Subscriptions are billed in advance on a
                    recurring monthly schedule via Stripe. You may cancel at any time through the customer portal.
                  </p>
                  <p>
                    <strong>Contact:</strong> For contractual inquiries, contact support@queueflow.cloud.
                  </p>
                </>
              )}
              {activeModal === "privacy" && (
                <>
                  <p>
                    Techy Tinker, LLC respects your privacy rights under the European Union General Data
                    Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
                  </p>
                  <p>
                    We collect minimal personal data strictly necessary to provide subscription access,
                    including email address, agency name, and encrypted authentication tokens. We do not sell
                    personal data or trade marketing lists.
                  </p>
                  <p>
                    <strong>Security:</strong> All communication is encrypted via TLS 1.3. Payment processing
                    is delegated to Stripe Inc.
                  </p>
                </>
              )}
              {activeModal === "dpa" && (
                <>
                  <p>
                    This Data Processing Addendum (&quot;DPA&quot;) governs the processing of personal data
                    in connection with QueueFlow subscriptions provided by Techy Tinker, LLC.
                  </p>
                  <p>
                    Techy Tinker, LLC acts as a Data Processor on behalf of the subscriber (Data Controller).
                    Customer data is processed solely in accordance with documented instructions.
                  </p>
                </>
              )}
              {activeModal === "subprocessors" && (
                <>
                  <p>
                    Techy Tinker, LLC engages the following third-party subprocessors to deliver the QueueFlow
                    platform:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Stripe, Inc.</strong> — Payment billing, subscription lifecycle, and customer
                      portal infrastructure (USA / Global).
                    </li>
                    <li>
                      <strong>Vercel, Inc.</strong> — Edge hosting, serverless computing, and CDN delivery
                      (USA / Global).
                    </li>
                    <li>
                      <strong>Amazon Web Services (AWS)</strong> — S3 cloud storage for secure deliverable
                      asset drops (USA).
                    </li>
                  </ul>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs hover:bg-emerald-400 cursor-pointer"
              >
                Close Disclosure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
