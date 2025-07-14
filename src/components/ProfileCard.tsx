"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ExternalLink, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  background: string;
  quote: string;
  linkedin?: string;
  email?: string;
  website?: string;
  skills?: string[];
  index?: number;
  borderColor?: string;
  gradient?: string;
}

export default function ProfileCard({
  name,
  role,
  image,
  background,
  quote,
  linkedin,
  email,
  website,
  skills = [],
  index = 0,
  borderColor = "#FF8B06",
  gradient = "linear-gradient(145deg,#FF8B06,#000)"
}: ProfileCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });

      // Create spotlight effect
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <article
        ref={cardRef}
        className="group relative flex flex-col w-full h-full rounded-[20px] overflow-hidden border-2 border-transparent transition-all duration-300 cursor-pointer"
        style={{
          '--card-border': borderColor,
          background: gradient,
          '--spotlight-color': 'rgba(255,255,255,0.15)',
        } as React.CSSProperties}
      >
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)`,
          }}
        />
        
        {/* Card content */}
        <div className="relative z-10 flex-1 p-6 flex flex-col">
          <Card className="bg-card/90 backdrop-blur-md border border-border/30 shadow-xl h-full flex flex-col">
            <CardHeader className="pb-4 text-center">
              <div className="relative mx-auto mb-4">
                <Avatar className="h-20 w-20 sm:h-24 sm:w-24 border-4 border-accent/20 group-hover:border-accent/40 transition-colors duration-300">
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback className="bg-accent/10 text-accent text-lg font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              <CardTitle className="text-lg sm:text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                {name}
              </CardTitle>
              
              <p className="text-sm text-muted-foreground font-medium">
                {role}
              </p>
              
              <Badge variant="secondary" className="mt-2 bg-accent/10 text-accent border-accent/20">
                {background}
              </Badge>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col pt-0 px-4 sm:px-6 pb-4 sm:pb-5">
              <blockquote className="text-sm text-muted-foreground italic leading-relaxed mb-4 flex-grow">
                "{quote}"
              </blockquote>
              
              {skills.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    Expertise:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {skills.slice(0, 3).map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs px-2 py-1 border-border/30 text-muted-foreground">
                        {skill}
                      </Badge>
                    ))}
                    {skills.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-1 border-border/30 text-muted-foreground">
                        +{skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </CardContent>

            <div className="px-4 sm:px-6 pb-4 sm:pb-5">
              <div className="flex gap-2 justify-center">
                {linkedin && (
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-accent/10 hover:text-accent">
                    <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {email && (
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-accent/10 hover:text-accent">
                    <Link href={`mailto:${email}`}>
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {website && (
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-accent/10 hover:text-accent">
                    <Link href={website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </article>
    </motion.div>
  );
} 