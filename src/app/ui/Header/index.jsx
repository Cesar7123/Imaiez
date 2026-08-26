'use client';
import { useEffect, useState } from 'react';
import Div from '../Div';
import Link from 'next/link';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''
          } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    {/* Home nav section hidden for later activation
                    <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/"
                              onClick={() => setMobileToggle(false)}
                            >
                              Main Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/photography-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Photography Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/creative-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/digital-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Digital Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Marketing Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/freelancer-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Freelancer Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/architecture-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Architecture Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/creative-solution"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Solution
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/personal-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Personal Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/showcase-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Showcase Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-study-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Showcase
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/video-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Video Showcase
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    */}
                    <li>
                      <Link
                        href="/"
                        onClick={() => setMobileToggle(false)}
                      >
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileToggle(false)}
                      >
                        Sobré mi
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio" onClick={() => setMobileToggle(false)}>
                        Portafolio
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" onClick={() => setMobileToggle(false)}>
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={() => setMobileToggle(false)}>
                        Contacto
                      </Link>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Pages
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/team"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/team/team-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-study/case-study-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>*/}
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

    </>
  );
}
