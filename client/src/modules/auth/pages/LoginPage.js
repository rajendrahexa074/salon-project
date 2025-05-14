import React, { use, useEffect, useState } from 'react';
import '../../../css/Signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../../context/LoadingContext';
import { login } from '../../../store/slice/AuthSlice';
import ReusableNavLink from '../../../components/ReusableNavLink';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const { user, isAuthenticated } = useSelector(state => state.auth);
    const { setLoading } = useLoading();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    useEffect(() => {
        if (isAuthenticated) {
            if (user?.role === 'customer') {
                navigate('/customer/home');
            } else {
                navigate('/admin/dashboard');
            }
        }
    }, [isAuthenticated, navigate])

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        await dispatch(login(formData)).unwrap().then(() => {
            toast.success('Login Successful');
        }).catch((error) => {
            toast.error('Login Failed: ' + (error || 'Something went wrong'));
        });
        setLoading(false);
    };

    return (
        <div className="signup-container">
            <h2>Login Account</h2>
            <form className="signup-form" onSubmit={handleSubmit}>

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

                <button type="submit" className="signup-button">Sign In</button>
            </form>

            <ReusableNavLink
                to="/signup"
                text="Sign Up"
                color="text-green-600"
                hoverColor="hover:text-green-800"
                underline={true}

            />
        </div>
    );
};

export default LoginPage;
