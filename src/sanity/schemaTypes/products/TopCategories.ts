import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'TogCategories',
    title: 'Top Categories',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Product Title',
            type: 'string',
            validation: (Rule) => Rule.required().max(100).warning('Keep the title short.'),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required().error('Slug is required for dynamic routing.'),
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required().error('An image is required.'),
        }),
        defineField({
            name: 'prevPrice',
            title: 'Previous Price',
            type: 'number',
            description: 'Optional: Enter the original price if the product is on sale.',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'currentPrice',
            title: 'Current Price',
            type: 'number',
            validation: (Rule) =>
                Rule.required().min(0).error('Current price is required and must be a valid number.'),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'currentPrice',
            media: 'image',
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            return {
                title,
                subtitle: `$${subtitle}`,
                media,
            };
        },
    },
});
