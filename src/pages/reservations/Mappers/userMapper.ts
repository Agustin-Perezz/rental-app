import { OptionsModel } from '../../../models/inputModel';
import { UserModel } from '../../../models/Users';

export const userMapper = (listUsers: UserModel[]): OptionsModel[] => {
    return listUsers.map((user) => {
        let str: string = '';
        str += `Name: ${user.name} - Email: ${user.email} - Country: ${user.nationality}`;
        return {
            value: user.id.toString(),
            label: str,
        };
    });
};
