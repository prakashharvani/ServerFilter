import Link from 'next/link';
import { useRouter } from 'next/router'
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


const Login = () => {

    const router = useRouter();
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors }: any = formState;

    function onSubmit({ username, password }: any) {
        console.log('-------------username', username, password)
        console.log('-------------username', process.env.NEXT_PUBLIC_USER_NAME, process.env.NEXT_PUBLIC_PASSWORD)

        if (username !== process.env.NEXT_PUBLIC_USER_NAME) {

            return "Username is invalid."
        }
        if (password !== process.env.NEXT_PUBLIC_PASSWORD) {
            return "Password is invalid."
        }

        if (username === process.env.NEXT_PUBLIC_USER_NAME && password === process.env.NEXT_PUBLIC_PASSWORD) {
            localStorage.setItem('username', window.btoa(username))
            localStorage.setItem('password', window.btoa(password))

            router.push('/user/dashboard')
        }



    }


    return (<>
                <div className="container">

        <div className="card">
            <h4 className="card-header">Login</h4>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.username?.message}</div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>
                    <button disabled={formState.isSubmitting} className="btn btn-primary">
                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                    {/* <Link href="/account/register" className="btn btn-link">Register</Link> */}
                </form>
            </div>
        </div>
        </div>
    </>);
}

export default Login;