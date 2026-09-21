'use client';

import Link from 'next/link';
import { useState } from 'react';
import { markdownToHtml } from '@/app/lib/markdown';
import Spacing from '@/app/ui/Spacing';

const starterMarkdown = `---
title: Your post title
date: 2026-01-01
category: Photography
image: /images/post_4.jpeg
slug: your-post-slug
excerpt: One sentence that helps readers decide whether to continue.
---

## Start with a clear section

Write your story here. Use Markdown for headings, **bold**, *italic*, links, quotes, and lists.

> Add a memorable line here.
`;

export default function BlogEditorPage() {
  const [markdown, setMarkdown] = useState(starterMarkdown);

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-blog-post.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Spacing lg="150" md="100" />
      <div className="container blog-editor">
        <div className="blog-editor_header">
          <div>
            <Link href="/blog" className="blog-back">← Volver al blog</Link>
            <p className="blog-kicker">Editor de contenido</p>
            <h1>Escribe en Markdown, publícalo como historia.</h1>
            <p>Edita la fuente a la izquierda. Vista previa aparece a la derecha.</p>
          </div>
          <button type="button" className="cs-btn cs-style1" onClick={downloadMarkdown}>
            Descargar .md
          </button>
        </div>
        <div className="blog-editor_grid">
          <label className="blog-editor_panel">
            <span>Markdown fuente</span>
            <textarea value={markdown} onChange={(event) => setMarkdown(event.target.value)} spellCheck="false" />
          </label>
          <section className="blog-editor_panel" aria-label="Vista previa del artículo">
            <span>Vista previa</span>
            <div className="markdown-content" dangerouslySetInnerHTML={{ __html: markdownToHtml(markdown.replace(/^---[\s\S]*?---\n/, '')) }} />
          </section>
        </div>
        <p className="blog-editor_note">Descarga el archivo y colócalo en <code>content/blog</code>. El sitio lo leerá en la próxima build.</p>
      </div>
    </>
  );
}
