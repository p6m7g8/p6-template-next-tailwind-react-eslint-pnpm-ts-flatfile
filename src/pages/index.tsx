import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to the home page of your Next.js app!" />
        {/* Add any additional meta tags or links here */}
      </Head>
      <main>
        <h1>Welcome to My Next.js App!</h1>
        <p>This is a simple home page.</p>
        {/* Add additional content here */}
      </main>
    </>
  )
}

export default Home
