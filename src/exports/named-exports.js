import {rhythm} from '../utils/typography'
import styled from 'styled-components'

//Components

// Bio.js exports
export const BioDiv = styled.div`
    display: flex;
    margin-bottom: rhythm(2.5);
    color: rgba(88, 86, 86, 1);
    & strong {
        color: rgb(47, 0, 0);
    }
`

// Contacticons.js
export const ContactIconsStyle = styled.ul`
    display: flex;
    width: 100%;
    max-width: 250px;
    margin: 40px auto;
    cursor: pointer;
`

// Contribute.js
export const ContributeStyle = styled.a`
    font-weight: 400;
`

// Featured Posts/FeaturedPosts.js
export const PostsUl = styled.ul`
    width: 97.5%;
    margin: 0 auto 0.75rem;
    list-style-type: none;
    & > li {
        display: flex;
        flex-direction: column;
        align-items: space-evenly;
        margin-bottom: 1.5rem;
        padding: 0 10px 5px;
        border: 1px solid gainsboro;
        box-shadow: 0 -1px 4px #ede7e7;
        cursor: pointer;
    }
    & li:hover {
        background: rgba(255, 153, 0, 0.5);
    }
    & h3 {
        font-weight: normal;
    }
    br {
        line-height: 2.5;
    }
    @media (min-width: 990px) {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 0.5rem;
        grid-auto-rows: 1fr;

        & > li {
            margin-bottom: 0;
        }
    }
`

// Featured Projects/FeaturedProjects.js
export const AppsUl = styled.ul`
    width: 97.5%;
    margin: 0 auto 0.75rem;
    list-style-type: none;
    & > li {
        display: flex;
        flex-direction: column;
        align-items: space-evenly;
        margin-bottom: 1.5rem;
        padding: 0 10px 5px;
        border: 1px solid gainsboro;
        box-shadow: 0 -1px 4px #ede7e7;
        cursor: pointer;
    }
    & h3 {
        font-weight: normal;
    }
    & li:hover {
        background: rgba(255, 153, 0, 0.5);
    }
    & br {
        line-height: 2.5;
    }
    @media (min-width: 990px) {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 0.5rem;
        grid-auto-rows: 1fr;

        & > li {
            margin-bottom: 0;
        }
    }
`

export const UsesSpan = styled.span`
    font-weight: bold;
`

// Footer.js
export const FooterStyle = styled.footer`
    background: rgb(98, 22, 69);
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & a {
        margin-bottom: 3rem;
    }
`

export const FooterColumnsDiv = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem auto;
    & ul {
        list-style-type: none;
    }
    @media (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        column-gap: 2.5%;
        margin-left: auto;
        margin-right: auto;
    }
`

export const ColumnsUl = styled.div`
    & :nth-of-type(1) {
        & li {
            color: rgb(255, 227, 159);
            font-size: 1.1rem;
        }
        & li:first-of-type {
            color: whitesmoke;
            font-style: italic;
        }
        & li:last-of-type {
            color: whitesmoke;
            font-style: italic;
        }
    }
    & :nth-of-type(2) {
        & li {
            font-size: 1.1rem;
            color: whitesmoke;
        }
        & li:first-of-type {
            color: whitesmoke;
            font-style: italic;
        }
        & li:nth-of-type(3) {
            font-style: italic;
        }
    }
    & :nth-of-type(3) {
        list-style-type: none;
        display: flex;
        justify-content: center;
        flex-direction: columns;
        margin-top: 2.5rem;
    }
    & li {
        margin-right: 1rem;
        font-size: 1.3rem;
        & a {
            color: rgb(255, 165, 79);
        }
        & a:hover {
            color: white;
            transition: 1s ease-out;
        }
    }
    @media (min-width: 990px) {
        margin-top: 0;
    }
`

export const AnchorDiv = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    & li {
        list-style-type: none;
        margin-bottom: 3rem;
        text-align: center;
        & a {
            color: rgb(255, 227, 159);
            letter-spacing: 0.07em;
        }
    }
    & a:nth-of-type(1) {
        margin-right: 1rem;
    }
    & a:nth-of-type(2) {
        margin-right: 1rem;
    }
    @media (min-width: 360px) {
        font-size: 1rem;
    }
    @media (min-width: 375px) {
        font-size: 1.1rem;
    }
    @media (min-width: 411px) {
        font-size: 1.2rem;
    }
`

