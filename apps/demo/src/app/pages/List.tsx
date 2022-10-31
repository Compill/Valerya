import { Container, List, } from "@valerya/components";
import { ReactComponent as Inbox } from "../../assets/inbox-svgrepo-com.svg"
import { ReactComponent as Web } from "../../assets/web-link-svgrepo-com.svg"


export default function Page({ ...props })
{
    const DefaultIcon = () => (
        <svg
            viewBox="0 0 128 128"
            width="100%"
            height="100%"
        >
            <path
                fill="currentColor"
                d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
            />
            <path
                fill="currentColor"
                d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
            />
        </svg>
    )

    return (
        <Container center size="x2" dflex flexCol gap="5" justifyContent="center" py="20">
            <div dflex flexRow gap="10">
                <List w="64" dividerSize="xl" corners="rounded" dividerStyle="transparent">
                    <List.Item key="0" rounded>
                        <List.ItemIcon>
                            <Inbox />
                        </List.ItemIcon>
                        Inbox
                    </List.Item>
                    <List.Item key="1" rounded>
                        <List.ItemIcon>
                            <Web />
                        </List.ItemIcon>
                        Web
                    </List.Item>
                    <List.Item key="2" rounded>
                        <List.ItemIcon>
                            <DefaultIcon />
                        </List.ItemIcon>
                        User
                    </List.Item>
                </List>

                <List w="64" scheme="default" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1">Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>
            </div>

            <div dflex flexRow gap="10">
                <List w="64" variant="default" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>

                <List w="64" variant="light" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>

                <List w="64" variant="menu" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>
            </div>

            <div dflex flexRow gap="10">
                <List w="64" variant="default" scheme="accent" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>

                <List w="64" variant="light" scheme="accent" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>

                <List w="64" variant="menu" scheme="accent" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>
            </div>

            <div dflex flexRow gap="10">
                <List w="64" variant="default" scheme="default" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>

                <List w="64" variant="light" scheme="default" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>

                <List w="64" variant="menu" scheme="default" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>
            </div>

            <div dflex flexRow gap="10">
                <List w="64" variant="default" scheme="default" size="xs" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>

                <List w="64" variant="default" scheme="default" size="sm" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>

                <List w="64" variant="light" disabled scheme="default" size="md" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>

                <List w="64" variant="menu" scheme="default" size="lg" >
                    <List.Item key="0" disabled>Item 1</List.Item>
                    <List.Item key="1" selected disabled>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>

                <List w="64" variant="menu" scheme="default" size="xl" >
                    <List.Item key="0">Item 1</List.Item>
                    <List.Item key="1" selected>Item 2</List.Item>
                    <List.Item key="2">Item 3</List.Item>
                </List>
            </div>

        </Container>

    );
}
