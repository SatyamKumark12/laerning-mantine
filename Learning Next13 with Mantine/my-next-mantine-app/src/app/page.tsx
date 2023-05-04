

import Image from 'next/image'
import { Inter } from 'next/font/google';
// import { Card, Image, Text, Badge, Button, Group , Grid } from '@mantine/core';

interface ProductProp{
  id : number,
  image : string,
  title : string,
  price : number

}

const inter = Inter({ subsets: ['latin'] })

async function fetchProduct(): Promise<ProductProp[]> {
  const response = await fetch('https://fakestoreapi.com/products'); 

  // await new Promise((reslove) => setTimeout(reslove, 1000))
  const products = await response.json();
  console.log(products);
  
  return products; 
}


const Home =  async() => {

  const products = await fetchProduct();
  console.log(products);
  
  return (
   <>
   {/* <Grid> */}
   <div className='grid grid-cols-4'>
   {
     products && products.map((product) => (
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5 mt-5" key={product.id}>
      <div className='flex justify-center items-center'>
      <Image className="w-100" src={product.image} alt="Sunset in the mountains" height={140} width={100} />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Rs {product.price}</div>
        <p className="text-gray-700 text-base">
         {product.title}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className=''>
          Add to Cart
        </button>
      </div>
    </div>
      ))
    }
   </div>
   



    
   {/* <Grid.Col md={6} lg={3}>
   <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      
     <div className='flex justify-center items-center'>
     <Button size="md" className='bg-blue-500 mt-5' >
      Add to Cart
    </Button>
     </div>
   
    </Card>
    </Grid.Col> */}
   {/* </Grid> */}
   </>
  )
}


export default Home;
