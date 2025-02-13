import { CollectionConfig } from 'payload'

export const Screens: CollectionConfig = {
  slug: 'screen',
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'cta_text',
      type: 'text',
    }
  ]
}