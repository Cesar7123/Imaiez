import { notFound } from 'next/navigation';
import Link from 'next/link';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import Spacing from '@/app/ui/Spacing';
import { getAllPosts, getPost } from '@/app/lib/blog';
import { markdownToHtml } from '@/app/lib/markdown';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ blogId: post.slug }));
}

export async function generateMetadata({ params }) {
  const { blogId } = await params;
  const post = getPost(blogId);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: post.image ? [{ url: post.image, alt: post.title }] : [],
    },
  };
}

export default async function BlogDetailsPage({ params }) {
  const { blogId } = await params;
  const post = getPost(blogId);
  if (!post) notFound();

  return (
    <>
      <Spacing lg="150" md="100" />
      <Div className="container blog-detail">
        <Link href="/blog" className="blog-back">← Volver al blog</Link>
        <article className="cs-post cs-style2">
          <img src={post.image} alt={post.title} className="blog-detail_image cs-radius_15" />
          <div className="cs-post_info">
            <div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
              <span>{post.date}</span>
              <span>{post.category}</span>
            </div>
            <h1 className="cs-post_title">{post.title}</h1>
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
            />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                image: post.image,
                mainEntityOfPage: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/blog/${post.slug}`,
                author: { '@type': 'Person', name: 'Imai Photo' },
              }),
            }}
          />
        </article>
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
