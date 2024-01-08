import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {

    const { user, loading } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    // console.log(user)

    useEffect(() => {
        axios.get(`https://car-doctor-server-nu-ecru.vercel.app/bookings?email=${user?.email}`)
            .then(data => setBookings(data.data))
    }, [user])

    // console.log(bookings)

    return (
        <div className="my-10">
            <div className=" flex justify-center">
                {
                    loading && <span className="loading loading-bars loading-lg"></span>
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="text-base">
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        bookings?.map(booking => <BookingRow 
                            key={booking._id}
                            booking={booking}
                            ></BookingRow>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Bookings;