export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'aboutName',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'aboutBio',
            title: 'Bio',
            type: 'text'
        },
        {
            name: 'aboutImage',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ],
    preview: {
        select: {
            title: 'aboutName',
            media: 'aboutImage',
        },
    },
}
