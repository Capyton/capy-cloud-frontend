import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { Theme } from 'types';
import { font } from './Font.styles';

export const styles = {
  global: (theme: Theme) => css`
    ${emotionNormalize};
    ${font()};

    * {
      font-family: ${theme.font.primary};
      color: ${theme.color.black};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      background: ${theme.color.white};
    }
    
    #root {
      padding: ${theme.sizing(0, 13)};
  `,
};
