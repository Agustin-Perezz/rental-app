import { useAppSelector } from '../../../store/hooks';
import { Car } from './Car';

export const ListCars: React.FC = () => {
    const { cars, isLoading } = useAppSelector((state) => state.cars);

    if (isLoading) return <span>loading...</span>;

    return (
        <div className="container" style={{ maxWidth: 'max-content' }}>
            <table className="table is-striped is-bordered mt-5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Kilometers</th>
                        <th>Color</th>
                        <th>Unit.P</th>
                        <th>Air Conditioning</th>
                        <th>Passangers</th>
                        <th>Type Transmision</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((dataCar, index) => (
                        <Car car={dataCar} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
