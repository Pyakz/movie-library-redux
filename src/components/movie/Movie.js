import React from 'react'
import { withRouter } from 'react-router-dom';

const Movie = (props) => {
    return (
        <div>
            {JSON.stringify(props.match.params)}
        </div>
    )
}

export default withRouter(Movie)