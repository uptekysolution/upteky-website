"use client";
import { useState, useEffect } from "react";
import { ShieldCheck, Code2, Network, BarChart2, Users, BarChart3, Settings2, ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import Spline from '@splinetool/react-spline';
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services does Upteky provide?",
    answer:
      "We offer AI-powered solutions including conversational agents, process automation, analytics, and quality assurance.",
  },
  {
    question: "Do you develop custom AI solutions?",
    answer:
      "Yes, we build tailor-made AI tools to address specific business challenges and optimize operations.",
  },
  {
    question: "How long does it take to implement AI solutions?",
    answer:
      "Our typical delivery timeline is 4–8 weeks depending on complexity and integration requirements.",
  },
  {
    question: "What is your approach to integrating AI into existing systems?",
    answer:
      "We follow a collaborative approach that ensures seamless integration with minimal disruption to current workflows.",
  },
];
const capabilities = [
  {
    image: "/images/WebDevelopment.png",
    title: "Web Development",
    desc: "We design and develop scalable, responsive, and AI-enabled web solutions tailored to your business goals.",
  },
  {
    image: "/images/IT Consultation.png",
    title: "IT Consultation",
    desc: "Our experts provide strategic IT guidance to optimize your infrastructure and implement cost-effective solutions.",
  },
  {
    image: "/images/Analytics.png",
    title: "Analytics",
    desc: "Transforms data into real-time insights to drive faster, smarter business decisions.",
  },
  {
    image: "/images/Quality Assurance.png",
    title: "Quality Assurance",
    desc: "AI-driven testing and monitoring to ensure reliability, performance, and faster delivery.",
  },

];
const steps = [
  {
    step: "01",
    title: "Business Analysis",
    desc: "We analyze your operations to identify key areas where AI can deliver maximum impact and ROI.",
  },
  {
    step: "02",
    title: "Custom AI Building",
    desc: "Our experts develop bespoke AI solutions tailored to your specific business challenges and goals.",
  },
  {
    step: "03",
    title: "Deployment",
    desc: "We implement and integrate our solutions seamlessly into your existing infrastructure with minimal disruption.",
  },
  {
    step: "04",
    title: "Monthly Maintenance",
    desc: "Our team provides ongoing support, updates, and optimization to ensure continued performance.",
  },
];
// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const toggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="  mx-32 px-5 sm:px-6 mb-4 lg:px-8 pt-[64px] pb-[48px] ">
//       <div className="text-center mb-10 md:mb-12">
//         <motion.h2
//           className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//         >
//           FAQ
//         </motion.h2>

//         <motion.div
//           className="w-[88px] h-1 mt-2 bg-gradient-to-r from-[#F58F1D] to-[#E57D77] mx-auto"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           style={{ transformOrigin: "center" }}
//         />
//       </div>

//       <div className="bg-[#2D2F33]  divide-y-8 divide-[#232629]  ">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={`px-6 py-5 transition-all duration-300 ${openIndex === index ? "bg-[#2D2F33]" : ""
//               }`}
//           >
//             <button
//               onClick={() => toggle(index)}
//               className="flex items-center justify-between w-full text-left"
//             >
//               <span
//                 className={`text-white text-base sm:text-lg font-medium ${openIndex === index ? "text-[#EE8741]" : ""
//                   }`}
//               >
//                 {faq.question}
//               </span>
//               {openIndex === index ? (
//                 <ChevronUp className="text-[#F58F1D]" />
//               ) : (
//                 <ChevronDown className="text-white" />
//               )}
//             </button>

