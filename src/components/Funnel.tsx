'use client'

import React from 'react'
import {
  ContentScreen as ContentScreenProps,
  SingleChoice as SingleChoiceProps,
} from '@/payload-types'
import { SingleChoiceScreen } from '@/components/screens/single-choice'
import { ContentScreen } from './screens/content-screen'

type Props = {
  contentData: ContentScreenProps
  singleChoiceData: SingleChoiceProps
}

export const Funnel = ({ contentData, singleChoiceData }: Props) => {
  const onSelect = (id: string) => {
    console.log(id)
  }

  return (
    <div className="safe-area-view min-h-[100dvh] flex items-center justify-center p-4 md:p-6">
      <ContentScreen {...contentData} />
      <SingleChoiceScreen
        {...singleChoiceData}
        onSelect={onSelect}
        selectedChoice={singleChoiceData?.choices?.[0].id || ''}
      />
    </div>
  )
}
