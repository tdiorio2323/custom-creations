export const SITE = {
    PHONE: process.env.NEXT_PUBLIC_PHONE || "+1-718-663-2899",
    CAL_URL: process.env.NEXT_PUBLIC_CAL_URL || "",
    SOCIAL: {
        INSTAGRAM: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/originalcreationcustomsllc/",
        FACEBOOK: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
        YOUTUBE: process.env.NEXT_PUBLIC_YOUTUBE_URL || ""
    }
} as const;
