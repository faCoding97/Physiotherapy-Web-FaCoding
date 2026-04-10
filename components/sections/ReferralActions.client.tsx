"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/widgets/Modal.client";
import { site } from "@/lib/utils";

export default function ReferralActions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold tracking-[0.02em] text-slate-950 transition duration-300 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        Refer a Patient
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Refer a patient">
        <div className="space-y-4 leading-7">
          <p>
            Email referrals and supporting notes to{" "}
            <a className="font-semibold text-[var(--brand)]" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            , or call{" "}
            <a className="font-semibold text-[var(--brand)]" href="tel:+27441112040">
              {site.contact.phone}
            </a>
            .
          </p>
          <p>
            For convenience, you can also download the PDF referral form and share it securely with the clinic.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href={site.referrals[0].pdfHref} variant="secondary" target="_blank">
              {site.referrals[0].pdfLabel}
            </Button>
            <Button href={`mailto:${site.contact.email}?subject=Referral%20Enquiry`} variant="primary">
              Email referral desk
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
