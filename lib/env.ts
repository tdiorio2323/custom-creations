export const env = {
  NEXT_PUBLIC_CAL_URL: process.env.NEXT_PUBLIC_CAL_URL || ""
};
export const hasCalUrl = !!env.NEXT_PUBLIC_CAL_URL;
