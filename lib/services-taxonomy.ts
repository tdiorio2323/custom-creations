/**
 * Service taxonomy for Creation Customs
 * Defines service categories, offerings, and relationships
 */

export type ServiceCategory = {
  slug: string;
  name: string;
  description: string;
  icon?: string;
  services: string[]; // Array of service slugs
};

export type ServiceOffering = {
  slug: string;
  name: string;
  category: string;
  description: string;
  isCertified: boolean;
  isAppointmentOnly: boolean;
  isFleetAvailable: boolean;
  insuranceCycleTime?: string;
  features: string[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "collision-repair",
    name: "Collision Repair",
    description: "Professional auto body repair and paint services",
    services: ["auto-body-repair", "paintless-dent-repair", "frame-straightening"]
  },
  {
    slug: "protective-coatings",
    name: "Protective Coatings",
    description: "Long-lasting paint protection and ceramic coatings",
    services: ["ceramic-coating", "paint-protection-film-ppf"]
  },
  {
    slug: "detailing",
    name: "Detailing Services",
    description: "Professional vehicle detailing and reconditioning",
    services: ["full-detail", "interior-detail", "exterior-detail"]
  },
  {
    slug: "commercial",
    name: "Fleet & Commercial",
    description: "Specialized services for commercial vehicles and fleets",
    services: ["fleet-repair", "fleet-maintenance", "fleet-detailing"]
  }
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    slug: "auto-body-repair",
    name: "Auto Body Repair",
    category: "collision-repair",
    description: "Collision repair, dent removal, and paint matching with lifetime warranty",
    isCertified: true,
    isAppointmentOnly: false,
    isFleetAvailable: true,
    insuranceCycleTime: "1-14 days",
    features: [
      "OEM-quality parts",
      "Frame straightening",
      "Paint matching",
      "Insurance coordination",
      "Lifetime warranty on workmanship"
    ]
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    category: "protective-coatings",
    description: "Professional ceramic coating with 2-7 year manufacturer warranty",
    isCertified: true,
    isAppointmentOnly: false,
    isFleetAvailable: true,
    features: [
      "Certified IGL and Gtechniq products",
      "Multi-stage paint correction",
      "2-7 year warranty options",
      "UV protection",
      "Hydrophobic properties"
    ]
  },
  {
    slug: "paint-protection-film-ppf",
    name: "Paint Protection Film (PPF)",
    category: "protective-coatings",
    description: "Self-healing PPF installation with 10-year warranty",
    isCertified: true,
    isAppointmentOnly: false,
    isFleetAvailable: true,
    features: [
      "Premium XPEL and 3M films",
      "Self-healing technology",
      "10-year warranty",
      "Rock chip protection",
      "Gloss or matte finishes"
    ]
  },
  {
    slug: "full-detail",
    name: "Full Detail Service",
    category: "detailing",
    description: "Complete interior and exterior detailing service",
    isCertified: true,
    isAppointmentOnly: true,
    isFleetAvailable: true,
    features: [
      "Certified products only",
      "Interior deep clean",
      "Exterior wash and polish",
      "Paint decontamination",
      "Trim restoration"
    ]
  },
  {
    slug: "fleet-services",
    name: "Fleet Services",
    category: "commercial",
    description: "Commercial fleet repair and maintenance with 1-14 day insurance cycle times",
    isCertified: true,
    isAppointmentOnly: false,
    isFleetAvailable: true,
    insuranceCycleTime: "1-14 days",
    features: [
      "Priority scheduling",
      "Volume pricing",
      "Networked partner access",
      "Flexible appointment times",
      "Dedicated account management"
    ]
  }
];

/**
 * Get all services in a category
 */
export function getServicesByCategory(categorySlug: string): ServiceOffering[] {
  return SERVICE_OFFERINGS.filter(service => service.category === categorySlug);
}

/**
 * Get category for a service
 */
export function getCategoryForService(serviceSlug: string): ServiceCategory | undefined {
  const service = SERVICE_OFFERINGS.find(s => s.slug === serviceSlug);
  if (!service) return undefined;
  return SERVICE_CATEGORIES.find(c => c.slug === service.category);
}

/**
 * Get all fleet-available services
 */
export function getFleetServices(): ServiceOffering[] {
  return SERVICE_OFFERINGS.filter(service => service.isFleetAvailable);
}

/**
 * Get all appointment-only services
 */
export function getAppointmentOnlyServices(): ServiceOffering[] {
  return SERVICE_OFFERINGS.filter(service => service.isAppointmentOnly);
}

/**
 * Get all certified services
 */
export function getCertifiedServices(): ServiceOffering[] {
  return SERVICE_OFFERINGS.filter(service => service.isCertified);
}
