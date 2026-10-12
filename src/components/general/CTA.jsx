

export default function CTA({ link, state }) {
  return (
    <a className="CTA"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <span>Try Project</span>
        <p>{state ?? ""}</p>
    </a>
  )
}
