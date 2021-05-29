import React, {useRef} from 'react';
import classes from './ExpenseForm.module.css';
import Button from "../../../UI/Button/Button";
import DatePicker from "../../../UI/DatePicker/DatePicker";
import {ExpenseType} from "../../../../App";
import {useAppDispatch} from "../../../../app/hooks";
import {expenseActions} from '../../../../store/expenseSlice';

const ExpenseForm: React.FC = (props) => {
    const dateRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);
    const vendorRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredDate: string = dateRef.current!.value;
        const enteredCategory: string|undefined = categoryRef.current?.value;
        const enteredVendor: string|undefined = vendorRef.current?.value;
        const enteredDescription: string|undefined = descriptionRef.current?.value;
        const enteredAmount: number = +amountRef.current!.value;
        console.log(enteredDate);

        const newExpense: ExpenseType = {
            id: Math.random().toString(),
            timestamp: new Date(enteredDate).getTime().toString(),
            category: enteredCategory || "",
            vendor: enteredVendor || "",
            description: enteredDescription || "",
            price: enteredAmount
        };
        dispatch(expenseActions.addExpense({expense: newExpense}));

        const postItem = async () => {
            const response = await fetch("http://localhost:3000/prod/item", {
                method: "post",
                body: JSON.stringify({item: newExpense}),
                headers: {
                    "app_user_id": "123",
                    "app_user_name": "Wilson",
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            console.log(data)
        }

        postItem();


    }
    return (
        <section className={classes['new-expense']}>
            <form onSubmit={submitHandler}>
                <DatePicker ref={dateRef}/>
                <div className={classes.control}>
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" ref={categoryRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="vendor">Vendor</label>
                    <input type="text" id="vendor" ref={vendorRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" ref={descriptionRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="expense">Expense Amount</label>
                    <input type="number" id="expense" ref={amountRef}/>
                </div>
                <div className={classes.actions}>
                    <Button type="submit" >submit</Button>
                </div>
            </form>
        </section>

    )
}

export default ExpenseForm;
