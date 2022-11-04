import BaseHighlight, {
  Language,
  PrismTheme,
  defaultProps,
} from "prism-react-renderer"

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) =>
{
  if (!RE.test(meta))
  {
    return () => false
  }

  const lineNumbers = RE.exec(meta)?.[1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)))

  return (index: number) =>
  {
    const lineNumber = index + 1
    const inRange = lineNumbers?.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
    )
    return inRange
  }
}

interface HighlightProps
{
  codeString: string
  language: Language
  theme: PrismTheme
  metastring?: string
  showLines?: boolean
}

function Highlight({
  codeString,
  language,
  metastring,
  showLines,
  ...props
}: HighlightProps)
{
  const shouldHighlightLine = calculateLinesToHighlight(metastring ?? "")

  return (
    <BaseHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div 
          textSize="md"
          overflowX='auto'
          p="1"
          py="0"
          style={{ fontFamily: "SF Mono, Menlo, monospace" }}
          data-language={language}
        >
          <pre className={className} rounded="lg" p="10px">
            {tokens.map((line, i) =>
            {
              const lineProps = getLineProps({ line, key: i })
              return (
                <div
                  key={i}
                  // py="2"
                  bgColor={shouldHighlightLine(i) ? 'whiteAlpha.200' : undefined}
                  {...lineProps}
                >
                  {showLines && (
                    <span opacity="30" mx='5' textSize='xs'>
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span key={key}  {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        </div>
      )}
    </BaseHighlight>
  )
}

export default Highlight
