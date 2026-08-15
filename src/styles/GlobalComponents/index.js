import styled from 'styled-components';

/**
 * NOTE: all styling-only props are transient ($-prefixed). styled-components v6
 * forwards unknown props straight to the DOM, so non-transient props such as
 * `main` or `nopadding` would end up as invalid HTML attributes.
 */

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 72px 48px;
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
  box-sizing: content-box;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 56px 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 44px 16px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
`;

/** Two-column hero: copy on the left, terminal card on the right. */
export const HeroGrid = styled.section`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 48px;
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
  box-sizing: content-box;
  padding: 56px 48px 72px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 32px 48px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 24px;
    padding: 16px 16px 40px;
    box-sizing: border-box;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  min-width: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: stretch;
  }
`;

/**
 * Full-bleed tinted zone. Groups related sections so the page reads as a few
 * distinct bands rather than one uninterrupted column of cards.
 */
export const Band = styled.div`
  position: relative;
  width: 100%;
  background: ${(props) =>
    props.$tint ? props.theme.bands.subtle : 'transparent'};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  /* soft glow anchored to the top of the band */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: ${(props) => props.theme.bands.glow};
  }

  > * {
    position: relative;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.$main ? '62px' : '48px')};
  line-height: 1.15;
  letter-spacing: -0.02em;
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.theme.gradients.text};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.$main ? '48px 0 16px' : '0')};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.$main ? '44px' : '36px')};
    margin-bottom: 12px;
    padding: ${(props) => (props.$main ? '32px 0 12px' : '0')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.$main ? '30px' : '28px')};
    margin-bottom: 8px;
    padding: ${(props) => (props.$main ? '16px 0 8px' : '0')};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 300;
  padding-bottom: 3.2rem;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 18px;
    line-height: 30px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 26px;
    padding-bottom: 16px;
  }
`;

/** Small uppercase label that sits above a section title. */
export const Eyebrow = styled.span`
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.cyan};
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
  }
`;

/** Rounded tech/skill chip, used by cards across the site. */
export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  line-height: 1;
  padding: 7px 12px;
  border-radius: ${(props) => props.theme.radii.pill};
  color: ${(props) => props.theme.colors.textMuted};
  background: rgba(148, 93, 214, 0.12);
  border: 1px solid rgba(148, 93, 214, 0.28);
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
    padding: 6px 10px;
  }
`;
