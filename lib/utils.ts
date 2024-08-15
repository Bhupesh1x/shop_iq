export const URL = process.env.NEXT_PUBLIC_API_URL;

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});
