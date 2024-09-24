// const withMDX = require('@next/mdx')()

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   Configure `pageExtensions` to include MDX files
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   Optionally, add any other Next.js config below
// }
 
// module.exports = withMDX(nextConfig)

// const withMDX = require('@next/mdx')({
//   extension:/\.mdx?$/,
// })

// module.exports = withMDX({
//   pageExtensions:['js','jsx','mdx'],
// })

// module.exports = withMDX(nextConfig)

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns:[
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
          port: '',
        }
      ]
        // domains: ['images.ctfassets.net'], // Add the domain(s) where your images are hosted
      },
    
};

export default nextConfig;
