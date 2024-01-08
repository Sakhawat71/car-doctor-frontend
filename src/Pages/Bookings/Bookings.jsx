import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {

    const { user, loading } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    console.log(user)

    useEffect(() => {
        axios.get(`https://car-doctor-server-nu-ecru.vercel.app/bookings?email=${user?.email}`)
            .then(data => setBookings(data.data))
    }, [user])

    console.log(bookings)

    return (
        <div>
            <div className=" flex justify-center">
                {
                    loading && <span className="loading loading-bars loading-lg"></span>
                }
            </div>
            {
                bookings?.map(book => <li key={book._id}>{book.title}</li>)
            }
        </div>
    );
};

export default Bookings;