import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";



const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/potfolio/articles/*': ['src/app/(public)/potfolio/articles/**/*.mdx'],
  },
  images: {
    //     loader: 'custom',
    // loaderFile: './my/image/loader.js',
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },

  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};


export default withMDX(nextConfig);
