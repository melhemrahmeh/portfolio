import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  width: 100%;
  max-width: 560px;
  margin-left: auto;
  background: #0b1220;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  box-shadow: ${(props) => props.theme.shadows.card};
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0;
    max-width: 100%;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const Dot = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${(props) => props.$color};
`;

const BarTitle = styled.span`
  margin-left: 6px;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 12px;
  color: ${(props) => props.theme.colors.textSubtle};
`;

const Body = styled.pre`
  margin: 0;
  padding: 20px 18px 22px;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 12.5px;
  line-height: 1.7;
  white-space: pre;
  overflow-x: auto;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10.5px;
    padding: 16px 14px 18px;
  }
`;

const Prompt = styled.span`
  color: ${(props) => props.theme.colors.purple};
`;
const Cmd = styled.span`
  color: ${(props) => props.theme.colors.text};
`;
const Ok = styled.span`
  color: ${(props) => props.theme.colors.green};
`;
const Dim = styled.span`
  color: ${(props) => props.theme.colors.textSubtle};
`;
const Comment = styled.span`
  color: ${(props) => props.theme.colors.purple};
  opacity: 0.75;
`;
const Aws = styled.span`
  color: #ff9900;
`;

const Caret = styled.span`
  display: inline-block;
  width: 8px;
  height: 15px;
  vertical-align: -3px;
  background: ${(props) => props.theme.colors.cyan};
  animation: blink 1.15s step-end infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/**
 * Decorative console panel for the hero. Purely presentational — hidden from
 * assistive tech since it repeats information already in the hero copy.
 */
const TerminalCard = () => (
  <Frame aria-hidden="true">
    <Bar>
      <Dot $color="#ff5f57" />
      <Dot $color="#febc2e" />
      <Dot $color="#28c840" />
      <BarTitle>melhem@limassol — ~/infra</BarTitle>
    </Bar>
    {/* Column alignment lives in these string literals — JSX text collapses
        runs of whitespace, so the spacing must not be written as markup. */}
    <Body>
      <Prompt>{'$ '}</Prompt>
      <Cmd>{'kubectl get gateways,ingress -A\n'}</Cmd>
      <Dim>{'NAMESPACE  NAME                     CLASS  PROGRAMMED\n'}</Dim>
      {'edge       gateway/envoy-public     envoy  '}
      <Ok>{'True\n'}</Ok>
      {'edge       gateway/envoy-internal   envoy  '}
      <Ok>{'True\n'}</Ok>
      {'legacy     gateway/kong-proxy       kong   '}
      <Ok>{'True\n'}</Ok>
      {'legacy     ingress/legacy-api       nginx  '}
      <Ok>{'True\n\n'}</Ok>

      <Prompt>{'$ '}</Prompt>
      <Aws>{'aws'}</Aws>
      <Cmd>{' eks list-clusters --output text\n'}</Cmd>
      {'prod   staging   development\n\n'}

      {/* <Comment>
        {"# brought the company's entire AWS estate under Terraform,\n"}
      </Comment>
      <Comment>{'# then re-architected it into reusable modules\n'}</Comment> */}
      <Prompt>{'$ '}</Prompt>
      <Cmd>{'terraform import '}</Cmd>
      <Aws>{'aws_vpc'}</Aws>
      <Cmd>{'.core vpc-0a1b2c3d\n'}</Cmd>
      <Ok>{'Import successful! '}</Ok>
      <Dim>{'Resource now managed by Terraform.\n\n'}</Dim>

      <Prompt>{'$ '}</Prompt>
      <Cmd>{'curl -s status.internal | jq .uptime\n'}</Cmd>
      <Ok>{'"99.999%"\n\n'}</Ok>

      <Prompt>{'$ '}</Prompt>
      <Caret />
    </Body>
  </Frame>
);

export default TerminalCard;
