export const inputsCarFields = [
    {
        type: 'input',
        label: 'Brand',
        name: 'brand',
        value: '',
        placeholder: 'Introduce a brand car',
        icon: 'fas fa-car',
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        type: 'input',
        label: 'Model',
        name: 'model',
        value: '',
        placeholder: 'Type the model car',
        icon: 'fas fa-car',
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        type: 'input',
        label: 'Year',
        name: 'year',
        value: '',
        placeholder: 'Type the year car',
        icon: 'fas fa-calendar',
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        type: 'input',
        label: 'Kilometers',
        name: 'kilometers',
        value: '',
        placeholder: 'Type the kilometers car',
        icon: 'fas fa-solid fa-sun',
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        type: 'input',
        label: 'Color',
        name: 'color',
        value: '',
        placeholder: 'Type the color car',
        icon: 'fas fa-brush',
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        type: 'input',
        label: 'Unit Price',
        name: 'unit_price',
        value: '',
        placeholder: 'Type the price of the car in $',
        icon: 'fas fa-money-bill',
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        type: 'input',
        label: 'Passangers',
        name: 'passengers',
        value: '',
        placeholder: 'Type the passangers car',
        icon: 'fas fa-users',
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        label: 'Type Transmision',
        value: 'manual',
        name: 'type_tranmision',
        type: 'select',
        options: [
            {
                value: 'manual',
                label: 'Manual',
            },
            {
                value: 'automatic',
                label: 'Automatic',
            },
        ],
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        label: 'Air Condition',
        value: 'yes',
        name: 'air_conditioning',
        type: 'select',
        options: [
            {
                value: 'yes',
                label: 'Yes',
            },
            {
                value: 'not',
                label: 'Not',
            },
        ],
        validations: [
            {
                type: 'required',
            },
        ],
    },
];
