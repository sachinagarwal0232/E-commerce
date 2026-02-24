import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Verify = () => {
    const [otp, setOtp] = useState('');
    const [sentotp, setsentotp] = useState(false);
    const navigate = useNavigate();

    const email = localStorage.getItem('email');
    console.log("email", email);
    const sendotp = async () => {

        try {
            const res = await axios.post('http://localhost:5000/api/users/sendotp', { email });
            alert(res.data.msg);
            setsentotp(true);
        } catch (error) {
            alert(error);
        }
    }

    const verifyotp = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/verifyotp', { email, otp });
            alert(res.data.msg);
            navigate('/login');
        } catch (error) {
            alert(error);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={verifyotp} >
                <h2 className="text-xl font-bold mb-4 text-center">Verify OTP</h2>


                <p>Email:{email}</p>

                {!sentotp && (

                    <button type="button" className="bg-green-600 text-white p-2 w-full rounded" onClick={sendotp}>
                        send otp
                    </button>
                )}

                {sentotp && (
                    <div>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="border p-2 w-full mb-3"
                        />
                        <button type="submit" className="bg-green-600 text-white p-2 w-full rounded" >
                            verify
                        </button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Verify