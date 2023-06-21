type ColorProps = {
    data: { title: string }[]
}
export default function Color({ data }: ColorProps) {
    return (
        <ul className="colors ps-0">
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}