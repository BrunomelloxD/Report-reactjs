import { ArrowRightCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/organisms/Navbar'

import { useNavigate } from 'react-router-dom'
import api from '../services/api'

type User = {
    id: number
    username: string
    email: string
    created_at: string
    role_name: string
    uf_name: string
    reports_count: number
}

const AllUsers = () => {
    const navigate = useNavigate()

    const [users, setUsers] = useState<User[]>([])

    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const response = await api.get(
                    `/get-all-user/?auth_email=${email}&auth_token=${token}`
                )
                setUsers(response.data)
                console.log(response.data)
            } catch (error) {
                navigate('/')
                console.log(error)
            }
        }
        getAllUsers()
    }, [navigate, email, token])

    return (
        <main>
            <Navbar />
            <div className="flex flex-col px-10">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-background text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Nome
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-background text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Cargo
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-background text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Criado em
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-background text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Reports
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-background text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Visualizar reports
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr>
                                        <td
                                            key={user.id}
                                            className="px-5 py-5 border-b border-gray-200 bg-white  text-sm"
                                        >
                                            <div className="flex items-center justify-center">
                                                <div>
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {user.username}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user.role_name}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user.created_at}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user.reports_count}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white flex items-center justify-center text-sm">
                                            <Link
                                                to={'/'}
                                                className="text-gray-900 whitespace-no-wrap"
                                            >
                                                <ArrowRightCircle />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AllUsers
