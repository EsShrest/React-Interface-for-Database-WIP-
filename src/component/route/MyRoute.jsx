import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import CreateProduct from '../product/CreateProduct'
import ReadAllProduct from '../product/ReadAllProduct'
import ReadSpecificProduct from '../product/ReadSpecificProduct'
import UpdateProduct from '../product/UpdateProduct'
import ReviewForm from '../review/ReviewForm'
import ReadAllUser from '../user/ReadAllUser'
import UserForm from '../user/UserForm'
import AdminLogin from '../WebUsers/Admin/AdminLogin'
import AdminLogout from '../WebUsers/Admin/AdminLogout'
import AdminProfile from '../WebUsers/Admin/AdminProfile'
import AdminRegister from '../WebUsers/Admin/AdminRegister'
import AdminUpdatePassword from '../WebUsers/Admin/AdminUpdatePassword'
import AdminUpdateProfile from '../WebUsers/Admin/AdminUpdateProfile'
import AdminVerify from '../WebUsers/Admin/AdminVerify'
import AdminForgotPassword from '../WebUsers/Admin/AdminForgotPassword'
import AdminResetPassword from '../WebUsers/Admin/AdminResetPassword'

const MyRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<div><Outlet></Outlet></div>}>
                    <Route path='/product' element={<div><Outlet></Outlet></div>}>
                        <Route index element={<div><ReadAllProduct></ReadAllProduct></div>}></Route>
                        <Route path='create' element={<div><CreateProduct></CreateProduct></div>}></Route>
                        <Route path=':id' element={<div><ReadSpecificProduct></ReadSpecificProduct></div>}>
                        </Route>
                        <Route path='update/:id' element={<div><UpdateProduct></UpdateProduct></div>}>
                        </Route>
                    </Route>
                    <Route path = '/user' element={<div><Outlet></Outlet></div>}>
                        <Route index element={<div><ReadAllUser></ReadAllUser></div>}></Route>
                    <Route path='create' element={<div><UserForm></UserForm></div>}>
                        </Route>
                    </Route>
                    <Route path = '/review' element={<div><Outlet></Outlet></div>}>
                    <Route path='create' element={<div><ReviewForm></ReviewForm></div>}>
                        </Route>
                        <Route path='update/:id' element={<div><UpdateProduct></UpdateProduct></div>}>
                        </Route>
                    </Route>
                    <Route path='/admin' element={<div><Outlet></Outlet></div>}>
                    <Route index element={<div>This is admin homepage</div>}></Route>
                    <Route path='register' element={<div><AdminRegister></AdminRegister></div>}></Route>
                    <Route path='verify-email' element={<div><AdminVerify></AdminVerify></div>}></Route>
                    <Route path='login' element={<div><AdminLogin></AdminLogin></div>}></Route>
                    <Route path='my-profile' element={<div><AdminProfile></AdminProfile></div>}></Route>
                    <Route path='logout' element={<div><AdminLogout></AdminLogout></div>}></Route>
                    <Route path='update-profile' element={<div><AdminUpdateProfile></AdminUpdateProfile></div>}></Route>
                    <Route path='update-password' element={<div><AdminUpdatePassword></AdminUpdatePassword></div>}></Route>
                    <Route path='forgot-password' element={<div><AdminForgotPassword></AdminForgotPassword></div>}></Route>
                    </Route>
                </Route>
                <Route path='reset-password' element={<AdminResetPassword></AdminResetPassword>}></Route>

            </Routes>

        </div>
    )
}

export default MyRoute
