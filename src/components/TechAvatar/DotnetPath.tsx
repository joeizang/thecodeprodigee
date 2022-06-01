export interface DotnetPathProps {
  fillValue: string
  opacity?: string
  d?: string
}
export function DotnetPath({ fillValue, d, opacity }: DotnetPathProps) {
  return <path style={{ fill: fillValue }} opacity={opacity} d={d}></path>
}
