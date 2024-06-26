import { Link, LinkProps, useLocation } from 'react-router-dom'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1 font-medium text-base text-muted-foreground hover:brightness-90 data-[current=true]:text-foreground"
      {...props}
    />
  )
}
