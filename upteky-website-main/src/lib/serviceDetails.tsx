import type React from 'react';
import { MessageSquare, Bot, Zap, Settings, BrainCircuit, Share2, Lightbulb, Users, Package, BarChart3, Edit } from "lucide-react";



export interface ServiceDetail {
  id: string;
  title: string;
  introduction: string;
  benefits: string[];
  process: string[];
  impacts: string[];
  highlights: string[];
  icon: React.ReactNode;
  imgSrc: string;
  contactLink: string;
  category?: string; // Optional category field for future use
  
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: "s01",
    title: "Interactive AI Website Chatbot",
    introduction: "Transform your website into a 24/7 engagement hub with an intelligent AI chatbot that delivers instant support, captures leads, and guides visitors through their journey.",
    benefits: [
      "Continuous customer engagement without human intervention",
      "Faster response times and improved lead capture",
      "Seamless integration with existing CRM and support systems",
      "Personalized interactions based on visitor behavior"
    ],
    process: [
      "Business needs assessment and chatbot goal definition",
      "Conversational flow design and customization",
      "Integration with website and backend systems",
      "Testing, deployment, and ongoing optimization"
    ],
    impacts: [
      "Increased conversion rates and reduced bounce rates",
      "Lower operational costs for support teams",
      "Enhanced customer satisfaction and retention"
    ],
    highlights: [
      "Supports multiple languages and channels",
      "Analytics dashboard for real-time performance tracking",
      "Customizable branding and tone"
    ],
    icon: <MessageSquare className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/chatbot.jpg",
    contactLink: "/contact?solution=website-chatbot"
  },
  {
    id: "s02",
    title: "WhatsApp & Multi-Platform Chatbot",
    introduction: "Expand your reach with AI-powered chatbots that engage customers across WhatsApp, Messenger, and other popular platforms, ensuring seamless, omnichannel communication.",
    benefits: [
      "Unified customer experience across messaging platforms",
      "Automated responses and notifications on preferred channels",
      "Rich media support for interactive conversations",
      "Easy integration with sales and support workflows"
    ],
    process: [
      "Channel selection and audience analysis",
      "Bot persona and conversation design",
      "Platform-specific integration and compliance setup",
      "User acceptance testing and go-live"
    ],
    impacts: [
      "Higher engagement rates on messaging platforms",
      "Reduced manual workload for customer-facing teams",
      "Consistent brand messaging across channels"
    ],
    highlights: [
      "Supports group and broadcast messaging",
      "End-to-end encryption for secure interactions",
      "Automated handoff to human agents when needed"
    ],
    icon: <Bot className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/multiplatform.png",
    contactLink: "/contact?solution=multiplatform-chatbot"
  },
  {
    id: "s03",
    title: "AI-Powered Lead Reactivation",
    introduction: "Revitalize your sales pipeline by automatically re-engaging dormant leads with personalized, AI-driven campaigns that reignite interest and prompt action.",
    benefits: [
      "Automated follow-ups tailored to individual lead profiles",
      "Improved conversion rates from previously inactive contacts",
      "Data-driven insights for campaign optimization",
      "Reduced manual effort for sales teams"
    ],
    process: [
      "Lead segmentation and campaign goal setting",
      "Message personalization using AI analytics",
      "Automated outreach scheduling and delivery",
      "Performance tracking and iterative refinement"
    ],
    impacts: [
      "Increased sales opportunities from existing databases",
      "Shortened sales cycles",
      "Higher ROI on marketing and sales efforts"
    ],
    highlights: [
      "A/B testing for message effectiveness",
      "Integration with CRM and marketing automation tools",
      "Detailed reporting on lead engagement"
    ],
    icon: <Zap className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/lead.png",
    contactLink: "/contact?solution=lead-reactivation"
  },
  {
    id: "s04",
    title: "AI Voice Assistant (Voice Bot)",
    introduction: "Deliver human-like voice interactions for customer support and information services with advanced AI voice bots, available around the clock.",
    benefits: [
      "Instant, 24/7 engagement for website visitors.",
      "Automated lead capture and qualification.",
      "Appointment scheduling and calendar integration.",
      "Personalized responses based on visitor behavior."
    ],
    process: [
      "Requirement analysis and conversation flow mapping.",
      "Chatbot design, persona, and knowledge setup.",
      "Development, integrations, and testing.",
      "Deployment, monitoring, and ongoing optimization."
    ],
    impacts: [
      "30–50% more leads captured through proactive engagement.",
      "Faster customer response times, reducing drop-offs",
      "Lower support costs by automating common queries",
      "Higher customer satisfaction (CSAT) with 24/7 availability"
    ],
    highlights: [
      "Knowledge base ingestion for accurate responses",
      "Context-aware escalation to human agents",
"Multi-device responsive design (desktop, tablet, mobile)",
"Analytics dashboard for real-time insights"
      
    ],
    icon: <Zap className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/10.jpg",
    contactLink: "/contact?solution=voice-assistant"
  },
  {
    id: "s05",
    title: "AI Workflow Automation",
    introduction: "Automate repetitive business processes and orchestrate complex workflows with AI-driven solutions that boost productivity and accuracy.",
    benefits: [
      "Elimination of manual, error-prone tasks",
      "Faster process execution and turnaround",
      "Real-time monitoring and reporting",
      "Easy adaptation to changing business needs"
    ],
    process: [
      "Process discovery and automation opportunity analysis",
      "Workflow design and AI integration",
      "Pilot implementation and feedback collection",
      "Full-scale deployment and support"
    ],
    impacts: [
      "Significant reduction in operational costs",
      "Greater process transparency and compliance",
      "Enhanced employee focus on high-value activities"
    ],
    highlights: [
      "Drag-and-drop workflow builder",
      "Integration with third-party apps and APIs",
      "Role-based access controls"
    ],
    icon: <Settings className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/11.jpg",
    contactLink: "/contact?solution=workflow-automation"
  },
  {
    id: "s06",
    title: "Custom AI Model Development",
    introduction: "Solve unique business challenges with bespoke AI models tailored to your data and objectives, enabling advanced analytics and intelligent automation.",
    benefits: [
      "Solutions built for your specific business context",
      "Access to the latest machine learning and deep learning techniques",
      "Scalable models that evolve with your data",
      "Competitive edge through proprietary AI capabilities"
    ],
    process: [
      "Requirements gathering and data assessment",
      "Model architecture design and prototyping",
      "Training, validation, and performance tuning",
      "Deployment and continuous improvement"
    ],
    impacts: [
      "Unlock new revenue streams and efficiencies",
      "Accelerate innovation cycles",
      "Reduce reliance on off-the-shelf solutions"
    ],
    highlights: [
      "Full transparency into model logic and performance",
      "Support for NLP, computer vision, and predictive analytics",
      "Ongoing monitoring and retraining services"
    ],
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/custom.png",
    contactLink: "/contact?solution=custom-ai-model"
  },
  {
    id: "s07",
    title: "AI-Powered Data Analytics",
    introduction: "Transform raw data into actionable business intelligence with AI-powered analytics that uncover trends, predict outcomes, and drive strategic decisions.",
    benefits: [
      "Automated data cleansing and preparation",
      "Advanced predictive and prescriptive analytics",
      "Intuitive dashboards for real-time insights",
      "Integration with existing BI tools"
    ],
    process: [
      "Data source integration and quality assessment",
      "Model development for analytics use cases",
      "Dashboard and report customization",
      "User training and adoption support"
    ],
    impacts: [
      "Faster, data-driven decision-making",
      "Reduced risk through early anomaly detection",
      "Improved business forecasting accuracy"
    ],
    highlights: [
      "Self-service analytics for business users",
      "Customizable visualizations",
      "Automated anomaly alerts"
    ],
    icon: <Share2 className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/data-analyst.jpg",
    contactLink: "/contact?solution=data-analytics"
  },
  {
    id: "s08",
    title: "AI Strategy Consulting",
    introduction: "Accelerate your AI journey with expert consulting that helps you define strategy, identify opportunities, and implement AI solutions for maximum business impact.",
    benefits: [
      "Clarity on AI readiness and potential ROI",
      "Tailored roadmaps for AI adoption",
      "Risk mitigation through expert guidance",
      "Faster time-to-value for AI investments"
    ],
    process: [
      "Initial discovery workshops and stakeholder interviews",
      "Opportunity assessment and feasibility analysis",
      "Strategy and roadmap development",
      "Implementation planning and change management"
    ],
    impacts: [
      "Confident, informed decision-making on AI initiatives",
      "Alignment of AI projects with business goals",
      "Sustainable, scalable AI adoption"
    ],
    highlights: [
      "Industry-specific expertise",
      "Proven frameworks and methodologies",
      "End-to-end support from planning to execution"
    ],
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/strategy.png",
    contactLink: "/contact?solution=ai-consulting"
  },
  {
    id: "s09",
    title: "AI Sales Agent",
    introduction: "Empower your sales team with an AI agent that automates lead qualification, outreach, and meeting scheduling, freeing your reps to focus on closing deals.",
    benefits: [
      "Consistent, timely follow-ups with every lead",
      "Automated scheduling and reminders",
      "Lead scoring based on predictive analytics",
      "Reduced administrative burden for sales reps"
    ],
    process: [
      "Sales process mapping and AI agent configuration",
      "Integration with CRM and calendar systems",
      "Personalization of outreach templates",
      "Performance monitoring and continuous tuning"
    ],
    impacts: [
      "More qualified leads in the pipeline",
      "Higher meeting-to-close ratios",
      "Shorter sales cycles"
    ],
    highlights: [
      "Seamless handoff to human sales reps",
      "Detailed analytics on agent performance",
      "Customizable sales scripts"
    ],
    icon: <Users className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/sales.png",
    contactLink: "/contact?solution=ai-sales-agent"
  },
  {
    id: "s10",
    title: "AI-Powered CRM Platform",
    introduction: "Revolutionize customer relationship management with an AI-powered CRM that predicts customer needs, automates tasks, and personalizes every interaction.",
    benefits: [
      "Smarter lead and opportunity management",
      "Automated data entry and updates",
      "Personalized communication at scale",
      "Predictive insights for upselling and retention"
    ],
    process: [
      "CRM data migration and integration",
      "AI module configuration and training",
      "Workflow automation setup",
      "User onboarding and support"
    ],
    impacts: [
      "Increased sales productivity",
      "Higher customer satisfaction and loyalty",
      "Reduced churn and increased lifetime value"
    ],
    highlights: [
      "360-degree customer view",
      "Automated alerts and recommendations",
      "Customizable dashboards"
    ],
    icon: <Package className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/crm.png",
    contactLink: "/contact?solution=ai-crm"
  },
  {
    id: "s11",
    title: "AI Digital Marketing Agent",
    introduction: "Supercharge your digital marketing with an AI agent that automates campaign management, optimizes spend, and personalizes content for every audience segment.",
    benefits: [
      "Automated campaign setup and optimization",
      "Real-time audience targeting and segmentation",
      "Personalized content delivery at scale",
      "Comprehensive performance analytics"
    ],
    process: [
      "Marketing goals and audience definition",
      "AI-driven campaign design and asset creation",
      "Automated launch and real-time optimization",
      "Insight generation and reporting"
    ],
    impacts: [
      "Higher campaign ROI and lower acquisition costs",
      "Improved engagement and conversion rates",
      "Faster adaptation to market changes"
    ],
    highlights: [
      "Integration with major ad platforms",
      "Dynamic creative optimization",
      "Cross-channel performance tracking"
    ],
    icon: <BarChart3 className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/digital.png",
    contactLink: "/contact?solution=ai-digital-marketing"
  },
 {
  id: "s12",
  title: "AI-Powered ERP ",
  introduction: "Transform your business operations with an AI-driven ERP agent that automates core processes, enhances resource planning, and provides actionable insights across departments.",
  benefits: [
    "End-to-end process automation across finance, HR, and supply chain",
    "Real-time data synchronization and reporting",
    "Smart inventory and resource management",
    "Customizable workflows to fit business needs"
  ],
  process: [
    "Business process mapping and data integration",
    "AI-driven workflow automation and configuration",
    "Live monitoring and adaptive resource planning",
    "Analytics-driven decision-making and reporting"
  ],
  impacts: [
    "Improved operational efficiency and accuracy",
    "Faster response to supply and demand changes",
    "Reduced overhead through intelligent automation"
  ],
  highlights: [
    "Modular and scalable architecture",
    "Integration with existing ERP and CRM systems",
    "AI-powered anomaly detection and forecasting"
  ],
  icon: <Lightbulb className="w-8 h-8 text-accent" />,
  imgSrc: "/assets/erp.png",
  contactLink: "/contact?solution=ai-erp-agent"
}

];
