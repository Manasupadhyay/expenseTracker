import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    details: "",
    date: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(form);
    // console.log("working");
    const res = await fetch('http://localhost:4000/transaction');
  }
  function handleInput(e){
    setForm({...form,[e.target.name]: e.target.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          placeholder="enter the transaction amount"
          value={form.amount}
          onChange={handleInput}
        />
        <input
          type="text"
          name="details"
          placeholder="enter the transaction details"
          value={form.details}
          onChange={handleInput}
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInput}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
