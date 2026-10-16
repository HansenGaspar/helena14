"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CalendarDays, ChevronDown, Clock3, Heart, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [revealedDetails, setRevealedDetails] = useState([false, false, false]);
  const shouldReduceMotion = useReducedMotion();

  const openInvitation = () => {
    setRevealedDetails([false, false, false]);
    setIsOpen(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090d1a] text-[#e8fffb]">
      <StarsBackground
        className="absolute inset-0 !size-full opacity-35"
        starColor="#ffffff"
        speed={80}
        pointerEvents={false}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-12">
      

        <div className="relative flex min-h-[30rem] w-full max-w-[38rem] items-center justify-center [perspective:1400px]">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.section
                key="envelope"
                initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.92, rotateX: -8, y: 20 }
                }
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[31rem]"
                aria-label="Sobre de invitación"
              >
                <div className="absolute -inset-5 rounded-[2rem] bg-[#42d5c5]/15 blur-2xl" />
                <div className="relative overflow-hidden rounded-xl border border-[#a5f3e8]/35 bg-[#0d7078] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
                  <div className="relative aspect-[1.62/1] overflow-hidden rounded-lg border border-[#c1fff5]/35 bg-[#15969a]">
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),transparent_36%,rgba(0,55,61,0.14))]" />
                    <div className="absolute inset-x-0 bottom-0 h-[72%] bg-[#0d7f84] [clip-path:polygon(0_0,50%_62%,100%_0,100%_100%,0_100%)]" />
                    <div className="absolute inset-x-0 top-0 h-[67%] bg-[#2bb5ae] [clip-path:polygon(0_0,100%_0,50%_100%)] drop-shadow-[0_5px_4px_rgba(0,60,65,0.18)]" />
                    <button
                      type="button"
                      onClick={openInvitation}
                      className="group absolute bottom-[16%] left-1/2 flex size-16 -translate-x-1/2 items-center justify-center rounded-full border border-[#d0fff8]/85 bg-[#08777d] text-[#effffb] shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#effffb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15969a]"
                      aria-label="Abrir la invitación desde el sello"
                    >
                      <Heart className="size-5 transition-transform group-hover:rotate-12" />
                    </button>
                  </div>
                </div>

                
              </motion.section>
            ) : (
              <motion.section
                key="paper"
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.8, rotateX: -25, y: 30 }
                }
                animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[32rem]"
                aria-live="polite"
              >
                <div className="absolute -inset-5 rounded-[2rem] bg-[#42d5c5]/15 blur-2xl" />
                <div className="relative overflow-hidden rounded-sm border border-[#9fe9df] bg-[#f2fffc] px-7 py-9 text-[#123f42] shadow-[0_28px_80px_rgba(0,0,0,0.48)] sm:px-12 sm:py-12">
                  <div className="absolute inset-3 border border-[#55bdb7]/40" />
                  <div className="relative">
                    <div className="text-center">
                      <p className="text-[20px] font-semibold uppercase tracking-[0.4em] text-[#08777d]">
                        Helena
                      </p>
                      <h2 className="mt-4 font-serif text-5xl italic text-[#07565d] sm:text-6xl">
                        Cumplo 14 
                      </h2>
                      <div className="mx-auto mt-5 h-px w-16 bg-[#25a9a5]" />
                    </div>

                    <div className="my-8 space-y-3 border-y border-[#55bdb7]/40 py-6">
                      <RevealDetail
                        icon={<CalendarDays />}
                        title="Día"
                        value="Sábado 14 de Noviembre"
                        revealed={revealedDetails[0]}
                        shouldReduceMotion={shouldReduceMotion}
                        onReveal={() =>
                          setRevealedDetails((current) => [true, current[1], current[2]])
                        }
                      />
                      <RevealDetail
                        icon={<Clock3 />}
                        title="Hora"
                        value="de 12:30 a 18:00"
                        revealed={revealedDetails[1]}
                        shouldReduceMotion={shouldReduceMotion}
                        onReveal={() =>
                          setRevealedDetails((current) => [current[0], true, current[2]])
                        }
                      />
                      <RevealDetail
                        icon={<MapPin />}
                        title="Lugar"
                        value="Club La Quinta, Santo Tome"
                        revealed={revealedDetails[2]}
                        shouldReduceMotion={shouldReduceMotion}
                        onReveal={() =>
                          setRevealedDetails((current) => [current[0], current[1], true])
                        }
                      />
                    </div>

                    <div className="text-center">                     
                      <button
                        type="button"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0b858a] px-5 py-2 text-sm font-semibold text-[#effffb] shadow-[0_8px_16px_rgba(0,72,76,0.22)] transition-colors hover:bg-[#075f67] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08777d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2fffc]"
                        onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfaUF8HNecfZiP7At6pXl_MAzobzmvbKNGyR88DyEoYdgEbgg/viewform?usp=header", "_blank")}
                      >
                        <p className="font-serif text-xl italic text-[#effffb]">
                        Confirmar asistencia
                      </p>
                      </button>                    
                    </div>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

function RevealDetail({
  icon,
  title,
  value,
  revealed,
  shouldReduceMotion,
  onReveal,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  revealed: boolean;
  shouldReduceMotion: boolean | null;
  onReveal: () => void;
}) {
  return (
    <div className="relative min-h-20 [perspective:900px]">
      <div className="flex min-h-20 items-center justify-center rounded-sm bg-[#dff8f3] px-5">
        <Detail icon={icon} title={title} value={value} />
      </div>
      <AnimatePresence>
        {!revealed && (
          <motion.button
            type="button"
            initial={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, rotateX: 82, y: -58 }
            }
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            onClick={onReveal}
            className="absolute inset-0 flex items-center gap-4 overflow-hidden rounded-sm border border-[#66d5ca] bg-[#15969a] px-5 text-left text-[#effffb] shadow-[0_8px_16px_rgba(0,72,76,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08777d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2fffc]"
            aria-label={`Mostrar ${title.toLowerCase()}`}
          >
            <span className="absolute -right-5 -top-8 size-24 rounded-full border border-[#c1fff5]/35" />
            <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full border border-[#d0fff8]/75 bg-[#08777d]/75">
              <Sparkles className="size-4" />
            </span>
            <span className="relative">
              <span className="block font-serif text-xl italic">{title}</span>
              <span className="mt-0.5 block text-[9px] uppercase tracking-[0.2em] text-[#c9fff5]">
                Toca para revelar
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function Detail({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 sm:flex-col sm:gap-1 sm:text-center">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#bdebe4] text-[#08777d]">
        {icon}
      </span>
      <span>
        <span className="block text-[10px] uppercase tracking-[0.2em] text-[#4b8d8b]">
          {title}
        </span>
        <span className="mt-0.5 block font-serif text-base text-[#164d50]">{value}</span>
      </span>
    </div>
  );
}
