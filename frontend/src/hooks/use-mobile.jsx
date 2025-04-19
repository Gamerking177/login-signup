import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// JSX component using the hook
export default function ResponsiveComponent() {
  const isMobile = useIsMobile()

  return (
    <div>
      {isMobile ? (
        <p>You are on a mobile device.</p>
      ) : (
        <p>You are on a desktop or larger screen.</p>
      )}
    </div>
  )
}
