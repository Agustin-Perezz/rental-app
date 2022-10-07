import { inputsCarFields } from '../../../data';
import { FormCar } from './FormCar';

export const NewCar: React.FC = () => {
    return (
        <div className="container is-max-desktop mt-6">
            <div className="box">
                <h1 className="title has-text-grey-darker">New Car.</h1>
                <hr className="has-background-link" />
                <div className="columns is-flex is-flex-wrap-wrap">
                    <FormCar groupInputs={inputsCarFields} />
                </div>
            </div>
        </div>
    );
};
