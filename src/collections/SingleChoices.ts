import { CollectionConfig } from 'payload'

export const SingleChoices: CollectionConfig = {
  slug: 'single-choices',
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
      name: 'choices',
      type: 'array',
      label: 'Available Choices',
      minRows: 2,
      maxRows: 10,
      labels: {
        singular: 'Choice',
        plural: 'Choices',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        // {
        //   name: 'caption',
        //   type: 'text',
        // },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'cta_text',
      type: 'text',
    },
  ]
}