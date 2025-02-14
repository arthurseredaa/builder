import { CollectionConfig } from 'payload'

export const ContentScreens: CollectionConfig = {
  slug: 'content-screens',
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
      name: 'ctaText',
      type: 'text',
    }
  ],
  hooks: {
    afterError: [async ({ error }) => {
      console.log('content-screens')
      console.log(error)
    }]
  }
}