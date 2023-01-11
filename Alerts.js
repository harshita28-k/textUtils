import React from 'react'

export default function Alerts(props) {
  return (
    <>
    <div style={{height:"50px"}}> {/*ye height dene se usalert ki height fix ho jayegi taki page ka content uur niche na ho*/}
     {props.Alert && <div className={`container alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.Alert.type}</strong>: {props.Alert.msg}
            </div>}
    </div>
    </>
  )
}

/*alert me 2 chize hoti h:
1)message
2)type  */