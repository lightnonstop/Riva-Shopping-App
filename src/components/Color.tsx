type ColorProps = {
    data: { title: string }[] | undefined
}
export default function Color({ data }: ColorProps) {
    return (
        <ul className="colors ps-0">
            {
                data && data.map((color, index) => (
                    <li key={index} style={{ backgroundColor: color.title }}></li>
                ))
            }
        </ul>
    )
}