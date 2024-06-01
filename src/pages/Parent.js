import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';

const Parent = () => {
    const {count} = useContext(COUNTER_CONTEXT);

    return (
        <>
            <div className='mb-3'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 border border-blue-400">
                    <div className="card-body text-center">
                        <p className="text-lg text-slate-600">Parent</p>
                        <p className="text-2xl my-1">{count}</p>
                    </div>
                </div>
            </div>
            <Child></Child>
        </>
    );
};

export default Parent;