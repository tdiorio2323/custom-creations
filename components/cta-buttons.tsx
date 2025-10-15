"use client";
import Link from "next/link";

const PHONE = process.env.NEXT_PUBLIC_PHONE || "";
const IG = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";
const GBP = process.env.NEXT_PUBLIC_GBP_URL || "";
const CAL = process.env.NEXT_PUBLIC_CAL_URL || "";

type Props = { compact?: boolean; className?: string };

export default function CTAs({ compact = false, className = "" }: Props) {
  const cls = compact
    ? "btn px-3 py-2 text-sm"
    : "btn px-4 py-3";

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {PHONE && (
        <>
          <Link href={`tel:${PHONE}`} className={cls}>
            Call Now
          </Link>
          <Link href={`sms:${PHONE}`} className={cls}>
            Text Us
          </Link>
        </>
      )}
      {IG && (
        <Link href={IG} target="_blank" rel="noopener noreferrer" className={cls}>
          DM on Instagram
        </Link>
      )}
      <Link href="/estimate" className={cls}>
        Free Estimate
      </Link>
      <Link href="/contact" className={cls}>
        Email
      </Link>
      {GBP && (
        <Link href={GBP} target="_blank" rel="noopener noreferrer" className={cls}>
          Directions
        </Link>
      )}
      {CAL && (
        <Link href={CAL} target="_blank" rel="noopener noreferrer" className={cls}>
          Book Online
        </Link>
      )}
    </div>
  );
}

