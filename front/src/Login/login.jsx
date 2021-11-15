import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./login.module.css";
import {BiLockAlt, HiOutlineUserCircle} from "react-icons/all";
import {RegistrationThunk} from "../state/auth-reducer";

const renderField = ({input, label, type, meta, icon}) => {
    return <div>
        <div className={s.icon}>{icon}</div>
        <div>
            <input className={meta.touched && meta.error ? s.error : s.input} {...input} placeholder={label}
                   type={type}/>
            {meta.touched && (meta.error && <span className={s.error_message}>{meta.error}</span>)}
        </div>
    </div>
}
const required = value => value ? undefined : 'Field is required';
const maxLength = maxLength => value => value && value.length > maxLength ? `Max length is ${maxLength} symbols`
    : undefined;
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
const maxLength20 = maxLength(20);
const maxLength2 = maxLength(2);
const maxLength30 = maxLength(30);

const SignInForm = (props) => {
    return (
        <form className={s.sign_in} onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.input} icon={<HiOutlineUserCircle/>} component={renderField} name="login"
                       label="Login"
                       type="text"
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field className={s.input} icon={<BiLockAlt/>} component={renderField} name="password" type="password"
                       label="Password"
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <button className={s.button_log} type="submit">Sign in</button>
            </div>
            <div className={s.remember}>
                <Field className={s.checkbox} component="input" name="rememberMe" type="checkbox"/>Remember me
            </div>
        </form>
    )
}
const ReduxSignInForm = reduxForm({form: "login"})(SignInForm);
const SignUpForm = (props) => {
    return (
        <form className={s.sign_up} onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.input && s.user} component={renderField} name="username" label="Username" type="text"
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field className={s.input && s.age} component={renderField} name="age" label="Age" type="number"
                       validate={[maxLength2]}/>
            </div>
            <div>
                <Field className={s.input && s.email}
                       component={renderField} name="email" label="Email" type="email"
                       validate={[email, maxLength20]}/>
            </div>
            <div>
                <Field className={s.input && s.pass} component={renderField} name="passw" type="text"
                       label="Password"
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <button className={s.button_log} type="submit">Sign up</button>
            </div>
        </form>
    )
}
const ReduxSignUpForm = reduxForm({form: "registration"})(SignUpForm);
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    const onSubmitReg = (formData) => {
        props.RegistrationThunk(formData.username, formData.passw);
        console.log(formData);
    }
    return <div className={s.body}>
        <div className={s.sign}>
            <button className={s.signButton} onClick={() => {
                props.GoToSignIn(props.reg)
            }}>Sign In
            </button>
        </div>
        <div className={s.sign}>
            <button className={s.signButton} onClick={() => {
                props.GoToSignUp(props.reg)
            }}>Sign Up
            </button>
        </div>
        {props.reg
            ? <ReduxSignInForm onSubmit={onSubmit}/>
            : <ReduxSignUpForm onSubmit={onSubmitReg}/>
        }
    </div>
}

export default Login;