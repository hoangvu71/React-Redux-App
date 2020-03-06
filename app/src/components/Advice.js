import React from "react"
import { getAdvice } from "../actions"
import { connect } from "react-redux"
import "./Advice.scss"
const Advice = ({ getAdvice, isLoading, advice }) => {
    return (
        <div>
            <button onClick={getAdvice}>Get advice</button>
            {isLoading && <div className="loadingDiv">getting advice...</div>}
            <div className="adviceDiv">{advice}</div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        advice: state.advice,
        isLoading: state.isLoading,
        error: state.error
    }
}


export default connect(mapStateToProps, { getAdvice })(Advice);