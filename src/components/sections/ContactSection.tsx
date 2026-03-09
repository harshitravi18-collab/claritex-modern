import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/lib/ui/Button";
import { Input, Textarea } from "@/lib/ui/Field";
import { Section } from "@/lib/ui/Section";
import type { ContactForm } from "@/lib/types/content";

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  msg: ""
};

export function ContactSection() {
  const { t } = useTranslation("home");
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [sent, setSent] = useState(false);
  const contactInfo = t("contact.info", { returnObjects: true }) as Array<{ icon: string; label: string; value: string }>;

  function updateField<K extends keyof ContactForm>(key: K, value: ContactForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <Section id="contact">
      <div className="section-header section-header--center">
        <div className="section-header__label">{t("contact.label")}</div>
        <h2 className="section-header__title">{t("contact.title")}</h2>
      </div>

      <div className="grid grid--2 contact-grid">
        <div className="stack">
          <p>{t("contact.description")}</p>

          <div className="stack gap-sm">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-info">
                <span className="icon">{item.icon}</span>
                <div>
                  <div className="contact-info__label">{item.label}</div>
                  <div className="contact-info__value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="callout">
            <div className="callout__title">{t("contact.calloutTitle")}</div>
            <p>{t("contact.calloutText")}</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="grid grid--2">
            <Input
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder={t("contact.form.name")}
            />
            <Input
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder={t("contact.form.email")}
            />
          </div>
          <div className="grid grid--2">
            <Input
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder={t("contact.form.phone")}
            />
            <Input
              value={form.subject}
              onChange={(event) => updateField("subject", event.target.value)}
              placeholder={t("contact.form.subject")}
            />
          </div>
          <Textarea
            rows={7}
            value={form.msg}
            onChange={(event) => updateField("msg", event.target.value)}
            placeholder={t("contact.form.msg")}
          />
          <Button fullWidth type="submit">
            {t("contact.form.submit")}
          </Button>
          {sent ? <p className="success-message">{t("contact.form.success")}</p> : null}
        </form>
      </div>
    </Section>
  );
}
