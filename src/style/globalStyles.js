function buildGlobalStyleString(appTheme) {
  return `

    html,
    body {
      color: ${appTheme.colors.text};
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: ${appTheme.dimensions.baseSizePx};
      line-height: ${appTheme.dimensions.lineHeight};
    }

    code,
    pre {
      background-color: ${appTheme.colors.chrome200};
      border-radius: 4px;
      line-height: 1.3rem;
      padding: ${appTheme.dimensions.gridPad} ${appTheme.dimensions.gapPx};
      max-width: 100%;
    }

    .Resizer {
      background: ${appTheme.colors.text};
      opacity: .2;
      z-index: 1;
      box-sizing: border-box;
      background-clip: padding-box;
    }

    .Resizer:hover {
      transition: all 0.4s ease;
    }

    .Resizer.vertical {
      width: 11px;
      margin: 0 -5px;
      border-left: 5px solid rgba(255, 255, 255, 0);
      border-right: 5px solid rgba(255, 255, 255, 0);
      cursor: col-resize;
    }

    .Resizer.vertical:hover {
      border-left: 5px solid ${appTheme.colors.shadow};
      border-right: 5px solid ${appTheme.colors.shadow};
    }

    .Resizer.disabled {
      cursor: not-allowed;
    }

    .Resizer.disabled:hover {
      border-color: transparent;
    }
  `;
}

export default {
  buildGlobalStyleString,
};