export const SiteCredsDiv = styled.div`
    color: rgb(255, 227, 159);
    margin-top: 1rem;
    text-align: center;
    font-size: 0.9rem;
    width: 90%;
    letter-spacing: 0.07em;
`

export const styles = {
    container: (notRightMargin, marginBottomLess) => ({
        background: 'transparent',
        outline: 'none',
        marginBottom: marginBottomLess ? '3rem' : '3.75rem',
        marginRight: notRightMargin ? '-0.25rem' : '0.5rem',
    }),
}

// FSJSLiveSites.js, WFLiveSites.js
export const SiteWrapperUl = styled.ul`
    width: 100%;
    margin: 0 auto;
    & li {
        display: flex;
        flex-direction: column;
        align-items: space-evenly;
        margin-bottom: 1.5rem;
        padding: 0 10px 5px;
        border: 1px solid gainsboro;
        box-shadow: 0 -1px 4px #ede7e7;
        cursor: pointer;
    }
    & li:hover {
        background: rgba(255, 153, 0, 0.5);
    }
    @media (min-width: 800px) {
        --auto-grid-min-size: 16rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
        grid-column-gap: 0.5rem;
        grid-auto-rows: 1fr;
        width: 100%;
        max-width: 1026px;
        & li {
            margin-bottom: 0;
        }
    }
`

export const SiteLi = styled.li`
    width: 100%;
    display: block;
    margin: 0.5rem auto 1.5rem;
    &:last-of-type {
        margin-bottom: 0;
    }
`

export const SpanStyle = styled.span`
    font-weight: bold;
`

// Header.js
export const NavContainerDiv = styled.div`
    margin-top: -2rem;
`
export const HeaderStyle = styled.header`
    padding: 1.5rem 0 0 1.5rem;
    background: rgb(207, 203, 177);
`
export const ResponsiveHeading1 = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    margin-top: 2.25rem;
`

export const TopHeading1 = styled.h1`
    @media (min-width: 990px) {
        font-size: 2rem;
        font-weight: normal;
        margin-top: 2.25rem;
        margin-left: 1rem;
    }
`

// Layout.js
export const LayoutContainer = styled.div`
    background: rgb(255, 227, 159);
`

// PrevNext.js
export const PrevNextUl = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    width: 100%;
    margin-right: 1rem;
    margin-left: 0;
    margin-top: 1.5rem;
`

// ServicesCarousel.js
export const SlideDiv = styled.div`
    width: 97.5%;
    margin: 0 auto;
    & h2,
    & p {
        cursor: pointer;
    }
    @media (min-width: 990px) {
        width: 90%;
    }
`

// Share.js
export const SocialUl = styled.ul`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    width: 100%;
    & li {
        list-style-type: none;
        & a {
            color: rgb(98, 22, 69);
            padding: 17px 8px 8px 8px;
            & :nth-of-type(2) {
                padding-top: 20px;
                padding-bottom: 5px;
            }
        }
    }
`

// TipCarousel.js
export const CarouselWrapper = styled.div`
    margin: 0 auto 6rem;
`

export const TipDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background: rgb(207, 203, 177);
    padding: 1.5rem;
    border: 6px solid rgba(207, 203, 177, 0.07);
    & h2,
    & p {
        color: rgb(25, 13, 8);
    }
    & p {
        margin-top: 0.5rem;
        margin-bottom: 1.75rem;
    }
`

// Pages
// categories/index.js

export const TagsCategoriesDiv = styled.div`
    width: 90%;
    max-width: 960px;
    margin: 3rem auto 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    & a {
        margin-bottom: 1.5rem;
        list-style-type: none;
        background: #fdf6e3;
        color: rgb(131, 70, 68);
        width: 100%;
        padding: 1rem;
        text-decoration: none;
        font-size: 1.1rem;
        letter-spacing: 0.07em;
        border-bottom: 1px solid rgb(131, 70, 68);
        & :hover {
            border-bottom: 0;
        }
    }
