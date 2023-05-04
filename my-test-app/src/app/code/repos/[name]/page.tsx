import React from 'react';
import Repo from '@/app/components/Repo';

interface RepoPageProps {
    params: {
      name: string;
    };
  }
  

const RepoPage = ({ params: { name } }: RepoPageProps) => {
  return (
    <>
    <div className="card">
       <Repo name={name} />
    </div>
    </>
  )
}

export default RepoPage;