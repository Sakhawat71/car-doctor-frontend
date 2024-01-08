import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {

    const { user, loading } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])


    useEffect(() => {
        axios.get(`https://car-doctor-server-nu-ecru.vercel.app/bookings?email=${user?.email}`)
            .then(data => setBookings(data.data))
    }, [user])

    const handelDelete = id => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(id)

                axios.delete(`https://car-doctor-server-nu-ecru.vercel.app/bookings/${id}`)
                    .then(result => {
                        console.log(result.data)
                        if (result.data.deletedCount === 1) {
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                        }
                    })
            }
        });
    }

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
                            handelDelete={handelDelete}
                        ></BookingRow>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Bookings;