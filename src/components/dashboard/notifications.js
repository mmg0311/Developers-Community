import React from 'react'
import moment from 'moment'
const Notifications = ({ notifications }) => {
   return (
      <div className="section">
         <div className="card">
            <div className="card-content">
               <span className="card-title">Notification</span>
               <ul className="notification">
                  {notifications && notifications.map(notification => {
                     return (
                        <li key={notification.id}>
                           <span>
                              {notification.user}
                           </span>
                           <span>&nbsp;{notification.content}</span>
                           <div>{moment(notification.time.toDate()).fromNow()}</div>
                        </li>)
                  })}
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Notifications