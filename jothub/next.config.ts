import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable CSP for testing purposes
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: ""
  //         }
  //       ]
  //     }
  //   ]
  // }
};

export default nextConfig;
