import React from 'react'
import useForm from '../hooks/useForm';

function UserForm() {
    const [firstName, firstBindName, firstResetName] = useForm('');
    const [lastName, lastBindName, lastResetName] = useForm('');
    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        firstResetName();
        lastResetName();
    }
    return (
        <div>
            <form onSubmit = {submitHandler}>
                <div>
                    <label>First Name:</label>
                    <input value = {firstName} {...firstBindName} type = 'text' />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input value = {lastName} {...lastBindName} type = 'text' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
