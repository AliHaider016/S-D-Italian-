"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/women-hero.png",
    label: "SS26",
    title: "Main SS26",
    subtitle: "new in",
    link: "/collections/main-ss26",
    description:
      "Step into the season with refined silhouettes and timeless Italian craftsmanship.",
    bgColor: "#bfbfbf",
  },
  {
    id: 2,
    image: "/Travel ss26.png",
    label: "Travel",
    title: "Travel SS26",
    subtitle: "",
    link: "/collections/travel-capsule-ss26",
    description: "Curated pieces designed for the journey ahead.",
    bgColor: "#d4c5b0",
  },
  {
    id: 3,
    image: "/travel-capsule-fw26.png",
    label: "Travel",
    title: "Travel Capsule FW26",
    subtitle: "",
    link: "/collections/travel-capsule-fw26",
    description: "Fall winter essentials reimagined for modern elegance.",
    bgColor: "#e8e0d5",
  },
];

/* ─── Magnetic CTA ─── */
function MagneticLink({
  children,
  href = "#",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className={className}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
    >
      {children}
    </motion.a>
  );
}

/* ─── Staggered text config ─── */
const containerVariants = {
  enter: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const textItemVariants = {
  enter: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
  },
};

/* ─── Component ─── */
export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ── Scroll parallax ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  /* ── Mouse parallax ── */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const mouseXSpring = useSpring(mouseX, { stiffness: 80, damping: 35 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 80, damping: 35 });
  const imgOffsetX = useTransform(mouseXSpring, [0, 1], [20, -20]);
  const imgOffsetY = useTransform(mouseYSpring, [0, 1], [12, -12]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY],
  );

  /* ── Auto-play ── */
  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    }, 6000);
    return () => clearInterval(id);
  }, [isAutoPlaying]);

  const prev = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, []);

  const goToSlide = useCallback((i: number) => {
    setIsAutoPlaying(false);
    setCurrent(i);
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen max-h-[920px] min-h-[600px] w-full overflow-hidden"
      style={{ backgroundColor: slides[current].bgColor }}
    >
      {/* ─── Background Image ─── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${slides[current].id}`}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
          style={{ y: parallaxY }}
          className="absolute inset-0 will-change-transform"
        >
          <motion.div
            style={{ x: imgOffsetX, y: imgOffsetY }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ─── Overlays ─── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      {/* ─── Content ─── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${slides[current].id}`}
            variants={containerVariants}
            initial="enter"
            animate="animate"
            exit="exit"
            className="pointer-events-auto max-w-4xl text-center"
          >
            {/* Label */}
            <motion.p
              variants={textItemVariants}
              className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/60 md:mb-6 md:text-sm"
            >
              {slides[current].label} Collection
            </motion.p>

            {/* Title */}
            <motion.h1
              variants={textItemVariants}
              className="mb-4 text-4xl font-bold uppercase leading-[0.9] tracking-[0.06em] text-white sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              {slides[current].title}
            </motion.h1>

            {/* Subtitle */}
            {slides[current].subtitle && (
              <motion.p
                variants={textItemVariants}
                className="mb-8 text-xs uppercase tracking-[0.3em] text-white/50 md:text-sm"
              >
                {slides[current].subtitle}
              </motion.p>
            )}

            {/* Description */}
            <motion.p
              variants={textItemVariants}
              className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-white/40 md:text-base"
            >
              {slides[current].description}
            </motion.p>

            {/* CTA */}
            <motion.div variants={textItemVariants}>
              <MagneticLink
                href={slides[current].link}
                className="group inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-white hover:text-neutral-950 md:text-sm"
              >
                <span>Shop Now</span>
                <span className="inline-block text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </MagneticLink>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ─── Navigation Arrows ─── */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:text-white md:left-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:text-white md:right-10"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* ─── Auto-play Progress Bar ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10">
        <AnimatePresence mode="popLayout">
          {isAutoPlaying && (
            <motion.div
              key={`progress-${current}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              exit={{ width: "0%" }}
              transition={{ duration: 6, ease: "linear" }}
              onAnimationComplete={() => {
                if (isAutoPlaying) {
                  setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
                }
              }}
              className="h-full bg-white/80"
            />
          )}
        </AnimatePresence>
      </div>

      {/* ─── Slide Indicators ─── */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="group flex items-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`block transition-all duration-700 ${
                i === current
                  ? "h-[2px] w-12 bg-white"
                  : "h-[1px] w-6 bg-white/25 group-hover:w-8 group-hover:bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/15 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-white/15"
        />
      </motion.div>
    </section>
  );
}