`

// command-line/index.js
export const CLIATagDiv = styled.div`
    width: 100%;
    margin: 0 auto 3rem;
    max-width: 1026px;
    color: rgb(88, 86, 86);
`

// contact/index.js
export const ContactH2Style = styled.h2`
    text-align: center;
    color: rgb(148, 75, 43);
    font-size: 1.8rem;
    cursor: pointer;
`

export const NumAddSpan = styled.span`
    font-size: 2.2rem;
`

// dev-workflows/index.js, fsjs/index.js
export const WrapperDiv = styled.div`
    margin: 3rem auto;
    width: 90%;
    max-width: 1026px;
`

export const BackDiv = styled.div`
    margin-bottom: 3rem;
    & a {
        font-size: 1.3rem;
    }
`

export const H1Style = styled.h1`
    font-weight: normal;
    text-align: center;
    color: rgb(148, 75, 43);
`

export const ServiceDiv = styled.div`
    & img {
        width: 100%;
    }
`

export const H2Style = styled.h2`
    font-weight: normal;
    text-align: center;
    color: rgb(148, 75, 43);
`

export const ApproachDiv = styled.div`
    width: 100%;
    margin: 0 auto 1rem;
    max-width: 1026px;
    color: rgb(88, 86, 86);
`

export const ApproachIncludesSpan = styled.span`
    font-weight: bold;
    color: #2f0000;
`

export const AllTagsDiv = styled.div`
    color: rgb(148, 75, 43);
    margin-bottom: 1rem;
`

export const LiveSitesDiv = styled.div`
    margin: 1.5rem auto 3rem;
`

export const LiveSitesSpan = styled.div`
    font-weight: bold;
`

// git-for-devs/index.js
export const GFDTagsDiv = styled.div`
    color: rgb(148, 75, 43);
    margin-bottom: 3rem;
`

// git-for-non-devs/index.js
export const GitForNonDevsDiv = styled.div`
    & img {
        width: 100%;
    }
    margin-bottom: 3rem;
`
export const GFNDTagsDiv = styled.div`
    color: rgb(148, 75, 43);
    margin-bottom: 1rem;
`

// portfolio/index.js
export const ColumnsDiv = styled.div`
    width: 97.5%;
    margin: 3rem auto;
    @media (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const ProjectUl = styled.div`
    width: 97.5%;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    padding: 5px 10px 5px;
    border: 1px solid gainsboro;
    box-shadow: 0 -1px 4px #ede7e7;
    cursor: pointer;
    list-style-type: none;
    &:hover {
        background-color: rgba(255, 153, 0, 0.5);
    }
    & li:last-child {
        margin-top: 0.5rem;
    }
    @media (min-width: 990px) {
        margin: 0.5rem auto;
    }
`

export const ProjectTitleLi = styled.li`
    font-size: 1.2rem;
`
export const ParaStyle = styled.p`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-start;
    color: rgb(88, 86, 86);
`

export const PortfolioSpanStyle = styled.span`
    color: rgb(148, 75, 43);
`

export const MoreP = styled.p`
    font-size: 1.1rem;
`
// views styling
export const PortfolioViewDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    width: 90%;
    color: rgb(88, 86, 86);
    & a {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto 1rem;
        cursor: pointer;
    }
`

export const PortfolioBackDiv = styled.div`
    margin-bottom: 3rem;
    & a {
        font-size: 1.3rem;
    }
`

export const PortfolioViewH1Style = styled.h1`
    text-align: center;
    font-weight: 400;
    color: rgb(148, 75, 43);
`

export const ShortDescDiv = styled.div`
    color: rgb(88, 86, 86);
`

export const AnchorsUl = styled.ul`
    display: grid;
    margin-top: 1.5rem;
    list-style-type: square;
`

// services/index.js
export const ServicesWrapperDiv = styled.div`
    width: 90%;
    /* max-width: 1026px; */
    margin: 3rem auto;
    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: fit-content(40%);
        grid-gap: 0.75rem;
    }
