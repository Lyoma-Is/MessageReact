import { useState } from "react"

function Messages(){
    const [messages, setMessage] = useState([
      {
        id: 1,
        text: 'Hellow',
        author: 'Robot',
        side: 'left',
      },
      {
        id: 2,
        text: 'Hellow',
        author: 'Admin',
        side: 'right',
      },
      {
        id: 3,
        text: 'Hellow',
        author: 'Robot',
        side: 'left',
      },
      {
        id: 4,
        text: 'Hellow',
        author: 'Admin',
        side: 'right',
      }
    ])

//     const mess = [
// <div className='row d-flex'>
//         <div className='col-3'>
//             <div className='left'>
//               <p>
//                 Hello
//               </p>
//               <span>ramzan</span>
//             </div>
//         </div>
//       </div>,
//       <div className='row d-flex justify-content-end'>
//         <div className='col-3'>
//             <div className='right'>
//             <p>
//                 Hello
//               </p>
//               <span>ramzan</span>
//             </div>
//         </div>
//       </div>,
//       <div className='row d-flex'>
//         <div className='col-3'>
//           <div className='left'>
//           <p>
//                 Hello
//               </p>
//               <span>ramzan</span>
            
//           </div>
//         </div>
//       </div>,
//       <div className='row d-flex justify-content-end'>
//         <div className='col-3'>
//           <div className='right'>
//               <p>
//                 Hello
//               </p>
//               <span>ramzan</span>
            
//           </div>
          
//         </div>
//       </div>
//     ]
function deleteMessage(id){
  setMessage(messages.filter(item => {
    if(item.id === id){
      return false
    }
    else{
      return true
    }
  }))
    
}
    const mess2 = messages.map(item =>{
      return(
        <div key={item.id} className={`row ${item.side === 'left' ? '' : 'justify-content-end'}`}>
          <div className='col-3'>
              <div className={`${item.side}`}>
                <p>{item.text}</p>
                <span>{item.author}</span>
              </div>
              <button className="btn btn-danger" onClick={() => deleteMessage(item.id)}>clean</button>
          </div>
      </div>
      )
    })
    return(
    <div>
        {mess2}
    </div>)
    
}

export default Messages;