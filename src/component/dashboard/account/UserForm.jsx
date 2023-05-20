import React from 'react';
import { RiDeleteBinLine, RiLockPasswordLine } from 'react-icons/ri';
import { TbLogout } from 'react-icons/tb';
import '../../../css/dashboard/d-account.css';

function UserForm() {
    return (
        <>
            <section className="account">
                <h2>Name and Contact Information</h2>
                <div>
                    <form action="" className='form'>
                        <div className='form-field'>
                            <label htmlFor="fname">First Name</label><br />
                            <input type="text" name="fname" id="fname" />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="lname">Last Name</label><br />
                            <input type="text" name="lname" id="lname" />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="email">Email Address</label><br />
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="dob">Date of Birth</label><br />
                            <input type="date" name="dob" id="dob" />
                        </div>
                        <div className='form-field'>
                            <label htmlFor="citizen">Citizenship Status</label><br />
                            <input type="text" name="citizen" id="citizen" />
                        </div>
                        <div className='form-field'>
                            <label  htmlFor="home">Home Address</label><br />
                            <input type="text" name="home" id="home" />
                        </div>
                    </form>
                </div>


            </section>

            <section className="account-management">
                <h2>Account Management</h2>
                <div className="btn">
                    <div>
                        <span><TbLogout size={20} /></span>
                        <span>Log Out</span>
                    </div>
                    <div>
                        <span><RiLockPasswordLine size={20} /></span>
                        <span>Reset Password</span>
                    </div>
                    <div>
                        <span><RiDeleteBinLine size={20} /></span>
                        <span>Delete Account</span>
                    </div>

                </div>
            </section>
        </>
    )
}

export default UserForm;