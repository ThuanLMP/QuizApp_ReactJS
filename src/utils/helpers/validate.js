import * as Yup from 'yup';

export const SigninSchema = Yup.object().shape({
    email: Yup.string().email('invalid email !').required('email required !'),
    password: Yup.string()
        .min(6, 'password too short! ')
        .max(50, 'password soo long! ')
        .required('password required !'),
});

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'name too short! ')
        .max(50, 'name too long! ')
        .required('name required !'),
    email: Yup.string().email('invalid email !').required('email required !'),
    password: Yup.string()
        .min(6, 'password too short! ')
        .max(50, 'password too long! ')
        .required('password required !  '),
});

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('invalid email !').required('email required !'),
});