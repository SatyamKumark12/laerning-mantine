"use client"

import React, { useEffect, useState } from 'react';
import { gql } from "@apollo/client";
import client from '../../../client-header/client';
import Link from "next/link";

interface MyData {
  id: number;
  name: string;
  // Add more properties as needed
}

const Index = () => {
  const [data, setData] = useState<MyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await client.query({
        query: gql`
        query Query {
          phones {
            id
            name
          }
        }
        `,
      });
      setData(data.phones);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>List of all phones</h1>
      {data.map((item) => (
        <p key={item.id}>
          <Link href={`/contact/${item.id}`} className='text-3xl'>
            {item.name}
          </Link>
        </p>
      ))}
    </>
  );
};

export default Index;
