import PropTypes from 'prop-types';
import { RxCross1 } from "react-icons/rx";

const BookingRow = ({ booking }) => {

    console.log(booking)
    const { img, title, price, date, customarName } = booking;

    return (
        <tbody>
            {/* row */}
            <tr>
                <th>
                    <button onClick={''} className="btn btn-sm btn-circle btn-outline text-xl">
                        <RxCross1/>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-24 h-24 rounded-xl">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                            <div className="text-sm opacity-50">{customarName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    ${price}
                </td>
                <td>{date}</td>
                <th>
                    <button className="btn btn-sm bg-[#FF3811] text-white">Pending</button>
                </th>
            </tr>
        </tbody>
    );
};

BookingRow.propTypes = {
    booking: PropTypes.object,
};

export default BookingRow;