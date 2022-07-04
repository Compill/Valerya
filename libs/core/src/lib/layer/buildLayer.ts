interface Layer
{
  color: string,
  onColor: string
}

export function buildLayer(color: number): Layer
{
  return {
    color,
    onColor: "#FFFFFFFF"// something like AA
  }
}
