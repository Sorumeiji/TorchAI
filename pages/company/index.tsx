// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Grid from "../../styles/modules/grid.module.scss";
import Landing from "../../styles/modules/landing.module.scss";
import Image from "next/image";
import Style from "./styles.module.scss";
import News from "../../components/News";
import Footer from "../../components/Footer";
import { gsap } from "gsap";
import { InView } from "react-intersection-observer";
import LayoutContext from "../../components/layout/LayoutContext";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  getNewsEntries,
  getCustomPageAndMicrocopy,
} from "../../contentful/client";
import {
  TypeNews,
  TypeMicrocopy,
  TypeCustomPage,
} from "../../generated/contentful";
import { createMicrocopyComponent } from "../../components/Microcopy/Microcopy";
import { getHeadPageTitle } from "../../utils/meta";
import { pageSettings as careersPageSettings } from "../careers";
import { PageSettings } from "../../types/next";
import clsx from "clsx";
import ContentOverImage from "../../components/ContentOverImage/ContentOverImage";
import BrainWeaver from "../../img/dotArt/BrainWeaver.png";
import AdamLurie from "../../img/dotArt/AdamLurie.png";
import AmyBradshaw from "../../img/dotArt/AmyBradshaw.png";
import DavidKern from "../../img/dotArt/DavidKern.png";
import HondoGeruts from "../../img/dotArt/HondoGeruts.png";
import JanetHanofee from "../../img/dotArt/JanetHanofee.png";
import JasonDelker from "../../img/dotArt/JasonDelker.png";
import JenniferUtting from "../../img/dotArt/JenniferUtting.png";
import JonKramer from "../../img/dotArt/JonKramer.png";
import MikeDanda from "../../img/dotArt/MikeDanda.png";
import LaurenceTosi from "../../img/dotArt/LaurenceTosi.png";
import ChristanSchnedler from "../../img/dotArt/ChristanSchnedler.png";
import WilliamBeyer from "../../img/dotArt/WilliamBeyer.png";
import MarkPerrin from "../../img/dotArt/MarkPerrin.png";
import KevinMarcus from "../../img/dotArt/KevinMarcus.png";
import forbes from "../../img/forbes.png";
import logoBookshelf from "./assets/logo-bookshelf.png";
import galleryBackground from "./assets/gallerypic.png";

export const pageSettings: PageSettings = {
  path: "/company",
  linkContent: <>Company</>,
};

export const getStaticProps: GetStaticProps<{
  news: TypeNews[];
  microcopy: TypeMicrocopy[];
  customPage: TypeCustomPage;
}> = async () => {
  const news = await getNewsEntries({
    limit: 5,
  });

  const microcopy = await getCustomPageAndMicrocopy("7gw479ghJ6W9LGpvT1Txwl");

  return {
    props: {
      news: news.items,
      microcopy: microcopy.items,
      customPage: (microcopy.includes.Entry as TypeCustomPage[])[0],
    },
  };
};

