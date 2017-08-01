function buildGlobalStyleString(appTheme) {
  return `

    html,
    body {
      color: ${appTheme.colors.text};
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: ${appTheme.dimensions.baseSizePx};
    }

    .Resizer {
      background-clip: padding-box;
      background: ${appTheme.colors.text};
      box-sizing: border-box;
      opacity: .4;
      z-index: 1;
    }

    .Resizer:hover {
      transition: all 0.4s ease;
    }

    .Resizer.horizontal {
      border-bottom: 5px solid rgba(255, 255, 255, 0);
      border-top: 5px solid rgba(255, 255, 255, 0);
      cursor: row-resize;
      height: 11px;
      margin: -5px 0;
      width: 100%;
    }

    .Resizer.horizontal:hover {
      border-bottom: 5px solid rgba(0, 0, 0, 0.5);
      border-top: 5px solid rgba(0, 0, 0, 0.5);
    }

    .Resizer.vertical {
      border-left: 5px solid rgba(255, 255, 255, 0);
      border-right: 5px solid rgba(255, 255, 255, 0);
      cursor: col-resize;
      margin: 0 -5px;
      width: 11px;
    }

    .Resizer.vertical:hover {
      border-left: 5px solid rgba(0, 0, 0, 0.5);
      border-right: 5px solid rgba(0, 0, 0, 0.5);
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
