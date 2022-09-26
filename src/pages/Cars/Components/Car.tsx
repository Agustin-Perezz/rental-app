import { CarModel } from '../../../models/Cars';

import edit from '../../../assets/images/edit.png';
import trash from '../../../assets/images/trash-bin.png';

interface Props {
    car: CarModel;
}

export const Car: React.FC<Props> = ({ car }) => {
    return (
        <tr>
            <th>{car.id}</th>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.kilometers}</td>
            <td>{car.color}</td>
            <td>
                <div className="td_custom">
                    {car.air_conditioning ? 'True' : 'False'}
                    <img src={edit} alt="edit" className="custom_img" />
                    <img src={trash} alt="delet" className="custom_img" />
                </div>
            </td>
            <td>{car.passengers}</td>
            <td>{car.type_tranmision}</td>
        </tr>
    );
};
