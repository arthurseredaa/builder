import { CollectionConfig } from 'payload'

export const ChoiceScreens: CollectionConfig = {
  slug: 'choice-screens',
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
      name: 'questionType',
      type: 'select',
      options: [
        { label: 'Single Choice', value: 'single' },
        { label: 'Multiple Choice', value: 'multiple' },
      ],
      defaultValue: 'single',
      required: true,
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
      name: 'ctaText',
      type: 'text',
    },
  ]
}