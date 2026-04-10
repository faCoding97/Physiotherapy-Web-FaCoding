"use client";

import { useMemo, useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Toast from "@/components/widgets/Toast.client";
import { site } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  location: site.locations[0]?.name || "",
  message: ""
};

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [toastOpen, setToastOpen] = useState(false);

  const locationOptions = useMemo(() => site.locations.map((location) => location.name), []);

  const handleChange = (field: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const nextErrors: Errors = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.phone.trim()) nextErrors.phone = "Please enter a contact number.";
    if (!values.message.trim()) nextErrors.message = "Please tell us how we can help.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Appointment enquiry - ${values.location}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `Preferred location: ${values.location}`,
        "",
        "Enquiry:",
        values.message
      ].join("\n")
    );

    setToastOpen(true);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <form className="grid gap-5" onSubmit={submit}>
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="Full name"
            name="name"
            placeholder="Your name"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            error={errors.name}
          />
          <Input
            label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            error={errors.email}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="Phone number"
            name="phone"
            type="tel"
            placeholder="+27..."
            value={values.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            error={errors.phone}
          />

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[var(--brand)]">Preferred location</span>
            <select
              name="location"
              value={values.location}
              onChange={(event) => handleChange("location", event.target.value)}
              className="w-full rounded-3xl border border-[var(--surface)] bg-white/80 px-4 py-3.5 text-[var(--text)] shadow-sm transition focus:border-[var(--highlight)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
            >
              {locationOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
              <option>Home visit enquiry</option>
            </select>
          </label>
        </div>

        <Input
          label="How can we help?"
          name="message"
          multiline
          placeholder="Tell us about your symptoms, goals, preferred appointment times, or referral details."
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          error={errors.message}
        />

        <div className="flex flex-wrap gap-3">
          <Button type="submit" variant="primary">
            Send appointment enquiry
          </Button>
          <Button href="https://wa.me/27725550188" variant="secondary">
            WhatsApp instead
          </Button>
        </div>
      </form>

      <Toast
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        message="Your email app is opening with your enquiry pre-filled."
      />
    </>
  );
}
