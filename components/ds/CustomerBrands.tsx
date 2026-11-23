import customers from '@/content/home-customers.json'
import './customer-brands.css'

export function CustomerBrands() {
  return (
    <ul className="customer-brands-list">
      {customers.map(({ slug, name, logo, category, symbol }) => (
        <li key={slug}>
          <a href={`/go/${slug}`} aria-label={`Перейти на сайт ${name}`}>
            <span className="customer-brands-logo">
              <img src={`/images/customers/${logo}`} alt={symbol ? '' : name} loading="lazy" />
              {symbol && <span>{name}</span>}
            </span>
            <span className="customer-brands-category">{category}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
