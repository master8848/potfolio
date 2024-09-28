import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";
// const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //     loader: 'custom',
    // loaderFile: './my/image/loader.js',
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },

  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
