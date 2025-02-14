'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { SingleChoice as SingleChoiceProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = SingleChoiceProps & {
  onSelect: (id: string) => void
  selectedChoice: string
}

export const SingleChoiceScreen = ({
  question,
  description,
  image,
  choices = [],
  cta_text,
  onSelect,
  selectedChoice,
}: Props) => {
  const [mounted, setMounted] = useState(false)
  const [selected, setSelected] = useState<string | undefined>(selectedChoice)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSelect = (choiceId: string) => {
    setSelected(choiceId)
    onSelect?.(choiceId)
  }

  if (!mounted) return null

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
                variant={selected === choice.id ? 'default' : 'outline'}
                className="w-full h-auto min-h-[44px] p-4 flex items-center justify-between text-left"
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
                {selected === choice.id && <Check className="w-5 h-5 shrink-0" />}
              </Button>
            ))}
        </div>
      </CardContent>
      {cta_text && (
        <CardFooter>
          <Button
            size="lg"
            className="w-full text-base font-medium active:scale-[0.98] transition-transform"
            disabled={!selected}
          >
            {cta_text}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
