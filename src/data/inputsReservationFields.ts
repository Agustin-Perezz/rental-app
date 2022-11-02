export const inputsReservationFields = [
    {
        type: 'datetime-local',
        label: 'Date Start',
        name: 'date_start',
        value: '',
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        type: 'datetime-local',
        label: 'Date End',
        name: 'date_end',
        value: '',
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        label: 'List Cars:',
        value: '',
        name: 'fk_car',
        type: 'select',
        options: [
            {
                value: '',
                label: 'No cars in stock',
            },
        ],
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        label: 'List Users:',
        value: '1',
        name: 'fk_user',
        type: 'select',
        options: [
            {
                value: 'empity-values-2',
                label: 'simple-test-2',
            },
        ],
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        label: 'Payment the rent at the moment',
        value: 'true',
        name: 'payment',
        type: 'select',
        options: [
            {
                value: 'Yes',
                label: 'Yes',
            },
            {
                value: 'Not',
                label: 'Not',
            },
        ],
        validations: [
            {
                type: 'required',
            },
        ],
    },
    {
        label: 'Payment Methods',
        value: 'efective',
        name: 'payment_method',
        type: 'select',
        options: [
            {
                value: 'Efective',
                label: 'Efective',
            },
            {
                value: 'Tarjet',
                label: 'Tarjet',
            },
            {
                value: 'Credit_card',
                label: 'Credit Card',
            },
        ],
        validations: [
            {
                type: 'required',
            },
        ],
    },
];
