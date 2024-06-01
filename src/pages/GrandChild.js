import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';

const GrandChild = () => {
    const {count} = useContext(COUNTER_CONTEXT);
    return (
        <>
            <div className='mb-3'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 border border-red-400">
                    <div className="card-body text-center">
                        <p className="text-lg text-slate-600">Grand Child</p>
                        <p className="text-2xl my-2">{count}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GrandChild;