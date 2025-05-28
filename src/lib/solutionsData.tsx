
import type React from 'react';
import { MessageSquare, Bot, Zap, Settings, BrainCircuit, Share2, Lightbulb, Users, Package, BarChart3, Edit } from "lucide-react";

export interface Solution {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  imgSrc: string;
  features: string[];
  contactLink: string;
}

// IMPORTANT: Ensure all image files listed in 'imgSrc' exist in your 'public/assets/' folder
// with the exact same name and extension (e.g., .png).

export const allSolutions: Solution[] = [
  {
    id: "s01",
    title: "Interactive AI Website Chatbot",
    category: "Chatbots",
    description: "Engage website visitors 24/7 with an intelligent chatbot that answers queries, qualifies leads, and schedules appointments.",
    icon: <MessageSquare className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/chatbot.jpg", // Descriptive name
    features: ["Instant Responses", "Lead Qualification", "Appointment Scheduling", "Customizable Flows"],
    contactLink: "/contact?solution=website-chatbot"
  },
  {
    id: "s02",
    title: "WhatsApp & Multi-Platform Chatbot",
    category: "Chatbots",
    description: "Extend your reach with AI chatbots on WhatsApp, Messenger, and other popular platforms, providing seamless customer interaction.",
    icon: <Bot className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/multiplatform.png", // Descriptive and hyphenated
    features: ["Omnichannel Presence", "Automated Notifications", "Rich Media Support", "CRM Integration"],
    contactLink: "/contact?solution=multiplatform-chatbot"
  },
  {
    id: "s03",
    title: "AI-Powered Lead Reactivation",
    category: "Chatbots",
    description: "Re-engage cold leads and dormant contacts with personalized, AI-driven outreach campaigns via chat.",
    icon: <Zap className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/lead.png", // Descriptive and hyphenated
    features: ["Targeted Campaigns", "Automated Follow-ups", "Performance Tracking", "A/B Testing"],
    contactLink: "/contact?solution=lead-reactivation"
  },
  {
    id: "s04",
    title: "AI Voice Assistant (Voice Bot)",
    category: "Voice AI",
    description: "Automate customer service calls and provide instant voice support with an AI-powered voice assistant.",
    icon: <Zap className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/10.jpg", // Descriptive and hyphenated
    features: ["Natural Language Understanding", "24/7 Availability", "Call Routing", "Sentiment Analysis"],
    contactLink: "/contact?solution=voice-assistant"
  },
  {
    id: "s05",
    title: "AI Workflow Automation",
    category: "Automation",
    description: "Streamline business processes, reduce manual effort, and improve operational efficiency with custom AI workflows.",
    icon: <Settings className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/11.jpg", // Descriptive and hyphenated
    features: ["Process Mining", "Task Automation", "System Integration", "Real-time Analytics"],
    contactLink: "/contact?solution=workflow-automation"
  },
  {
    id: "s06",
    title: "Custom AI Model Development",
    category: "Advanced AI",
    description: "Develop bespoke AI models tailored to your unique business challenges and data, unlocking new insights and capabilities.",
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/custom.png", // Descriptive and hyphenated
    features: ["Machine Learning", "Deep Learning", "NLP Solutions", "Computer Vision"],
    contactLink: "/contact?solution=custom-ai-model"
  },
  {
    id: "s07",
    title: "AI-Powered Data Analytics",
    category: "Advanced AI",
    description: "Transform raw data into actionable insights with advanced AI analytics, enabling smarter, data-driven decisions.",
    icon: <Share2 className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/data-analyst.jpg", // Descriptive and hyphenated
    features: ["Predictive Analytics", "Anomaly Detection", "Data Visualization", "Reporting Dashboards"],
    contactLink: "/contact?solution=data-analytics"
  },
  {
    id: "s08",
    title: "AI Strategy Consulting",
    category: "Services",
    description: "Partner with our AI experts to define your AI strategy, identify opportunities, and create a roadmap for successful AI adoption.",
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/strategy.png", // Descriptive and hyphenated
    features: ["Opportunity Assessment", "Feasibility Studies", "Implementation Planning", "Change Management"],
    contactLink: "/contact?solution=ai-consulting"
  },
  {
    id: "s09",
    title: "AI Sales Agent",
    category: "Sales & Marketing",
    description: "Empower your sales team with an AI agent that automates outreach, qualifies leads, and schedules meetings.",
    icon: <Users className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/sales.png", // Descriptive and hyphenated
    features: ["Automated Prospecting", "Lead Scoring", "Meeting Scheduling", "Sales Analytics"],
    contactLink: "/contact?solution=ai-sales-agent"
  },
  {
    id: "s10",
    title: "AI-Powered CRM Platform",
    category: "CRM & Automation",
    description: "Leverage an intelligent CRM that uses AI to manage customer relationships, predict behavior, and personalize interactions.",
    icon: <Package className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/crm.png", // Descriptive and hyphenated
    features: ["Predictive Lead Scoring", "Automated Data Entry", "Personalized Communication", "Customer Segmentation"],
    contactLink: "/contact?solution=ai-crm"
  },
  {
    id: "s11",
    title: "AI Digital Marketing Agent",
    category: "Sales & Marketing",
    description: "Optimize your digital marketing campaigns with an AI agent that analyzes data, automates ad buys, and personalizes content.",
    icon: <BarChart3 className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/digital.png", // Descriptive and hyphenated
    features: ["Campaign Optimization", "Audience Targeting", "Content Personalization", "Automated Reporting"],
    contactLink: "/contact?solution=ai-digital-marketing"
  }
];
