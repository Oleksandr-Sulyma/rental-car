import css from './Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={css.container}>
      <picture className={css.picture}>
        <Image
          src="/images/hero@3x.webp"
          alt="Rental Car"
          fill
          quality={75}
          loading="eager"
          className={css.image}
        />
      </picture>
      
      <div className={`container ${css.content}`}>
        <h1 className={css.title}>Find your perfect rental car</h1>

        <h2 className={`hero-description ${css.description}`}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        
        <Link href="/catalog" className="btn btn-main">
          View Catalog
        </Link>
      </div>
    </section>
  );
}