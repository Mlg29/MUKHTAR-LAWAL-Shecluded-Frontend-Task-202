import React from "react"
import "./lotr.scss"
import * as action from "../../redux/lotrReducer/lotr-action"
import { connect } from "react-redux"



class LotrPage extends React.Component {


    componentDidMount() {
       
        this.props.fetchLotr()
 
     }

    render() {
        const { lotrList } = this.props
        console.log(lotrList)
        const newCat = lotrList.filter((item, index) => index < 20).map(lotr => (
           
            
            <div className="lotr-list" key={lotr._id}>
                <img src={lotr.wikiUrl} alt="Lotr Image" />
                <p className="character-name">Character Name: {lotr.name}</p>
                <p className="gender">Gender: {lotr.gender}</p>
                <p className="birth">Birth: {lotr.birth}</p>
                <p className="race">Race: {lotr.race}</p>
                <p className="spouse">Spouse: {lotr.spouse}</p>
               
            </div>
        ))
        
            return (
            <div className="lotrs">
                {newCat} 
            </div>
        )
    }
    
}
const mapStateToProps = state => ({
    lotrList: state.lotr.lotrList
})


export default connect(mapStateToProps, action)(LotrPage)


