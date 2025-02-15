'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ChoiceScreen as ChoiceScreenProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { useFunnelStore } from '@/hooks/useFunnelStore'
import { useIsClient } from '@/hooks/useIsClient'

export const ChoiceScreen = ({
  question,
  description,
  image,
  choices = [],
  ctaText,
  id,
}: ChoiceScreenProps) => {
  const isClient = useIsClient()
  const { getScreenState, addUserAnswer } = useFunnelStore()
  const answers = getScreenState(id)

  console.log({ answers })

  const handleSelect = (choiceId: string) => {
    addUserAnswer({
      question,
      answer: choiceId,
      screen_id: id,
    })
  }

  if (!isClient) return null

  return (
    <Card className="w-full max-w-[100vw] md:max-w-2xl animate-in fade-in zoom-in duration-500">
      <CardHeader>
        <h1 className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">{question}</h1>
        {description && <RichText data={description} />}
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
        <div className="grid gap-3">
          {choices &&
            choices?.length > 0 &&
            choices.map((choice) => (
              <Button
                key={choice.id}
                variant={answers === choice.id ? 'default' : 'outline'}
                className="w-full h-auto min-h-[44px] p-4 flex items-center justify-between text-left cursor-pointer"
                onClick={() => handleSelect(choice.id || '')}
              >
                <div className="flex items-center gap-3 flex-1">
                  {choice.image && (
                    <div className="relative w-10 h-10 rounded-md overflow-hidden shrink-0">
                      <Image
                        src={choice.image.url!}
                        alt={choice.image.alt!}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span className="text-base">{choice.text}</span>
                </div>
                {answers === choice.id && <Check className="w-5 h-5 shrink-0" />}
              </Button>
            ))}
        </div>
      </CardContent>
      {ctaText && (
        <CardFooter>
          <Button
            size="lg"
            className="w-full text-base font-medium active:scale-[0.98] transition-transform cursor-pointer"
            disabled={!answers}
          >
            {ctaText}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
