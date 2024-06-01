import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import GrandChild from './GrandChild';

const Child = () => {
    const {setCount} = useContext(COUNTER_CONTEXT);
    return (
        <>
            <div className='mb-3'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 border border-yellow-400">
                    <div className="card-body text-center">
                        <p className="text-lg text-slate-600">Child</p>
                        <div className="flex justify-center items-center">
                            <button onClick={() => setCount(prev => prev + 1)} className="mx-1 btn bg-[#f5aef2] hover:border-x-4 hover:border-y-4 hover:text-[#f5aef2] hover:bg-white hover:border-pink-300">Increase</button>
                            <button onClick={() => setCount(prev => prev - 1)} className="mx-1 btn bg-[#aef5f2] hover:border-x-4 hover:border-y-4 hover:text-[#aef5f2] hover:bg-white hover:border-cyan-200">Decrease</button>
                        </div>
                    </div>
                </div>
            </div>
            <GrandChild></GrandChild>
        </>
    );
};

export default Child;