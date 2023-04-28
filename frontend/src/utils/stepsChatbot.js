// export const steps = [
//     {
//         id: '1',
//         message: 'Hola, ¿Como te llamas?',
//         trigger: 2,
//     },
//     {
//         id: '2',
//         user: true,
//         trigger: 3,
//     },
//     {
//         id:'3',
//         message: 'Hola {previousValue}, Bienvenido a San Pedro Colalao',
//         trigger: 4,
//     },
//     {
//         id:'4',
//         message: 'Esperemos te la pases genial, ¿Te gustaria ir a la Cerveceria Herr Vilem?',
//         trigger:5,
//     },
//     {
//         id:'5',
//         options: [
//             {value: 1, label: 'Si', trigger: 6},
//             {value: 2, label: 'No', trigger: 7}
//         ],
//     },
//     {
//         id:'6',
//         message: 'www.google.com/herVilem',
//         end: true,
//     },
//     {
//         id:'7',
//         message: '¿Te gustaria visitar algun restaurant, hotel o bar en San Pedro Colalao?',
//         end: true,
//     },

import Tour from "../../src/pages/Tours";

// ]

export const steps = [
    {
        id: '1',
        message: 'Hola, ¿Cómo te llamas?',
        trigger: 'name',
    },
    {
        id: 'name',
        user: true,
        trigger: 'greeting',
    },
    {
        id: 'greeting',
        message: 'Hola {previousValue}, Bienvenido a San Pedro Colalao',
        trigger: 'restaurant',
    },
    {
        id: 'restaurant',
        message: '¿Te gustaría visitar algún restaurant, hotel o bar en San Pedro Colalao?',
        trigger: 'restaurant-options',
        delay: 500, // Agregamos un retraso de medio segundo antes de mostrar las opciones para evitar que se superpongan los mensajes.
    },
    {
        id: 'restaurant-options',
        options: [
            {
                value: 'si',
                label: 'Sí',
                trigger: 'restaurant-yes',
            },
            {
                value: 'no',
                label: 'No',
                trigger: 'end-message',
            },
        ],
    },
    {
        id: 'restaurant-yes',
        message: '¡Genial! ¿Qué tipo de lugar te gustaría visitar?',
        trigger: 'restaurant-type-options',
        delay: 500,
    },
    {
        id: 'restaurant-type-options',
        options: [
            {
                value: 'restaurant',
                label: 'Restaurant',
                trigger: 'restaurant-list',
            },
            {
                value: 'hotel',
                label: 'Hotel',
                trigger: 'hotel-list',
            },
            {
                value: 'bar',
                label: 'Bar',
                trigger: 'bar-list',
            },
        ],
    },
    {
        id: 'restaurant-list',
        component: <Tour />,
        waitAction: true, // Esperamos a que el usuario seleccione un lugar antes de pasar al siguiente nodo.
        trigger: 'restaurant-options', // Volvemos a la pregunta original para que el usuario pueda hacer otra selección si lo desea.
        asMessage: true, // El componente RestaurantList debe mostrarse como un mensaje.
    },
    {
        id: 'hotel-list',
        component: <Tour/>,
        waitAction: true,
        trigger: 'restaurant-options',
        asMessage: true,
    },
    {
        id: 'bar-list',
        component: <Tour />,
        waitAction: true,
        trigger: 'restaurant-options',
        asMessage: true,
    },
    {
        id: 'end-message',
        message: 'Gracias por visitar San Pedro Colalao. ¡Que tengas un buen día!',
        end: true,
    },
];