`

export const ServicesUl = styled.ul`
    list-style-type: none;
    width: 100%;
    max-width: 1026px;
    margin: 0.75rem auto;
    border: 1px solid gainsboro;
    box-shadow: 0 -1px 4px #ede7e7;
    padding: 1.5rem 1rem 0;
    &:hover {
        background-color: rgba(255, 153, 0, 0.5);
    }
    & a {
        @media (min-width: 400px) {
            font-size: 1.2rem;
        }
    }
    @media (min-width: 800px) {
        display: grid;
         margin: 0 auto;
        
    }
`

export const MoreLi = styled.li`
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`

// sitemap/index.js
export const SitemapDiv = styled.div`
    margin: 3rem auto;
    width: 90%;
    max-width: 1026px;
    background: rgba(235, 181, 135, 0.7);
    padding: 1.5rem;
    letter-spacing: 0.07em;
    & h1 {
        font-weight: 600;
    }
    & h1,
    h2,
    h4 {
        color: rgb(133, 68, 66);
    }
    & h4 {
        text-transform: capitalize;
        font-size: 1.2rem;
    }
    & a:hover h4 {
        text-decoration: underline;
    }
`

export const SitemapUl = styled.ul`
    list-style-type: square;
    list-style-position: outside;
    & li {
        color: rgb(133, 68, 66);
    }
`

export const MetaDiv = styled.div`
    color: #a7138a;
`

export const SitemapSpan = styled.span`
    color: rgb(88, 86, 86);
`

// home page/index.js
export const IndexContainer = styled.div`
    background: rgb(255, 227, 159);
    width: 100%;
`

export const IndexH1Style = styled.h1`
    text-align: center;
    font-weight: 400;
    font-size: 2.5rem;
    &:first-of-type {
        margin: 3rem auto;
    }
    &:nth-of-type(2) {
        margin: 3rem auto;
    }
    &:nth-of-type(3) {
        margin: 0 auto;
        width: 97.5%;
        @media (min-width: 990px) {
            width: 90%;
        }
    }
    & a {
        color: rgb(148, 75, 43);
    }
`

export const IndexH2Style = styled.h2`
    color: rgb(148, 75, 43);
    text-align: center;
    font-weight: 400;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 97.5%;
    &:first-of-type {
        margin: 4.5rem auto;
        width: 97.5%;
    }
    &:nth-of-type(2) {
        margin: 4.5rem auto;
        width: 97.5%;
    }
    &:nth-of-type(3) {
        margin: 3rem auto;
        width: 97.5%;
        @media (min-width: 990px) {
            width: 97.5%;
        }
    }
    &:nth-of-type(5) {
        margin: 0 auto;
    }
    & a {
        color: rgb(148, 75, 43);
    }
`

export const IndexBoxH3Style = styled.h3`
    text-align: center;
    font-weight: 300;
    outline: 6px double #422910;
    margin: 0 auto 3rem;
    padding: 1.5rem 1.25rem 1.25rem;
    background: #ee7600;
    width: 95%;
    @media (min-width: 990px) {
        width: 90%;
    }
`

export const AppsDiv = styled.div`
    margin: 3rem auto 2rem;
`

export const PostsDiv = styled.div`
    margin: 3rem auto;
`
export const PodDiv = styled.div`
    margin: 3rem auto;
    & h1 {
        color: rgb(148, 75, 43);
    }
    & iframe {
        margin: 3rem auto;
        display: flex;
        width: 100%;
        max-width: 400px;
        height: 102px;
    }
`

export const CarouselDiv = styled.div`
    margin: 0 3rem;
`

export const IndexFooterStyle = styled.footer`
    text-align: center;
    letter-spacing: 0.07em;
    width: 100%;
    margin: 0 auto;
    padding-top: 3rem;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #621645;
    & li {
        margin-bottom: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: whitesmoke;
    }
    & a {
        margin-bottom: 1rem;
        margin-top: 1rem;
        color: rgb(255, 165, 79);
    }
`

// templates
// blog-list-template exports
export const PostDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 3rem auto;
`

export const PostListDiv = styled.div`
    position: relative;
    border: 1px solid gainsboro;
    padding: 1rem 1rem 0;
    box-shadow: 0 -1px 4px #ede7e7;
    margin: 1rem 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: 0.07em;
    &:hover {
        background: rgba(255, 153, 0, 0.5);
    }
`

