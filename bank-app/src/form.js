import { useState } from "react";
import ReactDOM from "react-dom/client";
const Forms = () => {

   


    const initState = {
        accounts : [
                {
                  id: 1,
                  customerName:"Israa Othman",
                  accountNumber: "123456",
                  accountType: "Savings"
                },
                {
                  id: 2,
                  customerName:"Ahmad Zahran",
                  accountNumber: "987654",
                  accountType: "Student accounts"
                }
        ]
    }
    const [state, setState] = useState(initState);
let idd=state.accounts.length

const handleDelete = (id) => {
    setState((state) => ({
      ...state,
      accounts: state.accounts.filter((account) => (account.id === id)),
    }));
    
  };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.newcustomerName.value;
        const number = event.target.accountNumber.value;
        const Type = event.target.accountType.value;
        const newAccount = {
          id: idd +1,
          customerName: name,
          accountNumber: number,
          accountType: Type,
        };
        idd++;
        setState((state) => ({
          ...state,
          accounts: [...state.accounts, newAccount],
        }));
        console.log(state)
        
       
      };
        // const Cards=(initState.accounts)=>{
        //     return(
               
        //         initState.accounts.forEach((e)=> {
        //             <p> e.customerName </p>
        //     //   <div className="row justify-content-center me-0 mt-3" style={{marginLeft:"25rem"}}>
        //     //      console.log(initState.accounts);
        //     //     <div className="col-8  ">
        //     //     <div className="card" style={{ width: "18rem" }}>
        //     //   <div className="card-body">
        //     //     <h5 className="card-title">your name is {index.id}</h5>
        //     //     <p className="card-text">
        //     //       Some quick example text to build on the card title and make up the bulk of
        //     //       the card's content.
        //     //     </p>
        //     //   </div>
        //     //   <ul className="list-group list-group-flush">
        //     //     <li className="list-group-item">An item</li>
        //     //     <li className="list-group-item">A second item</li>
        //     //     <li className="list-group-item">A third item</li>
        //     //   </ul>
        //     //   <div className="card-body">
        //     //     <a href="#" className="card-link">
        //     //     </a>
        //     //   </div>
        //     // </div>
        //     // </div></div>
        // }))
        //     }
    
    return (
    
    <>
    
    <div className="row justify-content-center me-0 mt-3 border border-5 " style={{width:"90rem"}}>
        <div className="col-4  me-0 mt-3">
                <form onSubmit={handleSubmit}>


                <div className="input-group mt-3 ">
  <span className="input-group-text" id="inputGroup-sizing-lg">
  customerName
  </span>
  <input
    type="text"
    className="form-control"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-lg"
    name="newcustomerName"

    
  />
</div>



<div className="input-group mt-3">
  <span className="input-group-text" id="inputGroup-sizing-lg">
  accountNumber
  </span>
  <input
    type="number"
    className="form-control"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-lg"
    name="accountNumber"

  />
</div>


<div className="input-group mt-3">
  <span className="input-group-text" id="inputGroup-sizing-lg">
  accountType
  </span>
  <input
    type="text"
    className="form-control"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-lg"
    name="accountType"

  />
</div>



<button type="submit" className="btn btn-info mt-5 ms-5">
submit
</button>
                </form>
                </div>
                
                
    </div>
    <div>
{state.accounts.map((e)=>{

    return(
        <>
        <h1> </h1>
       < div className="row justify-content-center me-0 mt-3" style={{marginLeft:"25rem"}} >
       
        <div className="col-8  ">
           <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
           <h5 className="card-title">your name is {e.customerName}  </h5>
             <p className="card-text">
              your id is :{e.id}
             </p>
         </div>
        <ul className="list-group list-group-flush">
      <li className="list-group-item"></li>
           <li className="list-group-item"> your account Number is : {e.accountNumber} </li>
        <li className="list-group-item"> your account Type is : {e.accountType}</li>
        </ul>
     <div className="card-body">
         
<button type="submit" className="btn btn-danger mt-5 ms-5" onClick={handleDelete}>
remove 
</button>
       </div>
       </div>
      </div>
      </div>
        </>
    )
})}

    </div>
    
    
    
    </>
    );}

  export default Forms;