"use client"

import React, { useEffect, useState } from 'react';
import { gql } from "@apollo/client";
import client from "../../../../client-header/client";
import Link from "next/link";
// import { DocumentRenderer } from '@keystone-6/document-renderer';

interface PhoneDataProps {
  data: {
    name: string,
    document: {
      document: string
    }
  }
}

const PhoneData = ({ data }: PhoneDataProps) => {
  return (
    <>
   <h1>Phone name: {data?.name}</h1>

      <h2>Description:</h2>
      {/* <DocumentRenderer document={data.document.document} /> */}
    </>
  )
}

interface Params {
  id: string;
  // Add more properties as needed
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        phones {
          id
        }
      }
    `,
  });

  const paths = data.phones.map((phone: any) => ({
    params: { id: phone.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: Params }) {
  const { id } = params;

  const { data } = await client.query({
    query: gql`
      query phone($id: ID!) {
        phone(where: { id: $id }) {
          name
          id
          document {
            document
          }
        }
      }
    `,
    variables: { id },
  });

  return { props: { data: data.phone } };
}

const PhoneDataPage = ({ data }: { data: any }) => {
  const [phoneData, setPhoneData] = useState(data);

  useEffect(() => {
    setPhoneData(data);
  }, [data]);

  return <PhoneData data={phoneData} />;
};

export default PhoneDataPage;
