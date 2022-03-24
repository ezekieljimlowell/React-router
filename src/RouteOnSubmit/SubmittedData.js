import React from 'react';

export const SubmittedData = ({ data }) => {

    return (
        <>
            <h2>Data submitted</h2>
            <div>
                {Object.keys(data).length > 0 && <div>
                    <div>Name: {data.name}</div>    
                    <div>Age: {data.age}</div>
                    <div>Pass or fail: {data.pass && <span> Pass</span> } {data.fail && <span>Fail</span>} 
                        {(data.pass===undefined && data.fail===undefined) && <span>Not choosed</span>}</div>
                    <div>First or second class: {data.aboveFifty && <span>First class</span>} {data.belowFifty && <span> Second class</span>} 
                        {(data.aboveFifty===undefined && data.belowFifty===undefined) && <span>Not choosed</span>}</div>
                </div>}
            </div>
        </>
    )
}