import React from 'react'
import VisitorConfirm from './index'
function VisitorUrl(props) {
    return (
        <div>
            <VisitorConfirm uuid_id={props.match.params.id}/>
        </div>
    )
}

export default VisitorUrl
