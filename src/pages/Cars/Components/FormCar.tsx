import { DinamicForm } from '../../../components/DinamicForm';
import { inputsCarFields } from '../../../data';

export const FormCar: React.FC = () => {
    return (
        <div className="container is-max-desktop mt-6">
            <div className="box">
                <h1 className="title has-text-grey-darker">New Car.</h1>
                <hr className="has-background-link" />
                <div className="columns is-flex is-flex-wrap-wrap">
                    <DinamicForm
                        buttonName="Save"
                        groupInputs={inputsCarFields}
                    />
                </div>
            </div>
        </div>
    );
};
