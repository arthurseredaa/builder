import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily solution need to fix images url error
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default withPayload(nextConfig)
