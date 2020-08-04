import { ZeitUIThemes } from '../styles/themes'

const animationDuration = '0.2s'

// TODO Unify animation
// picker animation lalala~
export const animationStyle = (
  <style jsx global>{`
    @keyframes cfxSlideUpIn {
      0% {
        transform: scaleY(0.8);
        transform-origin: 0% 0%;
        opacity: 0;
      }

      100% {
        transform: scaleY(1);
        transform-origin: 0% 0%;
        opacity: 1;
      }
    }

    @keyframes cfxSlideUpOut {
      0% {
        transform: scaleY(1);
        transform-origin: 0% 0%;
        opacity: 1;
      }

      100% {
        transform: scaleY(0.8);
        transform-origin: 0% 0%;
        opacity: 0;
      }
    }

    @keyframes cfxSlideDownIn {
      0% {
        transform: scaleY(0.8);
        transform-origin: 100% 100%;
        opacity: 0;
      }

      100% {
        transform: scaleY(1);
        transform-origin: 100% 100%;
        opacity: 1;
      }
    }

    @keyframes cfxSlideDownOut {
      0% {
        transform: scaleY(1);
        transform-origin: 100% 100%;
        opacity: 1;
      }

      100% {
        transform: scaleY(0.8);
        transform-origin: 100% 100%;
        opacity: 0;
      }
    }

    @keyframes cfxSlideLeftIn {
      0% {
        transform: scaleX(0.8);
        transform-origin: 0% 0%;
        opacity: 0;
      }

      100% {
        transform: scaleX(1);
        transform-origin: 0% 0%;
        opacity: 1;
      }
    }

    @keyframes cfxSlideLeftOut {
      0% {
        transform: scaleX(1);
        transform-origin: 0% 0%;
        opacity: 1;
      }

      100% {
        transform: scaleX(0.8);
        transform-origin: 0% 0%;
        opacity: 0;
      }
    }

    @keyframes cfxSlideRightIn {
      0% {
        transform: scaleX(0.8);
        transform-origin: 100% 0%;
        opacity: 0;
      }

      100% {
        transform: scaleX(1);
        transform-origin: 100% 0%;
        opacity: 1;
      }
    }

    @keyframes cfxSlideRightOut {
      0% {
        transform: scaleX(1);
        transform-origin: 100% 0%;
        opacity: 1;
      }

      100% {
        transform: scaleX(0.8);
        transform-origin: 100% 0%;
        opacity: 0;
      }
    }

    .slide-up-enter,
    .slide-up-appear {
      animation-duration: ${animationDuration};
      animation-fill-mode: both;
      animation-play-state: paused;
    }

    .slide-up-leave {
      animation-duration: ${animationDuration};
      animation-fill-mode: both;
      animation-play-state: paused;
    }

    .slide-up-enter.slide-up-enter-active,
    .slide-up-appear.slide-up-appear-active {
      animation-name: cfxSlideUpIn;
      animation-play-state: running;
    }

    .slide-up-leave.slide-up-leave-active {
      animation-name: cfxSlideUpOut;
      animation-play-state: running;
      pointer-events: none;
    }

    .slide-up-enter,
    .slide-up-appear {
      opacity: 0;
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }

    .slide-up-leave {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }

    .slide-down-enter,
    .slide-down-appear {
      animation-duration: ${animationDuration};
      animation-fill-mode: both;
      animation-play-state: paused;
    }

    .slide-down-leave {
      animation-duration: ${animationDuration};
      animation-fill-mode: both;
      animation-play-state: paused;
    }

    .slide-down-enter.slide-down-enter-active,
    .slide-down-appear.slide-down-appear-active {
      animation-name: cfxSlideDownIn;
      animation-play-state: running;
    }

    .slide-down-leave.slide-down-leave-active {
      animation-name: cfxSlideDownOut;
      animation-play-state: running;
      pointer-events: none;
    }

    .slide-down-enter,
    .slide-down-appear {
      opacity: 0;
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }

    .slide-down-leave {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }

    .slide-left-enter,
    .slide-left-appear {
      animation-duration: ${animationDuration};
      animation-fill-mode: both;
      animation-play-state: paused;
    }

    .slide-left-leave {
      animation-duration: ${animationDuration};
      animation-fill-mode: both;
      animation-play-state: paused;
    }

    .slide-left-enter.slide-left-enter-active,
    .slide-left-appear.slide-left-appear-active {
      animation-name: cfxSlideLeftIn;
      animation-play-state: running;
    }

    .slide-left-leave.slide-left-leave-active {
      animation-name: cfxSlideLeftOut;
      animation-play-state: running;
      pointer-events: none;
    }

    .slide-left-enter,
    .slide-left-appear {
      opacity: 0;
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }

    .slide-left-leave {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }

    .slide-right-enter,
    .slide-right-appear {
      animation-duration: ${animationDuration};
      animation-fill-mode: both;
      animation-play-state: paused;
    }

    .slide-right-leave {
      animation-duration: ${animationDuration};
      animation-fill-mode: both;
      animation-play-state: paused;
    }

    .slide-right-enter.slide-right-enter-active,
    .slide-right-appear.slide-right-appear-active {
      animation-name: cfxSlideRightIn;
      animation-play-state: running;
    }

    .slide-right-leave.slide-right-leave-active {
      animation-name: cfxSlideRightOut;
      animation-play-state: running;
      pointer-events: none;
    }

    .slide-right-enter,
    .slide-right-appear {
      opacity: 0;
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }

    .slide-right-leave {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
  `}</style>
)

