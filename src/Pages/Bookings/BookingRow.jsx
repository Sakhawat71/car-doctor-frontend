import PropTypes from 'prop-types';
import { RxCross1 } from "react-icons/rx";

const BookingRow = ({ booking, handelDelete, handelUpdateConfirm }) => {

    // console.log(booking)
    const { _id, img, title, price, date, customarName , status} = booking;



    return (
        <tbody>
            {/* row */}
            <tr>
                <th>
                    <button onClick={() => handelDelete(_id)} className="btn btn-sm btn-circle btn-outline text-xl hover:bg-[#FF3811] hover:border-none">
                        <RxCross1 />
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
                    {
                        status === "confirm" ?
                        <button className="btn-disabled btn-sm bg-white text-[#29B170]">Approved</button>
                        :
                        <button onClick={()=> handelUpdateConfirm(_id)} className="btn btn-sm bg-[#FF3811] text-white">Pending</button>
                    }
                </th>
            </tr>
        </tbody>
    );
};

BookingRow.propTypes = {
    booking: PropTypes.object,
    handelDelete: PropTypes.func,
    handelUpdateConfirm: PropTypes.func,
};

export default BookingRow;