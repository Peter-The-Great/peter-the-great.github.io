import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';


export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/public',
    coverImage: 'https://yt3.googleusercontent.com/TIVPE1jx6jluyMeu-wq_npNUxUHr8cfijeIDUH6Nl7XLbYJfOM2bQWGgiYcYmF-1ALawvBH6rA=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
    </>
  )
}

