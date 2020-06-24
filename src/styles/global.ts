/* stylelint-disable property-no-vendor-prefix */
import { css } from '@emotion/core';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html,
  body {
    box-sizing: border-box;

    width: 100%;
    height: 100%;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;

    padding: 0;
    margin: 0;

    user-select: none;

    outline: none;
    -webkit-overflow-scrolling: touch;
  }

  main {
    display: block;
  }

  h1 {
    margin: 0.67em 0;

    font-size: 2em;
  }

  hr {
    box-sizing: content-box;
    display: block;

    height: 1px;
    padding: 0;
    margin: 1em 0;
    overflow: visible;

    border: 0;
    border-top: 1px solid #ccc;
  }

  pre {
    font-family: monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;

    border-bottom: none;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;

    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;

    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;

    border-style: none;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  fieldset {
    padding: 0;
    margin: 0;

    border: 0;
  }

  legend {
    box-sizing: border-box;
    display: table;

    max-width: 100%;
    padding: 0;

    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;

    resize: vertical;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;

    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;

    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::selection {
    text-shadow: none;

    background: #b3d4fc;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;

    font: inherit;
  }
`;

export default globalStyles;
