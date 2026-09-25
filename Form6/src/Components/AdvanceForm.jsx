import React from "react";
import { useState } from "react";
function AdvanceForm() {
  const [form, setForm] = useState({
    gender: " ",
    country: "India",
    agree: false,
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(form);
  }
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div>
      {" "}
      <h1>Radio, checkbox, select handling</h1>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={form.gender === "Male"}
          onChange={handleChange}
        />{" "}
        Male{" "}
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={form.gender === "Female"}
          onChange={handleChange}
        />{" "}
        Female <br /> <label htmlFor="country">Country</label>{" "}
        <select
          name="country"
          id="country"
          value={form.country}
          onChange={handleChange}
        >
          {" "}
          <option value="India">India</option> <option value="USA">USA</option>{" "}
          <option value="China">China</option>{" "}
        </select>{" "}
        <br />{" "}
        <label>
          {" "}
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />{" "}
          I agree Terms and Conditions{" "}
        </label>{" "}
        <br /> <button type="submit">Submit</button>{" "}
      </form>{" "}
    </div>
  );
}
export default AdvanceForm;
