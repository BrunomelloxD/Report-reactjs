import { LogIn } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import api from '../services/api'

const Login = () => {
    localStorage.clear()

    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [wrongCredentials, setWrongCredentials] = useState<boolean>(false)

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const data = new FormData()
            data.append('email', email)
            data.append('password', password)
            const response = await api.post('/login', data)
            if (response.status === 200) {
                localStorage.setItem('id', response.data.user.id)
                localStorage.setItem('name', response.data.user.name)
                localStorage.setItem('email', response.data.user.email)
                localStorage.setItem('token', response.data.access_token)
                navigate('/reports')
            }
        } catch (error) {
            setWrongCredentials(true)
            console.error('Erro ao fazer login:', error)
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-background">
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-dark shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-primary to-secondary bg-clip-border text-white shadow-lg shadow-dark">
                        <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-background antialiased">
                            Report
                        </h3>
                    </div>

                    <div className="flex flex-col gap-4 p-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                autoComplete="off"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className={`peer h-full w-full rounded-md border  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border ${
                                    wrongCredentials
                                        ? 'placeholder-shown:border-red-400 focus:border-red-400 disabled:bg-red-400 text-red-400 placeholder-shown:border-t-red-400 border-red-300'
                                        : 'placeholder-shown:border-dark focus:border-dark disabled:bg-dark text-dark placeholder-shown:border-t-dark border-blue-gray-200'
                                }  focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0`}
                                placeholder=" "
                            />
                            <label
                                className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] 
                                 peer-focus:leading-tight ${
                                     wrongCredentials
                                         ? 'peer-focus:before:!border-red-400 peer-focus:after:!border-red-400 peer-disabled:peer-placeholder-shown:text-red-400 peer-focus:text-red-500 text-red before:border-red-300 after:border-red-300 peer-placeholder-shown:text-red-400 text-red-400'
                                         : 'peer-focus:before:!border-dark peer-focus:after:!border-dark peer-disabled:peer-placeholder-shown:text-dark peer-focus:text-dark-black text-blue-dark-black before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 text-gray-500'
                                 }  peer-focus:font-bold peer-focus:before:border-t-2 peer-focus:before:border-l-2  peer-focus:after:border-t-2 peer-focus:after:border-r-2  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent `}
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className={`peer h-full w-full rounded-md border  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border ${
                                    wrongCredentials
                                        ? 'placeholder-shown:border-red-400 focus:border-red-400 disabled:bg-red-400 text-red-400 placeholder-shown:border-t-red-400 border-red-300'
                                        : 'placeholder-shown:border-dark focus:border-dark disabled:bg-dark text-dark placeholder-shown:border-t-dark border-blue-gray-200'
                                }  focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0`}
                                placeholder=" "
                            />
                            <label
                                className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] 
                                 peer-focus:leading-tight ${
                                     wrongCredentials
                                         ? 'peer-focus:before:!border-red-400 peer-focus:after:!border-red-400 peer-disabled:peer-placeholder-shown:text-red-400 peer-focus:text-red-500 text-red before:border-red-300 after:border-red-300 peer-placeholder-shown:text-red-400 text-red-400'
                                         : 'peer-focus:before:!border-dark peer-focus:after:!border-dark peer-disabled:peer-placeholder-shown:text-dark peer-focus:text-dark-black text-blue-dark-black before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 text-gray-500'
                                 }  peer-focus:font-bold peer-focus:before:border-t-2 peer-focus:before:border-l-2  peer-focus:after:border-t-2 peer-focus:after:border-r-2  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent `}
                            >
                                Password
                            </label>
                        </div>
                        <section className="flex justify-end">
                            <Link
                                className="text-dark text-sm"
                                to={'/forgot-password'}
                            >
                                Esqueceu sua senha?
                            </Link>
                        </section>
                    </div>

                    <div className="p-6 pt-0">
                        <button
                            className="flex items-center gap-2 justify-center w-full select-none rounded-lg bg-gradient-to-tr from-primary to-secondary  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-background shadow-md shadow-pink-500/20 transition-all hover:shadow hover:shadow-dark active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                        >
                            LOGIN
                            <LogIn className="h-4 w-4" />
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login
