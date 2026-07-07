import axios from "axios";

const getBaseUrl = () => {
  const configuredBase =
    process.env.REACT_APP_BACKEND_URL ||
    process.env.REACT_APP_API_URL ||
    process.env.BACKEND_URL ||
    "";

  if (configuredBase) {
    if (configuredBase.startsWith("http://") || configuredBase.startsWith("https://")) {
      return configuredBase.endsWith("/api")
        ? configuredBase
        : `${configuredBase.replace(/\/$/, "")}/api`;
    }

    return configuredBase.startsWith("/")
      ? `${configuredBase.replace(/\/$/, "")}/api`
      : `/${configuredBase.replace(/\/$/, "")}/api`;
  }

  if (typeof window !== "undefined") {
    return `${window.location.origin}/api`;
  }

  return "http://localhost:5000/api";
};

const API = axios.create({
  baseURL: getBaseUrl(),
});

export default API;