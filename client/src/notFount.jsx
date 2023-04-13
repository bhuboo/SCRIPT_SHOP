import axios from "axios";
import { useSelector } from "react-redux";

const url = "http://localhost:5000/api";

const PayButton = () => {
  const handleCheckout = () => {
    axios.post(`${url}/stripe/create-checkout-session`,
      {
        "source": "tok_19oF...IZNC",
        "capture": false,
        "amount": 33000,
        "currency": "EUR",
        "description": "Some description",
        "receipt_email": "my@email.com",
        "metadata": {
        }
    }).then((res) => {
      if(res.data.url){
      window.location.href = res.data.url;
      }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </>
  );
};

export default PayButton;
