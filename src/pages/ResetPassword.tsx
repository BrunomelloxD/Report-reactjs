import { ArrowLeft, Mail } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import api from '../services/api'

const ResetPassword = () => {
    const params = useParams()
    const email = params.email || ''

    const navigate = useNavigate()

    const [password, setPassword] = useState<string>('')
    const [token, setToken] = useState<string>('')

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value)
    }
    const handleTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const data = new FormData()
            data.append('email', email)
            data.append('password', password)
            data.append('token', token)
            const response = await api.post('/reset-password', data)

            if (response.status === 200 && response.data.code === 200) {
                navigate('/')
                return
            }
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main className="min-h-screen bg-slate-200 flex items-center justify-center">
            <body className="antialiased">
                <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                    <section className="flex flex-col items-center justify-center mb-1">
                        <h1 className="text-3xl font-medium">
                            Esqueceu a senha?
                        </h1>
                        <p className="text-slate-500 mt-1">
                            Preencha o formulário para redefinir a senha
                        </p>
                    </section>

                    <div className="flex flex-col space-y-5 my-8">
                        <form onSubmit={handleSubmit}>
                            <div className=" relative h-11 w-full min-w-[200px]">
                                <input
                                    autoComplete="off"
                                    type="email"
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-dark outline outline-0 transition-all placeholder-shown:border disabled:border-0 disabled:bg-dark"
                                    placeholder=" "
                                    value={email}
                                    readOnly
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:leading-tight  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-dark">
                                    Email
                                </label>
                            </div>
                            <div className="relative my-4 h-11 w-full min-w-[200px]">
                                <input
                                    autoComplete="off"
                                    type="text"
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-dark  placeholder-shown:border-t-dark focus:border-2 focus:border-dark focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-dark"
                                    placeholder=" "
                                    value={token}
                                    onChange={handleTokenChange}
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-dark-black peer-focus:font-bold peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-dark peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-dark peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-dark">
                                    Token
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    autoComplete="off"
                                    type="password"
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-dark outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-dark  placeholder-shown:border-t-dark focus:border-2 focus:border-dark focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-dark"
                                    placeholder=" "
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-dark-black peer-focus:font-bold peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-dark peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-dark peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-dark">
                                    Senha
                                </label>
                            </div>

                            <button
                                className="mt-4 gap-2 flex items-center justify-center w-full select-none rounded-lg bg-gradient-to-tr from-primary to-secondary  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-background shadow-md shadow-pink-500/20 transition-all hover:shadow hover:shadow-dark active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                            >
                                Redefinir senha
                                <Mail className="h-4 w-4" />
                            </button>
                        </form>
                        <Link
                            to="/"
                            className=" mt-4 flex gap-1 items-center justify-center w-full select-none rounded-lg bg-gradient-to-tr from-secondary to-dark-black py-2 px-6 text-center align-middle font-sans text-xs font-semibold uppercase text-background shadow-md shadow-pink-500/20 transition-all hover:shadow hover:shadow-dark active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Fazer login
                        </Link>
                    </div>
                </div>
            </body>
        </main>
    )
}

export default ResetPassword
