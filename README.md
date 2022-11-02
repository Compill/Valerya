Valerya is a UI component framework for React based on [Soperio](https://soperio-ui.com).

You can find the documentation website at [https://valerya-ui.com](https://valerya-ui.com)

Here is an example of code you can use with Valerya:

```tsx
import { Badge, Card, Container, HStack } from "@valerya/ui"

<Container 
    bgColor="slate-100" 
    p="8" 
    dflex 
    flexRow 
    placeContent="center"
>
    <Card w="80" shadow>
        <img 
            src="/images/landscape.jpg" 
            w="full"
            h="40"
            objectFit="cover"
            roundedT
            alt="landscape"
        />
        <div
            py="4"
            px="5"
            fontWeight="400"
            textColor="slate-700"
        >
            <HStack gap="2" mb="2">
                <Badge scheme="default">React</Badge>
                <Badge scheme="primary">CSS-IN-JS</Badge>
                <Badge scheme="secondary">UI</Badge>
            </HStack>

            <p>
                This is a sample card designed with <span textColor="sky-500" fontWeight="500">Soperio</span>. You can see that I'm applying design props <span fontWeight="500" textDecoration="underline">directly on the HTML tags</span>. 
            </p>
            
            <p mt="2">
                Properties like margin top, horizontal and vertical padding, flex box, rounded corners, width, height, font weight, shadow, text decoration, text and background color are easily defined without the need to write silly CSS.
            </p>
        </div>
    </Card>
</Container>
```

## Installation

```bash
# using npm
npm install @valerya/ui @soperio/react framer-motion

# using yarn
yarn add @valerya/ui @soperio/react framer-motion
```

## Setup

While most of Valerya's components work out of the box if you have setup [Soperio](https://soperio-ui.com) in your project, a few of them need an additional configuration.

You need to create a custom theme for Soperio (if you're not already using one) and add `withDefaultSurfaces()` to it.

```tsx
import { extendTheme, SoperioProvider } from "@soperio/react"
import { withDefaultSurfaces } from "@valerya/ui"

const myTheme = extendTheme(
  ..., // your Soperio theme customization
  withDefaultSurfaces()
)

<SoperioProvider theme={myTheme}>
  <MyApp />
</SoperioProvider>
```

## LICENSE

MIT © [Jonathan Gerbaud](https://github.com/jonathangerbaud)