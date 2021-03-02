export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'aboutName',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'aboutImage',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'aboutPara1',
            title: 'Paragraph1',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [],
                },
            ],
        },
        {
            name: 'aboutPara2',
            title: 'Paragraph2',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [],
                },
            ],
        },
        {
            name: 'aboutPara3',
            title: 'Paragraph3',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [],
                },
            ],
        },
        {
            name: 'aboutPara4',
            title: 'Paragraph4',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [],
                },
            ],
        }
    ],
    preview: {
        select: {
            title: 'aboutName',
            media: 'aboutImage',
        },
    },
}
