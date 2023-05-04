import React from 'react';
import Link from 'next/link';
import { FaStar , FaCodeBranch , FaEye } from 'react-icons/fa';

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  // Define any other properties of the repo object
}


async function fetchRepos(): Promise<Repo[]> {
  const response = await fetch('https://api.github.com/users/bradtraversy/repos'); 

  await new Promise((reslove) => setTimeout(reslove, 1000))
  const repos = await response.json();
  return repos; 
}

const ReposPage = async () => {

  const repos = await fetchRepos();
  // console.log(repos);
  
  return (
    <>
    <div className="repos-container">
      <h2>Repostries</h2>
      <ul className='repo-list'>
        {repos.map((repo)=>(
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="repo-details">
              <span>
                <FaStar/> {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch/> {repo.forks_count}
              </span>
              <span>
                <FaEye/> {repo.watchers_count}
              </span>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default ReposPage;