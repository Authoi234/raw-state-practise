import React, { useReducer } from 'react';

const Counter = () => {

    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return state + action.payload;
        } else if (action.type === "DECREMENT") {
            return state - action.payload;
        }
        else{
            return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='mb-3 flex justify-center items-center py-20'>
            <div className='w-1/2'>
                <div className="card card-compact w-full bg-base-100 shadow-xl p-3 border-2 border-blue-400 shadow-fuchsia-300 py-10">
                    <div className="card-body text-center">
                        <div className='flex justify-center items-center'>
                            <h1 className='text-4xl mb-4'>{state}</h1>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="shadow-xl shadow-[#aef5f2] mx-2 btn bg-[#aef5f2] hover:border-x-4 hover:border-y-4 hover:text-[#aef5f2] hover:bg-white hover:border-cyan-200" onClick={() => dispatch({type: 'INCREMENT', payload: 5})}>Increment</button>
                            <button className="shadow-xl shadow-[#f5aef2] mx-2 btn bg-[#f5aef2] hover:border-x-4 hover:border-y-4 hover:text-[#f5aef2] hover:bg-white hover:border-pink-300" onClick={() => dispatch({type: 'DECREMENT', payload: 3})}>Decrement</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;