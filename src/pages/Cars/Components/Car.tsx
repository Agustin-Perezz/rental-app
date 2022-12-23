import { CarModel } from '../../../models/Cars';
import { useAppDispatch } from '../../../store/hooks';
import { deleteCar } from '../../../store/slices/Cars';
import { useNavigate } from 'react-router-dom';

import edit from '../../../assets/images/edit.png';
import trash from '../../../assets/images/trash.png';
import Swal from 'sweetalert2';

interface Props {
    car: CarModel;
}

export const Car: React.FC<Props> = ({ car }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function onDelete(carId: number) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success');
                dispatch(deleteCar(carId));
            }
        });
    }

    return (
        <tr>
            <th>{car.id}</th>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.kilometers}</td>
            <td>{car.color}</td>
            <td>{car.unit_price}</td>
            <td>{car.passengers}</td>
            <td>{car.type_tranmision}</td>
            <td>{car.air_conditioning ? 'True' : 'False'}</td>
            <td>
                <div className="td_custom">
                    <span className="icon">
                        <img
                            src={edit}
                            alt="edit"
                            className="custom_img"
                            onClick={() => navigate(`/cars/edit/${car.id}`)}
                        />
                    </span>
                    <span className="icon">
                        <img
                            src={trash}
                            alt="delet"
                            onClick={() => onDelete(car.id)}
                        />
                    </span>
                </div>
            </td>
        </tr>
    );
};
