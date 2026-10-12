

export default function CTA({ link, state }) {
  return (
    <a className="CTA"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <span>Try It</span>
        <p>{state ?? ""}</p>
    </a>
  )
}
