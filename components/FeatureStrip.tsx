import { Shield, Droplet, Wrench } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Insurance-Friendly",
    description: "We work with all major insurance carriers and handle the entire claims process.",
  },
  {
    icon: Droplet,
    title: "OEM Paint Match",
    description: "Factory-perfect color matching using certified paint systems and processes.",
  },
  {
    icon: Wrench,
    title: "Warranty Backed",
    description: "All repairs backed by manufacturer warranty and our commitment to quality.",
  },
];

export function FeatureStrip() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 text-center space-y-3 hover:bg-white/10 transition"
            >
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
