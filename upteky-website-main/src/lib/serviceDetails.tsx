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
  stats?: Array<{ icon: string; value: number | string; suffix?: string; label: string }>;
  featureCards?: Array<{ icon: string; title: string; description: string }>;
  partnerTitle?: string;
  partnerIntro?: string;
  partnerBullets?: string[];
  
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: "s01",
    title: "Interactive AI Website Chatbot",
    introduction: "Transform your website into a conversion powerhouse with the Interactive AI Website Chatbot by Upteky Solutions Pvt. Ltd.. Our chatbot engages visitors in real time, answers queries instantly, qualifies leads, and schedules appointments — ensuring no opportunity is ever missed. Built with advanced AI, seamless integrations, and intuitive design, it works as your digital sales and support assistant, available round the clock.",
    benefits: [
      "Instant, 24/7 engagement for website visitors",
      "Automated lead capture and qualification",
      "Appointment scheduling and calendar integration",
      "Personalized responses based on visitor behavior",
      "Reduced bounce rate and improved conversions",
    ],
    process: [
      "Requirement analysis and conversation flow mapping",
      "Chatbot design, persona, and knowledge setup",
      "Development, integrations, and testing",
      "Deployment, monitoring, and ongoing optimization",

    ],
    impacts: [
      "30–50% more leads captured through proactive engagement",
      "Faster customer response times, reducing drop-offs",
      "Lower support costs by automating common queries",
      "Increased sales velocity with qualified leads routed instantly",
      "Higher customer satisfaction (CSAT) with 24/7 availability"
      
      
      
    ],
    highlights: [
      "Knowledge base ingestion for accurate responses",
      "Context-aware escalation to human agents",
      "Multi-device responsive design (desktop, tablet, mobile)",
      "Analytics dashboard for real-time insights",
      "GDPR-compliant data handling and security",

    ],
    icon: <MessageSquare className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/chatbot.jpg",
    contactLink: "/contact?solution=website-chatbot",
    stats: [
      { icon: "TrendingUp", value: 96, suffix: "%", label: "Client Satisfaction" },
      { icon: "Clock", value: 24, suffix: "/7", label: "Customer Engagement" },
      { icon: "LineChart", value: 40, suffix: "% Faster", label: "Lead Conversion" },
    ],
    featureCards: [
      { icon: "Shield", title: "Enterprise-Grade Solution", description: "Context-aware and scalable chatbot designed for businesses of all sizes, from startups to enterprises." },
      { icon: "Globe", title: "Global Reach", description: "Support for multi-language audiences, enabling your brand to connect with customers worldwide." },
      { icon: "BarChart3", title: "Conversion-Focused", description: "Flows built to capture leads, nurture prospects, and accelerate sales with minimal human intervention" },
      { icon: "Activity", title: "Seamless Integrations", description: "Direct integration with CRM systems, calendars, marketing tools, and databases for complete automation." }
    ]
  },
  {
    id: "s02",
    title: "WhatsApp & Multi-Platform Chatbot",
    introduction: "Extend your brand’s reach with the WhatsApp & Multi-Platform Chatbot by Upteky Solutions Pvt. Ltd.. Our AI-powered bots deliver personalized, real-time conversations across all major messaging platforms, ensuring seamless engagement with customers wherever they are. From automated notifications to payments and order updates, these chatbots bring convenience, scalability, and results.",
    
    icon: <Bot className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/multiplatform.png",
    contactLink: "/contact?solution=multiplatform-chatbot",
    stats: [
      { icon: "TrendingUp", value: 97, suffix: "%", label: "Client Satisfaction" },
      { icon: "Globe", value: "Omnichannel", suffix: "", label: "WhatsApp • Messenger • Instagram • More" },
      { icon: "Zap", value: 50, suffix: "% Faster", label: "Customer Response Times" },
    ],
    featureCards: [
      { icon: "Shield", title: "Enterprise-Grade Messaging", description: "Built to manage millions of interactions across platforms without compromising security or performance." },
      { icon: "Globe", title: "Global Reach", description: "Enable multi-language conversations on WhatsApp, Instagram, Messenger, and more to connect with worldwide customers." },
      { icon: "Activity", title: "Engagement at Scale", description: "From drip campaigns and broadcasts to one-on-one support, engage audiences at the right time with the right message." },
      { icon: "BarChart3", title: "Payments and Commerce", description: "Seamless integrations with payment gateways, CRMs, and e-commerce platforms for smooth end-to-end transactions." }
    ],
    benefits: [
      "Engage customers on the platforms they already use",
      "Automated notifications, reminders, and order updates",
      "Rich media support (images, PDFs, videos, voice notes)",
      "Real-time conversations with AI-driven personalization",
      "Improved lead generation and customer retention"
    ],
    highlights: [
      "Verified WhatsApp Business API integration",
      "Multi-platform support (Instagram, Messenger, Telegram, etc.)",
      "Dynamic campaign management and segmentation",
      "Secure end-to-end encrypted conversations",
      "Analytics dashboard to measure performance and ROI"
    ],
    process: [
      "Business and customer journey mapping",
      "Conversation flow and campaign design",
      "Bot development, API integration, and testing",
      "Deployment, monitoring, and continuous optimization"
    ],
    impacts: [
      "Higher engagement rates with personalized, instant replies",
      "Reduced manual workload by automating FAQs and updates",
      "Faster conversion cycles through direct platform engagement",
      "Improved customer satisfaction with 24/7 availability",
      "Stronger retention via automated re-engagement campaigns"
    ],
    partnerTitle: "Why Partner with Upteky for WhatsApp & Multi-Platform Chatbots?",
    partnerIntro: "At Upteky Solutions Pvt. Ltd., we go beyond standard messaging bots. We deliver enterprise-ready conversational ecosystems that align with your sales, support, and marketing goals. Our solutions are:",
    partnerBullets: [
      "Custom-tailored to industry and audience needs",
      "Fully integrated with your business tools and CRMs",
      "Proven to scale globally while maintaining compliance",
      "Designed for measurable impact, not just automation"
    ]
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
},
{
  id: "s13",
    title: "Wix Development Services",
    introduction: "Supercharge your online presence with Wix websites designed and developed by Upteky Solutions Pvt. Ltd.. We create visually stunning, SEO-optimized, and conversion-ready websites that help startups, professionals, and SMEs establish a premium digital identity.",
    stats: [
      { icon: "TrendingUp", value: 95, suffix: "%", label: "Client Satisfaction" },
      { icon: "Users", value: "20+", suffix: "", label: "Industries Served" },
      { icon: "Clock", value: "2–4 Weeks", suffix: "", label: "Fast Delivery" },
    ],
    featureCards: [
      { icon: "Shield", title: "Enterprise-Grade Solutions", description: "Custom Wix solutions tailored to your business needs with scalability and performance in mind." },
      { icon: "Globe", title: "Global Reach", description: "Delivering Wix websites for clients across healthcare, real estate, e-commerce, consulting, and more." },
      { icon: "BarChart3", title: "SEO & Marketing Ready", description: "Integrated SEO tools, analytics, and marketing features for better visibility and lead generation." },
      { icon: "Activity", title: "Responsive by Design", description: "Mobile-first approach ensuring flawless performance across all devices." },
    ],
    benefits: [
      "Professional and responsive website design",
      "SEO-friendly structure for higher ranking",
      "Quick turnaround with cost-effective solutions",
      "Seamless integration with apps and tools",
      "Easy content management with drag-and-drop editing",
    ],
    highlights: [
      "Custom templates and branding aligned to your vision",
      "Integration with forms, payments, and third-party apps",
      "Secure hosting and SSL setup",
      "Ongoing support and maintenance",
    ],
    process: [
      "Business goals and requirements gathering",
      "Design customization and template selection",
      "Website development, integrations, and testing",
      "Deployment, training, and ongoing support",
    ],
    impacts: [
      "Professional brand identity at affordable cost",
      "Faster go-to-market strategy for startups",
      "Increased lead generation and conversions",
      "Simple management without technical complexity",
    ],
    partnerTitle: "Why Partner with Upteky for Wix Development?",
    partnerIntro: "At Upteky Solutions Pvt. Ltd., we specialize in delivering Wix websites that balance design and functionality. Our team works closely with you to ensure the website not only looks premium but also performs seamlessly. We tailor every Wix project to align with your business goals, industry standards, and growth strategy.",
    partnerBullets: [],
  icon: <Edit className="w-8 h-8 text-accent" />,
  imgSrc: "/assets/13.png",
  contactLink: "/contact?solution=wix-development"
},
{
  id: "s14",
  title: "Webflow Development Services",
  introduction: "Bring your brand to life with Webflow websites developed by Upteky Solutions Pvt. Ltd.. We combine stunning design, seamless animations, and high-performance development to deliver digital experiences that captivate audiences. Perfect for startups, agencies, and modern brands, our Webflow solutions strike the balance between creativity and scalability.",
  stats: [
    { icon: "TrendingUp", value: 97, suffix: "%", label: "Client Satisfaction" },
    { icon: "Edit", value: "Design-First", label: "Pixel-Perfect Interfaces" },
    { icon: "Clock", value: "2–6 Weeks", suffix: "", label: "Faster Launch" }
  ],
  featureCards: [
    { icon: "Shield", title: "Enterprise-Grade Design", description: "Custom Webflow solutions with pixel-perfect UI/UX tailored to your brand identity." },
    { icon: "Globe", title: "Global Reach", description: "Webflow websites optimized for multi-language audiences and international expansion." },
    { icon: "BarChart3", title: "SEO & Speed Optimization", description: "Built-in SEO structure with lightning-fast performance and responsive layouts." },
    { icon: "Activity", title: "No-Code Power", description: "Design-first, code-free platform enabling easy post-launch management without developer dependency." }
  ],
  benefits: [
    "Highly customizable and visually stunning designs",
    "Mobile-first, responsive layouts for all devices",
    "Built-in SEO tools for organic visibility",
    "Advanced animations and interactions",
    "Easy content editing for your team"
  ],
  highlights: [
    "Pixel-perfect designs tailored to your brand vision",
    "Custom CMS setup for dynamic content management",
    "Fast and secure Webflow hosting with SSL",
    "Smooth integration with marketing and analytics tools"
  ],
  process: [
    "Brand strategy and design goals",
    "UI/UX wireframing and Webflow prototyping",
    "Development with animations and CMS setup",
    "Testing, deployment, and training for content management"
  ],
  impacts: [
    "Enhanced brand presence with premium design",
    "Improved engagement through interactive experiences",
    "Faster time-to-market compared to traditional builds",
    "Easy post-launch content management without coding"
  ],
  partnerTitle: "Why Partner with Upteky for Webflow Development?",
  partnerIntro: "At Upteky Solutions Pvt. Ltd., we specialize in building design-first Webflow websites that reflect your brand’s identity while ensuring performance and scalability. Our team blends creative storytelling, interaction design, and technical expertise to deliver websites that not only look premium but also generate results.",
  partnerBullets: [
    "Design-first approach with interaction design expertise",
    "Performance, scalability, and SEO baked in",
    "Custom CMS architectures for easy content ops"
  ],
  icon: <Edit className="w-8 h-8 text-accent" />,
  imgSrc: "/assets/14.png",
  contactLink: "/contact?solution=webflow-development"
},
{
  id: "s15",
  title: "MERN Stack Development Services",
  introduction: "Unlock the potential of custom, enterprise-grade web applications with MERN Stack development by Upteky Solutions Pvt. Ltd.. From SaaS platforms and portals to high-performance enterprise apps, we deliver secure, scalable, and future-ready solutions that power long-term business growth.",
  stats: [
    { icon: "TrendingUp", value: 99, suffix: "%", label: "Enterprise Reliability" },
    { icon: "Package", value: "Full-Stack Power", label: "MongoDB • Express • React • Node.js" },
    { icon: "BarChart3", value: "Scalable", label: "Built for Growth" }
  ],
  featureCards: [
    { icon: "Shield", title: "Enterprise-Grade Architecture", description: "Robust full-stack applications designed with performance, security, and scalability at the core." },
    { icon: "Globe", title: "Global Reach", description: "MERN solutions tailored for startups, SMEs, and enterprises worldwide across industries." },
    { icon: "Share2", title: "API-First Approach", description: "Seamless integrations with third-party services, payment gateways, and enterprise systems." },
    { icon: "Activity", title: "Real-Time Applications", description: "Build real-time dashboards, chat systems, and live data applications with MERN." }
  ],
  benefits: [
    "Custom application development from scratch",
    "Full-stack control with seamless front-to-back integration",
    "Scalable and secure architecture for growth",
    "API-driven development for flexibility",
    "Modern, responsive, and high-performing user interfaces"
  ],
  highlights: [
    "Enterprise SaaS platform development",
    "Real-time applications with Node.js and React",
    "Secure databases with MongoDB and advanced data modeling",
    "Scalable cloud deployments for high-traffic workloads"
  ],
  process: [
    "Requirement analysis and architecture design",
    "Frontend (React) and backend (Node + Express) development",
    "Database integration and API-driven workflows",
    "Testing, deployment, and ongoing support"
  ],
  impacts: [
    "Enterprise-grade scalability with cost efficiency",
    "Improved user experience through modern React interfaces",
    "Faster innovation with agile full-stack development",
    "Long-term flexibility and reduced technical debt"
  ],
  partnerTitle: "Why Partner with Upteky for MERN Development?",
  partnerIntro: "At Upteky Solutions Pvt. Ltd., we combine deep technical expertise with business understanding to deliver MERN solutions that go beyond just coding. Our full-stack developers specialize in building future-proof applications, ensuring security, scalability, and performance. Whether you need a SaaS platform, enterprise portal, or custom app, we create solutions that help your business scale globally.",
  partnerBullets: [
    "Enterprise-grade security, scalability, and performance",
    "API-first, integration-ready architectures",
    "Proven delivery for SaaS and high-traffic platforms"
  ],
  icon: <Package className="w-8 h-8 text-accent" />,
  imgSrc: "/assets/15.png",
  contactLink: "/contact?solution=mern-development"
},
{
  id: "s16",
  title: "Shopify Development Services",
  introduction: "Supercharge your online store with Shopify websites designed and developed by Upteky Solutions Pvt. Ltd. We build high-performing, conversion-focused, and SEO-optimized Shopify stores that help startups, D2C brands, and enterprises create a strong digital presence and drive consistent revenue growth.",
  stats: [
    { icon: "TrendingUp", value: 98, suffix: "%", label: "Client Satisfaction" },
    { icon: "Users", value: "25+", label: "Industries Served" },
    { icon: "Clock", value: "3–6 Weeks", label: "Delivery" }
  ],
  featureCards: [
    { icon: "Shield", title: "Enterprise-Grade E-Commerce Solutions", description: "Custom Shopify development tailored to your unique business needs — from product catalogs and checkout optimization to scalable, enterprise-grade integrations." },
    { icon: "Globe", title: "Global Reach", description: "Delivering Shopify stores for clients across fashion, electronics, healthcare, real estate, FMCG, retail, and more." },
    { icon: "BarChart3", title: "SEO & Marketing Ready", description: "Built-in SEO-friendly structures, product optimization, and integrated marketing features to maximize visibility and boost conversions." },
    { icon: "Activity", title: "Responsive & Conversion-Optimized", description: "Mobile-first design and seamless user experience across all devices, ensuring faster checkouts and higher customer satisfaction." }
  ],
  benefits: [
    "Professional and responsive Shopify store design",
    "SEO-ready product pages and collections for higher search ranking",
    "Secure payments, cart optimization, and faster checkout",
    "Scalable architecture with app integrations and automation",
    "Easy content and product management with Shopify’s admin panel"
  ],
  highlights: [
    "Custom Shopify themes aligned with your brand identity",
    "Integration with Shopify Payments, PayPal, Razorpay, Stripe, UPI",
    "Multi-channel selling via Amazon, Flipkart, Instagram, and Facebook",
    "Secure hosting, SSL, and data protection enabled by default",
    "Ongoing support, training, and maintenance packages"
  ],
  process: [
    "Business Discovery – Understanding goals, product catalog, and target audience",
    "Design & Theme Customization – Creating or customizing Shopify themes aligned with your brand",
    "Store Development – Product uploads, checkout setup, app integrations, and testing",
    "Deployment & Training – Store launch with ongoing support and performance monitoring"
  ],
  impacts: [
    "Build a professional e-commerce identity with Shopify’s global ecosystem",
    "Faster time-to-market for product launches and campaigns",
    "Boost in conversions with optimized product pages and AI-powered recommendations",
    "Lower operational cost with built-in automation and seamless integrations"
  ],
  partnerTitle: "Why Partner with Upteky for Shopify Development?",
  partnerIntro: "At Upteky Solutions Pvt. Ltd., we specialize in creating Shopify stores that balance design, performance, and growth. Our team ensures your store doesn’t just look premium but also drives sales, delivers flawless user experience, and scales with your business. From design customization to integrations and marketing automation, every Shopify project is tailored to meet your industry standards and revenue goals.",
  partnerBullets: [
    "Conversion-focused design and optimization",
    "Enterprise-ready integrations and automation",
    "End-to-end support from launch to growth"
  ],
  icon: <Package className="w-8 h-8 text-accent" />,
  imgSrc: "/assets/16.png",
  contactLink: "/contact?solution=shopify-development"
},
{
  id: "s17",
  title: "WordPress Development Services",
  introduction: "Elevate your digital presence with WordPress websites built by Upteky Solutions Pvt. Ltd.. We design and develop SEO-optimized, responsive, and scalable WordPress solutions for businesses of all sizes — from startups to global enterprises. Whether it’s a corporate website, blog, or e-commerce store, we ensure performance and growth.",
  stats: [
    { icon: "TrendingUp", value: 98, suffix: "%", label: "Client Satisfaction" },
    { icon: "Zap", value: 40, suffix: "% Faster", label: "Website Deployment" },
    { icon: "Globe", value: "Global Standard", label: "Scalable & Secure" }
  ],
  featureCards: [
    { icon: "Shield", title: "Enterprise Security", description: "Robust security configurations and updates to safeguard your data and protect against cyber threats." },
    { icon: "Globe", title: "Global Reach", description: "Optimized WordPress websites for multi-language, multi-currency, and cross-border businesses." },
    { icon: "BarChart3", title: "SEO-First Approach", description: "Custom themes and plugins engineered for maximum search visibility and organic traffic growth." },
    { icon: "Package", title: "E-Commerce Ready", description: "Seamless integration with WooCommerce and payment gateways for online stores." }
  ],
  benefits: [
    "Fully customizable themes aligned with your brand identity",
    "SEO-friendly design for better search rankings",
    "Scalable architecture for future growth",
    "Integration with plugins and third-party services",
    "Easy-to-manage CMS for non-technical teams"
  ],
  highlights: [
    "WordPress + WooCommerce for e-commerce excellence",
    "Custom plugin development for advanced features",
    "Lightning-fast performance with optimized hosting",
    "GDPR-compliant and mobile-first websites"
  ],
  process: [
    "Business requirements and competitor analysis",
    "UI/UX wireframing and theme customization",
    "WordPress development, plugin setup, and testing",
    "Deployment, training, and ongoing support"
  ],
  impacts: [
    "Cost-effective website ownership with enterprise performance",
    "Higher conversions through SEO and UX optimization",
    "Secure, scalable, and globally accessible websites",
    "Rapid deployment with long-term flexibility"
  ],
  partnerTitle: "Why Partner with Upteky for WordPress Development?",
  partnerIntro: "At Upteky Solutions Pvt. Ltd., we don’t just create WordPress websites — we create business growth platforms. Our expert team ensures your website is modern, secure, and conversion-driven, tailored to your industry and audience. With proven expertise in corporate, e-commerce, and enterprise WordPress solutions, we deliver websites that work as hard as your business does.",
  partnerBullets: [
    "Security-hardened, performance-optimized builds",
    "SEO-first development with scalable architectures",
    "WooCommerce and enterprise integration expertise"
  ],
  icon: <Edit className="w-8 h-8 text-accent" />,
  imgSrc: "/assets/17.png",
  contactLink: "/contact?solution=wordpress-development"
}
];
