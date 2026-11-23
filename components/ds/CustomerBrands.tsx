import customers from '@/content/home-customers.json'
import './customer-brands.css'

export function CustomerBrands() {
  return (
    <section id="customers" className="ds-container customer-brands" aria-labelledby="customer-brands-title">
      <h2 id="customer-brands-title" className="rr-h2">Работаем с лидерами, которые меняют свои отрасли</h2>
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
    </section>
  )
}
