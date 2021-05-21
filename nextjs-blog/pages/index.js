import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export async function getServerSideProps() {
  const allPostsData = [
    {
      id: 'pre-rendering',
      title: "Two Forms of Pre-rendering",
      date: "2020-01-01",
    },
    {
      id: 'ssg-ssr',
      title: "When to Use Static Generation v.s. Server-side Rendering",
      date: "2020-01-02",
    },
  ];
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}