import { ParentComponent, SoperioComponent, useDarkMode } from "@soperio/react"
import theme from "prism-react-renderer/themes/nightOwl"
import CodeContainer from "./CodeContainer"
import Highlight from "./Highlight"
import CopyButton from "./useClipboard"

export function CodeBlock({ children, ...props }: SoperioComponent & ParentComponent)
{
  const darkMode = useDarkMode()

  const language = "tsx"
  const rawCode = (children as string).trim()

  return (
    <div rounded border="2" borderColor={darkMode ? "slate-800" : "slate-900"} my="5" {...props}>
      <div dflex flexRow placeContent="between" bgColor={darkMode ? "slate-800" : "slate-900"} p="3" py="2" alignItems="center" textSize="xs" textColor="white" textOpacity="85">
        <span>
          <div fontWeight="600" letterSpacing="wider">Code</div>
        </span>
        <CopyButton code={rawCode} />
      </div>

      <CodeContainer>
        <Highlight
          codeString={rawCode}
          language={language}
          theme={theme}
          // metastring={ln}
          showLines={true}
        />
      </CodeContainer>
    </div>
  )
}
