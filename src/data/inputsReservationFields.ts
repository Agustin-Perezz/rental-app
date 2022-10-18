export const inputsReservationFields = [
    {
        type: 'date',
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
        type: 'date',
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
        value: '1',
        name: 'fk_car',
        type: 'select',
        options: [
            {
                value: 'empity-value',
                label: 'simple-test',
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
    // {
    //     label: 'Test select',
    //     value: '1',
    //     name: 'test',
    //     type: 'select',
    //     options: [
    //         {
    //             value: 'yes',
    //             label: 'Yes',
    //         },
    //         {
    //             value: 'not',
    //             label: 'Not',
    //         },
    //     ],
    //     validations: [
    //         {
    //             type: 'required',
    //         },
    //     ],
    // },
    {
        label: 'Payment the rent at the moment',
        value: 'yes',
        name: 'payment',
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
    {
        label: 'Payment Methods',
        value: 'efective',
        name: 'payment_method',
        type: 'select',
        options: [
            {
                value: 'efective',
                label: 'Efective',
            },
            {
                value: 'tarjet',
                label: 'Tarjet',
            },
            {
                value: 'credit_card',
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
