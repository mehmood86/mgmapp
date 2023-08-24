import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Product from "./components/Product";
import { useState } from "react";

function App() {
  let itemsCities = ["New York", "San Franksisko", "Tokyo", "London", "Berlin"];

  const handleSelectCities = (item: string) => {
    console.log(item);
  };

  const handleOnClickAlert = () => {
    setAlertVisibility(true);
  };

  const handleOnClickProduct = () => {
    setProductVisibility1(true);
    setProductVisibility2(true);
    setProductVisibility3(true);
  }

  const [alertVisible, setAlertVisibility] = useState(false);
  const [productVisible1, setProductVisibility1] = useState(false);
  const [productVisible2, setProductVisibility2] = useState(false);
  const [productVisible3, setProductVisibility3] = useState(false);

  return (
    <>
     <div>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </Alert>}
      {/*<ListGroup items={itemsCities} heading="Cities" onSelectItem={handleSelectCities} /> */}
      <Button color="primary" onClick={handleOnClickAlert}>
        Primary
      </Button>
    </div>
    <div className="container-fluid">
      {productVisible1 && <Product header={'Header 1'} title={"Product A"} description={"my description"} onClose={()=>setProductVisibility1(false)}></Product>}
      {productVisible2 && <Product header={'Header 2'} title={"Product B"} description={"my description"} onClose={()=>setProductVisibility2(false)}></Product>}
      {productVisible3 && <Product header={'Header 3'} title={"Product C"} description={"my description"} onClose={()=>setProductVisibility3(false)}></Product>}
      <Button color="primary" onClick={handleOnClickProduct}>
        Show Products
      </Button>
    </div>
    </>

  );
}

export default App;
