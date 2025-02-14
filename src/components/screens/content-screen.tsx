'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

import { ContentScreen as ScreenProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

// FIXME: TS2339: Property url/alt does not exist on type string | Media
export const ContentScreen = ({
  question,
  description,
  image,
  ctaText = 'Continue',
}: ScreenProps) => (
  <Card className="w-full max-w-[100vw] md:max-w-2xl animate-in fade-in zoom-in duration-500">
    <CardHeader>
      <h1 className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">{question}</h1>
    </CardHeader>
    <CardContent className="space-y-4">
      {image && (
        <div className="relative w-full rounded-lg overflow-hidden bg-muted">
          <div className="aspect-[16/9]">
            <Image
              src={image.url!}
              alt={image.alt!}
              width={800}
              height={450}
              className="w-full h-full object-cover"
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />
          </div>
        </div>
      )}
      {description && <RichText data={description} />}
    </CardContent>
    {ctaText && (
      <CardFooter>
        <Button
          size="lg"
          className="w-full text-base font-medium active:scale-[0.98] transition-transform cursor-pointer"
        >
          {ctaText}
        </Button>
      </CardFooter>
    )}
  </Card>
)
