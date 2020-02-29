
import React from "react"
import "./cat.scss"
import * as action from "../../redux/catReducer/cat-action"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class NextPage extends React.Component {
   
    componentDidMount() {
       
       this.props.fetchCats()

    }
    
    render() {

        const { catList } = this.props
        console.log(catList)
        
       
        const newCat = catList.splice(41, 67).filter((item, index) => index < 27).map(cat => (
            <div className="cat-list" key={cat.id}>
                <img src={cat.vetstreet_url} alt="Cat Image" />
                <p className="breed-name">Breed Name: <span>{cat.name}</span></p>
                <p className="temperament">Temperament: <span>{cat.temperament}</span></p>
                <p className="life-span">Life Span: <span>{cat.life_span}</span></p>
                <p className="shedding-level">Shedding Level: <span>{cat.shedding_level}</span></p>
                <p className="friendly">Dog Friendly: <span>{cat.dog_friendly}</span></p>
                <p className="child-friendly">Child Friendly: <span>{cat.child_friendly}</span></p>
            </div>
        ))
        return (
            <div>
                <div className="cats">                    
                   {newCat} 
                </div>
                <ul className="pagination">
                    <li className="page-item"><Link className="page-link" to="/cat:page1">Previous</Link></li>
                    <li className="page-item"><Link className="page-link" to="/cat:page1">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="/cat:next">Next</Link></li>
                </ul>
            </div>
        )
    }
   
}

const mapStateToProps = state => ({
    catList: state.cats.catList
})


export default connect(mapStateToProps, action)(NextPage)