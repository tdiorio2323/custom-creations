import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  vehicle: string;
  vehicleImage: string;
  rating: number;
  text: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Michael R.",
    vehicle: "2019 BMW M4",
    vehicleImage: "/creation/review-bmw.webp",
    rating: 5,
    text: "Flawless repair and perfect paint match. The team went above and beyond to ensure my M4 looked better than new.",
  },
  {
    name: "Sarah L.",
    vehicle: "2021 Tesla Model 3",
    vehicleImage: "/creation/review-tesla.webp",
    rating: 5,
    text: "Amazing ceramic coating service! The car has an incredible shine and water beads right off. Worth every penny.",
  },
  {
    name: "James K.",
    vehicle: "2020 Mercedes-Benz GLE",
    vehicleImage: "/creation/review-mercedes.webp",
    rating: 5,
    text: "Professional fleet service for our company vehicles. Fast turnaround, quality work, and great communication throughout.",
  },
  {
    name: "Lisa M.",
    vehicle: "2018 Honda Accord",
    vehicleImage: "/creation/review-honda.webp",
    rating: 5,
    text: "They made dealing with insurance so easy. Kept me updated every step and finished exactly when they said they would.",
  },
  {
    name: "David P.",
    vehicle: "2022 Porsche 911",
    vehicleImage: "/creation/review-porsche.webp",
    rating: 5,
    text: "Top-tier PPF installation. The film is completely invisible and I have peace of mind knowing my paint is protected.",
  },
  {
    name: "Jennifer W.",
    vehicle: "2019 Audi Q5",
    vehicleImage: "/creation/review-audi.webp",
    rating: 5,
    text: "Excellent collision repair work. You can't even tell where the damage was. Highly recommend Creation Customs!",
  },
];

export function Testimonials() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
      <h2 id="reviews" className="text-3xl font-bold text-white mb-8 text-center">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial.vehicleImage}
                  alt={testimonial.vehicle}
                  fill
                  className="object-cover"
                  sizes="64px"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white truncate">{testimonial.name}</div>
                <div className="text-xs text-white/60 truncate">{testimonial.vehicle}</div>
              </div>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < testimonial.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-white/20"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-white/80 leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
