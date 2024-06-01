import React, { useReducer } from 'react';

const LongForm = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        education: "",
        feedback: "",
        quantity: 0,
        term: false
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                };
            case "INCREMENT":
                return {
                    ...state,
                    quantity: state.quantity + 1,
                };
            case "DECREMENT":
                return {
                    ...state,
                    quantity: state.quantity - 1,
                };
            case "TOGGLE":
                return {
                    ...state,
                    term: !state.term,
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state)
    }

    return (
        <div className='flex justify-center items-center mt-20 h-full w-full p-5'>
            <form className='form-control p-4 rounded-lg' onSubmit={handleSubmit} style={{ boxShadow: '4px 10px 15px 8px #888888' }}>
                <div className='flex justify-center items-center my-1'>
                    <div className='mx-4'>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="Type here" name='firstName' id='firstName' onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className='mx-4'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder="Type here" name='lastName' id='lastName' className="input input-bordered input-info w-full max-w-xs" onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                    </div>
                </div>
                <div className='flex justify-center items-center my-1'>
                    <div className='mx-4'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Type here" name='email' id='email' className="input input-bordered input-info w-full max-w-md" onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                    </div>
                    <div className='mx-4'>
                        <label htmlFor="">Gender</label>
                        <div className='flex justify-center items-center'>
                            <div className='flex justify-center items-center'>
                                <input type="radio" name="gender" className="radio radio-info mx-4" value='male' onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} /><span className='px-1'>Male</span>
                            </div>
                            <div className='flex justify-center items-center'>
                                <input type="radio" name="gender" className="radio radio-secondary mx-4" value='female' onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} /><span className='px-1'>Female</span>
                            </div>
                            <div className='flex justify-center items-center'>
                                <input type="radio" name="gender" className="radio radio-warning mx-4" value='other' onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} /><span className='px-1'>Other</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center my-1'>
                    <div className='mx-4'>
                        <label htmlFor="">Education</label>
                        <select className="select select-accent w-full max-w-xs" name='education' onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}>
                            <option value={"SSC"} defaultChecked>SSC</option>
                            <option value={"HSC"}>HSC</option>
                            <option value={"MA"}>MA</option>
                            <option value={"MSc"}>MSc</option>
                            <option value={"BA"}>BA</option>
                            <option value={"BSC"}>BSC</option>
                            <option value={"BS"}>BS</option>
                            <option value={"MBBS"}>MBBS</option>
                            <option value={"PhD"}>PhD</option>
                            <option value={"AA"}>AA</option>
                            <option value={"EEE"}>EEE</option>
                            <option value={"MPhill"}>MPhill</option>
                            <option value={"MBA"}>MBA</option>
                            <option value={"LLM"}>LLM</option>
                            <option value={"MD"}>MD</option>
                            <option value={"MEd"}>MEd</option>
                            <option value={"MEng"}>MEng</option>
                            <option value={"BSc Eng"}>BSc Eng</option>
                            <option value={"MPH"}>MPH</option>
                            <option value={"MCS"}>MCS</option>
                            <option value={"CA"}>CA</option>
                            <option value={"ABA"}>ABA</option>
                            <option value={"AS"}>AS</option>
                            <option value={"AAS"}>AAS</option>
                            <option value={"AFA"}>AFA</option>
                        </select>
                    </div>
                    <div className='mx-4'>
                        <label htmlFor="">Number Of PCs</label>
                        <div className='block'>
                            <button onClick={() => dispatch({ type: "DECREMENT", })} className='text-2xl bg-blue-500 btn-square text-white px-2 text-center btn rounded-none'>-</button>
                            <span className='text-xl px-14 border-2 p-2 border-black'>{state.quantity}</span>
                            <button onClick={() => dispatch({ type: "INCREMENT", })} className='text-2xl bg-blue-500 btn-square text-white px-2 text-center btn rounded-none'>+</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start ml-5 items-center mt-5'>
                    <div>
                        <label htmlFor="" className='block'>FeedBack</label>
                        <textarea className="textarea textarea-primary" cols={40} rows={4} placeholder="feedback" name='feedback' onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}></textarea>
                    </div>
                </div>
                <div className='flex justify-between ml-5 items-center mt-5'>
                    <h1 className='flex justify-center items-center'><input type="checkbox" name='term' onClick={() => dispatch({type: 'TOGGLE'})} className="checkbox mr-2 border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" /> I agree to tems and conditions</h1>
                    <button type="submit" className="btn btn-primary text-white" disabled={!state.term}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LongForm;