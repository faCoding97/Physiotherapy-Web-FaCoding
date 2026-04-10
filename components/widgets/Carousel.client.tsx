"use client";

import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn, site } from "@/lib/utils";

export default function Carousel() {
  const testimonials = site.testimonials;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (value: number) => {
    if (value < 0) {
      setIndex(testimonials.length - 1);
      return;
    }
    if (value >= testimonials.length) {
      setIndex(0);
      return;
    }
    setIndex(value);
  };

  return (
    <div className="relative">
      <Card className="overflow-hidden border-[var(--brand)]/5 bg-white/85 px-6 py-8 md:px-10 md:py-12">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--brand)]">
            <Quote className="h-6 w-6" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => goTo(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--surface)] bg-white/80 text-[var(--brand)] transition hover:bg-[var(--surface)]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => goTo(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--surface)] bg-white/80 text-[var(--brand)] transition hover:bg-[var(--surface)]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-8 min-h-[240px]">
          {testimonials.map((testimonial, itemIndex) => (
            <article
              key={`${testimonial.name}-${itemIndex}`}
              className={cn(
                "absolute inset-0 transition duration-500",
                index === itemIndex ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
              )}
            >
              <p className="max-w-4xl text-2xl leading-relaxed text-slate-700 md:text-3xl">
                “{testimonial.quote}”
              </p>
              <div className="mt-8">
                <p className="text-xl font-semibold text-[var(--brand)]">{testimonial.name}</p>
                {testimonial.role ? <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">{testimonial.role}</p> : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {testimonials.map((item, itemIndex) => (
              <button
                key={item.name}
                aria-label={`Show testimonial ${itemIndex + 1}`}
                onClick={() => goTo(itemIndex)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  index === itemIndex ? "w-10 bg-[var(--brand)]" : "w-2.5 bg-[var(--brand)]/25"
                )}
              />
            ))}
          </div>
          <Button href="/contact" variant="ghost">
            Book your appointment
          </Button>
        </div>
      </Card>
    </div>
  );
}
