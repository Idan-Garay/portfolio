import { useState, useEffect, useRef } from "react";

interface Step {
  step: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    step: "01",
    title: "Audit",
    description:
      "We analyze your current systems, uncover bottlenecks, and identify the highest-impact opportunities.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "We design and develop scalable systems built for performance, reliability, and long-term growth.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "We integrate everything seamlessly into your workflow and ensure your team is fully equipped to use it.",
  },
];

export default function TechnicalWorkflow() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Default idle pulse: step 01 glows
  // On hover: sequentially light up 01 → 02 → 03
  useEffect(() => {
    if (isHovered) {
      setActiveIndex(0);
      let current = 0;
      intervalRef.current = setInterval(() => {
        current = (current + 1) % steps.length;
        setActiveIndex(current);
      }, 800);
    } else {
      setActiveIndex(0);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <div
      className="glass-card h-full rounded-xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 inner-highlight"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:col-span-3">
        <h3 className="font-headline text-3xl font-extrabold tracking-tight">
          Technical Workflow
        </h3>
      </div>
      {steps.map((item, i) => {
        const isActive = activeIndex === i;
        const isIdle = !isHovered && i === 0;

        return (
          <div key={item.step} className="space-y-6">
            <div
              className={`text-5xl font-headline font-extrabold transition-all duration-500 ${
                isActive
                  ? "text-primary drop-shadow-[0_0_12px_rgba(0,71,171,0.6)]"
                  : isIdle
                    ? "text-primary/40 animate-pulse"
                    : i == 1? "text-primary/30" : "text-primary/20"
              }`}
            >
              {item.step}
            </div>
            <div
              className={`transition-opacity duration-500 ${
                isHovered && !isActive ? "opacity-50" : "opacity-100"
              }`}
            >
              <h5 className="font-headline font-bold text-primary mb-2 text-lg">
                {item.title}
              </h5>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
