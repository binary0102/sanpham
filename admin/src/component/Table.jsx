import React from 'react';

export const Table = ({thead = [], children}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {thead.map(element => (
                        <th scope="col">{element}</th>
                    ))}
                </tr>
                
            </thead>
            <tbody>
                    {children}
            </tbody>
        </table>
    )
}