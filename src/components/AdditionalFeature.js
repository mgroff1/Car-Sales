import React,{useState} from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions.js/action";

const AdditionalFeature = props => {

  console.log(props)
  return (
    <li>
      {}
      <button className="button" onClick={() => {props.addFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price}) (+{props.car.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    carprice:state.car.price,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
