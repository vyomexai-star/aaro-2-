export default function Button({ children, href = "#", variant = "primary", className = "", ...props }) {
  return <a className={`button button-${variant} ${className}`} href={href} {...props}>{children}</a>;
}
