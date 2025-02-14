'use client'

import React from 'react'
import { Funnel as FunnelProps } from '@/payload-types'
import { ChoiceScreen } from '@/components/screens/choice-screen'
import { ContentScreen } from '@/components/screens/content-screen'

/**
 * 1. User can click - we save answer, send analytics
 * 2. User can click - we save answer
 * 3. User can click - we send analytics
 * 5. User can click - we do nothing
 * **/

export const Funnel = ({ start_screen, onboarding_screens }: FunnelProps) => (
  <div className="safe-area-view min-h-[100dvh] flex items-center justify-center p-4 md:p-6">
    {start_screen && typeof start_screen !== 'string' && <ContentScreen {...start_screen} />}
    {onboarding_screens &&
      onboarding_screens.map((data) =>
        typeof data !== 'string' ? <ChoiceScreen key={data.id} {...data} /> : null,
      )}
  </div>
)
