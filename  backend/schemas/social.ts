import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Name of the social media platform',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'url',
      type: 'url',
    }),
  ],
})
