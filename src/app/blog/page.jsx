'use client'

import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Pagination from "@/app/ui/Pagination";
import PostStyle2 from "@/app/ui/Post/PostStyle2";
import Sidebar from "@/app/ui/Sidebar.jsx/index.jsx";
import Spacing from "@/app/ui/Spacing";
import { useState } from "react";

const postData = [
  {
    thumb: '/images/post_4.jpeg',
    title: 'A.I will take all human job within next year',
    subtitle:
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
    date: '07 Mar 2022',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_5.jpeg',
    title: 'Creative studio programm coming soon',
    subtitle:
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
    date: '05 Mar 2022',
    category: 'Photography',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_6.jpeg',
    title: 'Artistic mind will be great for creation',
    subtitle:
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
    date: '04 Mar 2022',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_4.jpeg',
    title: 'A.I will take all human job within next year',
    subtitle:
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
    date: '07 Mar 2022',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_5.jpeg',
    title: 'Creative studio programm coming soon',
    subtitle:
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
    date: '05 Mar 2022',
    category: 'Photography',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_6.jpeg',
    title: 'Artistic mind will be great for creation',
    subtitle:
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
    date: '04 Mar 2022',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
];

export default function BlogPage() {
  const itemsPerPage = 12;
  const pages = Math.ceil(postData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const visiblePosts = postData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="row gap-20">
            {visiblePosts.map((item, index) => (
              <Div className="col-xs-12 col-md-4" key={index}>
                <PostStyle2
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {visiblePosts.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            <Pagination
              pages={pages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Hablemos de crear <br />algo <i>increíble</i> juntos"
          btnText="Agendar una reunión"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
