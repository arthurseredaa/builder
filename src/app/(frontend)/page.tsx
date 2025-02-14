import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'
import { Funnel } from '@/components/Funnel'

// TODO: deploy app
// TODO: create multiple choice screen
// FIXME: @custom-variant dark (&:is(.dark *)); in style.css
// INFO: so we must have singe/multiple choice screens, but they have same schema

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const contentScreenData = await payload.findByID({
    collection: 'content-screens',
    id: '67af40acd898f12049d551f2',
  })

  const choiceScreenData = await payload.findByID({
    collection: 'choice-screens',
    id: '67af42c1d898f12049d552fd',
  })

  return <Funnel contentData={contentScreenData} choiceScreenData={choiceScreenData} />
}
