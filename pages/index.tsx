import Head from 'next/head';
import Avatar from '@components/Avatar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo Liszt</title>
        <meta name="description" content="The best app for writing todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Avatar
        src="https://images.unsplash.com/photo-1627610939070-08af6fb83c04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
        alt="avatar"
        width={48}
        height={48}
      />
      <Avatar
        src="https://images.unsplash.com/photo-1627610939070-08af6fb83c04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
        alt="avatar"
        width={198}
        height={198}
      />
    </>
  );
}
