import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Header/Header'
import CourseItem from './components/CourseItem'

function Courses() {

    const [courses, setCourses] = useState([])

    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        window.localStorage.setItem('id', id)
        axios.get(`https://thoughtful-pullover-worm.cyclic.app/api/materials/get/all/materials?creatorId=${id}`).then((res) => {
            console.log(res.data['results'])
            const myCourses = Array.from(res.data['results'])
            setCourses(myCourses)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <>
    <Header />
    <div className="section overflow-hidden position-relative" id="wrapper">
        {/* // {<!-- Sidebar Wrapper Start -->} */}
        <div className="sidebar-wrapper">
            <div className="menu-list">
                <Link className="active" to={`/${id}`}><img src="assets/images/menu-icon/icon-1.png" alt="Icon" /></Link>
                {/* <a href="messages.html"><img src="assets/images/menu-icon/icon-2.png" alt="Icon" /></a> */}
                <Link to='/create'><img src="assets/images/menu-icon/icon-3.png" alt="Icon" /></Link>
                {/* <a href="engagement.html"><img src="assets/images/menu-icon/icon-4.png" alt="Icon" /></a>
                <a href="traffic-conversion.html"><img src="assets/images/menu-icon/icon-5.png" alt="Icon" /></a> */}
            </div>
        </div>
        {/* <!-- Sidebar Wrapper End --> */}
        <div className="page-content-wrapper">
            <div className='container-fluid custom-container'>
            {/* <!-- Message Start --> */}
                    <div className="message">
                        <div className="message-icon">
                            <img src="assets/images/menu-icon/icon-6.png" alt="" />
                        </div>
                        <div className="message-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                        </div>
                    </div>
                    {/* <!-- Message End --> */}
                     {/* <!-- Admin Courses Tab Start --> */}
                    <div className="admin-courses-tab">
                        <h3 className="title">Courses</h3>

                        <div className="courses-tab-wrapper">
                            <div className="courses-select">
                                <select style={{display: 'none'}}>
                                    <option data-display="Newest First">Newest First</option>
                                    <option value="1">Oldest First</option>
                                </select><div className="nice-select" tabIndex="0"><span className="current">Newest First</span><ul className="list"><li data-value="Newest First" data-display="Newest First" className="option selected">Newest First</li><li data-value="1" className="option">Oldest First</li></ul></div>
                            </div>
                            {/* <ul className="nav">
                                <li><button className="active" data-bs-toggle="tab" data-bs-target="#tab1"><i className="icofont-justify-left"></i></button></li>
                                <li><button data-bs-toggle="tab" data-bs-target="#tab2"><i className="icofont-align-left"></i></button></li>
                                <li><button data-bs-toggle="tab" data-bs-target="#tab3"><i className="icofont-eye-blocked"></i></button></li>
                            </ul> */}
                            <div className="tab-btn">
                                <Link to='/create' className="btn btn-primary btn-hover-dark">New Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className='admin-courses-tab-content'>
                        <div className='tab-content'>
                            <div className='tab-pane fade show active' id='tab1'>
                                {
                                    courses.length === 0 ? <h1 style={{padding: '1em 0', textAlign: 'center'}}>You have no Active Courses at the Moment</h1> : courses.map((course, index) => 
                                        <CourseItem key={index} img={course['courseImg']} title={course['title']} earned={parseFloat(course['courseAmount']) * course['students'].length} enrol={course['students'].length} author={course['author']} category={course['category']} amount={course['courseAmount']} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
            </div>
           
        </div>      {/* <!-- Admin Courses Tab End --> */}
    </div>
    </>
  )
}

export default Courses