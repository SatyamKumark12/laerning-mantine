"use client"
import {
    TextInput,
    Checkbox,
    Button,
    Group,
    Box,
    Card,
    Image,
    Select,
    Grid,
    Flex
  } from "@mantine/core";
  import { useForm } from "@mantine/form";
  
  const Form = () => {
    const form = useForm({
      initialValues: {
        email: "",
        fullname: "",
        phone: "",
        designation: "",
        reportingmanager: "",
        type:"",
        role:"",
        termsOfService: false,
      },
  
      // validate: {
      //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      // },
    });
  
    return (
      <>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify={{ sm: 'center' }}
      >
        <div >
        <Card shadow="sm" padding="lg" radius="lg" withBorder>
          <Box maw={700} mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <Grid>
              <Grid.Col span={12}>
              <TextInput
                withAsterisk
                variant="filled"
                label="Full Name"
                placeholder="Full Name"
                radius="md"
                size="lg"
                labelProps={{
                  style: {
                    marginBottom: "0.5rem", // add margin bottom to create space between label and input
                    fontSize: "1.2rem" // increase label font size
                  }
                }}
              //   style={{ width: "400px" }}
                {...form.getInputProps("fullname")}
              />
              </Grid.Col>
  
              <Grid.Col span={6}>
              <TextInput
                withAsterisk
                variant="filled"
                label="Email"
                placeholder="your@email.com"
                radius="md"
                size="lg"
                labelProps={{
                  style: {
                    marginBottom: "0.5rem", // add margin bottom to create space between label and input
                    fontSize: "1.2rem" // increase label font size
                  }
                }}
                {...form.getInputProps("email")}
              />
               </Grid.Col>
  
               <Grid.Col span={6}>
              <TextInput
                withAsterisk
                variant="filled"
                label="Phone Number"
                placeholder="Phone Number"
                radius="md"
                size="lg"
                labelProps={{
                  style: {
                    marginBottom: "0.5rem", // add margin bottom to create space between label and input
                    fontSize: "1.2rem" // increase label font size
                  }
                }}
                {...form.getInputProps("phone")}
              />
              </Grid.Col>
  
              <Grid.Col span={6}>
              <TextInput
                withAsterisk
                variant="filled"
                label="Designation"
                placeholder="Designation"
                radius="md"
                size="lg"
                labelProps={{
                  style: {
                    marginBottom: "0.5rem", // add margin bottom to create space between label and input
                    fontSize: "1.2rem" // increase label font size
                  }
                }}
                {...form.getInputProps("designation")}
              />
              </Grid.Col>
  
              <Grid.Col span={6}>
              <TextInput
                withAsterisk
                variant="filled"
                label="Reporting Manager"
                placeholder="Reporting Manager"
                radius="md"
                size="lg"
                labelProps={{
                  style: {
                    marginBottom: "0.5rem", // add margin bottom to create space between label and input
                    fontSize: "1.2rem" // increase label font size
                  }
                }}
                {...form.getInputProps("reportingmanager")}
              />
              </Grid.Col>
  
              <Grid.Col span={6}>
              <Select
                label="Type"
                variant="filled"
                placeholder="Type"
                radius="md"
                size="lg"
                labelProps={{
                  style: {
                    marginBottom: "0.5rem", // add margin bottom to create space between label and input
                    fontSize: "1.2rem" // increase label font size
                  }
                }}
                data={[
                  { value: "", label: "Type" },
                  { value: "employee", label: "Employee" },
                  // { value: 'svelte', label: 'Svelte' },
                  // { value: 'vue', label: 'Vue' },
                ]}
                {...form.getInputProps("type")}
              />
              </Grid.Col>
  
              <Grid.Col span={6}>
              <Select
                label="Role"
                variant="filled"
                placeholder="Role"
                radius="md"
                size="lg"
                labelProps={{
                  style: {
                    marginBottom: "0.5rem", // add margin bottom to create space between label and input
                    fontSize: "1.2rem" // increase label font size
                  }
                }}
                data={[
                  { value: "", label: "Role" },
                  { value: "designer", label: "Designer" },
                  { value: "developer", label: "Developer" },
                  { value: "manager", label: "Manager" },
                ]}
                {...form.getInputProps("role")}
              />
              </Grid.Col>
  
              {/* <Checkbox
                mt="md"
                label="I agree to sell my privacy"
                {...form.getInputProps("termsOfService", { type: "checkbox" })}
              /> */}
              
              <Grid.Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Group position="right" mt="md">
                <Button type="submit" size="lg">Save</Button>
                <Button type="submit" size="lg">Cancel</Button>
              </Group>
              </Grid.Col>
              </Grid>
            </form>
          </Box>
        </Card>
        </div>
        </Flex>
      </>
    );
  };
  
  export default Form;
  