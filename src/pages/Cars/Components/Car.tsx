import { CarModel } from '../../../models/Cars';

import edit from '../../../assets/images/edit.png';
import trash from '../../../assets/images/trash-bin.png';
import { useAppDispatch } from '../../../store/hooks';
import { deleteCar } from '../../../store/slices/Cars';
import { useNavigate } from 'react-router-dom';

interface Props {
    car: CarModel;
}

export const Car: React.FC<Props> = ({ car }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
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
                    <img
                        src={edit}
                        alt="edit"
                        className="custom_img"
                        onClick={() => navigate(`/cars/edit/${car.id}`)}
                    />
                    <img
                        src={trash}
                        alt="delet"
                        className="custom_img"
                        onClick={() => dispatch(deleteCar(car.id))}
                    />
                </div>
            </td>
            <td>{car.passengers}</td>
            <td>{car.type_tranmision}</td>
        </tr>
    );
};
