import config from '@/payload.config'
import { getPayload } from 'payload'

export const payloadInstance = async () => {
  const payloadConfig = await config
  return await getPayload({ config: payloadConfig })
}