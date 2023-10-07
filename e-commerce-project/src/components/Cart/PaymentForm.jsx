import { useRef } from "react";

const PaymentForm = () => {
  const userName = useRef();
  const cardNumber = useRef();
  const expiryDate = useRef();
  const cvvNumber = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const userPaymentInfo = {
      userName: userName?.current.value || "",
      cardNumber: cardNumber?.current.value || "",
      expiryDate: expiryDate?.current.value || "",
      cvvNumber: cvvNumber?.current.value || "",
    };

    console.log(userPaymentInfo);
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-10">
      <div className="flex flex-col ">
        <label>Name</label>
        <input
          ref={userName}
          className="p-2.5 border rounded"
          type="text"
          placeholder="John Doe"
          required
        />
      </div>
      <div className="flex flex-col ">
        <label>Credit Card Number</label>
        <input
          ref={cardNumber}
          className="p-2.5 border rounded"
          type="number"
          placeholder="1234 **** **** 5678"
          required
        />
      </div>
      <div className="flex sm:flex-row flex-col justify-between gap-10">
        <div className="flex flex-col w-full">
          <label>Expiry Date</label>
          <input
            ref={expiryDate}
            className="p-2.5 border rounded"
            type="number"
            placeholder="07 / 23"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label>CVV</label>
          <input
            ref={cvvNumber}
            className="p-2.5 border rounded"
            type="number"
            placeholder="676"
            required
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="flex items-center justify-center bg-[#4361EE] hover:bg-[#7b90f3] font-semibold py-3 text-md tracking-wide text-white gap-2.5 w-full rounded  hover:text-white"
          type="submit"
        >
          Order
        </button>
      </div>
    </form>
  );
};
export default PaymentForm;
