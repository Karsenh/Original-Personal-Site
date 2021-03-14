import React from 'react';
import allBlogs from '../components/allBlogs';
import Title from '../components/Title';

function BlogPage() {
  const newArr = allBlogs.slice(0).reverse();

  return (
    <div>
      <div className='blog-title'>
        <Title title={'Recent Blogs'} span={'Recent Blogs'}></Title>
      </div>
      <div className='BlogsPage'>
        {newArr.map((blog) => {
          return (
            <div className='blog' key={blog.id}>
              <div className='blog-content'>
                <img src={blog.image} alt='' />
                <a href={blog.link} className='blog-link'>
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;
