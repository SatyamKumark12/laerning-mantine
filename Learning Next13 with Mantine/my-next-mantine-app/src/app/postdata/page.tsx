// import { gql, useMutation, useQuery } from '@apollo/client';
// import { Table, Loader, Alert, Button } from '@mantine/core';

// const GET_POSTS = gql`
//   query GetPosts {
//     posts {
//       id
//       title
//       content
//     }
//   }
// `;

// const PostsTable = () => {
//   const { loading, error, data } = useQuery(GET_POSTS);
// //   const [deletePost] = useMutation(DELETE_POST);

//   if (loading) return <Loader />;
//   if (error) return <Alert color="red">{error.message}</Alert>;

//   return (
//     <Table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Title</th>
//           <th>Content</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.posts.map((post: any) => (
//           <tr key={post.id}>
//             <td>{post.id}</td>
//             <td>{post.title}</td>
//             <td>{post.content}</td>
//             <td>
//               {/* <Button variant="outline" onClick={() => deletePost({ variables: { id: post.id } })}>
//                 Delete
//               </Button> */}
//               <Button variant="outline" href={`/${post.id}/edit`}>
//                 Edit
//               </Button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default PostsTable;
