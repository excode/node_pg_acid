import React, { Fragment, useState } from "react";

const InputTransaction= () => {
  const [email, setEmail] = useState("");
  const [offerId, setOfferId] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, offerId};
      const response = await fetch("http://localhost:5000/transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Transaction List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        Email:
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        Offer ID: Number(Skipped the  Dropdown Menu :-())
          <input
          type="text"
          className="form-control"
          value={offerId}
          onChange={e => setOfferId(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTransaction;
