'use client'

import React, { useEffect, useState } from "react";
import { AiFillFileText, AiFillAudio, AiFillBulb } from "react-icons/ai"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import LoginModal from "../modals/loginmodal/page";
import { openLoginModal } from "@/lib/modalSlice/page";
import { useDispatch } from "react-redux";
export default function HomePage() {

    const [greenText, setGreenText] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        const delayedFunction = () => {
          setGreenText(greenText => (greenText + 1) % 6)
        };
    
        const timeoutId = setTimeout(delayedFunction, 4000);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [greenText]);

return ( 
    
  <div className="body">

    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <Image className="nav__img" src={"/assets/logo.png"} width={495} height={114} alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login" onClick={() => dispatch(openLoginModal())}>Login</li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
    
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <div className="landing__content">
              <div className="landing__content__title">
                Gain more knowledge <br className="remove--tablet" />
                in less time
              </div>
              <div className="landing__content__subtitle">
                Great summaries for busy people,
                <br className="remove--tablet" />
                individuals who barely have time to read,
                <br className="remove--tablet" />
                and even people who don’t like to read.
              </div>
              <LoginModal/>
            </div>
            <figure className="landing__image--mask">
              <Image src={"/assets/landing.png"} width={400} height={379} alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section id="features">
      <div className="container">
        <div className="row">
          <div className="section__title">Understand books in few minutes</div>
          <div className="features__wrapper">
            <div className="features">
              <div className="features__icon">
                <AiFillFileText />
              </div>
              <div className="features__title">Read or listen</div>
              <div className="features__sub--title">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="features">
              <div className="features__icon">
                <AiFillBulb />
              </div>
              <div className="features__title">Find your next read</div>
              <div className="features__sub--title">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div className="features">
              <div className="features__icon">
                <AiFillAudio />
              </div>
              <div className="features__title">Briefcasts</div>
              <div className="features__sub--title">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          <div className="statistics__wrapper">
            <div className="statistics__content--header">
              <div className={`statistics__heading ${greenText === 0 && `statistics__heading--active`}`}>Enhance your knowledge</div>
              <div className={`statistics__heading ${greenText === 1 && `statistics__heading--active`}`}>Achieve greater success</div>
              <div className={`statistics__heading ${greenText === 2 && `statistics__heading--active`}`}>Improve your health</div>
              <div className={`statistics__heading ${greenText === 3 && `statistics__heading--active`}`}>
                Develop better parenting skills
              </div>
              <div className={`statistics__heading ${greenText === 4 && `statistics__heading--active`}`}>Increase happiness</div>
              <div className={`statistics__heading ${greenText === 5 && `statistics__heading--active`}`}>
                Be the best version of yourself!
              </div>
            </div>
            <div className="statistics__content--details">
              <div className="statistics__data">
                <div className="statistics__data--number">93%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">96%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">90%</div>
                <div className="statistics__data--title">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
          <div className="statistics__wrapper">
            <div
              className="statistics__content--details statistics__content--details-second"
            >
              <div className="statistics__data">
                <div className="statistics__data--number">91%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>report feeling more productive</b> after incorporating the service into their daily routine.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">94%</div>
                <div className="statistics__data--title">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">88%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>
            <div
              className="statistics__content--header statistics__content--header-second"
            >
              <div className={`statistics__heading ${greenText === 0 && `statistics__heading--active`}`}>Expand your learning</div>
              <div className={`statistics__heading ${greenText === 1 && `statistics__heading--active`}`}>Accomplish your goals</div>
              <div className={`statistics__heading ${greenText === 2 && `statistics__heading--active`}`}>Strengthen your vitality</div>
              <div className={`statistics__heading ${greenText === 3 && `statistics__heading--active`}`}>Become a better caregiver</div>
              <div className={`statistics__heading ${greenText === 4 && `statistics__heading--active`}`}>Improve your mood</div>
              <div className={`statistics__heading ${greenText === 5 && `statistics__heading--active`}`}>Maximize your abilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="reviews">
      <div className="row">
        <div className="container">
          <div className="section__title">What our members say</div>
          <div className="reviews__wrapper">
            <div className="review">
              <div className="review__header">
                <div className="review__name">Hanna M.</div>
                <div className="review__stars">
                {Array(5).fill().map((_, index) => (
                    <BsStarFill key={index}/>
                ))}
                </div>
              </div>
              <div className="review__body">
                This app has been a <b>game-changer</b> for me! It's saved me so
                much time and effort in reading and comprehending books. Highly
                recommend it to all book lovers.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">David B.</div>
                <div className="review__stars">
                {Array(5).fill().map((_, index) => (
                    <BsStarFill key={index}/>
                ))}
                </div>
              </div>
              <div className="review__body">
                I love this app! It provides
                <b> concise and accurate summaries</b> of books in a way that is
                easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Nathan S.</div>
                <div className="review__stars">
                {Array(5).fill().map((_, index) => (
                    <BsStarFill key={index}/>
                ))}
                </div>
              </div>
              <div className="review__body">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.
                <b>The summaries are well-written and informative.</b>
                Definitely worth downloading.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Ryan R.</div>
                <div className="review__stars">
                {Array(5).fill().map((_, index) => (
                    <BsStarFill key={index}/>
                ))}
                </div>
              </div>
              <div className="review__body">
                If you're a busy person who
                <b> loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide a great overview of the book's content.
              </div>
            </div>
          </div>
          <div className="reviews__btn--wrapper">
            <button className="btn home__cta--btn" onClick={() => dispatch(openLoginModal())}>Login</button>
          </div>
        </div>
      </div>
    </section>
    <section id="numbers">
      <div className="container">
        <div className="row">
          <div className="section__title">Start growing with Summarist now</div>
          <div className="numbers__wrapper">
            <div className="numbers">
              <div className="numbers__icon">
                <BiCrown />
              </div>
              <div className="numbers__title">3 Million</div>
              <div className="numbers__sub--title">Downloads on all platforms</div>
            </div>
            <div className="numbers">
              <div className="numbers__icon numbers__star--icon">
                {Array(4).fill().map((_, index) => (
                    <BsStarFill key={index}/>
                ))}
                <BsStarHalf />
              </div>
              <div className="numbers__title">4.5 Stars</div>
              <div className="numbers__sub--title">
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div className="numbers">
              <div className="numbers__icon">
                <RiLeafLine />
              </div>
              <div className="numbers__title">97%</div>
              <div className="numbers__sub--title">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="footer__top--wrapper">
            <div className="footer__block">
              <div className="footer__link--title">Actions</div>
              <div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Summarist Magazine</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Cancel Subscription</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Help</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Contact us</Link>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Useful Links</div>
              <div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Pricing</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Summarist Business</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Gift Cards</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Authors & Publishers</Link>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Company</div>
              <div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">About</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Careers</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Partners</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Code of Conduct</Link>
                </div>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__link--title">Other</div>
              <div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Sitemap</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Legal Notice</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Terms of Service</Link>
                </div>
                <div className="footer__link--wrapper">
                  <Link href="" className="footer__link">Privacy Policies</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright--wrapper">
            <div className="footer__copyright">
              Copyright &copy; 2024 Summarist.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


);
};