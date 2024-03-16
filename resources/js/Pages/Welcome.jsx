import { Head } from "@inertiajs/react";
import { Stack, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
            <Head title="Welcome" />
            <Flex justify={"center"} align={"center"} h={"100vh"}>
                <Stack textAlign={"center"} gap={5}>
                    <Heading>{isClicked ? "Magic🪄" : "Hello👋"}</Heading>
                    <Text>
                        This page created using React JS, Inertia and Laravel
                    </Text>
                    <Button
                        colorScheme={"messenger"}
                        onClick={() => setIsClicked(!isClicked)}
                    >
                        Click me
                    </Button>
                    <Button
                        as={"a"}
                        href="admin/login"
                        variant={"outline"}
                        colorScheme={"messenger"}
                    >
                        Go to Login Page 👉
                    </Button>
                </Stack>
            </Flex>
        </>
    );
}
