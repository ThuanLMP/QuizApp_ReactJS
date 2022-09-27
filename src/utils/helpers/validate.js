import * as Yup from 'yup';

export const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email Required'),
    password: Yup.string()
        .min(6, 'Password Too Short!')
        .max(50, 'Password Too Long!')
        .required('Password Required'),
});

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name Too Short!')
        .max(50, 'Name Too Long!')
        .required('Name Required'),
    email: Yup.string().email('Invalid email').required('Email Required'),
    password: Yup.string()
        .min(6, 'Password Too Short!')
        .max(50, 'Password Too Long!')
        .required('Password Required'),
});

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email Required'),
});