// picker style
export const generatePickerGlobalStyle = (theme: ZeitUIThemes, prefix: string = 'cfx') => {
  // TODO Dark theme
  // TODO Unify input style

  // TODO Although a lot of style adjustments have been made, extreme cases are not ruled out.
  //      Maybe need adjust the pseudo-element (::before or ::after) styles, it sucks.
  const pattern = {
    color: {
      bg: theme.palette.background, // '#fff',
      bg2: theme.palette.cTheme0, // '#e6f7ff',
      bgScroll: theme.palette.cNeutral0,
      bgHover: theme.palette.cTheme0, // '#f5f5f5',
      bgDisabled: theme.palette.cNeutral0,
      border: theme.palette.cTheme5, // '#f0f0f0',
      border2: theme.palette.cTheme5, // '#7ec1ff',
      border3: theme.palette.cNeutral5, // '#d9d9d9',
      // border4: '#91d5ff',
      base: theme.palette.cTheme5, // '#1890ff',
      hover: theme.palette.cTheme5, // '#40a9ff',
      active: theme.palette.cTheme5, // '#096dd9',
      placeholder: theme.palette.cNeutral5, // '#bfbfbf',
      heading: theme.palette.cNeutral7, // ''rgba(0, 0, 0, 0.85)',
      disabled: theme.palette.cNeutral5, // 'rgba(0, 0, 0, 0.25)',
      text: theme.palette.cNeutral7, // 'rgba(0, 0, 0, 0.65)',
      // text2: 'rgba(0, 0, 0, 0.45)',
      shadow: 'rgba(24, 144, 255, 0.2)',
      shadow2: 'rgba(0, 0, 0, 0.06)',
      containerShadow:
        '0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)',
      other1: 'rgba(255, 255, 255, 0.5)',
      other2: 'rgba(230, 247, 255, 0.2)',
    },
    size: {
      cell: '32px', // '24px',
      cellRadius: '32px', // '24px',
      icon: '7px',
      fontHeader: '1.2rem',
      fontLarge: '1rem',
      fontMedium: '.875rem',
      fontSmall: '.75rem',
      fontMini: '.75rem',
    },
  }

  return (
    <>
      {animationStyle}
      <style jsx global>{`
        .${prefix}-picker-panel {
          display: inline-flex;
          flex-direction: column;
          text-align: center;
          background: ${pattern.color.bg};
          outline: none;
        }

        .${prefix}-picker-panel-focused {
          border-color: ${pattern.color.base};
        }

        .${prefix}-picker-decade-panel,
        .${prefix}-picker-year-panel,
        .${prefix}-picker-quarter-panel,
        .${prefix}-picker-month-panel,
        .${prefix}-picker-week-panel,
        .${prefix}-picker-date-panel,
        .${prefix}-picker-time-panel {
          display: flex;
          flex-direction: column;
          width: ${(parseInt(pattern.size.cell, 10) + 20) * 7 + 3 * 6 + 'px'};
        }

        .${prefix}-picker-header {
          display: flex;
          padding: 0 16px;
          color: ${pattern.color.heading};
        }

        .${prefix}-picker-header > * {
          flex: none;
        }

        .${prefix}-picker-header button {
          padding: 0;
          color: ${pattern.color.text};
          line-height: 40px;
          background: 0 0;
          border: 0;
          cursor: pointer;
          // transition: color 0.3s; // fix strange color problem
        }

        .${prefix}-picker-header > button {
          min-width: 1.6em;
          font-size: ${pattern.size.fontHeader};
        }

        .${prefix}-picker-header > button:hover {
          color: ${pattern.color.hover};
        }

        .${prefix}-picker-header-view {
          flex: auto;
          font-weight: 700;
          line-height: 40px;
          font-size: ${pattern.size.fontHeader};
        }

        .${prefix}-picker-header-view button {
          color: inherit;
          font-weight: inherit;
          font-size: ${pattern.size.fontHeader};
        }

        .${prefix}-picker-header-view button:not(:first-child) {
          margin-left: 8px;
        }

        .${prefix}-picker-header-view button:hover {
          color: ${pattern.color.base};
        }

        .${prefix}-picker-prev-icon,
        .${prefix}-picker-next-icon,
        .${prefix}-picker-super-prev-icon,
        .${prefix}-picker-super-next-icon {
          position: relative;
          display: inline-block;
          width: ${pattern.size.icon};
          height: ${pattern.size.icon};
        }

        .${prefix}-picker-prev-icon::before,
        .${prefix}-picker-next-icon::before,
        .${prefix}-picker-super-prev-icon::before,
        .${prefix}-picker-super-next-icon::before {
          position: absolute;
          top: 0;
          left: 0;
          display: inline-block;
          width: ${pattern.size.icon};
          height: ${pattern.size.icon};
          border: 0 solid currentColor;
          border-width: 1.5px 0 0 1.5px;
          content: '';
        }

        .${prefix}-picker-super-prev-icon::after,
        .${prefix}-picker-super-next-icon::after {
          position: absolute;
          top: 4px;
          left: 4px;
          display: inline-block;
          width: ${pattern.size.icon};
          height: ${pattern.size.icon};
          border: 0 solid currentColor;
          border-width: 1.5px 0 0 1.5px;
          content: '';
        }

        .${prefix}-picker-prev-icon,
        .${prefix}-picker-super-prev-icon {
          transform: rotate(-45deg);
        }

        .${prefix}-picker-next-icon,
        .${prefix}-picker-super-next-icon {
          transform: rotate(135deg);
        }

        .${prefix}-picker-content {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
        }

        .${prefix}-picker-content th,
        .${prefix}-picker-content td {
          position: relative;
          min-width: ${pattern.size.cell};
          font-weight: 400;
        }

        .${prefix}-picker-content th {
          height: 30px;
          color: ${pattern.color.text};
          line-height: 30px;
          font-weight: 500;
        }

        .${prefix}-picker-cell {
          padding: 2px 2px;
          color: ${pattern.color.disabled};
          cursor: pointer;
        }

        .${prefix}-picker-cell-in-view {
          color: ${pattern.color.text};
        }

        .${prefix}-picker-cell-disabled {
          cursor: not-allowed;
        }

        .${prefix}-picker-cell::before {
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
          z-index: 1;
          height: ${pattern.size.cell};
          transform: translateY(-50%);
          content: '';
        }

        .${prefix}-picker-cell .${prefix}-picker-cell-inner {
          position: relative;
          z-index: 2;
          display: inline-block;
          min-width: ${pattern.size.cell};
          height: ${pattern.size.cell};
          line-height: ${pattern.size.cell};
          border-radius: ${pattern.size.cellRadius};
          transition: background 0.3s, border 0.3s;
        }

        .${prefix}-picker-cell:hover:not(.${prefix}-picker-cell-in-view) .${prefix}-picker-cell-inner,
        .${prefix}-picker-cell:hover:not(.${prefix}-picker-cell-selected):not(.${prefix}-picker-cell-range-start):not(.${prefix}-picker-cell-range-end):not(.${prefix}-picker-cell-range-hover-start):not(.${prefix}-picker-cell-range-hover-end)
          .${prefix}-picker-cell-inner {
          background: ${pattern.color.bgHover};
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-today .${prefix}-picker-cell-inner::before {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          border-radius: 50%;
          content: '';
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-today .${prefix}-picker-cell-inner {
          background: ${pattern.color.bg2};
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range {
          position: relative;
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range::before {
          // background: ${pattern.color.bg2};
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-selected .${prefix}-picker-cell-inner,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start .${prefix}-picker-cell-inner,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end .${prefix}-picker-cell-inner {
          color: ${pattern.color.bg};
          background: ${pattern.color.base};
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start:not(.${prefix}-picker-cell-range-start-single)::before,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end:not(.${prefix}-picker-cell-range-end-single)::before {
          // background: ${pattern.color.bg2};
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start::before {
          left: 50%;
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end::before {
          right: 50%;
          left: 2px; // fix dashed link
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end.${prefix}-picker-cell-range-start::before {
          display: none; // fix same day
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover-start:not(.${prefix}-picker-cell-in-range):not(.${prefix}-picker-cell-range-start):not(.${prefix}-picker-cell-range-end)::after,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover-end:not(.${prefix}-picker-cell-in-range):not(.${prefix}-picker-cell-range-start):not(.${prefix}-picker-cell-range-end)::after,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover-start.${prefix}-picker-cell-range-start-single::after,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover-end.${prefix}-picker-cell-range-end-single::after,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover:not(.${prefix}-picker-cell-in-range)::after,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range::after,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start::before,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end::before {
          position: absolute;
          top: 50%;
          z-index: 3;
          height: ${pattern.size.cell};
          border-top: 1px dashed ${pattern.color.border2};
          border-bottom: 1px dashed ${pattern.color.border2};
          transform: translateY(-50%);
          content: '';
        }


        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start:last-child::before,
        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end:first-child::before {
          display: none;
        }

        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end:last-child::after,
        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start:first-child::after {
          display: none;
        }

        .${prefix}-picker-year-panel tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start:last-child::after,
        .${prefix}-picker-year-panel tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end:first-child::after {
          position: absolute;
          top: 50%;
          z-index: 3;
          height: ${pattern.size.cell};
          border-top: 1px dashed ${pattern.color.border2};
          border-bottom: 1px dashed ${pattern.color.border2};
          transform: translateY(-50%);
          content: '';
        }

        .${prefix}-picker-year-panel tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start:last-child::after {
          right: 50%;
        }

        .${prefix}-picker-year-panel tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end:first-child::after {
          left: 50%;
        }

        .${prefix}-picker-cell-range-hover-start::after,
        .${prefix}-picker-cell-range-hover-end::after,
        .${prefix}-picker-cell-range-hover::after,
        .${prefix}-picker-cell-in-range::after {
          right: 0;
          left: 2px;
        }

        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range.${prefix}-picker-cell-range-hover::before,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start.${prefix}-picker-cell-range-hover::before,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end.${prefix}-picker-cell-range-hover::before,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start:not(.${prefix}-picker-cell-range-start-single).${prefix}-picker-cell-range-hover-start::before,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end:not(.${prefix}-picker-cell-range-end-single).${prefix}-picker-cell-range-hover-end::before,
        .${prefix}-picker-panel
          > :not(.${prefix}-picker-date-panel)
          .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range.${prefix}-picker-cell-range-hover-start::before,
        .${prefix}-picker-panel
          > :not(.${prefix}-picker-date-panel)
          .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range.${prefix}-picker-cell-range-hover-end::before {
          // background: ${pattern.color.bg2};
        }

        // .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start:not(.${prefix}-picker-cell-range-start-single):not(.${prefix}-picker-cell-range-end)
        //   .${prefix}-picker-cell-inner {
        //   border-radius: ${pattern.size.cellRadius} 0 0 ${pattern.size.cellRadius};
        // }

        // .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end:not(.${prefix}-picker-cell-range-end-single):not(.${prefix}-picker-cell-range-start)
        //   .${prefix}-picker-cell-inner {
        //   border-radius: 0 ${pattern.size.cellRadius} ${pattern.size.cellRadius} 0;
        // }

        .${prefix}-picker-date-panel
          .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range.${prefix}-picker-cell-range-hover-start
          .${prefix}-picker-cell-inner::after,
        .${prefix}-picker-date-panel
          .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range.${prefix}-picker-cell-range-hover-end
          .${prefix}-picker-cell-inner::after {
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: -1;
          background: ${pattern.color.bg2};
          content: '';
        }

        .${prefix}-picker-date-panel
          .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range.${prefix}-picker-cell-range-hover-start
          .${prefix}-picker-cell-inner::after {
          right: 0;
          left: 0;
          z-index: -2;
          border-radius: ${pattern.size.cellRadius};
        }

        .${prefix}-picker-date-panel
          .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range.${prefix}-picker-cell-range-hover-end
          .${prefix}-picker-cell-inner::after {
          right: 0;
          left: 0;
          z-index: -2;
          border-radius: ${pattern.size.cellRadius};
        }

        .${prefix}-picker-cell-range-hover.${prefix}-picker-cell-range-start::after {
          right: 50%;
        }

        .${prefix}-picker-cell-range-hover.${prefix}-picker-cell-range-end::after {
          left: 50%;
        }

        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover:first-child::after,
        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover-end:first-child::after,
        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range:first-child::after,
        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-edge-start:not(.${prefix}-picker-cell-range-hover-edge-end-near-range):not(.${prefix}-picker-cell-range-hover-end):not(.${prefix}-picker-cell-range-hover)::after,
        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-end:first-child::after,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover-edge-start:not(.${prefix}-picker-cell-range-hover-edge-start-near-range)::after,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover-start::after {
          left: 10px;
          border-left: 1px dashed ${pattern.color.border2};
          border-top-left-radius: ${pattern.size.cellRadius};
          border-bottom-left-radius: ${pattern.size.cellRadius};
        }

        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover:last-child::after,
        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover-start:last-child::after,
        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-in-range:last-child::after,
        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-edge-end:not(.${prefix}-picker-cell-range-hover-edge-end-near-range):not(.${prefix}-picker-cell-range-hover-start):not(.${prefix}-picker-cell-range-hover)::after,
        tr > .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-start:last-child::after,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover-edge-end:not(.${prefix}-picker-cell-range-hover-edge-end-near-range)::after,
        .${prefix}-picker-cell-in-view.${prefix}-picker-cell-range-hover-end::after {
          right: 10px;
          border-right: 1px dashed ${pattern.color.border2};
          border-top-right-radius: ${pattern.size.cellRadius};
          border-bottom-right-radius: ${pattern.size.cellRadius};
        }

        .${prefix}-picker-cell-disabled {
          pointer-events: none;
          cursor: not-allowed;
        }

        .${prefix}-picker-cell-disabled .${prefix}-picker-cell-inner {
          color: ${pattern.color.disabled};
          background: 0 0;
        }

        .${prefix}-picker-cell-disabled::before {
          background: ${pattern.color.bg};
        }

        .${prefix}-picker-cell-disabled.${prefix}-picker-cell-today .${prefix}-picker-cell-inner::before {
          border-color: ${pattern.color.disabled};
        }

        .${prefix}-picker-decade-panel .${prefix}-picker-content,
        .${prefix}-picker-year-panel .${prefix}-picker-content,
        .${prefix}-picker-quarter-panel .${prefix}-picker-content,
        .${prefix}-picker-month-panel .${prefix}-picker-content {
          // height: 264px;
        }

        .${prefix}-picker-decade-panel .${prefix}-picker-cell-inner,
        .${prefix}-picker-year-panel .${prefix}-picker-cell-inner,
        .${prefix}-picker-quarter-panel .${prefix}-picker-cell-inner,
        .${prefix}-picker-month-panel .${prefix}-picker-cell-inner {
          padding: 0 8px;
        }

        .${prefix}-picker-decade-panel .${prefix}-picker-cell-disabled .${prefix}-picker-cell-inner,
        .${prefix}-picker-year-panel .${prefix}-picker-cell-disabled .${prefix}-picker-cell-inner,
        .${prefix}-picker-quarter-panel .${prefix}-picker-cell-disabled .${prefix}-picker-cell-inner,
        .${prefix}-picker-month-panel .${prefix}-picker-cell-disabled .${prefix}-picker-cell-inner {
          background: ${pattern.color.bgDisabled};
        }

        .${prefix}-picker-quarter-panel .${prefix}-picker-content {
          height: 56px;
        }

        .${prefix}-picker-footer {
          width: min-content;
          min-width: 100%;
          line-height: 38px;
          text-align: center;
        }

        .${prefix}-picker-footer-extra {
          padding: 0 12px;
          line-height: 38px;
          text-align: left;
        }

        // .${prefix}-picker-footer-extra:not(:last-child) {
        //   border-bottom: 1px solid ${pattern.color.border};
        // }

        .${prefix}-picker-now {
          text-align: left;
        }

        .${prefix}-picker-now::before {
          display: none;
        }

        .${prefix}-picker-now-btn {
          color: ${pattern.color.text};
        }

        .${prefix}-picker-now-btn:hover {
          color: ${pattern.color.hover};
        }

        .${prefix}-picker-today-btn {
          color: ${pattern.color.text};
        }

        .${prefix}-picker-today-btn:hover {
          color: ${pattern.color.base};
        }

        .${prefix}-picker-today-btn:active {
          color: ${pattern.color.base};
        }

        .${prefix}-picker-today-btn.${prefix}-picker-today-btn-disabled {
          color: ${pattern.color.disabled};
          cursor: not-allowed;
        }

        .${prefix}-picker-decade-panel .${prefix}-picker-cell-inner {
          padding: 0 4px;
        }

        .${prefix}-picker-decade-panel .${prefix}-picker-cell::before {
          display: none;
        }

        .${prefix}-picker-year-panel .${prefix}-picker-body,
        .${prefix}-picker-quarter-panel .${prefix}-picker-body,
        .${prefix}-picker-month-panel .${prefix}-picker-body {
          padding: 0 10px;
        }

        .${prefix}-picker-year-panel .${prefix}-picker-cell-inner,
        .${prefix}-picker-quarter-panel .${prefix}-picker-cell-inner,
        .${prefix}-picker-month-panel .${prefix}-picker-cell-inner {
          width: 100px;
        }

        .${prefix}-picker-year-panel .${prefix}-picker-cell-range-hover-start::after,
        .${prefix}-picker-quarter-panel .${prefix}-picker-cell-range-hover-start::after,
        .${prefix}-picker-month-panel .${prefix}-picker-cell-range-hover-start::after {
          left: 10px;
          border-left: 1px dashed ${pattern.color.border2};
          border-radius: ${pattern.size.cellRadius} 0 0 ${pattern.size.cellRadius};
        }

        .${prefix}-picker-panel-rtl .${prefix}-picker-year-panel .${prefix}-picker-cell-range-hover-start::after,
        .${prefix}-picker-panel-rtl .${prefix}-picker-quarter-panel .${prefix}-picker-cell-range-hover-start::after,
        .${prefix}-picker-panel-rtl .${prefix}-picker-month-panel .${prefix}-picker-cell-range-hover-start::after {
          right: 10px;
          border-right: 1px dashed ${pattern.color.border2};
          border-radius: 0 ${pattern.size.cellRadius} ${pattern.size.cellRadius} 0;
        }

        .${prefix}-picker-year-panel .${prefix}-picker-cell-range-hover-end::after,
        .${prefix}-picker-quarter-panel .${prefix}-picker-cell-range-hover-end::after,
        .${prefix}-picker-month-panel .${prefix}-picker-cell-range-hover-end::after {
          right: 10px;
          border-right: 1px dashed ${pattern.color.border2};
          border-radius: 0 ${pattern.size.cellRadius} ${pattern.size.cellRadius} 0;
        }

        .${prefix}-picker-panel-rtl .${prefix}-picker-year-panel .${prefix}-picker-cell-range-hover-end::after,
        .${prefix}-picker-panel-rtl .${prefix}-picker-quarter-panel .${prefix}-picker-cell-range-hover-end::after,
        .${prefix}-picker-panel-rtl .${prefix}-picker-month-panel .${prefix}-picker-cell-range-hover-end::after {
          left: 10px;
          border-left: 1px dashed ${pattern.color.border2};
          border-radius: ${pattern.size.cellRadius} 0 0 ${pattern.size.cellRadius};
        }

        .${prefix}-picker-week-panel .${prefix}-picker-body {
          padding: 8px 10px;
        }

        .${prefix}-picker-week-panel .${prefix}-picker-cell:hover .${prefix}-picker-cell-inner,
        .${prefix}-picker-week-panel .${prefix}-picker-cell-selected .${prefix}-picker-cell-inner,
        .${prefix}-picker-week-panel .${prefix}-picker-cell .${prefix}-picker-cell-inner {
          background: 0 0 !important;
        }

        .${prefix}-picker-week-panel-row td {
          transition: background 0.3s;
        }

        .${prefix}-picker-week-panel-row td:first-child {
          border-radius: ${pattern.size.cellRadius} 0 0 ${pattern.size.cellRadius};
        }

        .${prefix}-picker-week-panel-row td:last-child {
          border-radius: 0 ${pattern.size.cellRadius} ${pattern.size.cellRadius} 0;
        }

        .${prefix}-picker-week-panel-row:hover td {
          background: ${pattern.color.bgHover};
        }

        .${prefix}-picker-week-panel-row-selected td,
        .${prefix}-picker-week-panel-row-selected:hover td {
          background: ${pattern.color.base};
        }

        .${prefix}-picker-week-panel-row-selected td,
        .${prefix}-picker-week-panel-row-selected:hover td {
          background: ${pattern.color.base};
        }

        .${prefix}-picker-week-panel-row-selected td.${prefix}-picker-cell-week,
        .${prefix}-picker-week-panel-row-selected:hover td.${prefix}-picker-cell-week {
          color: ${pattern.color.other1};
        }

        .${prefix}-picker-week-panel-row-selected td.${prefix}-picker-cell-today .${prefix}-picker-cell-inner::before,
        .${prefix}-picker-week-panel-row-selected:hover
          td.${prefix}-picker-cell-today
          .${prefix}-picker-cell-inner::before {
          border-color: ${pattern.color.bg};
        }

        .${prefix}-picker-week-panel-row-selected td .${prefix}-picker-cell-inner,
        .${prefix}-picker-week-panel-row-selected:hover td .${prefix}-picker-cell-inner {
          color: ${pattern.color.bg};
        }

        .${prefix}-picker-date-panel .${prefix}-picker-body {
          padding: 8px 8px;
        }

        .${prefix}-picker-date-panel .${prefix}-picker-content {
          width: ${(parseInt(pattern.size.cell, 10) + 20) * 7 + 'px'};
        }

        .${prefix}-picker-date-panel .${prefix}-picker-content th {
          width: ${parseInt(pattern.size.cell, 10) + 20 + 'px'};
        }

        .${prefix}-picker-datetime-panel {
          display: flex;
        }

        .${prefix}-picker-datetime-panel .${prefix}-picker-time-panel {
          border-left: 1px solid ${pattern.color.border};
        }

        .${prefix}-picker-datetime-panel .${prefix}-picker-date-panel,
        .${prefix}-picker-datetime-panel .${prefix}-picker-time-panel {
          transition: opacity 0.3s;
        }

        .${prefix}-picker-datetime-panel-active .${prefix}-picker-date-panel,
        .${prefix}-picker-datetime-panel-active .${prefix}-picker-time-panel {
          opacity: 0.3;
        }

        .${prefix}-picker-datetime-panel-active .${prefix}-picker-date-panel-active,
        .${prefix}-picker-datetime-panel-active .${prefix}-picker-time-panel-active {
          opacity: 1;
        }

        .${prefix}-picker-time-panel {
          width: auto;
          min-width: auto;
        }

        .${prefix}-picker-time-panel .${prefix}-picker-content {
          display: flex;
          flex: auto;
          height: 224px;
        }

        .${prefix}-picker-time-panel-column {
          flex: 1 0 auto;
          width: 56px;
          margin: 0;
          padding: 0;
          overflow-y: hidden;
          text-align: left;
          list-style: none;
          transition: background 0.3s;
        }

        .${prefix}-picker-time-panel-column::-webkit-scrollbar {
          width: 2px;
          height: 8px;
          background-color: ${pattern.color.bgScroll};
        }

        .${prefix}-picker-time-panel-column::-webkit-scrollbar-thumb {
          background-color: ${pattern.color.border3};
        }

        .${prefix}-picker-time-panel-column::after {
          display: block;
          height: 196px;
          content: '';
        }

        .${prefix}-picker-datetime-panel .${prefix}-picker-time-panel-column::after {
          height: 198px;
        }

        .${prefix}-picker-time-panel-column:not(:first-child) {
          border-left: 1px solid ${pattern.color.border3};
        }

        .${prefix}-picker-time-panel-column-active {
          background: ${pattern.color.other2};
        }

        .${prefix}-picker-time-panel-column:hover {
          overflow-y: auto;
        }

        .${prefix}-picker-time-panel-column > li {
          margin: 0;
          padding: 0;
        }

        .${prefix}-picker-time-panel-column
          > li.${prefix}-picker-time-panel-cell
          .${prefix}-picker-time-panel-cell-inner {
          display: block;
          width: 100%;
          height: 28px;
          margin: 0;
          padding: 0;
          color: ${pattern.color.text};
          line-height: 28px;
          text-align: center;
          border-radius: 0;
          cursor: pointer;
          transition: background 0.3s;
        }

        .${prefix}-picker-time-panel-column
          > li.${prefix}-picker-time-panel-cell
          .${prefix}-picker-time-panel-cell-inner:hover {
          background: ${pattern.color.bgHover};
        }

        .${prefix}-picker-time-panel-column
          > li.${prefix}-picker-time-panel-cell-selected
          .${prefix}-picker-time-panel-cell-inner {
          background: ${pattern.color.bg2};
        }

        .${prefix}-picker-time-panel-column
          > li.${prefix}-picker-time-panel-cell-disabled
          .${prefix}-picker-time-panel-cell-inner {
          color: ${pattern.color.disabled};
          background: 0 0;
          cursor: not-allowed;
        }

        _:-ms-fullscreen .${prefix}-picker-range-wrapper .${prefix}-picker-month-panel .${prefix}-picker-cell,
        :root .${prefix}-picker-range-wrapper .${prefix}-picker-month-panel .${prefix}-picker-cell,
        _:-ms-fullscreen .${prefix}-picker-range-wrapper .${prefix}-picker-year-panel .${prefix}-picker-cell,
        :root .${prefix}-picker-range-wrapper .${prefix}-picker-year-panel .${prefix}-picker-cell {
          padding: 21px 0;
        }

        .${prefix}-picker {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          color: ${pattern.color.text};
          font-size: ${pattern.size.fontMedium};
          font-variant: tabular-nums;
          line-height: 1.5715;
          list-style: none;
          font-feature-settings: 'tnum';
          padding: 6px 11px;
          position: relative;
          display: inline-flex;
          align-items: center;
          background: ${pattern.color.bg};
          border: 1px solid ${pattern.color.border3};
          border-radius: 2px;
          transition: border 0.3s, box-shadow 0.3s;
        }

        .${prefix}-picker:hover,
        .${prefix}-picker-focused {
          border-color: ${pattern.color.hover};
          border-right-width: 1px !important;
        }

        .${prefix}-picker:hover .${prefix}-picker-input > input,
        .${prefix}-picker-focused .${prefix}-picker-input > input,
        .${prefix}-picker:hover .${prefix}-picker-suffix,
        .${prefix}-picker-focused .${prefix}-picker-suffix {
          color: ${pattern.color.hover};
        }

        .${prefix}-picker:hover .${prefix}-picker-input > input[disabled],
        .${prefix}-picker-focused .${prefix}-picker-input > input[disabled] {
          color: ${pattern.color.disabled};
        }

        .${prefix}-picker.${prefix}-picker-disabled:hover .${prefix}-picker-input > input,
        .${prefix}-picker-focused.${prefix}-picker-disabled .${prefix}-picker-input > input,
        .${prefix}-picker:hover.${prefix}-picker-disabled .${prefix}-picker-suffix,
        .${prefix}-picker-focused.${prefix}-picker-disabled .${prefix}-picker-suffix {
          color: ${pattern.color.disabled};
        }
        
        .${prefix}-picker svg {
          width: 1.2em;
          height: 1.2em;
          vertical-align: middle;
        }

        .${prefix}-picker-focused {
          border-color: ${pattern.color.hover};
          border-right-width: 1px !important;
          outline: 0;
        }

        .${prefix}-picker.${prefix}-picker-disabled {
          background: ${pattern.color.bg};
          border-color: ${pattern.color.border3};
          cursor: not-allowed;
        }

        .${prefix}-picker.${prefix}-picker-disabled .${prefix}-picker-suffix {
          color: ${pattern.color.disabled};
        }

        .${prefix}-picker.${prefix}-picker-borderless {
          background-color: transparent !important;
          border-color: transparent !important;
          box-shadow: none !important;
        }

        .${prefix}-picker-input {
          position: relative;
          display: inline-flex;
          align-items: center;
          width: 100%;
        }

        .${prefix}-picker-input > input {
          position: relative;
          display: inline-block;
          width: 100%;
          min-width: 0;
          padding: 4px 11px;
          color: ${pattern.color.text};
          font-size: ${pattern.size.fontMedium};
          line-height: 1.5715;
          background-color: ${pattern.color.bg};
          background-image: none;
          border: 1px solid ${pattern.color.border3};
          border-radius: 2px;
          transition: all 0.3s;
          flex: auto;
          min-width: 1px;
          height: auto;
          padding: 0;
          background: 0 0;
          border: 0;
        }

        .${prefix}-picker-input > input::-moz-placeholder {
          opacity: 1;
        }

        .${prefix}-picker-input > input::-webkit-input-placeholder {
          color: ${pattern.color.placeholder};
        }

        .${prefix}-picker-input > input:-ms-input-placeholder {
          color: ${pattern.color.placeholder};
        }

        .${prefix}-picker-input > input::-ms-input-placeholder {
          color: ${pattern.color.placeholder};
        }

        .${prefix}-picker-input > input::placeholder {
          color: ${pattern.color.placeholder};
        }

        .${prefix}-picker-input > input:placeholder-shown {
          text-overflow: ellipsis;
        }

        .${prefix}-picker-input > input:hover {
          border-color: ${pattern.color.hover};
          border-right-width: 1px !important;
        }

        .${prefix}-picker-input > input:focus,
        .${prefix}-picker-input > input-focused {
          border-color: ${pattern.color.hover};
          border-right-width: 1px !important;
          outline: 0;
          box-shadow: 0 0 0 2px ${pattern.color.shadow};
        }

        .${prefix}-picker-input > input-disabled {
          color: ${pattern.color.disabled};
          background-color: ${pattern.color.bgHover};
          cursor: not-allowed;
          opacity: 1;
        }

        .${prefix}-picker-input > input-disabled:hover {
          border-color: ${pattern.color.border3};
          border-right-width: 1px !important;
        }

        .${prefix}-picker-input > input[disabled] {
          color: ${pattern.color.disabled};
          background-color: ${pattern.color.bgHover};
          cursor: not-allowed;
          opacity: 1;
        }

        .${prefix}-picker-input > input[disabled]:hover {
          border-color: ${pattern.color.border3};
          border-right-width: 1px !important;
        }

        .${prefix}-picker-input > input-borderless,
        .${prefix}-picker-input > input-borderless:hover,
        .${prefix}-picker-input > input-borderless:focus,
        .${prefix}-picker-input > input-borderless-focused,
        .${prefix}-picker-input > input-borderless-disabled,
        .${prefix}-picker-input > input-borderless[disabled] {
          background-color: transparent;
          border: none;
          box-shadow: none;
        }

        textarea.${prefix}-picker-input > input {
          max-width: 100%;
          height: auto;
          min-height: 32px;
          line-height: 1.5715;
          vertical-align: bottom;
          transition: all 0.3s, height 0s;
        }

        .${prefix}-picker-input > input:focus {
          box-shadow: none;
        }

        .${prefix}-picker-input > input[disabled] {
          background: 0 0;
        }

        .${prefix}-picker-input:hover .${prefix}-picker-clear {
          opacity: 1;
        }

        .${prefix}-picker-input-placeholder > input {
          color: ${pattern.color.placeholder};
        }
        
        // TODO set same size as input

        .${prefix}-picker-large {
          padding: 8px 11px;
        }

        .${prefix}-picker-large .${prefix}-picker-input > input {
          font-size: ${pattern.size.fontLarge};
        }

        .${prefix}-picker-small {
          padding: 4px 7px;
        }

        .${prefix}-picker-small .${prefix}-picker-input > input {
          font-size: ${pattern.size.fontSmall};
        }

        .${prefix}-picker-mini {
          padding: 2px 4px;
        }

        .${prefix}-picker-mini .${prefix}-picker-input > input {
          font-size: ${pattern.size.fontMini};
        }

        .${prefix}-picker-suffix {
          align-self: center;
          margin-left: 4px;
          color: ${pattern.color.disabled};
          line-height: 1;
          pointer-events: none;
        }

        .${prefix}-picker-suffix > * {
          vertical-align: top;
        }

        .${prefix}-picker-clear {
          position: absolute;
          top: 50%;
          right: 0;
          color: ${pattern.color.disabled};
          line-height: 1;
          background: ${pattern.color.bg};
          transform: translateY(-50%);
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s, color 0.3s;
        }

        .${prefix}-picker-clear > * {
          vertical-align: top;
        }

        .${prefix}-picker-clear:hover {
          color: ${pattern.color.hover};
        }

        .${prefix}-picker-separator {
          position: relative;
          display: inline-block;
          width: 1em;
          height: 16px;
          color: ${pattern.color.disabled};
          font-size: ${pattern.size.fontLarge};
          vertical-align: top;
          cursor: default;
        }

        .${prefix}-picker-focused .${prefix}-picker-separator {
          color: ${pattern.color.hover};
        }

        .${prefix}-picker-disabled .${prefix}-picker-range-separator .${prefix}-picker-separator {
          cursor: not-allowed;
        }

        .${prefix}-picker-range {
          position: relative;
          display: inline-flex;
        }

        .${prefix}-picker-range .${prefix}-picker-clear {
          right: 11px;
        }

        .${prefix}-picker-range:hover .${prefix}-picker-clear {
          opacity: 1;
        }

        .${prefix}-picker-range .${prefix}-picker-active-bar {
          bottom: -1px;
          height: 2px;
          margin-left: 11px;
          background: ${pattern.color.base};
          opacity: 0;
          transition: all 0.3s ease-out;
          pointer-events: none;
        }

        .${prefix}-picker-range.${prefix}-picker-focused .${prefix}-picker-active-bar {
          opacity: 1;
        }

        .${prefix}-picker-range-separator {
          align-items: center;
          padding: 0 8px;
          line-height: 1;
        }

        .${prefix}-picker-range.${prefix}-picker-small .${prefix}-picker-clear {
          right: 7px;
        }

        .${prefix}-picker-dropdown {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          color: ${pattern.color.text};
          font-size: ${pattern.size.fontMedium};
          font-variant: tabular-nums;
          line-height: 1.5715;
          list-style: none;
          font-feature-settings: 'tnum';
          position: absolute;
          z-index: 1050;
        }

        .${prefix}-picker-dropdown-hidden {
          display: none;
        }

        // .${prefix}-picker-dropdown-placement-bottomLeft .${prefix}-picker-range-arrow {
        //   top: 1.66666667px;
        //   display: block;
        //   transform: rotate(-45deg);
        // }

        // .${prefix}-picker-dropdown-placement-topLeft .${prefix}-picker-range-arrow {
        //   bottom: 1.66666667px;
        //   display: block;
        //   transform: rotate(135deg);
        // }

        .${prefix}-picker-dropdown-range {
          padding: 6.66666667px 0;
        }

        .${prefix}-picker-dropdown-range-hidden {
          display: none;
        }

        .${prefix}-picker-dropdown .${prefix}-picker-panel > .${prefix}-picker-time-panel {
          padding-top: 4px;
        }

        .${prefix}-picker-ranges {
          margin: 0;
          padding: 4px 12px;
          overflow: hidden;
          line-height: 34px;
          text-align: left;
          list-style: none;
        }

        .${prefix}-picker-ranges > li {
          display: inline-block;
        }

        .${prefix}-picker-ranges > li::before {
          display: none;
        }

        .${prefix}-picker-ranges .${prefix}-picker-preset > .tag {
          color: ${pattern.color.base};
          border-color: ${pattern.color.border};
          margin-right: 8px;
          cursor: pointer;
        }

        .${prefix}-picker-ranges .${prefix}-picker-preset > .tag:hover {
          background: ${pattern.color.bg2};
        }

        .${prefix}-picker-ranges .${prefix}-picker-ok {
          float: right;
          margin-left: 8px;
          margin-top: 5px;
        }

        .${prefix}-picker-ranges .${prefix}-picker-ok .btn {
          min-width: auto;
        }

        .${prefix}-picker-range-wrapper {
          display: flex;
        }

        // .${prefix}-picker-range-arrow {
        //   position: absolute;
        //   z-index: 1;
        //   display: none;
        //   width: 10px;
        //   height: 10px;
        //   margin-left: 16.5px;
        //   box-shadow: 2px -2px 6px ${pattern.color.shadow2};
        //   transition: left 0.3s ease-out;
        // }

        // .${prefix}-picker-range-arrow::after {
        //   position: absolute;
        //   top: 1px;
        //   right: 1px;
        //   width: 10px;
        //   height: 10px;
        //   border: 5px solid ${pattern.color.border};
        //   border-color: ${pattern.color.bg} ${pattern.color.bg} transparent transparent;
        //   content: '';
        // }

        .${prefix}-picker-panel-container {
          overflow: hidden;
          vertical-align: top;
          padding: 10px;
          background: ${pattern.color.bg};
          border: 1px solid ${pattern.color.border};
          border-radius: 30px;
          box-shadow: ${pattern.color.containerShadow};
          transition: margin 0.3s;
        }

        .${prefix}-picker-panel-container .${prefix}-picker-panels {
          display: inline-flex;
          flex-wrap: nowrap;
          direction: ltr;
        }

        .${prefix}-picker-panel-container .${prefix}-picker-panel {
          vertical-align: top;
          background: 0 0;
          border-width: 0 0 1px;
          border-radius: 0;
        }

        .${prefix}-picker-panel-container .${prefix}-picker-panel-focused {
          border-color: ${pattern.color.border};
        }
      `}</style>
    </>
  )
}
