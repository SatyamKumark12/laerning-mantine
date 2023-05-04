import React from 'react';

interface RepoProps{
    id : number,
    name : string
}

async function fetchRepo(name: string): Promise<RepoProps[]>{
    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}`)
    const repo = await response.json();

    return repo;
}

const Repo = async ({name}: RepoProps) => {

   
    

    const repo = await fetchRepo(name);
    console.log(repo);
  return (
    <>
    
    </>
  )
}

export default Repo;