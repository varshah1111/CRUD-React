// import './App.css';
function Car(props){
   return <h2> This is a {props.model}</h2>;
}
function Garage() {
    return (
       <div>
        <h1>Who lives in Garage</h1>
        <Car model="BMW"/>
       </div>
    );
}

export default Garage;
