import React from "react"
import "./homepage.scss"
import { Link } from "react-router-dom"


const Homepage = () => {
    return (
        <div>
            <h1 className="header">Welcome To The Home Of Cats And Lord of the Ring Characters</h1>
            <div className="cat-page">
                        
                <div>
                    <h1 className="text">View Cats List</h1>
                    <Link to="/cats"><img className="cat-image" src="https://res.cloudinary.com/dnmpnu3j6/image/upload/v1582961310/cat_yafcjy.png" alt="hh" /></Link>
                </div>
                <div>
                    <h1 className="text">View LOTR Characters</h1>
                    <Link to="/lotr"><img className="lotr-image" src="https://res.cloudinary.com/dnmpnu3j6/image/upload/v1582961311/lotr_anvvfy.png" alt="hh" /></Link>
                </div>
                        
            </div>
        </div>
        
    )
}

export default Homepage