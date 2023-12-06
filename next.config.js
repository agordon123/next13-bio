/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
     remotePatterns: [
         {
             protocol: 'https',
             hostname: "my.certifyme.online"
             
         }
     ],
    },
  experimental: {
     serverActions: true,
   }
    }
  

module.exports = nextConfig
