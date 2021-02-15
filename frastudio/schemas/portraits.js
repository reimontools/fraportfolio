export default {
    name: 'portraits',
    title: 'Portraits',
    type: 'document',
    fields: [
        {
            name: 'location',
            title: 'Location',
            type: 'number',
            validation: Rule => Rule.required().min(1).max(50)
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'portraitImage',
            title: 'Portrait image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    orderings: [
        {
            name: 'locationAsc',
            title: 'Location',
            by: [
                {field: 'location', direction: 'asc'}
            ]
        },
    ]
  }
  