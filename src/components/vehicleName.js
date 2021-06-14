
import React, { useState } from "react";
// import logo from '../../public/assets/images/car.jpg'

const vehicleList = [
  {
    displayname: "car",
    imageUrl: "assets/images/car.jpg",
  },
  {
    displayname: "bus",
    imageUrl: "assets/images/bus.jpg",
  },
  {
    displayname: "bike",
    imageUrl: "assets/images/bike.jpg",
  },
  {
    displayname: "scooty",
    imageUrl: "assets/images/scooty.jpg",
  },
  {
    displayname: "bicycle",
    imageUrl: "assets/images/bicycle.jpg",
  },
];
function VehicleApp() {
  const [name, setName] = useState("");
  var [showList, setshowList] = useState();
  var [change, setChange] = useState(false);
  const handleSubmit = (evt) => {
    // evt.preventDefault();
    // alert(`Submitting Name ${name}`)
    // console.log(name)
    console.log(vehicleList);
    const results = vehicleList.filter(
      (person) => person.displayname === name
    )[0];
    setshowList(results);
    // change= true
    setChange((change = true));
  };

  React.useEffect(() => {});
  return (

    
   
      <div className="list-group">
        <div className="list-group-item animated fadeIn">
          {/* <h4>{showList.displayname}</h4>
          <img src={showList.imageUrl} alt={showList[0].displayname} /> */}

          <form className="text-center">
           
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="text-center">
             example: car,bike,bus,scooty,bicycle
            </div>
            <div className="text-center">
              <button className="btn btn-primary" type="button" onClick={handleSubmit} >Submit</button>
            </div>
            <div className="text-center">
              <h2>Type and submit to see results</h2>
              {/* <img src="assets/images/car.jpg" alt='vecchile'/> */}
              {change ? (
                <div>
                  <h4>{showList.displayname}</h4>
                  <img
                    src={showList.imageUrl}
                    // src={require(`${showList.imageUrl}`)}
                    alt={showList.displayname}
                  />
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    
  
  );
}

export default VehicleApp;
