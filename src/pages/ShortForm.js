import React, { useState } from 'react';

const ShortForm = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (event) => {
        event.preventDefault();
        const data = {
            name, lastName, email ,password
        };
        console.log(data)
    }

    return (
        <div className='flex justify-center items-center mt-5'>
            <form className='w-96' onSubmit={submit}>
                <div>
                    <label className="items-center gap-2" htmlFor='name' >
                        first Name
                    </label>
                    <input type="text" name='name' id='name' className="grow w-full input input-bordered my-4" placeholder="Daisy" onBlur={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label className="items-center gap-2" htmlFor='name' >
                        Last Name
                    </label>
                    <input type="text" name='name' id='name' className="grow w-full input input-bordered my-4" placeholder="Daisy" onBlur={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label className="items-center gap-2" htmlFor='name' >
                        Email
                    </label>
                    <input type="email" name='name' id='name' className="grow w-full input input-bordered my-4" placeholder="Daisy" onBlur={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label className="items-center gap-2" htmlFor='name' >
                        Password
                    </label>
                    <input type="password" name='name' id='name' className="grow w-full input input-bordered my-4" placeholder="Daisy" onBlur={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ShortForm;