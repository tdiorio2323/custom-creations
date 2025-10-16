import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "1-14 day insurance cycle times",
  "Networked partners nationwide",
  "Flexible scheduling",
  "Certified products & processes",
];

export function FleetStrip() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
      <div className="card p-6 sm:p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Fleet Services Available</h2>
          <p className="text-white/80 text-base sm:text-lg">
            Professional fleet repair and maintenance with certified products
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto py-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/fleet">
              <Button variant="primary" size="lg">
                View Fleet Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Operations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
