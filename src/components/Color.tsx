type ColorProps = {
    data: { title: string }[]
}
export default function Color({ data }: ColorProps) {
    return (
        <ul className="colors ps-0">
            {
                data && data.map(color => (
                    <li style={{ backgroundColor: color.title }}></li>
                ))
            }
        </ul>
    )
}