import React from 'react';

export const SidebarData = [
    {
        title: 'Men',
        path: '/',

        subNav: [
            {
                title: 'Shirt'
            },
            {
                title: 'Polo',
                path: '/',
               
            },
            {
                title: 'Pants',
                path: '/shop/menTShirt',
            },
            {
                title: 'Shorts',
                path: '/',

            },
            {
                title: 'Hoodies',
                path: '/shop/menTShirt',
            }
        ]
    },
    {
        title: 'Women',
        path: '/reports',
        subNav: [
            {
                title: 'T-Shirts',
                path: '/shop/menTShirt',
            },
            {
                title: 'Dress',
                path: '/',

            },
            {
                title: 'Pants',
                path: '/shop/menTShirt',
            },
            {
                title: 'Shorts',
                path: '/',

            },
            {
                title: 'Hoodies',
                path: '/shop/menTShirt',
            }
        ]
    },
    {
        title: 'Accessories',
        path: '/products',

        subNav: [
            {
                title: 'Necklace',
                path: '/messages/message1',
            },
            {
                title: 'Bracelets',
                path: '/messages/message2',
            },
            {
                title: 'Earings',
                path: '/messages/message2',
            }
        ]
    },
    {
        title: 'Shoes',
        path: '/team',

        subNav: [
            {
                title: 'Sandals',
                path: '/messages/message1',
            },
            {
                title: 'Sneakers',
                path: '/messages/message2',
            }
        ]
    },
    {
        title: 'Bags',
        path: '/messages',

        subNav: [
            {
                title: 'Handbags',
                path: '/messages/message1',
            }
        ]
    }
];
