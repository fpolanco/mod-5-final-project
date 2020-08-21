// import React from "react";
// import LoginModal from "./LoginModal";


// function InnerModal(props) {
//     return  (
//             <div className="login-modal-container">
//                     <LoginModal close={props.close}/>
//                     <button onClick={()=>props.close()}>CLose</button>
//                 </div> 
//     )
// }


// export default class LoginModalContainer extends React.Component{

//     close() {
//         this.props.close();
//     }



    

//     render() {
//         const isOpen = this.props.isOpen;
//         return (
//             <>
//              {isOpen ? <InnerModal close={this.props.close}/>: null}
//             </>
//         )
//     }
// }