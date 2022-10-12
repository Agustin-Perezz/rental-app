import { inputUsersFields } from '../../../data';
import { FormUser } from './FormUser';

interface Props {}

export const NewUser: React.FC<Props> = ({}) => {
    return (
        <div className="container is-max-desktop mt-6">
            <div className="box">
                <h1 className="title has-text-grey-darker">New User.</h1>
                <hr className="has-background-link" />
                <div className="columns is-flex is-flex-wrap-wrap">
                    <FormUser groupInputs={inputUsersFields} />
                </div>
            </div>
        </div>
    );
};
