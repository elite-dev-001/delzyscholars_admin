import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SpinnerRoundFilled } from 'spinners-react';
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header/Header';

function NewCourse() {
  const [secureUrl, setSecureUrl] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    setLoading(true)
    data.courseImg = secureUrl;
    data.creatorId = id;
    console.log(data)

    axios.post('https://delzyscholarsapi.herokuapp.com/api/materials/create/material', data).then((res) => {
      console.log(res.data)
      window.alert('Course created successfully')
      navigate(`/${id}`)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
      setError('Could not create Course')
    })
  }

  const categories = ['WAEC', 'JAMB', 'POST-UTME', 'UNIPORT', 'RSUST']

  const id = window.localStorage.getItem('id')

  const uploadImage = (file) => {
    setLoading(true)
    setDisabled(true)
    const data = new FormData();
    data.append('file', file[0])
    data.append('upload_preset', 'kr2j8ieg')
    axios.post('https://api.cloudinary.com/v1_1/dziy1glm5/image/upload', data).then((res) => {
      console.log(res.data['secure_url'])
      setSecureUrl(res.data['secure_url'])
      setDisabled(false)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
      setDisabled(false)
      setError('Somethin went wrong. Could not upload image')
    })
  }

  return (
    <>
    <Header/>
    <div className="section overflow-hidden position-relative section-padding" id='wrapper'>
        <div className="sidebar-wrapper">
            <div className="menu-list">
                <Link to={`/${id}`}><img src="assets/images/menu-icon/icon-1.png" alt="Icon" /></Link>
                {/* <a href="messages.html"><img src="assets/images/menu-icon/icon-2.png" alt="Icon" /></a> */}
                <Link className="active" to="/create"><img src="assets/images/menu-icon/icon-3.png" alt="Icon" /></Link>
                {/* <a href="engagement.html"><img src="assets/images/menu-icon/icon-4.png" alt="Icon" /></a>
                <a href="traffic-conversion.html"><img src="assets/images/menu-icon/icon-5.png" alt="Icon" /></a> */}
            </div>
        </div>
        <div className="container">

            {/* <!-- Register & Login Wrapper Start --> */}
            <div className="register-login-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6">

                        {/* <!-- Register & Login Images Start --> */}
                        <div className="register-login-images">
                            <div className="shape-1">
                                <img src="assets/images/shape/shape-26.png" alt="Shape" />
                            </div>


                            <div className="images">
                                <img src="https://res.cloudinary.com/dziy1glm5/image/upload/v1659554338/pexels-pixabay-261909_rulnbg.jpg" alt="Register Login" />
                            </div>
                        </div>
                        {/* <!-- Register & Login Images End --> */}

                    </div>
                    <div className="col-lg-6">

                        {/* <!-- Register & Login Form Start --> */}
                        <div className="register-login-form">
                            <h3 className="title">Create a New <span>Course</span></h3>

                            <div className="form-wrapper">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                   <div className="single-form">
                                        {/* <label htmlFor='degree'>Select Degree</label> */}
                                        <select required {...register('category')}  className='single-form' style={{border:'1px solid rgba(48, 146, 85, 0.2',width: '100%', height: '60px', padding: '0 25px', fontSize: '15px', color: '#52565b', borderRadius: '10px', background: '#fff', transition: 'all 0.3s ease 0s'}} >
                                            <option value=''>Choose Category...</option>
                                            {
                                              categories.map((category, index) => <option key={index}> {category} </option>)
                                            }
                                        </select>
                                    </div>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('title')} type="text" placeholder="Course Title" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('courseCode')} type="text" placeholder="Course Code" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <input required {...register('courseAmount')} type="tel" placeholder="Course Amount" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                      <label>Select Course Image</label>
                                        <input onChange={(e) => uploadImage(e.target.files)} required type="file" placeholder="Course Image" />
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                    <div className="single-form">
                                        <input required {...register('author')} type="text" placeholder="Author's Name" />
                                    </div>
                                    {/* <!-- Single Form Start --> */}
                                    <div className="single-form">
                                        <button disabled={disabled} className="btn btn-primary btn-hover-dark w-100">{
                                          loading ? <SpinnerRoundFilled color='#ffffff' enabled={loading} /> : 'Create Course'
                                      }</button>
                                      <p style={{color: 'red', textAlign: 'center', paddingTop: '.5em'}}> {error} </p>
                                        {/* <a className="btn btn-secondary btn-outline w-100" href="#">Sign up with Google</a> */}
                                    </div>
                                    {/* <!-- Single Form End --> */}
                                </form>
                            </div>
                        </div>
                        {/* <!-- Register & Login Form End --> */}

                    </div>
                </div>
            </div>
            {/* <!-- Register & Login Wrapper End --> */}

        </div>
    </div>
    </>
  )
}

export default NewCourse