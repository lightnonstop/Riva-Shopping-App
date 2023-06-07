
type FilterCardProps = {
    heading: string;
}
export default function FilterCard({ heading }: FilterCardProps) {
    return (
        <div className="filter-card mb-3">
            <h3 className="filter-title">
                {heading}
            </h3>
            <ul className="ps-0">
                <li>Watch</li>
                <li>TV</li>
                <li>Camera</li>
                <li>Laptop</li>
            </ul>
        </div>
    )
}