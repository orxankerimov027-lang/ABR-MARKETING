import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Прокачай свой бренд с нами</h1>
        <p>Видео, модели, чат-боты и автоматизация — всё в одном месте</p>
        <Link href="#contact" className="hero-button">
          Оставить заявку
        </Link>
      </div>

      <div className="hero-image-wrapper">
        <Image
          src="/images/hero.jpg"
          alt="Маркетинг и продвижение"
          width={1200}
          height={600}
          className="hero-image"
          priority
        />
      </div>
    </section>
  );
}
