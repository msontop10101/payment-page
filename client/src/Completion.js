import success from './success.png'
function Completion(props) {
  return <div style={{alignItems:"center", display:"flex", flexDirection:"column"}}>
    <img src={success} alt='success'/>
    <h1>Payment Successful</h1>
  </div>;
}

export default Completion;
