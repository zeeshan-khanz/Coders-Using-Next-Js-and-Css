import React, { useState, useEffect } from 'react';
import styles from '../styles/blog.module.css';
import Link from 'next/link';
import fs from 'fs';

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allblogs);

  console.log(props);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {blogs.map((blogitem) => (
          <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h1 className={styles.blogitem}>{blogitem.title}</h1>
            </Link>
            <p>{blogitem.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("Blogpostdata");
  let myfile;
  let allblogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    console.log(item)
    let myfile = await fs.promises.readFile(('Blogpostdata/' + item), 'utf-8')
    allblogs.push(JSON.parse(myfile));
  }
    return {
      props: { allblogs: [] },
    };
  }


export default Blog;