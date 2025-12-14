import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    { name: 'Планкен из лиственницы', description: 'Премиальное качество для фасадов', icon: 'TreeDeciduous', image: 'https://cdn.poehali.dev/projects/aa079e6b-fa23-45be-833e-17512ac2f801/files/a814a0e2-b965-4df8-9164-8f6ea62b4ec7.jpg' },
    { name: 'Рейки из сосны', description: 'Идеально для интерьера', icon: 'Trees', image: 'https://cdn.poehali.dev/projects/aa079e6b-fa23-45be-833e-17512ac2f801/files/f93b6e78-7387-4121-999a-05121c350a47.jpg' },
    { name: 'Скошенный планкен', description: 'Современный дизайн', icon: 'Layers', image: 'https://cdn.poehali.dev/projects/aa079e6b-fa23-45be-833e-17512ac2f801/files/a814a0e2-b965-4df8-9164-8f6ea62b4ec7.jpg' }
  ];

  const services = [
    { title: 'Производство', desc: 'Полный цикл обработки древесины', icon: 'Factory' },
    { title: 'Доставка', desc: 'Логистика по всей России', icon: 'Truck' },
    { title: 'Консультация', desc: 'Помощь в выборе материалов', icon: 'MessageSquare' }
  ];

  const portfolio = [
    { title: 'ЖК "Премиум Парк"', type: 'Фасад', year: '2024', image: 'https://cdn.poehali.dev/projects/aa079e6b-fa23-45be-833e-17512ac2f801/files/a814a0e2-b965-4df8-9164-8f6ea62b4ec7.jpg' },
    { title: 'Загородный дом', type: 'Интерьер', year: '2023', image: 'https://cdn.poehali.dev/projects/aa079e6b-fa23-45be-833e-17512ac2f801/files/f93b6e78-7387-4121-999a-05121c350a47.jpg' },
    { title: 'Торговый центр', type: 'Отделка', year: '2024', image: 'https://cdn.poehali.dev/projects/aa079e6b-fa23-45be-833e-17512ac2f801/files/2defa6e4-bfc7-4647-834c-320d1c2752f7.jpg' }
  ];

  const certificates = [
    'ISO 9001:2015',
    'ГОСТ 8242-88',
    'Сертификат соответствия',
    'Экологический сертификат'
  ];

  const blogPosts = [
    { title: 'Как выбрать планкен для фасада', date: '15 декабря 2024', category: 'Советы' },
    { title: 'Преимущества лиственницы', date: '10 декабря 2024', category: 'Материалы' },
    { title: 'Тренды 2024 в отделке', date: '5 декабря 2024', category: 'Дизайн' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-gold">ПЛК</div>
              <div className="hidden md:block text-sm text-muted-foreground">Будущее своими руками</div>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              {['home', 'about', 'products', 'services', 'portfolio', 'certificates', 'blog', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-gold ${activeSection === section ? 'text-gold' : 'text-white'}`}
                >
                  {section === 'home' ? 'Главная' : section === 'about' ? 'О компании' : section === 'products' ? 'Продукция' : section === 'services' ? 'Услуги' : section === 'portfolio' ? 'Портфолио' : section === 'certificates' ? 'Сертификаты' : section === 'blog' ? 'Блог' : 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-gold text-black hover:bg-gold/90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/aa079e6b-fa23-45be-833e-17512ac2f801/files/decbc79f-0d2b-4f6e-b18c-bf9a69541125.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        <div className="relative z-20 container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gold">ПЛК</span>
          </h1>
          <p className="text-3xl md:text-5xl font-light mb-4 text-gold/90">Будущее своими руками</p>
          <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto">
            Премиальное производство планкена и реек из лиственницы и сосны
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8 py-6">
              Наша продукция
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-8 py-6">
              Связаться с нами
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-gold" />
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold">О компании</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Мастерство и качество</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы — ведущий производитель премиальных пиломатериалов с многолетним опытом. 
              Наше производство оснащено современным оборудованием, а команда профессионалов 
              создаёт продукцию высочайшего качества для самых требовательных клиентов.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-card/50 border-gold/20 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-gold mb-2">15+</div>
                <div className="text-lg text-muted-foreground">лет на рынке</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-card to-card/50 border-gold/20 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-gold mb-2">500+</div>
                <div className="text-lg text-muted-foreground">реализованных проектов</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-card to-card/50 border-gold/20 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-gold mb-2">100%</div>
                <div className="text-lg text-muted-foreground">качество продукции</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold">Продукция</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Наши материалы</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Широкий ассортимент пиломатериалов премиум-класса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-card to-card/50 border-gold/20 hover-lift group overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-4 text-gold">
                    <Icon name={product.icon as any} size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold">Услуги</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Что мы предлагаем</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-card to-card/50 border-gold/20 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-block p-4 rounded-full bg-gold/10">
                    <Icon name={service.icon as any} size={40} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold">Портфолио</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Наши проекты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-card to-card/50 border-gold/20 overflow-hidden hover-lift group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold">Сертификаты</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Наши гарантии</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certificates.map((cert, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-card to-card/50 border-gold/20 hover-lift">
                <CardContent className="p-8 text-center">
                  <Icon name="Award" size={48} className="text-gold mx-auto mb-4" />
                  <p className="font-semibold">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold">Блог</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Полезные статьи</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-card to-card/50 border-gold/20 hover-lift group cursor-pointer">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-gold/20 text-gold border-gold text-xs">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-gold/20 text-gold border-gold">Контакты</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Мы всегда рады ответить на ваши вопросы</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-card to-card/50 border-gold/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon name="Phone" size={24} className="text-gold mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <Icon name="Mail" size={24} className="text-gold mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-muted-foreground">info@plk-wood.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-gold mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Производственная, 1</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-card/50 border-gold/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    />
                    <textarea
                      placeholder="Сообщение"
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    />
                    <Button className="w-full bg-gold text-black hover:bg-gold/90">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gold/20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-gold mb-2">ПЛК</div>
              <div className="text-sm text-muted-foreground">Будущее своими руками</div>
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" size="icon" className="text-gold hover:text-gold/80">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gold hover:text-gold/80">
                <Icon name="Facebook" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gold hover:text-gold/80">
                <Icon name="Youtube" size={24} />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gold/10 text-center text-sm text-muted-foreground">
            © 2024 ПЛК. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}