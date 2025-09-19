"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type Values = {
  name: string;
  email: string;
  phone: string;
  description: string;
  services: string[];
};

const SERVICES = [
  'Web development',
  'AI automation',
  'IT consultation',
  'Custom solution',
  'Q/A & testing',
  'Voicebots',
  'Chatbots',
  'App development',
];

const TESTIMONIALS = [
  {
    title: 'Web Development: Reliable & User-Friendly',
    body:'Upteky built us a website that’s clean, easy to use, and perfectly fits our needs. The automated documentation feature has saved us a lot of time and effort.Upteky made the whole process smooth and stress-free.',
    author: 'Lokesh Sharma',
    role: 'Founder, Game Of Pharma',
    rating: 5,
  },
  {
    title: 'Upteky AI Video Call Transcription & Chatbot',
    body:
      'Upteky built us an AI video call transcription system along with a chatbot that has made client interactions smoother and more productive. It saves us hours every week and gives us accurate records instantly.Upteky turned a complex need into a simple solution.',
    author: 'Pranav',
    role: 'Founder, Vtalix Pvt. Ltd',
    rating: 5,
  },
  {
    title: 'Upteky Custom Portal & Employee Management',
    body:
      'Upteky built us a custom pricing portal and employee management system that simplified our daily operations. It’s reliable, easy to use, and has saved us countless hours of manual work.Upteky made our processes more efficient and organized.',
    author: 'Ashish Talati',
    role: 'Director, JM PlastoPack Pvt. Ltd',
    rating: 5,
  },
];

export default function ProjectDiscussion({
  onSubmit,
  className,
}: {
  onSubmit?: (values: Values) => Promise<void> | void;
  className?: string;
}) {
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    phone: '',
    description: '',
    services: [],
  });
  const [loading, setLoading] = useState(false);
  const [idx, setIdx] = useState(0);

  const t = TESTIMONIALS[idx];

  const toggleService = (s: string) => {
    setValues(v => ({
      ...v,
      services: v.services.includes(s)
        ? v.services.filter(x => x !== s)
        : [...v.services, s],
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await onSubmit?.(values);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={cn('w-full', className)}>
      <div className="mx-auto">
        <div className="mx-auto rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-[#2C3035] p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Left: Heading + Form */}
            <div className="w-full order-1 lg:order-1">
              <h3 className="text-white font-outfit text-[20px] sm:text-[24px] md:text-[30px] lg:text-2xl max-w-md leading-tight">
                Want To Discuss This Solution or your Custom Project
              </h3>
              <p className="mt-3 text-[#9FA6AD] font-poppins text-[12px] sm:text-[14px] md:text-[16px] max-w-xl">
                Fill out the form below or book a free consultation with our team.
              </p>

              <div
                className="mt-6 rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 md:p-7 border border-white/10"
                style={{ background: 'linear-gradient(180deg, #3A4046 0%, #31363B 100%)' }}
              >
                <form className="space-y-6 sm:space-y-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name*"
                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:font-poppins placeholder:text-[#9FA6AD] placeholder:text-[12px] sm:placeholder:text-sm h-8 sm:h-9 focus:outline-none focus:border-white/40"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="Email*"
                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:font-poppins placeholder:text-[#9FA6AD] placeholder:text-[12px] sm:placeholder:text-sm h-8 sm:h-9 focus:outline-none focus:border-white/40"
                      />
                      <input
                        type="text"
                        placeholder="Phone number"
                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:font-poppins placeholder:text-[#9FA6AD] placeholder:text-[12px] sm:placeholder:text-sm h-8 sm:h-9 focus:outline-none focus:border-white/40"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder="Describe your project"
                        className="w-full bg-transparent border-b border-white/20 text-white placeholder:font-poppins placeholder:text-[#9FA6AD] placeholder:text-[12px] sm:placeholder:text-sm resize-none h-[60px] sm:h-[72px] focus:outline-none focus:border-white/40"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs text-white/70 mb-3">Services</p>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((s) => (
                        <button key={s} type="button" className="px-2 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-poppins text-white/80 hover:text-white rounded-full border border-white/20 hover:border-white/40 transition-colors">
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="rounded-full font-poppins bg-[#F58F1D] hover:bg-[#df7f15] text-white px-6 sm:px-8 py-2 sm:py-2.5 text-[12px] sm:text-sm"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: Carousel */}
            <div className="w-full justify-between relative px-2 sm:px-4 mx-auto lg:px-8 order-2 lg:order-2">
              {/* side arrows, vertically centered */}
              <button
                aria-label="Previous"
                onClick={() => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-6 h-10 w-10 xl:h-12 xl:w-12 
                items-center justify-center text-white/90 hover:text-white transition-opacity z-10"
              >
                <svg width="20" height="30" viewBox="0 0 22 42" fill="none" className="xl:w-[22px] xl:h-[32px]">
                  <path d="M20 2L2 21L20 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                aria-label="Next"
                onClick={() => setIdx(i => (i + 1) % TESTIMONIALS.length)}
                className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-6 h-10 w-10 xl:h-12 xl:w-12 items-center justify-center text-white/90 hover:text-white transition-opacity z-10"
              >
                <svg width="20" height="30" viewBox="0 0 22 42" fill="none" className="xl:w-[22px] xl:h-[42px]">
                  <path d="M2 2L20 21L2 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* arrows for mobile and tablet screens */}
              <div className="flex justify-between lg:hidden">
                <button
                  aria-label="Previous"
                  onClick={() => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="h-8 w-8 sm:h-10 sm:w-10 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 inline-flex items-center justify-center text-white/90 hover:text-white transition-opacity z-10"
                >
                  <svg width="16" height="30" viewBox="0 0 22 42" fill="none">
                    <path d="M20 2L2 21L20 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  onClick={() => setIdx(i => (i + 1) % TESTIMONIALS.length)}
                  className="h-8 w-8 sm:h-10 sm:w-10 absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 inline-flex items-center justify-center text-white/90 hover:text-white transition-opacity z-10"
                >
                  <svg width="16" height="30" viewBox="0 0 22 42" fill="none">
                    <path d="M2 2L20 21L2 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* centered testimonial content */}
              <div className="mx-auto max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-sm px-6 xs:px-8 sm:px-10 md:px-12 lg:px-0">
                <h4 className="text-white font-outfit text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold leading-[115%] xs:leading-[118%] sm:leading-[120%] md:leading-[121%]">
                  {t.title}
                </h4>

                <p className="mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8 text-[#9FA6AD] font-poppins text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[140%] xs:leading-[145%] sm:leading-[150%]">
                  {t.body}
                </p>

                <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                  <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-2 xs:gap-3 sm:gap-0">
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-outfit text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] truncate">{t.author}</p>
                      <p className="text-[#9FA6AD] font-poppins text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] truncate">{t.role}</p>
                    </div>
                    <div className="mt-1 xs:mt-2 sm:mt-0 sm:ml-4 flex shrink-0 items-center gap-0.5 xs:gap-1 text-[#F59E0B]">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 xs:mt-3 sm:mt-4 h-px w-[120px] xs:w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

