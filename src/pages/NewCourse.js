import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
    data.content = chapters;
    console.log(data)

    if(chapters.length !== 0){
        axios.post('https://thoughtful-pullover-worm.cyclic.app/api/materials/create/material', data).then((res) => {
        console.log(res.data)
        window.localStorage.removeItem('chapters')
        window.alert('Course created successfully')
        navigate(`/${id}`)
      }).catch((err) => {
        console.log(err)
        setLoading(false)
        setError('Could not create Course')
      })
    } else {
      setError('Upload Course Content before Creating Course')
      setLoading(false)
    }
  }

  const categories = ['WAEC', 'JAMB', 'POST-UTME', 'UNIPORT', 'RSUST']

  //////////////ADD CHAPTERS//////////////////////////////


  const {
    register: chapter,
    handleSubmit: handleChapter
  } = useForm()

  const [fileError, setFileError] = useState('')
  const [fileLoading, setFileLoading] = useState(false)
  const [fileDisabled, setFileDisabled] = useState(false)
  const [secureFileUrl, setSecureFileUrl] = useState('')
  const [secureVideoUrl, setSecureVideoUrl] = useState('')
  const [chapters, setChapters] = useState([])

  const removeItem = (item) => {
    console.log('clicked ' + item)
    chapters.splice(item, 1)
    setChapters(chapters) 
    console.log(chapters)
    window.localStorage.setItem('chapters', JSON.stringify(chapters))
    window.location.reload()
  }

  useEffect(() => {
    const newChapters = JSON.parse(window.localStorage.getItem('chapters')) || [];
    console.log(newChapters)
    setChapters(newChapters)
  }, [])

  const chapterSubmit = (data) => {
    console.log(chapters)
    data.material = secureFileUrl
    data.video = secureVideoUrl
    console.log(data)
    chapters.push(data)
    console.log(chapters)
    window.localStorage.setItem('chapters', JSON.stringify(chapters))
    window.location.reload()
  }

  const uploadFile = (file) => {
    setFileLoading(true)
    setFileDisabled(true)
    const data = new FormData();
    data.append('file', file[0])
    data.append('upload_preset', 'kr2j8ieg')
    axios.post('https://api.cloudinary.com/v1_1/dziy1glm5/image/upload', data).then((res) => {
      console.log(res.data['secure_url'])
      setSecureFileUrl(res.data['secure_url'])
      setFileDisabled(false)
      setFileLoading(false)
    }).catch((err) => {
      console.log(err)
      setFileLoading(false)
      setFileDisabled(false)
      setFileError('Somethin went wrong. Could not upload pdf file')
    })
  }

  const uploadVideo = (file) => {
    setFileLoading(true)
    setFileDisabled(true)
    const data = new FormData();
    data.append('file', file[0])
    data.append('upload_preset', 'kr2j8ieg')
    axios.post('https://api.cloudinary.com/v1_1/dziy1glm5/video/upload', data).then((res) => {
      console.log(res.data['secure_url'])
      setSecureVideoUrl(res.data['secure_url'])
      setFileDisabled(false)
      setFileLoading(false)
    }).catch((err) => {
      console.log(err)
      setFileLoading(false)
      setFileDisabled(false)
      setFileError('Somethin went wrong. Could not upload video file')
    })
  }

  ///////////////////ADD CHAPTERS////////////////////////

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
                        <div className="register-login-form">
                            <h3 className="title">Create a New <span>Course</span></h3>

                            <div className='form-wrapper'>
                              {
                                chapters.map((chapter, index) => <PdfCourse remove={removeItem} key={index} chapter={index+1} title={chapter['topic']} />)
                              }
                            </div>
                            <form onSubmit={handleChapter(chapterSubmit)}>
                              <div className="form-wrapper">
                                  <div style={{border: '3px solid green', borderRadius: '1em', padding: '0em 1em', margin: '1em 0'}}>
                                      <div className='single-form'>
                                        <input {...chapter('chapter')} type="text" value={`Chapter ${chapters.length + 1}`} readOnly />
                                      </div>
                                      <div className='single-form'>
                                        <input {...chapter('topic')} type="text" placeholder='Chapter Topic' required />
                                      </div>
                                      <div className='single-form'>
                                        <label htmlFor='pdf' style={{color: 'red', fontWeight: 'bold', fontStyle: 'italic'}}>Upload PDF Material</label>
                                        <input onChange={(e) => uploadFile(e.target.files)} required type="file" id='pdf' />
                                      </div>
                                      <div className='single-form'>
                                        <label htmlFor='video' style={{color: 'red', fontWeight: 'bold', fontStyle: 'italic'}}>Upload Video Material</label>
                                        <input onChange={(e) => uploadVideo(e.target.files)} required type="file" id='video' />
                                      </div>
                                      <select {...chapter('status')} required className='single-form' style={{border:'1px solid rgba(48, 146, 85, 0.2',width: '100%', height: '60px', padding: '0 25px', fontSize: '15px', color: '#52565b', borderRadius: '10px', background: '#fff', transition: 'all 0.3s ease 0s'}}>
                                        <option>Free</option>
                                        <option>Locked</option>
                                      </select>
                                      <div className='single-form'>
                                      <div className="single-form">
                                          <button disabled={fileDisabled} style={{background: 'green', color: 'white', margin: '0'}} className="btn  w-100">{
                                            fileLoading ? <SpinnerRoundFilled color='#ffffff' enabled={fileLoading} /> : 'Add Chapter'
                                        }</button>
                                        <p style={{color: 'red', textAlign: 'center', paddingTop: '.5em'}}> {fileError} </p>
                                      </div>
                                      </div>
                                  </div>
                              </div>
                            </form>
                        </div>
                        {/* <!-- Register & Login Images End --> */}

                    </div>
                    <hr />
                    <div className="col-lg-6">

                        {/* <!-- Register & Login Form Start --> */}
                        <div className="register-login-form">
                            {/* <h3 className="title">Create a New <span>Course</span></h3> */}

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

const PdfCourse = (props) => {
  const {chapter, title, remove} = props
  return (
    <div style={{border: '2px solid green', borderRadius: '1em', margin: '1em 0', display: 'flex', justifyContent: 'space-between'}}>
      <div style={{padding: '0 .5em'}}>
        <p style={{fontSize: '1rem', fontWeight: 'bold'}}> {` Chapter ${chapter}`} </p>
        <p style={{color: 'green'}}> {title ? `${title.slice(0,24)}...` : title} </p>
      </div>
      <button onClick={() => remove(chapter-1)} style={{borderStyle: 'none', color: 'white', background: 'red', cursor: 'pointer', borderBottomRightRadius: '1em', borderTopRightRadius: '1em'}}>Remove</button>
    </div>
  )
} 