//             {openIndex === index && (
//               <p className="text-sm text-gray-300 mt-3">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-32 mb-4 pt-[48px] sm:pt-[56px] md:pt-[64px] pb-[40px] sm:pb-[44px] md:pb-[48px]">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <motion.h2
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          FAQ
        </motion.h2>

        <motion.div
          className="w-[64px] sm:w-[88px] h-1 mt-2 bg-gradient-to-r from-[#F58F1D] to-[#E57D77] mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "center" }}
        />
      </div>

      <div className="bg-[#2D2F33] divide-y-4 sm:divide-y-6 md:divide-y-8 divide-[#232629] rounded-lg sm:rounded-xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 transition-all duration-300 ${openIndex === index ? "bg-[#2D2F33]" : ""
              }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <span
                className={`text-sm sm:text-base md:text-lg font-medium ${openIndex === index ? "text-[#EE8741]" : "text-white"
                  }`}
              >
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-[#F58F1D] w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <ChevronDown className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>

            {openIndex === index && (
              <p className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default function AboutPage() {
  const router = useRouter();
  const StatCounter = ({ end, label, duration = 2000 }: { end: number; label: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime: number | undefined;
      const updateCount = (timestamp: number) => {
        if (startTime === undefined) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressRatio = Math.min(progress / duration, 1);
        setCount(Math.floor(progressRatio * end));

        if (progressRatio < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      const frame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(frame);
    }, [end, duration]);


    return (

      <div className="text-center">
        <p className="text-3xl  sm:text-4xl md:text-5xl font-bold text-foreground mb-4 mt-2">{count}{label.includes("%") ? "%" : "+"}</p>
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] ">{label.replace(/\s*\(\d+-\d+%\)/, '').replace(/\s*\(\d+-\d+\sWeeks\)/, '').replace(" %", "")}</p>
      </div>
    );
  };

  return (
    <div className="bg-background text-foreground font-sans">
      {/*---------------------------------- 1st Section-------------------------------------------  */}
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto bg-accent/10 overflow-hidden 
                    h-auto lg:h-[450px]">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />

        {/* Main flex layout */}
        <div className="
    relative z-10 
    flex flex-col sm:flex-col md:flex-row-reverse lg:flex-row
    items-center justify-between 
    px-4 sm:px-6 md:px-10 lg:px-[100px] 
    gap-8 py-8 lg:py-0
  ">
          {/* Text content */}
          <FadeIn>
            <div className="
        max-w-full sm:max-w-[500px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] 
        text-center sm:text-center md:text-left lg:text-left
        order-1 md:order-1 lg:order-1 lg:mt-11
      ">
              {/* React/Next: use className */}
              <h1
                className="
    mt-[55px] md:mt-0                 /* mobile:55px, reset at md and up */
    text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px]
    leading-tight sm:leading-[110%] md:leading-[114%]
    font-bold tracking-tight bg-clip-text text-transparent
    bg-gradient-to-r from-[#FFFFFF] to-[#FFE4C6]
    px-2 sm:px-4 md:px-0 lg:ml-32 md:ml-8
  "
              >
                Where Artificial <br />
                Intelligence Meets <br />
                Real-World Impact
              </h1>


              <p className="
          mt-4 text-sm sm:text-base md:text-lg
          leading-snug sm:leading-[20px]
          font-normal text-muted-foreground
          max-w-full sm:max-w-md md:max-w-lg
          px-2 sm:px-4 md:px-0
          lg:ml-32 md:ml-8 
        ">
                At Upteky, we are revolutionizing the way businesses operate through cutting-edge AI automation.
              </p>
            </div>
          </FadeIn>

          {/* Spline object */}
          <div className="
      order-2 sm:order-2 md:order-2 lg:order-2
      w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] 
      md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]
      lg:mt-6 sm:mt-8 md:mt-0  
    ">
            <Spline scene="https://prod.spline.design/gzZr3RkDaeIJ0HKD/scene.splinecode" />
          </div>
        </div>

        {/* Bottom blur */}
        <div className="absolute -bottom-6 left-0 right-0 h-12 
                  bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 blur-xl" />
      </section>

      {/*---------------------------------- 2nd Section-------------------------------------------  */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[64px] pb-[48px]">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Our Track Record
          </motion.h2>

          <motion.div
            className="w-[88px] h-1 mt-2 bg-gradient-to-r from-[#F58F1D] to-[#E57D77] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: 'center' }}
          />
        </div>

        {/* Stats Grid */}
        <FadeIn>
          <div className=" mx-8 grid grid-cols-2 md:grid-cols-4 gap-[10px]">

            {/* Card 1 */}
            <div className="bg-[#232629]  text-center rounded-xl px-2 py-4 shadow-[0px_1px_31px_0px_#6B6B6B40]">
              <StatCounter end={10} label="Industries Served" />
            </div>

            {/* Card 2 */}
            <div className="bg-[#232629] text-center rounded-xl px-4 py-6 shadow-[0px_1px_31px_0px_#6B6B6B40]">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">4-8</p>
              <p className="text-xs sm:text-sm uppercase tracking-widest  text-[#8B8B8B]">Delivery Time (Weeks)</p>
            </div>


            {/* Card 3 */}
            <div className="bg-[#232629] text-center rounded-xl px-4 py-6 shadow-[0px_1px_31px_0px_#6B6B6B40]">
              <StatCounter end={30} label="Avg Client Growth (30-50%)" />
            </div>

            {/* Card 4 */}
            <div className="bg-[#232629] text-center rounded-xl px-4 py-6 shadow-[0px_1px_31px_0px_#6B6B6B40]">
              <StatCounter end={100} label="Integrations Implemented" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ---------------------------------------------3rd Section---------------------------------------- */}
      <div className="border-t border-[#333333] mt-8" />
      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-[64px] pb-[48px] mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Our Capabilities
          </motion.h2>

          <motion.div
            className="w-[88px] h-1 mt-2 bg-gradient-to-r from-[#F58F1D] to-[#E57D77] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: "center" }}
          />
        </div>

        <div className=" mx-auto lg:mx-48  grid grid-cols-1 md:grid-col-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 ">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="lg:w-md h-[350px]   bg-[#232629] text-white p-12 sm:p-8 md:p-10 rounded-[40px]  transition duration-300 hover:shadow-[0px_0px_30px_-3px_#F58F1D]  shadow-[0px_4px_34px_0px_#8E8E8E40]"
            >
              <img className=" h-[60px]  w-[60px] mb-8 " src={cap.image} />
              <h3 className="text-2xl font-semibold mb-5 mt-1">{cap.title}</h3>
              <p className="text-sm text-[#ADADAD] leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -----------------------------------------4th Section-------------------------------------------------- */}

      <div className="border-t border-[#333333]  mt-8" />
      <section className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8  pt-[64px] pb-[48px]">
        <div className="text-center mb-10 md:mb-12 ">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Our Workflow
          </motion.h2>

          <motion.div
            className="w-[88px] h-1 mt-2 bg-gradient-to-r from-[#F58F1D] to-[#E57D77] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: "center" }}
          />
        </div>

        {/* Timeline container with absolute line */}
        <div className="relative">
          {/* Horizontal connecting line visible on md+ screens */}
          <div className="absolute mx-[130px] hidden md:block top-[80px]  left-0 right-0 h-[1px] bg-white/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white relative z-10">
            {steps.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-[48px] font-bold mb-1 text-[#BABABA]">{item.step}</div>
                <div className="w-2 h-2 rounded-full bg-white mb-4"></div>
                <h3 className="text-xl font-semibold mt-3 mb-5">{item.title}</h3>
                <p className="text-sm text-gray-300  leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*--------------------------------------------------5th Section--------------------------------------------------*/}
      <div className="border-t border-[#333333]  mt-8" />
      <FAQSection />
    </div>
  );
}
