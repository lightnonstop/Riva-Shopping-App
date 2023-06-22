
import { Link } from 'react-router-dom'
type BlogCardProps = {
  title: string
  description: string
  image: string
  id: string
  date: string
}
export default function BlogCard({ title, description, image, id, date, }: BlogCardProps) {
  return (
    <div className='blog-card' id={id}>
      <div className='card-image'>
        <img src={image} className='img-fluid w-100' alt="blog" />
      </div>
      <div className='blog-content'>
        <p className='date'>{date}</p>
        <h5 className='title'>{title}</h5>
        <p className='desc' dangerouslySetInnerHTML={{ __html: description?.substring(0, 90) + '...' }}>
        </p>
        <Link to={`/blog/${id}`} className="button">Read More</Link>
      </div>
    </div>
  )
}
