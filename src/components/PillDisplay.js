import React from 'react';
import {connect} from 'react-redux'

class PillDisplay extends React.Component{

   findPill = () => {
      return this.props.pills.filter(pill => pill.id.toString() === this.props.match.params.id)  
   }

  render(){

      console.log(this.props.match.params.id, this.props.pills)
      const pill = this.findPill()
      console.log(pill[0])
    return (

      <React.Fragment>
         <h1>{pill[0].name}</h1>
         <p>{pill[0].brand}</p>
         <p>{pill[0].route}</p>
         <p>{pill[0].purpose}</p>
         <p>{pill[0].dose}</p>
         <p>{pill[0].description}</p>
         <p>{pill[0].package_label}</p>
         <p>{pill[0].pregnancy}</p>
         <p>{pill[0].warnings}</p>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
   return { pills: state.pills}
}
export default connect(mapStateToProps)(PillDisplay)