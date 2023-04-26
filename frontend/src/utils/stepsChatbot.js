export const steps = [
    {
        id: '1',
        message: 'Hola, ¿Como te llamas?',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id:'3',
        message: 'Hola {previousValue}, Bienvenido a San Pedro Colalao',
        trigger: '4',
    },
    {
        id:'4',
        message: 'Esperemos te la pases genial, ¿Te gustaria ir a la Cerveceria Herr Vilem?',
        trigger:'5',
    },
    {
        id:'5',
        options: [
            {value: 1, label: 'Si', trigger: '6'},
            {value: 2, label: 'No', trigger: '7'}
        ],
    },
    {
        id:'6',
        message: 'www.google.com/herVilem',
        end: true,
    },
    {
        id:'7',
        message: '¿Te gustaria visitar algun restaurant, hotel o bar en San Pedro Colalao?',
        end: true,
    },

]