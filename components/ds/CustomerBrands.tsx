import customers from '@/content/home-customers.json'
import './customer-brands.css'

export function CustomerBrands() {
  return (
    <ul className="customer-brands-list">
      {customers.map(({ slug, name, logo }) => (
        <li key={slug}>
          <a href={`/go/${slug}`} aria-label={`Перейти на сайт ${name}`}>
            <img src={`/images/customers/${logo}`} alt={name} />
          </a>
        </li>
      ))}
    </ul>
  )
}
