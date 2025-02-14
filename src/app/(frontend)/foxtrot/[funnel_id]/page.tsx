import React from 'react'
import { payloadInstance } from '@/lib/payload'
import { Funnel } from '@/components/Funnel'

type Props = {
  params: Promise<{ funnel_id: string }>
}

const Page = async ({ params }: Props) => {
  const funnelId = (await params)?.funnel_id

  const payload = await payloadInstance()

  const funnelData = await payload.findByID({
    collection: 'funnels',
    id: funnelId,
  })

  return <Funnel {...funnelData} />
}

export default Page