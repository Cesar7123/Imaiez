import { Icon } from '@iconify/react'
import React from 'react'
import Link from "next/link";

export default function Pagination({ pages, currentPage, onPageChange }) {
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1)

  return (
    <ul className="cs-pagination_box cs-center cs-white_color cs-mp0 cs-semi_bold">
      {pageNumbers.map((page) => (
        <li key={page}>
          <Link
            className={`cs-pagination_item cs-center${page === currentPage ? ' active' : ''}`}
            href={`/blog?page=${page}`}
            onClick={(event) => {
              event.preventDefault()
              onPageChange(page)
            }}
          >
            {page}
          </Link>
        </li>
      ))}
      <li>
        <Link
          href={`/blog?page=${Math.min(currentPage + 1, pages)}`}
          className="cs-pagination_item cs-center"
          onClick={(event) => {
            event.preventDefault()
            onPageChange(Math.min(currentPage + 1, pages))
          }}
        >
          <Icon icon="akar-icons:chevron-right" />               
        </Link>
      </li>
    </ul>
  )
}
