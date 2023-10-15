export const getBaseUrl = (): string => {
  return process.env.PUBLIC_PUBLIC_BASE_URL || "http://localhost:5000/api/v1";
};
