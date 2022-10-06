import React, { useEffect, useState, useContext } from 'react';
import { ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import { notify } from '../toastify';
// imag
import pic1 from '../Assets/cart.jpg'

//context
import { authContext } from '../context/AuthContextProvider';
// STYLE
import styles from './styles/SignUp.module.css'


const Login = () => {

    const { user, signIn } = useContext(authContext);
    const [email, setEmail] = useState('');
    const [error, setError] = useState([]);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();




    const submitHandler = async event => {
        event.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            notify("you Login successfully", "success");
            navigate('/')

        } catch (error) {
            notify("Invalid Data!", "error");
            console.log(error);
            setError(error.message)
        }
    }



    return (
        <div className={styles.mainCont}>
            <img className={styles.imgN} src={pic1} alt="netflix" />
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <form onSubmit={submitHandler} className={styles.fromContainer}>
                    <h2 className={styles.header}>Login</h2>
                    {error ? <h3 className={styles.errMsg}>{error}</h3> : null}
                    <div className={styles.filed}>
                        <label>Email</label>
                        <input
                            type='text'
                            name='email'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>


                    <div className={styles.filed}>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>


                    <div className={styles.btns}>
                        <Link to='/signup'><p className={styles.logText}>You don't have an account in NETFLIX?<span>SIGN UP</span></p></Link>
                        <button type='submit'>LOGIN</button>
                    </div>

                </form>
                <ToastContainer />
            </div>
        </div>
    );
};
export default Login;