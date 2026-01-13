import React from 'react'
import BreadcrumbHeader from '@/components/BreadcrumbHeader/BreadcrumbHeader';
import Link from 'next/link';
import { Heading } from '@/components/Heading/Heading';
export default function BlogListPage() {
    return (
        <>
            <BreadcrumbHeader
                desktopImage="/assets/img/hero/1.png"
                mobileImage="/assets/img/hero/1.png"
                shapeImage="/assets/img/hero/1/shape.svg"
                title="Blog"
                subtitle=""
            />
            <section className="layout-pt-md layout-pb-xl">
                <div className="container">
                    <div className="blog-list-container">
                        <div className="row y-gap-30">
                            <div className="col-lg-4 col-md-6">
                                <Link href="/blog/slug" className="blogCard -type-1">
                                    <div className="blogCard__image ratio ratio-41:30">
                                        <img
                                            src="/assets/modern-img/Ram-Mandir-Ayodhya.jpg"
                                            alt="image"
                                            className="img-ratio rounded-12"
                                        />
                                        <div className="blogCard__badge">Trips</div>
                                    </div>
                                    <div className="blogCard__content mt-15">
                                        {/* <div className="blogCard__info text-14">
                                            <div className="lh-13">April 06 2023</div>
                                            <div className="blogCard__line" />
                                            <div className="lh-13">By Ali Tufan</div>
                                        </div> */}
                                        <Heading
                                            level={3}
                                            text="Kenya vs Tanzania Safari: The Better African Safari
                                            Experience"
                                            className="blogCard__title text-18 fw-500 mt-10"
                                        />
                                        <p>
                                            One of the most significant religious sites in Varanasi, India, ...
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link href="/blog/slug" className="blogCard -type-1">
                                    <div className="blogCard__image ratio ratio-41:30">
                                        <img
                                            src="/assets/modern-img/Ram-Mandir-Ayodhya.jpg"
                                            alt="image"
                                            className="img-ratio rounded-12"
                                        />
                                        <div className="blogCard__badge">Trips</div>
                                    </div>
                                    <div className="blogCard__content mt-15">
                                        <Heading
                                            level={3}
                                            text="Kenya vs Tanzania Safari: The Better African Safari
                                            Experience"
                                            className="blogCard__title text-18 fw-500 mt-10"
                                        />
                                        <p>
                                            One of the most significant religious sites in Varanasi, India, ...
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link href="/blog/slug" className="blogCard -type-1">
                                    <div className="blogCard__image ratio ratio-41:30">
                                        <img
                                            src="/assets/modern-img/Ram-Mandir-Ayodhya.jpg"
                                            alt="image"
                                            className="img-ratio rounded-12"
                                        />
                                        <div className="blogCard__badge">Trips</div>
                                    </div>
                                    <div className="blogCard__content mt-15">
                                        <Heading
                                            level={3}
                                            text="Kenya vs Tanzania Safari: The Better African Safari
                                            Experience"
                                            className="blogCard__title text-18 fw-500 mt-10"
                                        />
                                        <p>
                                            One of the most significant religious sites in Varanasi, India, ...
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link href="/blog/slug" className="blogCard -type-1">
                                    <div className="blogCard__image ratio ratio-41:30">
                                        <img
                                            src="/assets/modern-img/Ram-Mandir-Ayodhya.jpg"
                                            alt="image"
                                            className="img-ratio rounded-12"
                                        />
                                        <div className="blogCard__badge">Trips</div>
                                    </div>
                                    <div className="blogCard__content mt-15">
                                        <Heading
                                            level={3}
                                            text="Kenya vs Tanzania Safari: The Better African Safari
                                            Experience"
                                            className="blogCard__title text-18 fw-500 mt-10"
                                        />
                                        <p>
                                            One of the most significant religious sites in Varanasi, India, ...
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link href="/blog/slug" className="blogCard -type-1">
                                    <div className="blogCard__image ratio ratio-41:30">
                                        <img
                                            src="/assets/modern-img/Ram-Mandir-Ayodhya.jpg"
                                            alt="image"
                                            className="img-ratio rounded-12"
                                        />
                                        <div className="blogCard__badge">Trips</div>
                                    </div>
                                    <div className="blogCard__content mt-15">
                                        <Heading
                                            level={3}
                                            text="Kenya vs Tanzania Safari: The Better African Safari
                                            Experience"
                                            className="blogCard__title text-18 fw-500 mt-10"
                                        />
                                        <p>
                                            One of the most significant religious sites in Varanasi, India, ...
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link href="/blog/slug" className="blogCard -type-1">
                                    <div className="blogCard__image ratio ratio-41:30">
                                        <img
                                            src="/assets/modern-img/chitrakoot.jpg"
                                            alt="image"
                                            className="img-ratio rounded-12"
                                        />
                                        <div className="blogCard__badge">Trips</div>
                                    </div>
                                    <div className="blogCard__content mt-15">
                                        <Heading
                                            level={3}
                                            text="Kenya vs Tanzania Safari: The Better African Safari
                                            Experience"
                                            className="blogCard__title text-18 fw-500 mt-10"
                                        />
                                        <p>
                                            One of the most significant religious sites in Varanasi, India, ...
                                        </p>
                                    </div>
                                </Link>
                            </div>                            
                        </div>
                    </div>
                    <div className="d-flex justify-center flex-column mt-60">
                        <div className="pagination justify-center">
                            <button className="pagination__button button -accent-1 mr-15 -prev">
                                <i className="icon-arrow-left text-15" />
                            </button>
                            <div className="pagination__count">
                                <a href="#">1</a>
                                <a href="#" className="is-active">
                                    2
                                </a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <div>...</div>
                                <a href="#">20</a>
                            </div>
                            <button className="pagination__button button -accent-1 ml-15 -next">
                                <i className="icon-arrow-right text-15" />
                            </button>
                        </div>                        
                    </div>
                </div>
            </section>


        </>
    )
}
