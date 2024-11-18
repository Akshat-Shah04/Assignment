import React from 'react'

const Task5ListView = () => {
    const data = [
        { id: 1, name: "Data 1", description: "This is the first data." },
        { id: 2, name: "Data 2", description: "This is the second data." },
        { id: 3, name: "Data 3", description: "This is the third data." },
    ];

    return (
        <div>
            <h1>List View Task</h1>
            <ul className='py-2 px-3' style={{ listStyleType: "none"}}>
                {data.map((item) => (
                    <li
                        key={data.id}
                        className='text-start border border-1 m-2 p-2 border-danger'
                        
                    >
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task5ListView
