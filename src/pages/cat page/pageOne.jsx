
import React from "react"
import "./cat.scss"
import * as action from "../../redux/catReducer/cat-action"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class PageOne extends React.Component {
   
    componentDidMount() {
       
       this.props.fetchCats()

    }
    
    render() {

        const { catList } = this.props
        console.log(catList)
        
       
        const newCat = catList.splice(21, 40).filter((item, index) => index < 20).map(cat => (
            <div className="cat-list" key={cat.id}>
                <img src={cat.vetstreet_url} alt="Cat Image" />
                <p className="breed-name">Breed Name: {cat.name}</p>
                <p className="temperament">Temperament: {cat.temperament}</p>
                <p className="life-span">Life Span: {cat.life_span}</p>
                <p className="shedding-level">Shedding Level: {cat.shedding_level}</p>
                <p className="friendly">Dog Friendly: {cat.dog_friendly}</p>
                <p className="child-friendly">Child Friendly: {cat.child_friendly}</p>
            </div>
        ))
        return (
            <div>
                <div className="cats">
                   {newCat} 
                </div>
                <ul className="pagination">
                    <li className="page-item"><Link className="page-link" to="/cat" >Previous</Link></li>
                    <li className="page-item"><Link className="page-link" to="/cat:page1" >1</Link></li>
                    <li className="page-item"><Link className="page-link" to="/cat:next">Next</Link></li>
                </ul>
            </div>
        )
    }
   
}

const mapStateToProps = state => ({
    catList: state.cats.catList
})


export default connect(mapStateToProps, action)(PageOne)