const Index = ({
  news,
  microcopy,
  customPage,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  const titleRef = useRef<HTMLHeadingElement>();
  const subtitleRef = useRef<HTMLParagraphElement>();

  useEffect(() => {
    let delay = 1;
    const titleDuration = 1;
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: "100%", ease: "power1" },
      { opacity: 1, y: 0, duration: titleDuration, delay }
    );

    delay += titleDuration;
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: "-100%", ease: "power1" },
      { opacity: 1, y: 0, duration: titleDuration / 2, delay }
    );
  }, []);

  const Microcopy = createMicrocopyComponent(microcopy);

  return (
    <>
      <Head>
        <title>{getHeadPageTitle(customPage.fields.pageHeadTitle)}</title>
      </Head>
      <ReactFullpage
        licenseKey={"A33F98B7-1BF24B82-AB8933EF-A1EC533E"}
        navigation
        verticalCentered={false}
        responsiveWidth={1500}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className={`${Style["hero"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <InView
                    as="div"
                    onChange={(inView) =>
                      setNavColor(inView ? "white" : "black")
                    }
                  >
                    <div className={`${Grid["row"]}`}>
                      <div
                        className={`${Grid["col-xs-12"]} ${Style["content-center"]}`}
                      >
                        <h2 ref={titleRef}>
                          We're building Kansas City's next great company.
                        </h2>
                        <p ref={subtitleRef}>
                          The world's hardest problems. The world's greatest
                          minds. An unmatched environment for innovation.
                        </p>
                        <div className={`${Style["forbes"]}`}>
                          <Image
                            className={`${Style["forbes-img"]}`}
                            src={forbes}
                            alt={
                              "Recognized by Forbes as one of America's best startups employers for 2022"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </InView>
                </div>
              </div>
              <ContentOverImage
                data-anchor="culture"
                className={clsx(Style.culture, "section")}
                contentProps={{
                  className: clsx(
                    Style.culture__content,
                    Grid.container,
                    Grid.margin_center
                  ),
                }}
                imageProps={{
                  src: logoBookshelf,
                  alt: "Logo made with photo!",
                  layout: "fill",
                  objectFit: "contain",
                  objectPosition: "right bottom",
                }}
              >
                <div className={Grid.row}>
                  <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}>
                    <h3>Total badasses.</h3>
                  </div>
                </div>
                <div className={`${Grid["row"]}`}>
                  <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-3"]}`}>
                    <Microcopy id="6FFVdGq7efnUi60dz2GPu5" />
                  </div>
                  <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-8"]}`}>
                    <Microcopy id="7aouSJyiqM3V85uLvinsKk" />
                  </div>
                </div>
                <div className={`${Grid["row"]}`}>
                  <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-3"]}`}>
                    <Microcopy id="47lC12t2O4Qo8URg3dDLi3" />
                  </div>
                  <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-8"]}`}>
                    <Microcopy id="6sRHM65inbtu3KLcfdp0Zd" />
                  </div>
                </div>
              </ContentOverImage>
              <div className={`${Style["gallery"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]}  ${Style["gallery__title"]}`}
                    >
                      <h3>Leadership.</h3>
                    </div>
                  </div>
                  <div
                    className={`${Grid["row"]} ${Style["gallery__container"]}`}
                  >
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["gallery__layout"]}`}
                    >
                      <div
                        className={`${Grid["row"]} ${Style["gallery__layout-featured"]} `}
                      >
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={BrainWeaver}
                              alt={"Drawing of Brian Weaver"}
                            />
                            <h5>Brian Weaver</h5>
                            <p>Chief Executive Officer</p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={AmyBradshaw}
                              alt={"Drawing of Amy Bradshaw"}
                            />
                            <h5>Amy Bradshaw</h5>
                            <p>Chief Financial Officer</p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={JanetHanofee}
                              alt={"Drawing of Janet Hanofee"}
                            />
                            <h5>Janet Hanofee</h5>
                            <p>Chief People Officer</p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={DavidKern}
                              alt={"Drawing of David Kervin"}
                            />
                            <h5>David Kervin</h5>
                            <p> Chief Solutions Officer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${Grid["row"]} ${Style["gallery__container"]}`}
                  >
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["gallery__layout"]}`}
                    >
                      <div
                        className={`${Grid["row"]} ${Style["gallery__layout-list"]}`}
                      >
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={AdamLurie}
                              alt={"Drawing of Adam Lurie"}
                            />
                            <h5>Adam Lurie</h5>
                            <p>Chief Strategy Officer</p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]}  ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={JasonDelker}
                              alt={"Drawing of Jason Delker"}
                            />
                            <h5>Jason Delker</h5>
                            <p>Chief of Product</p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={JonKramer}
                              alt={"Drawing of Jon Kramer"}
                            />
                            <h5>Jon Kramer</h5>
                            <p>Chief Technology Officer</p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={JenniferUtting}
                              alt={"Drawing of Jennifer Utting"}
                            />
                            <h5>Jennifer Utting</h5>
                            <p>General Counsel</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Style["gallery"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]}  ${Style["gallery__title"]}`}
                    >
                      <Microcopy id="HUpD5JJsDLLbQyXxF6awV" />
                    </div>
                  </div>
                  <div
                    className={`${Grid["row"]} ${Style["gallery__container"]}`}
                  >
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["gallery__layout"]}`}
                    >
                      <div
                        className={`${Grid["row"]} ${Style["gallery__layout-list"]}`}
                      >
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={BrainWeaver}
                              alt={"Drawing of Brian Weaver"}
                            />
                            <h5>Brian Weaver</h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]}  ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={LaurenceTosi}
                              alt={"Drawing of Laurence Tosi"}
                            />
                            <h5>Laurence Tosi</h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={ChristanSchnedler}
                              alt={"Drawing of Christian Schnedler"}
                            />
                            <h5>Christian Schnedler</h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={WilliamBeyer}
                              alt={"Drawing of William Beyer"}
                            />
                            <h5>William Beyer</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Style["gallery"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]}  ${Style["gallery__title"]}`}
                    >
                      <Microcopy id="2EXrxJS0vbtWLF9gWspLVj" />
                    </div>
                  </div>
                  <div
                    className={`${Grid["row"]} ${Style["gallery__container"]}`}
                  >
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["gallery__layout"]}`}
                    >
                      <div
                        className={`${Grid["row"]} ${Style["gallery__layout-list"]}`}
                      >
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={KevinMarcus}
                              alt={"Drawing of Kevin Marcus"}
                            />
                            <h5>Kevin Marcus</h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]}  ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={MarkPerrin}
                              alt={"Drawing of Mark W. Perrin"}
                            />
                            <h5>Mark W. Perrin</h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={HondoGeruts}
                              alt={'Drawing of James "Hondo" Geurts'}
                            />
                            <h5>James "Hondo" Geurts</h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={MikeDanda}
                              alt={"Drawing of LtGen Mike Dana"}
                            />
                            <h5>LtGen Mike Dana</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ContentOverImage
                className={clsx(Style.careers, "section")}
                contentProps={{
                  className: clsx(Grid.container, Grid.margin_center),
                }}
                imageProps={{
                  src: galleryBackground,
                  alt: "",
                  layout: "fill",
                  objectPosition: "left center",
                  objectFit: "contain",
                }}
              >
                <div className={clsx(Grid.row, Style.careers__content)}>
                  <div className={clsx(Grid["col-xs-12"], Grid["col-lg-6"])}>
                    <Microcopy id="ey7tN89DU4mTqE2bxZtaI" />
                    <div>
                      <Link href={careersPageSettings.path}>
                        <a role="button">Find your job</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </ContentOverImage>
              <div className={`${Landing["news"]} section`}>
                <News items={news} />
              </div>
              <Footer />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Index;
