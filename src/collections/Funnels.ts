import { CollectionConfig } from 'payload'

export const Funnels: CollectionConfig = {
  slug: 'funnels',
  fields: [
    {
      name: 'start_screen',
      type: 'relationship',
      relationTo: 'content-screens'
    },
    {
      name: 'onboarding_screens',
      type: 'relationship',
      relationTo: 'choice-screens',
      hasMany: true,
      minRows: 2,
    }
  ]
}