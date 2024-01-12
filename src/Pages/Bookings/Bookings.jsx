import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {

    const { user, loading } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])


    // const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const url = `https://car-doctor-server-nu-ecru.vercel.app/bookings?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(data => setBookings(data.data))
    }, [url])

    const handelDelete = id => {

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

    const handelUpdateConfirm = id => {
        console.log(id)
        axios.patch(`https://car-doctor-server-nu-ecru.vercel.app/bookings/${id}`, { status: 'confirm' })
            .then(data => {
                if (data.data.modifiedCount === 1) {

                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updeated = bookings.find(booking => booking._id === id);
                    updeated.status = "confirm";
                    const newBookings = [updeated, ...remaining]
                    setBookings(newBookings)
                }
            })
            .catch(error => {
                console.error(error);
            })
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
                            handelUpdateConfirm={handelUpdateConfirm}
                        ></BookingRow>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Bookings;