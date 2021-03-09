import React from 'react';
const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
        <ul>
            <h2 className='list-head'>Available Public Repositories</h2>
            {repos.map((repo) => {
                return (
                    <li key={repo.id} className='list'>
                        <span className='repo-text'>{repo.UserId} </span>
                        <span className='repo-text'>{repo.Username} </span>
                        <span className='repo-text'>{repo.mobNo} </span>
                        <span className='repo-text'>{repo.Location} </span>
                        <span className='repo-text'>{repo.Position} </span>
                        <span className='repo-description'>{repo.description}</span>
                    </li>
                    
                );
            })}
        </ul>
    );
};
export default List;
