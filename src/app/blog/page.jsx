import Link from 'next/link';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import PostStyle2 from '@/app/ui/Post/PostStyle2';
import Spacing from '@/app/ui/Spacing';
import { getAllPosts } from '@/app/lib/blog';

export const metadata = {
  title: 'Blog de fotografía y proceso creativo',
  description: 'Historias, decisiones y luz detrás del trabajo de Imai Photo.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Spacing lg="150" md="100" />
      <Div className="container blog-index">
        <div className="blog-intro">
          <p className="blog-kicker">Notas desde el estudio</p>
          <h1>Historias, proceso y luz.</h1>
          <p>Una mirada cercana a las personas y decisiones detrás de cada imagen.</p>
          <Link href="/blog/editor" className="blog-editor_link">Abrir editor Markdown</Link>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <PostStyle2
              key={post.slug}
              thumb={post.image}
              title={post.title}
              subtitle={post.excerpt}
              date={post.date}
              category={post.category}
              categoryHref="/blog"
              href={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Hablemos de crear <br />algo <i>increíble</i> juntos"
          btnText="Agendar una reunión"
          btnLink="/contact"
        />
      </Div>
    </>
  );
}
