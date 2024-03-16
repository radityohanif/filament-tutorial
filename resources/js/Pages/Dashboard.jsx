import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import { useEffect } from "react";

export default function Dashboard({ auth }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        console.log("useEffect process 🪄");
        console.log({ auth });
    }, []);

    return (
        <>
            <Head title="Dashboard" />
            <Stack p={"100px"} gap={10}>
                <Stack gap={5}>
                    <Flex justify={"space-between"}>
                        <Heading>Custom Dashboard Page</Heading>
                        <Button colorScheme={"messenger"} variant={"outline"}>
                            Logout
                        </Button>
                    </Flex>
                    <Text>You need login to access this page</Text>
                </Stack>
                <Stack gap={5}>
                    <Flex>
                        <Button onClick={onOpen} colorScheme={"messenger"}>
                            Trigger modal
                        </Button>
                    </Flex>
                    <Modal onClose={onClose} isOpen={isOpen} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quod inventore ducimus ut
                                veritatis repellendus at sapiente sequi dolor
                                assumenda fugit, obcaecati recusandae, nemo
                                iusto magnam nihil cupiditate nam a quasi!
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={onClose}>Close</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Stack>
            </Stack>
        </>
    );
}
