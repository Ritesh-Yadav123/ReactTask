import React from "react";
import style from './input.module.css'

function Input({onSubmit}) {
  return (
    <div>
      <form className={style.form} onSubmit={onSubmit}>
        <input type="text" name="expenseType" placeholder="expense type" />
        <input type="number" name="amount" placeholder="enter amount" />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default Input;
