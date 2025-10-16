"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, X, Check } from "lucide-react";

const estimateSchema = z.object({
  year: z.string().min(4, "Please enter a valid year"),
  make: z.string().min(2, "Please enter the vehicle make"),
  model: z.string().min(1, "Please enter the vehicle model"),
  vin: z.string().optional(),
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  notes: z.string().optional(),
});

type EstimateFormData = z.infer<typeof estimateSchema>;

export function EstimateStepper() {
  const [step, setStep] = React.useState(1);
  const [photos, setPhotos] = React.useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<EstimateFormData>({
    resolver: zodResolver(estimateSchema),
    mode: "onBlur",
  });

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    setPhotos((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpg", ".jpeg", ".png", ".webp", ".heic"] },
    maxSize: 10485760, // 10MB
  });

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleNext = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(["year", "make", "model", "vin"]);
    }
    if (isValid || step !== 1) {
      setStep((prev) => Math.min(prev + 1, 3));
      // Announce step change for screen readers
      const announcement = document.createElement("div");
      announcement.setAttribute("role", "status");
      announcement.setAttribute("aria-live", "polite");
      announcement.textContent = `Step ${step + 1} of 3`;
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: EstimateFormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      photos.forEach((photo, index) => {
        formData.append(`photo_${index}`, photo);
      });

      const response = await fetch("/api/estimate", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setStep(1);
          setPhotos([]);
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-2xl mx-auto card p-8 text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-white">Estimate Request Received!</h2>
          <p className="text-white/70">
            We'll review your request and contact you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Start Your Estimate</h2>
        <p className="text-white/70 text-center mb-8">Get a free quote in 3 easy steps</p>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8 gap-2">
          {[1, 2, 3].map((num) => (
            <React.Fragment key={num}>
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition ${
                  step >= num
                    ? "bg-white text-black"
                    : "glass text-white/50"
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`h-1 w-12 transition ${
                    step > num ? "bg-white" : "bg-white/20"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card p-6 md:p-8 space-y-6">
          {/* Step 1: Vehicle Info */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Vehicle Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="year">Year *</Label>
                  <Input
                    id="year"
                    placeholder="2020"
                    {...register("year")}
                    aria-describedby={errors.year ? "year-error" : undefined}
                  />
                  {errors.year && (
                    <p id="year-error" className="text-red-400 text-xs mt-1">
                      {errors.year.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="make">Make *</Label>
                  <Input
                    id="make"
                    placeholder="Toyota"
                    {...register("make")}
                    aria-describedby={errors.make ? "make-error" : undefined}
                  />
                  {errors.make && (
                    <p id="make-error" className="text-red-400 text-xs mt-1">
                      {errors.make.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="model">Model *</Label>
                <Input
                  id="model"
                  placeholder="Camry"
                  {...register("model")}
                  aria-describedby={errors.model ? "model-error" : undefined}
                />
                {errors.model && (
                  <p id="model-error" className="text-red-400 text-xs mt-1">
                    {errors.model.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="vin">VIN (optional)</Label>
                <Input
                  id="vin"
                  placeholder="1HGBH41JXMN109186"
                  {...register("vin")}
                />
              </div>
            </div>
          )}

          {/* Step 2: Photos */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Upload Photos</h3>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
                  isDragActive
                    ? "border-white bg-white/10"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="w-12 h-12 text-white/50 mx-auto mb-4" />
                <p className="text-white mb-1">
                  {isDragActive
                    ? "Drop photos here"
                    : "Drag & drop photos, or click to select"}
                </p>
                <p className="text-white/50 text-xs">
                  Accepted: JPG, PNG, WEBP, HEIC (max 10MB each)
                </p>
              </div>

              {photos.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        aria-label={`Remove photo ${index + 1}`}
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name")}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(718) 799-8345"
                    {...register("phone")}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-400 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes (optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Please describe the damage or service needed..."
                  rows={4}
                  {...register("notes")}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={handlePrev}
              disabled={step === 1}
            >
              Previous
            </Button>
            {step < 3 ? (
              <Button type="button" variant="primary" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Estimate"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
