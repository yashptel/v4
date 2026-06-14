import React, { useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledCaseStudiesSection = styled.section`
  max-width: 1000px;

  .cs-intro {
    max-width: 600px;
    margin-bottom: 40px;
    color: var(--light-slate);
  }

  .cs-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const StyledCard = styled.li`
  position: relative;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      transform: translateY(-7px);
    }
  }

  .cs-card-link {
    ${({ theme }) => theme.mixins.boxShadow};
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);

    &:hover,
    &:focus {
      outline: 0;
    }
  }

  .cs-company {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .cs-title {
    margin: 12px 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    line-height: 1.2;
  }

  .cs-desc {
    flex-grow: 1;
    margin: 0;
    color: var(--light-slate);
    font-size: var(--fz-md);
  }

  .cs-cta {
    margin-top: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const CaseStudies = () => {
  const data = useStaticQuery(graphql`
    query {
      studies: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/case-studies/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              slug
              company
            }
          }
        }
      }
    }
  `);

  const studies = data.studies.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealCards = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <StyledCaseStudiesSection id="case-studies">
      <h2 className="numbered-heading" ref={revealTitle}>
        Case Studies
      </h2>

      <p className="cs-intro">
        Deep dives into the hardest problems I’ve owned end to end — databases, infrastructure, and
        production safety. <Link to="/case-studies">View all &rarr;</Link>
      </p>

      <ul className="cs-grid">
        {studies.length > 0 &&
          studies.map(({ node }, i) => {
            const { title, description, slug, company } = node.frontmatter;
            return (
              <StyledCard key={i} ref={el => (revealCards.current[i] = el)}>
                <Link to={slug} className="cs-card-link">
                  <span className="cs-company">{company}</span>
                  <h3 className="cs-title">{title}</h3>
                  <p className="cs-desc">{description}</p>
                  <span className="cs-cta">Read the deep dive &rarr;</span>
                </Link>
              </StyledCard>
            );
          })}
      </ul>
    </StyledCaseStudiesSection>
  );
};

export default CaseStudies;
