import React from 'react'

function CourseItem(props) {
    const {img, title, earned, enrol, author, category} = props;
  return (
    <div className="courses-item">
        <div className="item-thumb">
            <a href="#">
                <img src={img} alt="Courses" />
            </a>
        </div>

        <div className="content-title">
            <div className="meta">
                <h2 className="title">{category}</h2>
                {/* <a href="#" className="action">Free</a>
                <a href="#" className="action">Public</a> */}
            </div>
            <h3 className="title"><a href="#">{title}</a></h3>
        </div>

        <div className="content-wrapper">

            <div className="content-box">
                <p>Earned</p>
                <span className="count">{`₦ ${earned}`}</span>
            </div>

            <div className="content-box">
                <p>Enrollment’s</p>
                <span className="count">{enrol}</span>
            </div>

            <div className="content-box">
                <p>Author</p>
                <span className="count">
                        {author}
                        {/* <span className="rating-star">
                            <span className="rating-bar" style="width: 80%;"></span>
                </span> */}
                </span>
            </div>

            {/* <div className="courses-select">
                <select>
                    <option data-display="This Month">This Month</option>
                    <option value="1">This Year</option>
                    <option value="2">This Week</option>
                </select>
            </div> */}

        </div>
    </div>
  )
}

export default CourseItem