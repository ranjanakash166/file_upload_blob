/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"ijqkeyguf33dihbm.public.blob.vercel-storage.com",
            }
        ]
    }
};

export default nextConfig;
