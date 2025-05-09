import React, { useEffect, useState } from 'react';
import '../../../css/Signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../store/slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../../context/LoadingContext';

const Signup = () => {
    const { isLoading, isAuthenticated, error } = useSelector((state) => state.auth);
    const {setLoading}=useLoading();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(()=>{
setLoading(true)
    },[])
    useEffect(() => {
        if (isAuthenticated) {
            navigate('login');
        }
    }, [isAuthenticated, navigate])


    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(signup(formData))
    };

    return (
        <div className="signup-container">
            <h2>Create Account</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
