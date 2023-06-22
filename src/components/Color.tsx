import { Dispatch, SetStateAction } from "react";

type ColorProps = {
    data: { title: string; _id: string }[] | undefined
    setColor: Dispatch<SetStateAction<string | null>>
}
export default function Color({ data, setColor }: ColorProps) {
    console.log(data);
    
    return (
        <ul className="colors ps-0">
            {
                data && data.map((color, index) => (
                    <li onClick={() => setColor(color._id)} key={index} style={{ backgroundColor: color.title, cursor: 'pointer' }}></li>
                ))
            }
        </ul>
    )
}