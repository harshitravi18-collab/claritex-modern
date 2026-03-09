import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { testimonialAccents } from "@/data/testimonials";
import { Card } from "@/lib/ui/Card";
import { Section } from "@/lib/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import type { TestimonialContent } from "@/lib/types/content";

export function TestimonialsSection() {
  const { t } = useTranslation("home");
  const items = useMemo(
    () => t("testimonials.items", { returnObjects: true }) as TestimonialContent[],
    [t]
  );

  return (
    <Section id="testimonials" tone="dark">
      <SectionHeader
        align="center"
        label={t("testimonials.label")}
        title={t("testimonials.title")}
      />

      <div className="grid grid--4">
        {items.map((item, index) => (
          <Card key={item.name} accent={testimonialAccents[index]}>
            <p className="quote-mark">"</p>
            <p className="testimonial__quote">{item.q}</p>
            <div className="testimonial__author">
              <div
                className="avatar"
                style={{ background: `linear-gradient(135deg, ${testimonialAccents[index]}, ${testimonialAccents[index]}88)` }}
              >
                {item.av}
              </div>
              <div>
                <div className="testimonial__name">{item.name}</div>
                <div className="testimonial__role">{item.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
