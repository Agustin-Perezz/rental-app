interface NavBarProps {
    to: string;
    name: string;
}

export const navRoutes: NavBarProps[] = [
    {
        to: 'cars/edit',
        name: 'Manage Cars',
    },
    {
        to: 'cars/add',
        name: 'Add Car',
    },
    {
        to: 'users/edit',
        name: 'Manage Users',
    },
    {
        to: 'users/add',
        name: 'New User',
    },
];
