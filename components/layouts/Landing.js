import Head from 'next/head'

export default function Landing ({page, children, container = true}) {

  return (
    <div>
       <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.meta_description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={page.title} />
        <meta property="og:type" content={page.page ? 'page' : 'post'} />
        <meta property="og:url" content={page.canonical_url} />
        <meta property="og:image" content={page.feature_image} />
        <meta property="og:site_name" content="Maurice et les autres" />
      </Head>
      <main className={container ? 'px-3 max-w-6xl mx-auto' : ''}>
        {children}
      </main>
    </div>
  )
}