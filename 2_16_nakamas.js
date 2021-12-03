const nakamas = [
    {
        id: 0,
        lastname: 'Monkey D.',
        name: 'Luffy',
        country: 'East Blue'
    },
    {
        id: 1,
        lastname: 'Roronoa',
        name: 'Zoro',
        country: 'East Blue'
    },
    {
        id: 2,
        name: 'Nami',
        country: 'East Blue'
    },
    {
        id: 3,
        name: 'Usopp',
        country: 'East Blue'
    },
    {
        id: 4,
        lastname: 'Vinsmoke',
        name: 'Sanji',
        country: 'North Blue'
    },
    {
        id: 5,
        lastname: 'Tony Tony',
        name: 'Chopper',
        country: 'Grand Line'
    },
    {
        id: 6,
        lastname: 'Nico',
        name: 'Robin',
        country: 'West Blue'
    },
    {
        id: 7,
        name: 'Franky',
        country: 'Grand Line'
    },
    {
        id: 8,
        name: 'Brook',
        country: 'West Blue'
    },
    {
        id: 9,
        name: 'Jinbe',
        country: 'Grand Line'
    }
];

export default nakamas;
export const ships = [
    'Going Merry',
    'Thousand Sunny'
]

export const getNakamaById = (id) => {
    return nakamas.find((nakama) => nakama.id === id);
}

export const getNakamasByCountry = (country) => {
    return nakamas.filter((nakama) => nakama.country === country);
}