export const PostListTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: normal;
    margin-bottom: 0.25rem;
    line-height: 1.3;
    color: rgb(39, 74, 169);
`

export const ExcerptWrapUl = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 0;
    color: rgb(161, 141, 104);
    & li {
        list-style-type: none;
        color: rgba(88, 86, 86, 1);
    }
    & img {
        padding-right: ${rhythm(1 / 2)};
        padding-top: ${rhythm(1 / 2)};
    }
    @media (min-width: 600px) {
        flex-direction: row;
        align-items: flex-start;
        & li:nth-of-type(2) {
            padding-top: ${rhythm(1 / 2)};
        }
    }
`

export const PostListMetaDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    color: rgba(47, 0, 0);
`

export const BLPrevNextUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1026px;
    margin: 1.5rem auto;
    padding: 0 0.5rem 0;
`

// blog-post-template exports
export const PostWrapperDiv = styled.div`
    margin: 0 auto;
    color: rgb(47, 0, 0);
    text-align: left;
`

export const PostMetaDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 3rem auto;
`

export const MetaH1Title = styled.h1`
    text-align: center;
    font-weight: 600;
    margin-top: -1.5rem;
`

export const MetaPDate = styled.div`
    text-align: center;
    margin-bottom: 1rem;
`

export const DangerousHTMLDiv = styled.div`
    & h1,
    &h2,
    &h3,
    &h4,
    & h5,
    & h6 {
        color: rgb(47, 0, 0);
        max-width: 1026px;
        margin: 0 auto;
    }
    & p {
        color: rgb(47, 0, 0);
    }
    & blockquote p {
        color: rebeccapurple;
    }
    & ul {
        list-style-type: none;
    }
    & ul li:before {
        color: rgb(47, 0, 0);
        content: '▪ ';
        left: -32px;
        position: absolute;
        text-align: right;
        width: 1em;
    }
    & li {
        color: rgba(88, 86, 86, 0.7);
    }
    & ul li {
        counter-increment: list;
        list-style-type: none;
        position: relative;
    }
    & ol li {
        counter-increment: list;
        list-style-type: none;
        position: relative;
    }
    & ol li:before {
        color: rgb(47, 0, 0);
        content: counter(list) '.';
        left: -32px;
        position: absolute;
        text-align: right;
        width: 26px;
    }
`

export const TagCatWrapperDiv = styled.div`
    margin: 0 auto;
    max-width: 1026px;
    display: flex;
    flex-direction: column;
`

export const TagDiv = styled.div`
    margin-bottom: 0.25rem;
`

export const TagCatInSpan = styled.span`
    letter-spacing: 0.07em;
    font-weight: bold;
`

export const CatDiv = styled.div`
    margin-bottom: 2rem;
`

export const DiscussTwitter = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 1.5rem auto 0;
`

// category-template exports
export const TagCategoryWrapper = styled.div`
    width: 90%;
    margin: 3rem auto;
`

export const TagsCategoriesH1 = styled.h1`
    margin: 0 auto;
    letter-spacing: 0.07em;
`

export const TagCategoryDiv = styled.div`
    margin: 0.75rem auto 4rem;
    width: 100%;
    & h1 {
        color: rgb(47, 0, 0);
    }
    & li {
        list-style-type: square;
        list-style-position: outside;
        margin-left: 1rem;
        color: rgb(47, 0, 0);
    }
    & span {
        color: rgb(88, 86, 86);
    }
`

export const IndexAnchorDiv = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    & li {
        list-style-type: none;
        margin-bottom: 3rem;
        text-align: center;
        & a {
            color: rgb(255, 227, 159);
            letter-spacing: 0.07em;
        }
    }
    & a:nth-of-type(1) {
        margin-right: 1rem;
    }
    & a:nth-of-type(2) {
        margin-right: 1rem;
    }
    @media (min-width: 360px) {
        font-size: 1rem;
    }
    @media (min-width: 375px) {
        font-size: 1.1rem;
    }
    @media (min-width: 411px) {
        font-size: 1.2rem;
    }
`
