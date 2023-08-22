"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{438746:function(Qn,mn,t){t.d(mn,{Z:function(){return xn}});var un=t(97857),b=t.n(un),hn=t(952677),v=t.n(hn),On=t(805574),an=t.n(On),kn=t(830084),c=t(667294),h=t(302559);function R(s){return s.replace("-cn","").replace(/\/$/,"")}function xn(){var s=(0,kn.TH)(),X=s.search,zn=(0,h.Z)(),m=an()(zn,2),y=m[1],g=c.useCallback(function(n,I){var O=R(n);if(y==="cn"&&(O="".concat(O,"-cn")),X&&(O="".concat(O).concat(X)),I){var $;v()(I)==="object"?$=I[y]:$=I,O="".concat(O,"#").concat($)}return O},[y,X]);return b()(b()({},s),{},{pathname:R(s.pathname),getLink:g})}},148050:function(Qn,mn,t){t.d(mn,{Z:function(){return xn}});var un=t(168400),b=t.n(un),hn=t(667294),v=t(186548),On=t(65630),an=t(879587),kn=t(785893),c,h="https://github.com/ant-design/ant-design/edit/master/",R=(0,On.kc)(function(s){var X=s.token,zn=s.css,m=X.colorIcon,y=X.colorText,g=X.iconCls;return{editButton:zn(c||(c=b()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),g,m,y)}});function xn(s){var X=s.title,zn=s.filename,m=R(),y=m.styles;return(0,kn.jsx)(an.Z,{title:X,children:(0,kn.jsx)("a",{className:y.editButton,href:"".concat(h).concat(zn),target:"_blank",rel:"noopener noreferrer",children:(0,kn.jsx)(v.Z,{})})})}},472638:function(Qn,mn,t){var un=t(97857),b=t.n(un),hn=t(952677),v=t.n(hn),On=t(805574),an=t.n(On),kn=t(513769),c=t.n(kn),h=t(667294),R=t(830084),xn=t(574865),s=t.n(xn),X=t(785893),zn=["to","children"],m=(0,h.forwardRef)(function(y,g){var n=y.to,I=y.children,O=c()(y,zn),$=(0,h.useTransition)(),bn=an()($,2),Mn=bn[0],P=bn[1],en=(0,R.s0)(),vn=(0,R.TH)(),Dn=vn.pathname,pn=(0,h.useMemo)(function(){return v()(n)==="object"?"".concat(n.pathname||Dn).concat(n.search||"").concat(n.hash||""):n},[n]),Gn=function(Wn){pn.startsWith("http")||!Wn.metaKey&&!Wn.ctrlKey&&!Wn.shiftKey&&(Wn.preventDefault(),P(function(){en(pn)}))};return(0,h.useLayoutEffect)(function(){Mn?s().start():s().done()},[Mn]),(0,X.jsx)("a",b()(b()({ref:g,href:pn,onClick:Gn},O),{},{children:I}))});mn.Z=m},334230:function(Qn,mn,t){t.r(mn),t.d(mn,{default:function(){return br}});var un=t(805574),b=t.n(un),hn=t(294184),v=t.n(hn),On=t(727484),an=t.n(On),kn=t(533852),c=t(830084),h=t(667294),R=t(715778),xn=t(634577),s=t(302559),X=t(438746),zn=t(168400),m=t.n(zn),y=t(370917),g=t(65630),n=t(785893),I,O={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},$=function(){var e=(0,g.Fg)(),o=function l(u){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return j<=10?`
.palette-`.concat(u,"-").concat(j,` {
  background: `).concat(e["".concat(u,"-").concat(j)],`;
}
`).concat(l(u,j+1),`
    `):""},i=function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return u<=13?`
.palette-gray-`.concat(u,` {
  background: `).concat(O[u],`;
}
`).concat(l(u+1),`
    `):""};return(0,n.jsx)(y.xB,{styles:(0,y.iv)(I||(I=m()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,o("blue"),o("purple"),o("cyan"),o("green"),o("magenta"),o("red"),o("volcano"),o("orange"),o("gold"),o("yellow"),o("lime"),o("geekblue"),i())})},bn=$,Mn,P=function(){return(0,n.jsx)(y.xB,{styles:(0,y.iv)(Mn||(Mn=m()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},en,vn=function(){var a=(0,g.Fg)();return(0,n.jsx)(y.xB,{styles:(0,y.iv)(en||(en=m()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},Dn,pn=function(){var a=(0,g.Fg)(),e=a.headerHeight,o=a.margin;return(0,n.jsx)(y.xB,{styles:(0,y.iv)(Dn||(Dn=m()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      html {
        scroll-padding-top: `,`px;
      }
    `])),e+o)})},Gn=t(510274),qn,Wn=function(){var e=(0,g.Fg)(),o=e.antCls,i=e.colorPrimary;return(0,n.jsx)(y.xB,{styles:(0,y.iv)(qn||(qn=m()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          width: 100%;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,o,o,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,o,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),o,o,o,i,new Gn.C(i).setAlpha(.75).toHex8String(),o,o,e.colorWhite,o,new Gn.C(i).setAlpha(.75).toHexString(),o,o,new Gn.C(i).setAlpha(.75).toHexString(),o,o,o,o,new Gn.C(i).setAlpha(.6).toHexString(),o,o,o)})},me=Wn,le,Nn=function(){var a=(0,g.Fg)();return(0,n.jsx)(y.xB,{styles:(0,y.iv)(le||(le=m()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius)})},p,U=function(){var e=(0,g.Fg)(),o=e.antCls,i=e.iconCls;return(0,n.jsx)(y.xB,{styles:(0,y.iv)(p||(p=m()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              margin-top: -16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,o,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,i,e.colorTextSecondary,e.colorText,o,o,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,o,o,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,i,e.colorBgContainer,i,e.green6,e.colorBgContainer,e.purple3,e.purple6,o)})},x=U,r,d=function(){var a=(0,g.Fg)(),e=a.antCls,o=a.iconCls;return(0,n.jsx)(y.xB,{styles:(0,y.iv)(r||(r=m()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),o,e,a.colorPrimary,o,e)})},C,E=function(){var a=(0,g.Fg)(),e=a.iconCls;return(0,n.jsx)(y.xB,{styles:(0,y.iv)(C||(C=m()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,e,a.colorLinkHover)})},z,Z=function(){return(0,n.jsx)(y.xB,{styles:(0,y.iv)(z||(z=m()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},H,w=function(){var a=(0,g.Fg)();return(0,n.jsx)(y.xB,{styles:(0,y.iv)(H||(H=m()([`
        .nav-phone-icon {
          position: absolute;
          top: 25px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},V,Y=function(){var a=(0,g.Fg)();return(0,n.jsx)(y.xB,{styles:(0,y.iv)(V||(V=m()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},tn,sn=function(){var a=(0,g.Fg)();return(0,n.jsx)(y.xB,{styles:(0,y.iv)(tn||(tn=m()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},gn,cn="dumi-default-",yn=function(){var a=(0,g.Fg)();return(0,n.jsx)(y.xB,{styles:(0,y.iv)(gn||(gn=m()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),cn,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,cn,a.colorBgElevated,a.colorBgElevated,cn,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},_,Pn=function(){return(0,n.jsx)(y.xB,{styles:(0,y.iv)(_||(_=m()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},on=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vn,{}),(0,n.jsx)(pn,{}),(0,n.jsx)(me,{}),(0,n.jsx)(Nn,{}),(0,n.jsx)(x,{}),(0,n.jsx)(d,{}),(0,n.jsx)(E,{}),(0,n.jsx)(Z,{}),(0,n.jsx)(w,{}),(0,n.jsx)(Y,{}),(0,n.jsx)(sn,{}),(0,n.jsx)(Pn,{}),(0,n.jsx)(bn,{}),(0,n.jsx)(P,{}),(0,n.jsx)(yn,{})]})},En=on,Hn=t(857278),Ln=t(430932),wn=t(985093),Bn=t(115668),re=t(642207),Un=t(301210),ln=t(13923),An=t(825035),Yn=t(937993),se=t(448118),ne=t(938545),he=t(569980),ae=t(391298),be=t(630770),Xn=t(438199),ge=t(693399),ee="ant-where-checker",Ae={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function Ie(){var a=(0,s.Z)(Ae),e=b()(a,1),o=e[0],i=h.useState(!0),l=b()(i,2),u=l[0],j=l[1];return h.useEffect(function(){var S=document.createElement("p");S.className=ee,S.style.position="fixed",S.style.pointerEvents="none",S.style.visibility="hidden",S.style.width="0",document.body.appendChild(S),(0,ge.updateCSS)(`
:where(.`.concat(ee,`) {
  content: "__CHECK__";
}
    `),ee);var k=getComputedStyle(S),f=k.content;j(String(f).includes("CHECK")),document.body.removeChild(S),(0,ge.removeCSS)(ee)},[]),u?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[o.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:o.whereDocUrl,children:o.whereDocTitle})]})})}var ie,ce,ke={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Oe=function(){var e=(0,h.useContext)(Xn.Z),o=e.isMobile;return(0,g.kc)(function(i){var l=i.token,u=i.css,j=new Gn.C((0,be.Z)("#f0f3fa","#fff")).onBackground(l.colorBgContainer).toHexString();return{holder:u(ie||(ie=m()([`
      background: `,`;
    `])),j),footer:u(ce||(ce=m()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),j,l.colorTextSecondary,l.colorText,o?60:0,o?20:0,l.marginXXL,l.fontSize)}})()},He=function(){var e=(0,X.Z)(),o=(0,s.Z)(ke),i=b()(o,2),l=i[0],u=i[1],j=Oe(),S=j.styles,k=e.getLink,f=h.useMemo(function(){var T=u==="cn",D={title:(0,n.jsx)(c._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:T?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:T?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:T?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(c._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(c._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(c._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(c._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(c._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(c._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(c._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(c._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},L={title:(0,n.jsx)(c._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(Hn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(Ln.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(wn.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(c._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(Bn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(c._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(Bn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(c._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(c._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};T&&L.items.push({icon:(0,n.jsx)(re.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.work_with_us"}),url:k("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:c.rU});var G={title:(0,n.jsx)(c._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(Un.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(ln.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.change-log"}),url:k("/changelog"),LinkComponent:c.rU},{icon:(0,n.jsx)(An.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.faq"}),url:k("/docs/react/faq"),LinkComponent:c.rU},{icon:(0,n.jsx)(Yn.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(se.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(ne.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(An.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(An.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},nn={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(c._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(c._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(c._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(c._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(c._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(c._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(c._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(he.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.theme"}),url:k("/theme-editor"),LinkComponent:c.rU}]};return[D,L,G,nn]},[u,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ae.Z,{columns:f,className:S.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:l.owner})]})}),(0,n.jsx)(Ie,{})]})},Ee=He,Re=t(97857),K=t.n(Re),Le=t(9783),ye=t.n(Le),ze=t(660532),Ze=t(24569),Fe=t(469181),We=t(344682),$e=t(664095),fe=t(883458),_e=t(316165),q="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",jn="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Cn=function(e){return(0,n.jsx)(_e.Z,K()(K()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?q:jn})})}))},Vn=Cn,dn=t(373638),we,xe,te=(0,g.kc)(function(a){var e=a.token,o=a.css,i=e.headerHeight,l=e.colorTextHeading,u=e.fontFamily,j=e.mobileMaxWidth;return{logo:o(we||(we=m()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,l,u,i,l,j),title:o(xe||(xe=m()([`
      line-height: 32px;
    `])))}}),ve=function(e){var o=e.isZhCN,i=(0,c.TH)(),l=i.search,u=te(),j=u.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(c.rU,{to:dn.J1("/",o,l),className:j.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:j.title,children:"Ant Design"})]})})},Me=ve,De=t(280882),lo=t(963918),de=t(905303),Qe,qe,nt,et,tt=(0,g.kc)(function(a){var e=a.css,o=a.token;return{smallStyle:e(Qe||(Qe=m()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(qe||(qe=m()([`
    color: `,`;
  `])),o.colorTextQuaternary),downOutlined:e(nt||(nt=m()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(et||(et=m()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),ot=function(){var e=tt(),o=e.styles;return(0,n.jsxs)("span",{className:o.smallStyle,children:["(",(0,n.jsx)(c._H,{id:"app.implementation.community"}),")"]})},rt=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(ot,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(ot,{})]}),key:"vue"}]},so=function(e){var o=e.isRTL,i=tt(),l=i.styles;return(0,n.jsx)(lo.Z,{menu:{items:rt()},placement:"bottomRight",children:(0,n.jsxs)(de.ZP,{size:"small",children:[(0,n.jsx)(c._H,{id:"app.header.menu.more"}),(0,n.jsx)(De.Z,{className:v()(o?l.downOutlinedRTL:l.downOutlined,l.down)})]})})},co=so,uo=t(719632),ue=t.n(uo),at=t(923232),oe=t(472638),it,lt,po={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},mo=(0,g.kc)(function(a){var e=a.token,o=e.antCls,i=e.iconCls,l=e.fontFamily,u=e.headerHeight,j=e.menuItemBorder,S=e.colorPrimary,k=e.colorText;return{nav:(0,g.iv)(it||(it=m()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),l,o,o,o,40+12*2,u,u,j,k,o,i,o,S,o,o),popoverMenuNav:(0,g.iv)(lt||(lt=m()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),o,o,o,o,o)}}),ho=function(a){var e,o,i,l=a.isZhCN,u=a.isMobile,j=a.responsive,S=a.directionText,k=a.onLangChange,f=a.onDirectionChange,T=(0,c.TH)(),D=T.pathname,L=T.search,G=(0,s.Z)(po),nn=b()(G,1),W=nn[0],A=(0,c.yh)(),F=((e=A["/docs/blog"])===null||e===void 0||(o=e[0])===null||o===void 0?void 0:o.children)||[],N=mo(),M=N.styles,J=u?"inline":"horizontal",Rn=D.split("/").filter(function(B){return B}).slice(0,-1).join("/"),Tn=Rn||"home";D.startsWith("/changelog")?Tn="docs/react":D.startsWith("/docs/resources")&&(Tn="docs/resources");var Zn,$n=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(c._H,{id:"app.header.lang"}),onClick:k,key:"switch-lang"},{label:S,onClick:f,key:"switch-direction"}].concat(ue()(rt()));u?Zn=$n:j==="crowded"&&(Zn=[{label:(0,n.jsx)(ze.Z,{}),key:"additional",children:ue()($n)}]);var Kn=[{label:(0,n.jsx)(oe.Z,{to:dn.J1("/docs/spec/introduce",l,L),children:W.design}),key:"docs/spec"},{label:(0,n.jsx)(oe.Z,{to:dn.J1("/docs/react/introduce",l,L),children:W.development}),key:"docs/react"},{label:(0,n.jsx)(oe.Z,{to:dn.J1("/components/overview/",l,L),children:W.components}),key:"components"},F.length?{label:(0,n.jsx)(oe.Z,{to:dn.J1(F.sort(function(B,fn){return B.frontmatter.date>fn.frontmatter.date?-1:1})[0].link,l,L),children:W.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(oe.Z,{to:dn.J1("/docs/resources",l,L),children:W.resources}),key:"docs/resources"},l?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(ue()((i=Zn)!==null&&i!==void 0?i:[]));return(0,n.jsx)(at.Z,{mode:J,selectedKeys:[Tn],className:M.nav,disabledOverflow:!0,items:Kn,style:{borderRight:0}})},st=t(879587),ct,dt,ut,pt,mt,je="1.2em",go=(0,g.kc)(function(a){var e=a.token,o=a.css,i=e.colorText,l=e.colorBorder,u=e.colorBgContainer,j=e.colorBgTextHover,S=e.borderRadius,k=e.controlHeight,f=e.motionDurationMid;return{btn:o(ct||(ct=m()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,l,k,k,S,f,f,j,je,je,je),innerDiv:o(dt||(dt=m()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),je,je),labelStyle:o(ut||(ut=m()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),je,i,i),label1Style:o(pt||(pt=m()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,u),label2Style:o(mt||(mt=m()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),fo=function(e){var o=e.label1,i=e.label2,l=e.tooltip1,u=e.tooltip2,j=e.value,S=e.pure,k=e.onClick,f=go(),T=f.styles,D=T.btn,L=T.innerDiv,G=T.labelStyle,nn=T.label1Style,W=T.label2Style,A=(0,n.jsx)("button",{onClick:k,className:D,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[S&&(j===1?o:i),!S&&(0,n.jsxs)("div",{className:L,children:[(0,n.jsx)("span",{className:v()(G,j===1?nn:W),children:o}),(0,n.jsx)("span",{className:v()(G,j===1?W:nn),children:i})]})]})},"lang-button");return l||u?(0,n.jsx)(st.Z,{title:j===1?l:u,children:A}):A},Ue=fo,ht,gt,ft,xt=1120,vt=1200,xo=(0,g.kc)(function(a){var e=a.token,o=a.css,i="#ced4d9";return{header:o(ht||(ht=m()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,i,i,i),menuRow:o(gt||(gt=m()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:o(ft||(ft=m()([`
      width: 16px;
    `]))),popoverMenu:ye()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0})}}),vo=function(){var e=(0,s.Z)(),o=b()(e,2),i=o[1],l=(0,c.WF)(),u=l.pkg,j=(0,dn.Is)(),S=(0,h.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),k=b()(S,2),f=k[0],T=k[1],D=(0,h.useContext)(Xn.Z),L=D.direction,G=D.isMobile,nn=D.updateSiteConfig,W=(0,h.useRef)(null),A=(0,c.TH)(),F=A.pathname,N=A.search,M=xo(),J=M.styles,Rn=(0,h.useCallback)(function(){T(function(Sn){return K()(K()({},Sn),{},{menuVisible:!1})})},[]),Tn=(0,h.useCallback)(function(){T(function(Sn){return K()(K()({},Sn),{},{windowWidth:window.innerWidth})})},[]),Zn=(0,h.useCallback)(function(){T(function(Sn){return K()(K()({},Sn),{},{menuVisible:!0})})},[]),$n=(0,h.useCallback)(function(Sn){T(function(pe){return K()(K()({},pe),{},{menuVisible:Sn})})},[]),Kn=function(){nn({direction:L!=="rtl"?"rtl":"ltr"})};(0,h.useEffect)(function(){Rn()},[A]),(0,h.useEffect)(function(){return Tn(),window.addEventListener("resize",Tn),function(){window.removeEventListener("resize",Tn),W.current&&clearTimeout(W.current)}},[]);var B=(0,h.useCallback)(function(Sn){var pe=window.location.href,Cr=window.location.pathname;if(/overview/.test(Cr)&&/0?[1-39][0-3]?x/.test(Sn)){window.location.href=pe.replace(window.location.origin,Sn).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(Sn)?"":"/react","/introduce")).replace(/\/$/,"");return}var Je=new URL(pe.replace(window.location.origin,Sn));Je.host.includes("antgroup")&&(window.location.href="".concat(Je.href.replace(/\/$/,""),"/")),window.location.href=Je.href.replace(/\/$/,"")},[]),fn=(0,h.useCallback)(function(){var Sn="".concat(window.location.protocol,"//"),pe=window.location.href.slice(Sn.length);dn.Fy()&&localStorage.setItem("locale",dn.KE(F)?"en-US":"zh-CN"),window.location.href=Sn+pe.replace(window.location.pathname,dn.J1(F,!dn.KE(F),N).pathname)},[A]),Fn=(0,h.useMemo)(function(){return L!=="rtl"?"RTL":"LTR"},[L]),Jn=(0,h.useMemo)(function(){return L==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[L]),_n=f.menuVisible,Ce=f.windowWidth,Q=f.searching,rn=K()(ye()({},u.version,u.version),j==null?void 0:j.docVersions),In=Object.keys(rn).map(function(Sn){return{value:rn[Sn],label:Sn}}),Se=["","index","index-cn"].includes(F),yr=i==="cn",wr=L==="rtl",Ve=null;Ce<xt?Ve="crowded":Ce<vt&&(Ve="narrow");var jr=v()(J.header,"clearfix",{"home-header":Se}),Ye={isZhCN:yr,isRTL:wr},ao=(0,n.jsx)(ho,K()(K()({},Ye),{},{responsive:Ve,isMobile:G,directionText:Fn,onLangChange:fn,onDirectionChange:Kn}),"nav"),Te=[ao,(0,n.jsx)(Fe.Z,{className:"version",size:"small",defaultValue:u.version,onChange:B,dropdownStyle:Jn,popupMatchSelectWidth:!1,getPopupContainer:function(pe){return pe.parentNode},options:In},"version"),(0,n.jsx)(co,K()({},Ye),"more"),(0,n.jsx)(Ue,{onClick:fn,value:dn.KE(F)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(Ue,{onClick:Kn,value:L==="rtl"?2:1,label1:(0,n.jsx)(Vn,{className:J.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Vn,{className:J.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(Ue,{value:1,label1:(0,n.jsx)(Un.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];Ce<xt?Te=Q?[]:[ao]:Ce<vt&&(Te=Q?[]:Te);var io=Se?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:jr,children:[G&&(0,n.jsx)(We.Z,{overlayClassName:J.popoverMenu,placement:"bottomRight",content:Te,trigger:"click",open:_n,arrow:{arrowPointAtCenter:!0},onOpenChange:$n,children:(0,n.jsx)(ze.Z,{className:"nav-phone-icon",onClick:Zn})}),(0,n.jsxs)($e.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(fe.Z,K()(K()({},io[0]),{},{children:(0,n.jsx)(Me,K()(K()({},Ye),{},{location:A}))})),(0,n.jsxs)(fe.Z,K()(K()({},io[1]),{},{className:J.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Ze.ZP,{})}),!G&&Te]}))]})]})},bo=vo,Sr=t(945462),yo=t(377376),Ne=t(185209),wo=function(){var e=(0,c.eL)(),o=(0,h.useMemo)(function(){var j;if(!e.frontmatter.subtitle&&!e.frontmatter.title)j="404 Not Found - Ant Design";else{var S;j="".concat(e.frontmatter.subtitle||""," ").concat(((S=e.frontmatter)===null||S===void 0?void 0:S.title)||""," - Ant Design")}var k=e.frontmatter.description||"";return[j,k]},[e]),i=b()(o,2),l=i[0],u=i[1];return(0,n.jsxs)(c.ql,{children:[(0,n.jsx)("title",{children:l}),(0,n.jsx)("meta",{property:"og:title",content:l}),u&&(0,n.jsx)("meta",{name:"description",content:u})]})},bt=wo,yt=t(148050),jo=t(823493),Co=t.n(jo),So=t(517951),ko=t(658192),wt,jt,Ct,St=["scroll","resize"],Eo=(0,g.kc)(function(a){var e=a.token,o=a.css,i=e.boxShadowSecondary,l=e.antCls;return{affixTabs:o(wt||(wt=m()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,l,l,l),affixTabsFixed:o(jt||(jt=m()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:o(Ct||(Ct=m()([`
      text-transform: capitalize;
    `])))}}),kt=32,Lo=function(){var e=h.useRef(null),o=h.useRef([]),i=h.useState(!1),l=b()(i,2),u=l[0],j=l[1],S=h.useState(null),k=b()(S,2),f=k[0],T=k[1],D=Eo(),L=D.styles,G=L.affixTabs,nn=L.affixTabsFixed,W=L.span;function A(N){var M=document.getElementById(N);if(M){var J=M.offsetTop-e.current.offsetHeight-kt;(0,ko.Z)(J)}}h.useEffect(function(){o.current=Array.from(document.querySelectorAll("h2[id]")).map(function(N){var M=N.id;return M}),j(!0)},[]),h.useEffect(function(){var N=decodeURIComponent((location.hash||"").slice(1));N&&A(N)},[u]);var F=h.useMemo(function(){function N(){for(var M=window,J=M.scrollY,Rn=e.current.offsetHeight,Tn=o.current.length-1;Tn>=0;Tn-=1){var Zn=o.current[Tn],$n=document.getElementById(Zn),Kn=$n.offsetTop-Rn-kt;if(Kn<=J){T(Zn);return}}T(null)}return Co()(N)},[]);return h.useEffect(function(){return St.forEach(function(N){return window.addEventListener(N,F)}),F(),function(){St.forEach(function(N){return window.removeEventListener(N,F)})}},[]),(0,n.jsx)("div",{className:v()(G,f&&nn),ref:e,children:(0,n.jsx)(So.Z,{activeKey:f,onChange:A,items:o.current.map(function(N){return{key:N,label:(0,n.jsx)("span",{className:W,children:N.replace(/-/g," ")})}})})})},Po=Lo,Et,Lt,Pt,Tt=40,Be=1208,Ke=24,To=(0,g.kc)(function(a){var e=a.token,o=a.css,i=e.antCls;return{resourcePage:o(Et||(Et=m()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),Be),resourceContent:o(Lt||(Lt=m()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Tt,Be,Ke,i),banner:o(Pt||(Pt=m()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Tt,Be,Be,Ke,Ke)}}),zo=function(e){var o,i=e.children,l=To(),u=l.styles,j=(0,c.eL)();return(0,n.jsx)(xn.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(yo.Z,{children:[(0,n.jsx)(bt,{}),(0,n.jsxs)("div",{id:"resources-page",className:u.resourcePage,children:[(0,n.jsx)(Po,{}),(0,n.jsxs)("div",{className:u.banner,children:[(0,n.jsxs)(Ne.Z.Title,{style:{fontSize:30},children:[(o=j.frontmatter)===null||o===void 0?void 0:o.title,(0,n.jsx)(yt.Z,{title:(0,n.jsx)(c._H,{id:"app.content.edit-page"}),filename:j.frontmatter.filename})]}),(0,n.jsx)("section",{children:j.frontmatter.description})]}),(0,n.jsx)("div",{className:u.resourceContent,children:i}),(0,n.jsx)(Ee,{})]})]})})},Mo=zo,Do=t(720841),No=t(538294),zt=t(575054),Mt=t(796586),Bo=t(605071),Ge=t(945016),Ao=t(217187),Pe=t(618073),Dt=t(206171),Io=t(899242),Oo=t(566254),Ho=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,c.yh)(),i=(0,X.Z)(),l=i.pathname,u=i.search,j=(0,c.tx)(),S=e.before,k=e.after,f=(0,h.useMemo)(function(){var T,D=ue()(j!=null?j:[]);if(l.startsWith("/docs/spec")){var L=D.splice(0,1);D.push.apply(D,ue()(L))}if(l.startsWith("/docs/react")){var G,nn=(G=Object.entries(o).find(function(N){var M=b()(N,1),J=M[0];return J.startsWith("/changelog")}))===null||G===void 0?void 0:G[1];nn&&D.splice(1,0,nn[0])}if(l.startsWith("/changelog")){var W,A=(W=Object.entries(o).find(function(N){var M=b()(N,1),J=M[0];return J.startsWith("/docs/react")}))===null||W===void 0?void 0:W[1];A&&(D.unshift(A[0]),D.push.apply(D,ue()(A.slice(1))))}var F=function(M){var J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return M&&J&&(0,n.jsx)(Io.Z,{color:M==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:M.replace("VERSION",Oo.Z)})};return(T=D==null?void 0:D.reduce(function(N,M){if(M!=null&&M.title)if(l.startsWith("/docs/spec")){var J,Rn,Tn=M.children.reduce(function(B,fn){var Fn,Jn,_n=(Fn=(Jn=fn.frontmatter)===null||Jn===void 0?void 0:Jn.type)!==null&&Fn!==void 0?Fn:"default";return B[_n]||(B[_n]=[]),B[_n].push(fn),B},{}),Zn=[];Zn.push.apply(Zn,ue()((J=(Rn=Tn.default)===null||Rn===void 0?void 0:Rn.map(function(B){return{label:(0,n.jsxs)(oe.Z,{to:"".concat(B.link).concat(u),children:[S,B==null?void 0:B.title,k]}),key:B.link.replace(/(-cn$)/g,"")}}))!==null&&J!==void 0?J:[])),Object.entries(Tn).forEach(function(B){var fn=b()(B,2),Fn=fn[0],Jn=fn[1];Fn!=="default"&&Zn.push({type:"group",label:Fn,key:Fn,children:Jn==null?void 0:Jn.map(function(_n){return{label:(0,n.jsxs)(oe.Z,{to:"".concat(_n.link).concat(u),children:[S,_n==null?void 0:_n.title,k]}),key:_n.link.replace(/(-cn$)/g,"")}})})}),N.push({label:M==null?void 0:M.title,key:M==null?void 0:M.title,children:Zn})}else{var $n;N.push({type:"group",label:M==null?void 0:M.title,key:M==null?void 0:M.title,children:($n=M.children)===null||$n===void 0?void 0:$n.map(function(B){var fn,Fn;return{label:(0,n.jsxs)(oe.Z,{to:"".concat(B.link).concat(u),style:{display:"flex",alignItems:"center"},children:[S,(0,n.jsx)("span",{children:B==null?void 0:B.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(fn=B.frontmatter)===null||fn===void 0?void 0:fn.subtitle},"chinese"),F((Fn=B.frontmatter)===null||Fn===void 0?void 0:Fn.tag,!S&&!k),k]}),key:B.link.replace(/(-cn$)/g,"")}})})}else{var Kn=M.children||[];Kn.every(function(B){var fn;return B==null||(fn=B.frontmatter)===null||fn===void 0?void 0:fn.date})&&Kn.sort(function(B,fn){return B.frontmatter.date>fn.frontmatter.date?-1:1}),N.push.apply(N,ue()(Kn.map(function(B){return{label:(0,n.jsxs)(oe.Z,{to:"".concat(B.link).concat(u),style:{display:"flex",alignItems:"center"},children:[S,B==null?void 0:B.title,F(B.frontmatter.tag,!S&&!k),k]}),key:B.link.replace(/(-cn$)/g,"")}})))}return N},[]))!==null&&T!==void 0?T:[]},[j,o,l,u,e]);return[f,l]},Nt=Ho,Bt,At,It,Ot,Ro=(0,g.kc)(function(a){var e=a.token,o=a.css,i=e.colorSplit,l=e.iconCls,u=e.fontSizeIcon;return{prevNextNav:o(Bt||(Bt=m()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),i),pageNav:o(At||(At=m()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),l,u),prevNav:o(It||(It=m()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:o(Ot||(Ot=m()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),Zo=function a(e){return Array.isArray(e)?e.reduce(function(o,i){if(!i)return o;if("children"in i&&i.children){var l;return o.concat((l=a(i.children))!==null&&l!==void 0?l:[])}return o.concat(i)},[]):null},Fo=function(e){var o=e.rtl,i=Ro(),l=i.styles,u={className:"footer-nav-icon-before"},j={className:"footer-nav-icon-after"},S=o?(0,n.jsx)(Pe.Z,K()({},u)):(0,n.jsx)(Dt.Z,K()({},u)),k=o?(0,n.jsx)(Dt.Z,K()({},j)):(0,n.jsx)(Pe.Z,K()({},j)),f=Nt({before:S,after:k}),T=b()(f,2),D=T[0],L=T[1],G=(0,h.useContext)(Xn.Z),nn=G.isMobile,W=(0,h.useMemo)(function(){var M=Zo(D);if(!M)return[null,null];var J=-1;return M.forEach(function(Rn,Tn){Rn&&Rn.key===L&&(J=Tn)}),[M[J-1],M[J+1]]},[D,L]),A=b()(W,2),F=A[0],N=A[1];return nn?null:(0,n.jsxs)("section",{className:l.prevNextNav,children:[F&&h.cloneElement(F.label,{className:v()(l.pageNav,l.prevNav,F.className)}),N&&h.cloneElement(N.label,{className:v()(l.pageNav,l.nextNav,N.className)})]})},Wo=Fo,$o=t(302281),_o=t(15060),Uo=t(889812),Ht,Rt,Zt,Ko=(0,g.kc)(function(a){var e=a.token,o=a.css;return{history:o(Ht||(Ht=m()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:o(Rt||(Rt=m()([`
    // white-space: pre;
  `]))),ref:o(Zt||(Zt=m()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),Go={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function Xo(a){var e=a.changelog,o=e===void 0?"":e,i=a.refs,l=i===void 0?[]:i,u=a.styles,j=h.useMemo(function(){for(var S=[],k=!1,f="",T=0;T<o.length;T+=1){var D=o[T];if(D!=="`")f+=D;else{var L=f;k&&(L=(0,n.jsx)("code",{children:L})),S.push(L),f="",k=!k}}return S.push(f),S},[o]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:j}),l==null?void 0:l.map(function(S){var k;return(0,n.jsxs)("a",{className:u.ref,href:S,target:"_blank",rel:"noreferrer",children:["#",(k=S.match(/^.*\/(\d+)$/))===null||k===void 0?void 0:k[1]]},S)})]})}function Vo(a,e){var o=(0,Uo.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return t.e(2104).then(t.t.bind(t,332104,19))}}:{key:"component-changelog-en",request:function(){return t.e(5212).then(t.t.bind(t,365212,19))}});return(0,h.useMemo)(function(){var i=a.replace(/-/g,""),l=Object.keys(o).find(function(u){return u.toLowerCase()===i.toLowerCase()});return o[l]},[o,a])}function Yo(a){var e,o=a.pathname,i=o===void 0?"":o,l=(0,s.Z)(Go),u=b()(l,2),j=u[0],S=u[1],k=h.useState(!1),f=b()(k,2),T=f[0],D=f[1],L=Ko(),G=L.styles,nn=((e=i.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",W=Vo(nn,S),A=h.useMemo(function(){var F={};return W==null||W.forEach(function(N){F[N.version]=F[N.version]||[],F[N.version].push(N)}),Object.keys(F).map(function(N){var M=F[N];return{children:(0,n.jsxs)(Ne.Z,{children:[(0,n.jsx)("h4",{children:N}),(0,n.jsx)("ul",{children:M.map(function(J,Rn){return(0,n.jsx)("li",{className:G.li,children:(0,n.jsx)(Xo,K()(K()({},J),{},{styles:G}))},Rn)})})]})}})},[W]);return!W||!W.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(de.ZP,{className:G.history,icon:(0,n.jsx)(ln.Z,{}),onClick:function(){D(!0)},children:j.changelog}),(0,n.jsx)($o.Z,{title:j.changelog,extra:(0,n.jsx)(oe.Z,{style:{fontSize:14},to:"/changelog".concat(S==="cn"?"-cn":""),children:j.full}),open:T,width:"40vw",onClose:function(){D(!1)},destroyOnClose:!0,children:(0,n.jsx)(_o.Z,{items:A})})]})}var Jo=function(a){return(0,n.jsx)(h.Suspense,{fallback:null,children:(0,n.jsx)(Yo,K()({},a))})},Qo=t(524229),Ft=t(211646),qo=t(294047),Wt=t(315816),nr=function(e){var o=e.className,i=e.style;return(0,n.jsx)("svg",{className:o,style:i,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},$t=nr,_t,Ut,Kt,Gt,Xt,Vt,Yt,Xe="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",er=(0,g.kc)(function(a){var e=a.token,o=a.css;return{card:o(_t||(_t=m()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:o(Ut||(Ut=m()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:o(Kt||(Kt=m()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:o(Gt||(Gt=m()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:o(Xt||(Xt=m()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:o(Vt||(Vt=m()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:o(Yt||(Yt=m()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),tr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},or=function(e){var o=e.zhihuLink,i=e.yuqueLink,l=e.juejinLink,u=(0,s.Z)(tr),j=b()(u,1),S=j[0],k=er(),f=k.styles,T=f.card,D=f.bigTitle,L=f.cardBody,G=f.left,nn=f.title,W=f.subTitle,A=f.btn;return!o&&!i&&!l?null:(0,n.jsxs)(qo.Z,{className:T,bordered:!1,children:[(0,n.jsx)("h3",{className:D,children:S.bigTitle}),o&&(0,n.jsxs)("div",{className:L,children:[(0,n.jsxs)("div",{className:G,children:[(0,n.jsx)("img",{src:Xe,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:nn,children:"Ant Design"}),(0,n.jsxs)("div",{className:W,children:[(0,n.jsx)(Bn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(Pe.Z,{className:"arrowIcon"}),(0,n.jsx)(de.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:S.zhiHu})]})]})]}),(0,n.jsx)(de.ZP,{type:"primary",className:A,icon:(0,n.jsx)(Bn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:o,children:S.buttonText})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Wt.Z,{}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsxs)("div",{className:G,children:[(0,n.jsx)("img",{src:Xe,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:nn,children:"Ant Design"}),(0,n.jsxs)("div",{className:W,children:[(0,n.jsx)(Ft.Z,{className:"logo yuque-logo"}),(0,n.jsx)(Pe.Z,{className:"arrowIcon"}),(0,n.jsx)(de.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:S.yuQue})]})]})]}),(0,n.jsx)(de.ZP,{type:"primary",className:A,icon:(0,n.jsx)(Ft.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:i,children:S.buttonText})]})]}),l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Wt.Z,{}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsxs)("div",{className:G,children:[(0,n.jsx)("img",{src:Xe,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:nn,children:"Ant Design"}),(0,n.jsxs)("div",{className:W,children:[(0,n.jsx)($t,{className:"logo juejin-logo"}),(0,n.jsx)(Pe.Z,{className:"arrowIcon"}),(0,n.jsx)(de.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:S.junjin})]})]})]}),(0,n.jsx)(de.ZP,{type:"primary",className:A,icon:(0,n.jsx)($t,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:l,children:S.buttonText})]})]})]})},rr=or,Jt,Qt,qt,no,eo,ar=(0,g.kc)(function(a){var e=a.token,o=a.css,i=e.antCls;return{contributorsList:o(Jt||(Jt=m()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),i,i,e.motionDurationSlow,i),listMobile:o(Qt||(Qt=m()([`
      margin: 1em 0 !important;
    `]))),toc:o(qt||(qt=m()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),i,i),tocWrapper:o(no||(no=m()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:o(eo||(eo=m()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),ir=function(e){var o=e.num,i=o===void 0?3:o;return(0,n.jsx)("li",{children:Array.from({length:i}).map(function(l,u){return(0,n.jsx)(zt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:u===0?0:-8}},u)})})},lr=function(e){var o=e.name,i=e.avatar,l=(0,h.useState)(!0),u=b()(l,2),j=u[0],S=u[1],k=(0,h.useState)(!1),f=b()(k,2),T=f[0],D=f[1];return(0,h.useLayoutEffect)(function(){var L=new Image;L.src=i,L.onload=function(){return S(!1)},L.onerror=function(){return D(!0)}},[]),T?null:j?(0,n.jsx)(zt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(Mt.C,{size:"small",src:i,alt:o,children:o})},sr=function(e){var o,i,l,u,j,S,k=e.children,f=(0,c.eL)(),T=(0,c.zh)(),D=(0,X.Z)(),L=D.pathname,G=D.hash,nn=(0,c.YB)(),W=nn.formatMessage,A=ar(),F=A.styles,N=(0,g.Fg)(),M=(0,h.useContext)(Xn.Z),J=M.direction,Rn=M.isMobile,Tn=(0,Ao.Z)(!1),Zn=b()(Tn,2),$n=Zn[0],Kn=Zn[1],B=(0,h.useMemo)(function(){var Q;return((Q=f.toc)===null||Q===void 0?void 0:Q.filter(function(rn){return rn._debug_demo}).map(function(rn){return rn.id}))||[]},[f]),fn=B.includes(G.slice(1));(0,h.useLayoutEffect)(function(){Kn(fn)},[]);var Fn=(0,h.useMemo)(function(){return{showDebug:$n,setShowDebug:Kn}},[$n,B]),Jn=(0,h.useMemo)(function(){return((T==null?void 0:T.toc)||f.toc).reduce(function(Q,rn){if(rn.depth===2)Q.push(K()({},rn));else if(rn.depth===3){var In=Q[Q.length-1];In&&(In.children=In.children||[],In.children.push(K()({},rn)))}return Q},[])},[T==null?void 0:T.toc,f.toc]),_n=J==="rtl",Ce=(0,h.useMemo)(function(){var Q=f.frontmatter.author;return Q?typeof Q=="string"?Q.split(",").map(function(rn){return{name:rn,avatar:"https://github.com/".concat(rn,".png")}}):Array.isArray(Q)?Q:[]:[]},[f.frontmatter.author]);return(0,n.jsx)(Qo.Z.Provider,{value:Fn,children:(0,n.jsxs)(fe.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!f.frontmatter.toc&&(0,n.jsx)("section",{className:F.tocWrapper,children:(0,n.jsx)(Bo.Z,{className:F.toc,affix:!1,targetOffset:N.marginXXL,showInkInFixed:!0,items:Jn.map(function(Q){var rn;return{href:"#".concat(Q.id),title:Q.title,key:Q.id,children:(rn=Q.children)===null||rn===void 0?void 0:rn.filter(function(In){return $n||!B.includes(In.id)}).map(function(In){return{key:In.id,href:"#".concat(In.id),title:(0,n.jsx)("span",{className:v()(B.includes(In.id)&&"toc-debug"),children:In==null?void 0:In.title})}})}})})}),(0,n.jsxs)("article",{className:v()(F.articleWrapper,{rtl:_n}),children:[(o=f.frontmatter)!==null&&o!==void 0&&o.title?(0,n.jsxs)(Ne.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(Ge.Z,{size:"small",children:[(i=f.frontmatter)===null||i===void 0?void 0:i.title,(l=f.frontmatter)===null||l===void 0?void 0:l.subtitle,!L.startsWith("/components/overview")&&(0,n.jsx)(yt.Z,{title:(0,n.jsx)(c._H,{id:"app.content.edit-page"}),filename:f.frontmatter.filename})]}),L.startsWith("/components/")&&(0,n.jsx)(Jo,{pathname:L})]}):null,f.frontmatter.date||f.frontmatter.author?(0,n.jsx)(Ne.Z.Paragraph,{children:(0,n.jsxs)(Ge.Z,{children:[f.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Do.Z,{})," ",an()(f.frontmatter.date).format("YYYY-MM-DD")]}),Ce.map(function(Q){return(0,n.jsx)("a",{href:"https://github.com/".concat(Q.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Ge.Z,{size:3,children:[(0,n.jsx)(lr,{name:Q.name,avatar:Q.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",Q.name]})]})},Q.name)})]})}):null,!f.frontmatter.__autoDescription&&f.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:k}),(((u=f.frontmatter)===null||u===void 0?void 0:u.zhihu_url)||((j=f.frontmatter)===null||j===void 0?void 0:j.yuque_url)||((S=f.frontmatter)===null||S===void 0?void 0:S.juejin_url))&&(0,n.jsx)(rr,{zhihuLink:f.frontmatter.zhihu_url,yuqueLink:f.frontmatter.yuque_url,juejinLink:f.frontmatter.juejin_url}),f.frontmatter.filename&&(0,n.jsx)(No.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:v()(F.contributorsList,ye()({},F.listMobile,Rn)),fileName:f.frontmatter.filename,renderItem:function(rn,In){var Se;return!rn||In?(0,n.jsx)(ir,{}):(Se=rn.username)!==null&&Se!==void 0&&Se.includes("github-actions")?null:(0,n.jsx)(st.Z,{mouseEnterDelay:.3,title:"".concat(W({id:"app.content.contributors"}),": ").concat(rn.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(rn.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(Mt.C,{size:"small",src:rn.url,alt:rn.username,children:rn.username})})})},rn.username)}})]}),(0,n.jsx)(Wo,{rtl:_n}),(0,n.jsx)(Ee,{})]})})},cr=sr,dr=t(650010),to,oo,ur=(0,g.kc)(function(a){var e=a.token,o=a.css,i=e.antCls,l=e.fontFamily,u=e.colorSplit;return{asideContainer:o(to||(to=m()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),l,i,i,i,i,i,i,u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:o(oo||(oo=m()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),pr=function(){var e=(0,c.tx)(),o=(0,h.useContext)(Xn.Z),i=o.isMobile,l=o.theme,u=ur(),j=u.styles,S=Nt(),k=b()(S,2),f=k[0],T=k[1],D=l.includes("dark"),L=(0,g.Fg)(),G=L.colorBgContainer,nn=(0,n.jsx)(xn.ZP,{theme:{components:{Menu:{itemBg:G,darkItemBg:G}}},children:(0,n.jsx)(at.Z,{items:f,inlineIndent:30,className:j.asideContainer,mode:"inline",theme:D?"dark":"light",selectedKeys:[T],defaultOpenKeys:e==null?void 0:e.map(function(W){var A=W.title;return A}).filter(function(W){return W})})});return i?(0,n.jsx)(dr.Z,{children:nn},"Mobile-menu"):(0,n.jsx)(fe.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:j.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:nn})})},mr=pr,ro,hr=(0,g.kc)(function(a){var e=a.css,o=a.token;return{main:e(ro||(ro=m()([`
    display: flex;
    margin-top: `,`px;
  `])),o.contentMarginTop)}}),gr=function(e){var o=e.children,i=hr(),l=i.styles;return(0,n.jsxs)("main",{className:l.main,children:[(0,n.jsx)(bt,{}),(0,n.jsx)(mr,{}),(0,n.jsx)(cr,{children:o})]})},fr=gr,xr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},vr=function(){var e=(0,c.pC)(),o=(0,X.Z)(),i=o.pathname,l=o.search,u=o.hash,j=(0,s.Z)(xr),S=b()(j,2),k=S[0],f=S[1],T=(0,h.useRef)(null),D=(0,h.useContext)(Xn.Z),L=D.direction,G=(0,c.WF)(),nn=G.loading;(0,h.useLayoutEffect)(function(){f==="cn"?an().locale("zh-cn"):an().locale("en")},[]),(0,h.useEffect)(function(){var A=document.getElementById("nprogress-style");A&&(T.current=setTimeout(function(){var F;(F=A.parentNode)===null||F===void 0||F.removeChild(A)},0))},[]),(0,h.useEffect)(function(){var A,F=u.replace("#","");F&&((A=document.getElementById(decodeURIComponent(F)))===null||A===void 0||A.scrollIntoView())},[nn,u]),h.useEffect(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+l),typeof window._hmt!="undefined"&&window._hmt.push(["_trackPageview",i+l])},[o]);var W=(0,h.useMemo)(function(){return["","/"].some(function(A){return A===i})||["/index"].some(function(A){return i.startsWith(A)})?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{minHeight:"100vh"},children:e}),(0,n.jsx)(Ee,{})]}):i.startsWith("/docs/resource")?(0,n.jsx)(Mo,{children:e}):i.startsWith("/theme-editor")?e:(0,n.jsx)(fr,{children:e})},[i,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:f==="cn"?"zh-CN":f,"data-direction":L,className:v()({rtl:L==="rtl"})}),(0,n.jsx)("title",{children:k==null?void 0:k.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:k.description}),(0,n.jsx)("meta",{property:"og:title",content:k==null?void 0:k.title}),(0,n.jsx)("meta",{property:"og:description",content:k.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(xn.ZP,{direction:L,locale:f==="cn"?R.Z:void 0,children:[(0,n.jsx)(En,{}),(0,n.jsx)(bo,{}),W]})]})},br=vr},373638:function(Qn,mn,t){t.d(mn,{J1:function(){return R},Is:function(){return m},Fy:function(){return s},KE:function(){return h},qE:function(){return xn}});var un=t(661227),b=t(805574),hn=t(97857),v=t(385564),On=t(842348),an=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),kn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":an?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function c(y,g,n,I){var O=y.map(function(P){return P.meta}).filter(function(P){return!P.skip}),$=[],bn=function(en,vn){return(en.order||0)-(vn.order||0)};O.sort(bn).forEach(function(P){if(P.category&&(P.category=P.category[g]||P.category),P.type&&(P.type=P.type[g]||P.type),P!=null&&P.title&&(P.title=P.title[g]||P.title),!P.category){$.push(P);return}if(P.category==="Components"&&P.type){var en=$.find(function(pn){return(pn==null?void 0:pn.title)===P.type});en||(en={type:"type",title:P.type,children:[],order:I[P.type]},$.push(en)),en.children=en.children||[],en.children.push(P);return}var vn=$.find(function(pn){return(pn==null?void 0:pn.title)===P.category});if(vn||(vn={type:"category",title:P.category,children:[],order:n[P.category]},$.push(vn)),vn.children=vn.children||[],P.type){var Dn=vn.children.filter(function(pn){return(pn==null?void 0:pn.title)===P.type})[0];Dn||(Dn={type:"type",title:P.type,children:[],order:I[P.type]},vn.children.push(Dn)),Dn.children=Dn.children||[],Dn.children.push(P)}else vn.children.push(P)});function Mn(P){return P.sort(bn).map(function(en){return en.children?_objectSpread(_objectSpread({},en),{},{children:Mn(en.children)}):en})}return Mn($)}function h(y){return/-cn\/?$/.test(y)}function R(y,g,n,I){var O=y.startsWith("/")?y:"/".concat(y),$;if(g?O==="/"?$="/index-cn":O.endsWith("/")?$=O.replace(/\/$/,"-cn/"):($="".concat(O,"-cn"),$=$.replace(/(-cn)+/,"-cn")):$=/\/?index-cn/.test(O)?"/":O.replace("-cn",""),I){var bn=I[g?"zhCN":"enUS"];$+="#".concat(bn)}return{pathname:$,search:n}}function xn(y){var g="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",n=new Image,I,O=function(bn){I||(I=!0,n.src="",y(bn))};return n.onload=function(){return O("responded")},n.onerror=function(){return O("error")},n.src=g,setTimeout(function(){return O("timeout")},1500)}function s(){var y="test",g=window.localStorage;try{return g.setItem(y,"1"),g.removeItem(y),!0}catch(n){return!1}}function X(y){return new Promise(function(g,n){var I=document.createElement("script");I.type="text/javascript",I.src=y,I.onload=g,I.onerror=n,document.head.appendChild(I)})}function zn(y){var g=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(y))return"";var n=flattenDeep(y.filter(function(I){if(Array.isArray(I)){var O=_slicedToArray(I,1),$=O[0];return $==="p"}return!1}).map(function(I){var O=flatten(I),$=_toArray(O),bn=$[0],Mn=$.slice(1),P=Mn.filter(function(en){return typeof en=="string"&&!g.includes(en)}).join("");return[bn,P]})).find(function(I){return I&&typeof I=="string"&&!g.includes(I)});return n}var m=function(){return kn}},647727:function(Qn,mn,t){t.d(mn,{Z:function(){return un.Z}});var un=t(332231)},605071:function(Qn,mn,t){t.d(mn,{Z:function(){return U}});var un=t(97857),b=t.n(un),hn=t(9783),v=t.n(hn),On=t(719632),an=t.n(On),kn=t(805574),c=t.n(kn),h=t(294184),R=t.n(h),xn=t(318545),s=t(667294),X=t(517423),zn=t(982673),m=t(658192),y=t(252901),g=t(73287),n=s.createContext(void 0),I=n,O=t(785893),$=function(r){var d=r.href,C=r.title,E=r.prefixCls,z=r.children,Z=r.className,H=r.target,w=r.replace,V=s.useContext(I),Y=V||{},tn=Y.registerLink,sn=Y.unregisterLink,gn=Y.scrollTo,cn=Y.onClick,yn=Y.activeLink,_=Y.direction;s.useEffect(function(){return tn==null||tn(d),function(){sn==null||sn(d)}},[d]);var Pn=function(Un){w&&(Un.preventDefault(),window.location.replace(d)),cn==null||cn(Un,{title:C,href:d}),gn==null||gn(d)},on=s.useContext(g.E_),En=on.getPrefixCls,Hn=En("anchor",E),Ln=yn===d,wn=R()("".concat(Hn,"-link"),Z,v()({},"".concat(Hn,"-link-active"),Ln)),Bn=R()("".concat(Hn,"-link-title"),v()({},"".concat(Hn,"-link-title-active"),Ln));return(0,O.jsxs)("div",{className:wn,children:[(0,O.jsx)("a",{className:Bn,href:d,title:typeof C=="string"?C:"",target:H,onClick:Pn,children:C}),_!=="horizontal"?z:null]})},bn=$,Mn=t(548073),P=t(141035),en=t(986943),vn=function(r){var d,C,E=r.componentCls,z=r.holderOffsetBlock,Z=r.motionDurationSlow,H=r.lineWidthBold,w=r.colorPrimary,V=r.lineType,Y=r.colorSplit;return v()({},"".concat(E,"-wrapper"),(C={marginBlockStart:-z,paddingBlockStart:z},v()(C,E,b()(b()({},(0,Mn.Wf)(r)),{},v()({position:"relative",paddingInlineStart:H},"".concat(E,"-link"),(d={paddingBlock:r.linkPaddingBlock,paddingInline:"".concat(r.linkPaddingInlineStart,"px 0"),"&-title":b()(b()({},Mn.vS),{},{position:"relative",display:"block",marginBlockEnd:r.anchorTitleBlock,color:r.colorText,transition:"all ".concat(r.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},v()(d,"&-active > ".concat(E,"-link-title"),{color:r.colorPrimary}),v()(d,"".concat(E,"-link"),{paddingBlock:r.anchorPaddingBlockSecondary}),d)))),v()(C,"&:not(".concat(E,"-wrapper-horizontal)"),v()({},E,v()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(H,"px ").concat(V," ").concat(Y),content:'" "'}},"".concat(E,"-ink"),v()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(Z," ease-in-out"),width:H,backgroundColor:w},"&".concat(E,"-ink-visible"),{display:"inline-block"})))),v()(C,"".concat(E,"-fixed ").concat(E,"-ink ").concat(E,"-ink"),{display:"none"}),C))},Dn=function(r){var d,C=r.componentCls,E=r.motionDurationSlow,z=r.lineWidthBold,Z=r.colorPrimary;return v()({},"".concat(C,"-wrapper-horizontal"),v()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(r.lineType," ").concat(r.colorSplit),content:'" "'}},C,(d={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},v()(d,"".concat(C,"-link:first-of-type"),{paddingInline:0}),v()(d,"".concat(C,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(E," ease-in-out, width ").concat(E," ease-in-out"),height:z,backgroundColor:Z}),d)))},pn=(0,P.Z)("Anchor",function(x){var r=x.fontSize,d=x.fontSizeLG,C=x.paddingXXS,E=(0,en.TS)(x,{holderOffsetBlock:C,anchorPaddingBlockSecondary:C/2,anchorTitleBlock:r/14*3,anchorBallSize:d/2});return[vn(E),Dn(E)]},function(x){return{linkPaddingBlock:x.paddingXXS,linkPaddingInlineStart:x.padding}});function Gn(){return window}function qn(x,r){if(!x.getClientRects().length)return 0;var d=x.getBoundingClientRect();return d.width||d.height?r===window?(r=x.ownerDocument.documentElement,d.top-r.clientTop):d.top-r.getBoundingClientRect().top:d.top}var Wn=/#([\S ]+)$/,me=function(r){var d,C,E=r.rootClassName,z=r.anchorPrefixCls,Z=r.className,H=r.style,w=r.offsetTop,V=r.affix,Y=V===void 0?!0:V,tn=r.showInkInFixed,sn=tn===void 0?!1:tn,gn=r.children,cn=r.items,yn=r.direction,_=yn===void 0?"vertical":yn,Pn=r.bounds,on=r.targetOffset,En=r.onClick,Hn=r.onChange,Ln=r.getContainer,wn=r.getCurrentAnchor,Bn=r.replace,re=s.useState([]),Un=c()(re,2),ln=Un[0],An=Un[1],Yn=s.useState(null),se=c()(Yn,2),ne=se[0],he=se[1],ae=s.useRef(ne),be=s.useRef(null),Xn=s.useRef(null),ge=s.useRef(!1),ee=s.useContext(g.E_),Ae=ee.direction,Ie=ee.getTargetContainer,ie=ee.anchor,ce=(d=Ln!=null?Ln:Ie)!==null&&d!==void 0?d:Gn,ke=JSON.stringify(ln),Oe=(0,xn.default)(function(q){ln.includes(q)||An(function(jn){return[].concat(an()(jn),[q])})}),He=(0,xn.default)(function(q){ln.includes(q)&&An(function(jn){return jn.filter(function(Cn){return Cn!==q})})}),Ee=function(){var jn,Cn=(jn=be.current)===null||jn===void 0?void 0:jn.querySelector(".".concat(z,"-link-title-active"));if(Cn&&Xn.current){var Vn=Xn.current.style,dn=_==="horizontal";Vn.top=dn?"":"".concat(Cn.offsetTop+Cn.clientHeight/2,"px"),Vn.height=dn?"":"".concat(Cn.clientHeight,"px"),Vn.left=dn?"".concat(Cn.offsetLeft,"px"):"",Vn.width=dn?"".concat(Cn.clientWidth,"px"):"",dn&&(0,X.Z)(Cn,{scrollMode:"if-needed",block:"nearest"})}},Re=function(jn){var Cn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Vn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,dn=[],we=ce();if(jn.forEach(function(te){var ve=Wn.exec(te==null?void 0:te.toString());if(ve){var Me=document.getElementById(ve[1]);if(Me){var De=qn(Me,we);De<Cn+Vn&&dn.push({link:te,top:De})}}}),dn.length){var xe=dn.reduce(function(te,ve){return ve.top>te.top?ve:te});return xe.link}return""},K=(0,xn.default)(function(q){if(ae.current!==q){var jn=typeof wn=="function"?wn(q):q;he(jn),ae.current=jn,Hn==null||Hn(q)}}),Le=s.useCallback(function(){if(!ge.current){var q=Re(ln,on!==void 0?on:w||0,Pn);K(q)}},[ke,on,w]),ye=s.useCallback(function(q){K(q);var jn=Wn.exec(q);if(jn){var Cn=document.getElementById(jn[1]);if(Cn){var Vn=ce(),dn=(0,zn.Z)(Vn,!0),we=qn(Cn,Vn),xe=dn+we;xe-=on!==void 0?on:w||0,ge.current=!0,(0,m.Z)(xe,{getContainer:ce,callback:function(){ge.current=!1}})}}},[on,w]),ze=R()(E,"".concat(z,"-wrapper"),(C={},v()(C,"".concat(z,"-wrapper-horizontal"),_==="horizontal"),v()(C,"".concat(z,"-rtl"),Ae==="rtl"),C),Z,ie==null?void 0:ie.className),Ze=R()(z,v()({},"".concat(z,"-fixed"),!Y&&!sn)),Fe=R()("".concat(z,"-ink"),v()({},"".concat(z,"-ink-visible"),ne)),We=b()(b()({maxHeight:w?"calc(100vh - ".concat(w,"px)"):"100vh"},ie==null?void 0:ie.style),H),$e=function q(jn){return Array.isArray(jn)?jn.map(function(Cn){return(0,s.createElement)(bn,b()(b()({replace:Bn},Cn),{},{key:Cn.key}),_==="vertical"&&q(Cn.children))}):null},fe=(0,O.jsx)("div",{ref:be,className:ze,style:We,children:(0,O.jsxs)("div",{className:Ze,children:[(0,O.jsx)("span",{className:Fe,ref:Xn}),"items"in r?$e(cn):gn]})});s.useEffect(function(){var q=ce();return Le(),q==null||q.addEventListener("scroll",Le),function(){q==null||q.removeEventListener("scroll",Le)}},[ke]),s.useEffect(function(){typeof wn=="function"&&K(wn(ae.current||""))},[wn]),s.useEffect(function(){Ee()},[_,wn,ke,ne]);var _e=s.useMemo(function(){return{registerLink:Oe,unregisterLink:He,scrollTo:ye,activeLink:ne,onClick:En,direction:_}},[ne,En,ye,_]);return(0,O.jsx)(I.Provider,{value:_e,children:Y?(0,O.jsx)(y.Z,{offsetTop:w,target:ce,children:fe}):fe})},le=function(r){var d=r.prefixCls,C=r.rootClassName,E=s.useContext(g.E_),z=E.getPrefixCls,Z=z("anchor",d),H=pn(Z),w=c()(H,2),V=w[0],Y=w[1];return V((0,O.jsx)(me,b()(b()({},r),{},{rootClassName:R()(Y,C),anchorPrefixCls:Z})))},Nn=le,p=Nn;p.Link=bn;var U=p},302281:function(Qn,mn,t){t.d(mn,{Z:function(){return le}});var un=t(97857),b=t.n(un),hn=t(9783),v=t.n(hn),On=t(805574),an=t.n(On),kn=t(513769),c=t.n(kn),h=t(294184),R=t.n(h),xn=t(650010),s=t(667294),X=t(851863),zn=t(73287),m=t(976883),y=t(46287),g=t(785893),n=function(p){var U=p.prefixCls,x=p.title,r=p.footer,d=p.extra,C=p.closeIcon,E=p.closable,z=p.onClose,Z=p.headerStyle,H=p.drawerStyle,w=p.bodyStyle,V=p.footerStyle,Y=p.children,tn=s.useCallback(function(on){return(0,g.jsx)("button",{type:"button",onClick:z,"aria-label":"Close",className:"".concat(U,"-close"),children:on})},[z]),sn=(0,y.Z)(E,C,tn,void 0,!0),gn=an()(sn,2),cn=gn[0],yn=gn[1],_=s.useMemo(function(){return!x&&!cn?null:(0,g.jsxs)("div",{style:Z,className:R()("".concat(U,"-header"),v()({},"".concat(U,"-header-close-only"),cn&&!x&&!d)),children:[(0,g.jsxs)("div",{className:"".concat(U,"-header-title"),children:[yn,x&&(0,g.jsx)("div",{className:"".concat(U,"-title"),children:x})]}),d&&(0,g.jsx)("div",{className:"".concat(U,"-extra"),children:d})]})},[cn,yn,d,Z,U,x]),Pn=s.useMemo(function(){if(!r)return null;var on="".concat(U,"-footer");return(0,g.jsx)("div",{className:on,style:V,children:r})},[r,V,U]);return(0,g.jsxs)("div",{className:"".concat(U,"-wrapper-body"),style:H,children:[_,(0,g.jsx)("div",{className:"".concat(U,"-body"),style:w,children:Y}),Pn]})},I=n,O=t(578294),$=t(141035),bn=t(986943),Mn=function(p){var U,x=p.componentCls,r=p.motionDurationSlow,d={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(r)}}};return v()({},x,(U={},v()(U,"".concat(x,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(r)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),v()(U,"".concat(x,"-panel-motion"),{"&-left":[d,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[d,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[d,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[d,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),U))},P=Mn,en=function(p){var U,x,r=p.componentCls,d=p.zIndexPopup,C=p.colorBgMask,E=p.colorBgElevated,z=p.motionDurationSlow,Z=p.motionDurationMid,H=p.padding,w=p.paddingLG,V=p.fontSizeLG,Y=p.lineHeightLG,tn=p.lineWidth,sn=p.lineType,gn=p.colorSplit,cn=p.marginSM,yn=p.colorIcon,_=p.colorIconHover,Pn=p.colorText,on=p.fontWeightStrong,En=p.footerPaddingBlock,Hn=p.footerPaddingInline,Ln="".concat(r,"-content-wrapper");return v()({},r,(x={position:"fixed",inset:0,zIndex:d,pointerEvents:"none","&-pure":(U={position:"relative",background:E},v()(U,"&".concat(r,"-left"),{boxShadow:p.boxShadowDrawerLeft}),v()(U,"&".concat(r,"-right"),{boxShadow:p.boxShadowDrawerRight}),v()(U,"&".concat(r,"-top"),{boxShadow:p.boxShadowDrawerUp}),v()(U,"&".concat(r,"-bottom"),{boxShadow:p.boxShadowDrawerDown}),U),"&-inline":{position:"absolute"}},v()(x,"".concat(r,"-mask"),{position:"absolute",inset:0,zIndex:d,background:C,pointerEvents:"auto"}),v()(x,Ln,{position:"absolute",zIndex:d,maxWidth:"100vw",transition:"all ".concat(z),"&-hidden":{display:"none"}}),v()(x,"&-left > ".concat(Ln),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:p.boxShadowDrawerLeft}),v()(x,"&-right > ".concat(Ln),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:p.boxShadowDrawerRight}),v()(x,"&-top > ".concat(Ln),{top:0,insetInline:0,boxShadow:p.boxShadowDrawerUp}),v()(x,"&-bottom > ".concat(Ln),{bottom:0,insetInline:0,boxShadow:p.boxShadowDrawerDown}),v()(x,"".concat(r,"-content"),{width:"100%",height:"100%",overflow:"auto",background:E,pointerEvents:"auto"}),v()(x,"".concat(r,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),v()(x,"".concat(r,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(H,"px ").concat(w,"px"),fontSize:V,lineHeight:Y,borderBottom:"".concat(tn,"px ").concat(sn," ").concat(gn),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),v()(x,"".concat(r,"-extra"),{flex:"none"}),v()(x,"".concat(r,"-close"),{display:"inline-block",marginInlineEnd:cn,color:yn,fontWeight:on,fontSize:V,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(Z),textRendering:"auto","&:focus, &:hover":{color:_,textDecoration:"none"}}),v()(x,"".concat(r,"-title"),{flex:1,margin:0,color:Pn,fontWeight:p.fontWeightStrong,fontSize:V,lineHeight:Y}),v()(x,"".concat(r,"-body"),{flex:1,minWidth:0,minHeight:0,padding:w,overflow:"auto"}),v()(x,"".concat(r,"-footer"),{flexShrink:0,padding:"".concat(En,"px ").concat(Hn,"px"),borderTop:"".concat(tn,"px ").concat(sn," ").concat(gn)}),v()(x,"&-rtl",{direction:"rtl"}),x))},vn=(0,$.Z)("Drawer",function(Nn){var p=(0,bn.TS)(Nn,{});return[en(p),P(p)]},function(Nn){return{zIndexPopup:Nn.zIndexPopupBase,footerPaddingBlock:Nn.paddingXS,footerPaddingInline:Nn.padding}}),Dn=["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"],pn=["prefixCls","style","className","placement"],Gn=null,qn={distance:180},Wn=function(p){var U=p.rootClassName,x=p.width,r=p.height,d=p.size,C=d===void 0?"default":d,E=p.mask,z=E===void 0?!0:E,Z=p.push,H=Z===void 0?qn:Z,w=p.open,V=p.afterOpenChange,Y=p.onClose,tn=p.prefixCls,sn=p.getContainer,gn=p.style,cn=p.className,yn=p.visible,_=p.afterVisibleChange,Pn=c()(p,Dn),on=s.useContext(zn.E_),En=on.getPopupContainer,Hn=on.getPrefixCls,Ln=on.direction,wn=on.drawer,Bn=Hn("drawer",tn),re=vn(Bn),Un=an()(re,2),ln=Un[0],An=Un[1],Yn=sn===void 0&&En?function(){return En(document.body)}:sn,se=R()(v()({"no-mask":!z},"".concat(Bn,"-rtl"),Ln==="rtl"),U,An);if(!1)var ne;var he=s.useMemo(function(){return x!=null?x:C==="large"?736:378},[x,C]),ae=s.useMemo(function(){return r!=null?r:C==="large"?736:378},[r,C]),be={motionName:(0,X.m)(Bn,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Xn=function(ee){return{motionName:(0,X.m)(Bn,"panel-motion-".concat(ee)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}};return ln((0,g.jsx)(O.BR,{children:(0,g.jsx)(m.Ux,{status:!0,override:!0,children:(0,g.jsx)(xn.Z,b()(b()({prefixCls:Bn,onClose:Y,maskMotion:be,motion:Xn},Pn),{},{open:w!=null?w:yn,mask:z,push:H,width:he,height:ae,style:b()(b()({},wn==null?void 0:wn.style),gn),className:R()(wn==null?void 0:wn.className,cn),rootClassName:se,getContainer:Yn,afterOpenChange:V!=null?V:_,children:(0,g.jsx)(I,b()(b()({prefixCls:Bn},Pn),{},{onClose:Y}))}))})}))},me=function(p){var U=p.prefixCls,x=p.style,r=p.className,d=p.placement,C=d===void 0?"right":d,E=c()(p,pn),z=s.useContext(zn.E_),Z=z.getPrefixCls,H=Z("drawer",U),w=vn(H),V=an()(w,2),Y=V[0],tn=V[1],sn=R()(H,"".concat(H,"-pure"),"".concat(H,"-").concat(C),tn,r);return Y((0,g.jsx)("div",{className:sn,style:x,children:(0,g.jsx)(I,b()({prefixCls:H},E))}))};Wn._InternalPanelDoNotUseOrYouWillBeFired=me;var le=Wn},377376:function(Qn,mn,t){var un=t(83996),b=t(296708),hn=un.ZP;hn.Header=un.h4,hn.Footer=un.$_,hn.Content=un.VY,hn.Sider=b.Z,mn.Z=hn},715778:function(Qn,mn,t){t.d(mn,{Z:function(){return s}});var un=t(174219),b=t(97857),hn=t.n(b),v=t(585369),On={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},an=On,kn={lang:hn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},v.Z),timePickerLocale:hn()({},an)};kn.lang.ok="\u786E\u5B9A";var c=kn,h=c,R="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",xn={locale:"zh-cn",Pagination:un.Z,DatePicker:c,TimePicker:an,Calendar:h,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:R,method:R,array:R,object:R,number:R,date:R,boolean:R,integer:R,float:R,regexp:R,email:R,url:R,hex:R},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},s=xn},15060:function(Qn,mn,t){t.d(mn,{Z:function(){return U}});var un=t(97857),b=t.n(un),hn=t(805574),v=t.n(hn),On=t(513769),an=t.n(On),kn=t(294184),c=t.n(kn),h=t(667294),R=t(73287),xn=t(9783),s=t.n(xn),X=t(785893),zn=["prefixCls","className","color","dot","pending","position","label","children"],m=function(r){var d,C=r.prefixCls,E=r.className,z=r.color,Z=z===void 0?"blue":z,H=r.dot,w=r.pending,V=w===void 0?!1:w,Y=r.position,tn=r.label,sn=r.children,gn=an()(r,zn),cn=h.useContext(R.E_),yn=cn.getPrefixCls,_=yn("timeline",C),Pn=c()("".concat(_,"-item"),s()({},"".concat(_,"-item-pending"),V),E),on=/blue|red|green|gray/.test(Z||"")?void 0:Z,En=c()("".concat(_,"-item-head"),(d={},s()(d,"".concat(_,"-item-head-custom"),!!H),s()(d,"".concat(_,"-item-head-").concat(Z),!on),d));return(0,X.jsxs)("li",b()(b()({},gn),{},{className:Pn,children:[tn&&(0,X.jsx)("div",{className:"".concat(_,"-item-label"),children:tn}),(0,X.jsx)("div",{className:"".concat(_,"-item-tail")}),(0,X.jsx)("div",{className:En,style:{borderColor:on,color:on},children:H}),(0,X.jsx)("div",{className:"".concat(_,"-item-content"),children:sn})]}))},y=m,g=t(719632),n=t.n(g),I=t(100628),O=t.n(I),$=["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"],bn=["className"],Mn=function(r){var d,C=r.prefixCls,E=r.className,z=r.pending,Z=z===void 0?!1:z,H=r.children,w=r.items,V=r.rootClassName,Y=r.reverse,tn=Y===void 0?!1:Y,sn=r.direction,gn=r.hashId,cn=r.pendingDot,yn=r.mode,_=yn===void 0?"":yn,Pn=an()(r,$),on=function(An,Yn){return _==="alternate"?An==="right"?"".concat(C,"-item-right"):An==="left"||Yn%2===0?"".concat(C,"-item-left"):"".concat(C,"-item-right"):_==="left"?"".concat(C,"-item-left"):_==="right"||An==="right"?"".concat(C,"-item-right"):""},En=n()(w||[]),Hn=typeof Z=="boolean"?null:Z;Z&&En.push({pending:!!Z,dot:cn||(0,X.jsx)(O(),{}),children:Hn}),tn&&En.reverse();var Ln=En.length,wn="".concat(C,"-item-last"),Bn=En.filter(function(ln){return!!ln}).map(function(ln,An){var Yn,se=An===Ln-2?wn:"",ne=An===Ln-1?wn:"",he=ln.className,ae=an()(ln,bn);return(0,h.createElement)(y,b()(b()({},ae),{},{className:c()([he,!tn&&Z?se:ne,on((Yn=ln==null?void 0:ln.position)!==null&&Yn!==void 0?Yn:"",An)]),key:(ln==null?void 0:ln.key)||An}))}),re=En.some(function(ln){return!!(ln!=null&&ln.label)}),Un=c()(C,(d={},s()(d,"".concat(C,"-pending"),!!Z),s()(d,"".concat(C,"-reverse"),!!tn),s()(d,"".concat(C,"-").concat(_),!!_&&!re),s()(d,"".concat(C,"-label"),re),s()(d,"".concat(C,"-rtl"),sn==="rtl"),d),E,V,gn);return(0,X.jsx)("ul",b()(b()({},Pn),{},{className:Un,children:Bn}))},P=Mn,en=t(45598);function vn(x,r){return x&&Array.isArray(x)?x:(0,en.default)(r).map(function(d){var C,E;return b()({children:(C=d==null||(E=d.props)===null||E===void 0?void 0:E.children)!==null&&C!==void 0?C:""},d.props)})}var Dn=vn,pn=t(548073),Gn=t(141035),qn=t(986943),Wn=function(r){var d,C,E,z,Z,H,w=r.componentCls;return s()({},w,b()(b()({},(0,pn.Wf)(r)),{},(H={margin:0,padding:0,listStyle:"none"},s()(H,"".concat(w,"-item"),{position:"relative",margin:0,paddingBottom:r.itemPaddingBottom,fontSize:r.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:r.itemHeadSize,insetInlineStart:(r.itemHeadSize-r.tailWidth)/2,height:"calc(100% - ".concat(r.itemHeadSize,"px)"),borderInlineStart:"".concat(r.tailWidth,"px ").concat(r.lineType," ").concat(r.tailColor)},"&-pending":(d={},s()(d,"".concat(w,"-item-head"),{fontSize:r.fontSizeSM,backgroundColor:"transparent"}),s()(d,"".concat(w,"-item-tail"),{display:"none"}),d),"&-head":{position:"absolute",width:r.itemHeadSize,height:r.itemHeadSize,backgroundColor:r.dotBg,border:"".concat(r.dotBorderWidth,"px ").concat(r.lineType," transparent"),borderRadius:"50%","&-blue":{color:r.colorPrimary,borderColor:r.colorPrimary},"&-red":{color:r.colorError,borderColor:r.colorError},"&-green":{color:r.colorSuccess,borderColor:r.colorSuccess},"&-gray":{color:r.colorTextDisabled,borderColor:r.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:r.itemHeadSize/2,insetInlineStart:r.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:r.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(r.fontSize*r.lineHeight-r.fontSize)+r.lineWidth,marginInlineStart:r.margin+r.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":(C={},s()(C,"> ".concat(w,"-item-tail"),{display:"none"}),s()(C,"> ".concat(w,"-item-content"),{minHeight:r.controlHeightLG*1.2}),C)}),s()(H,"&".concat(w,`-alternate,
        &`).concat(w,`-right,
        &`).concat(w,"-label"),s()({},"".concat(w,"-item"),{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:"-".concat(r.marginXXS,"px"),"&-custom":{marginInlineStart:r.tailWidth/2}},"&-left":s()({},"".concat(w,"-item-content"),{insetInlineStart:"calc(50% - ".concat(r.marginXXS,"px)"),width:"calc(50% - ".concat(r.marginSM,"px)"),textAlign:"start"}),"&-right":s()({},"".concat(w,"-item-content"),{width:"calc(50% - ".concat(r.marginSM,"px)"),margin:0,textAlign:"end"})})),s()(H,"&".concat(w,"-right"),s()({},"".concat(w,"-item-right"),(E={},s()(E,"".concat(w,`-item-tail,
            `).concat(w,`-item-head,
            `).concat(w,"-item-head-custom"),{insetInlineStart:"calc(100% - ".concat((r.itemHeadSize+r.tailWidth)/2,"px)")}),s()(E,"".concat(w,"-item-content"),{width:"calc(100% - ".concat(r.itemHeadSize+r.marginXS,"px)")}),E))),s()(H,"&".concat(w,`-pending
        `).concat(w,`-item-last
        `).concat(w,"-item-tail"),{display:"block",height:"calc(100% - ".concat(r.margin,"px)"),borderInlineStart:"".concat(r.tailWidth,"px dotted ").concat(r.tailColor)}),s()(H,"&".concat(w,`-reverse
        `).concat(w,`-item-last
        `).concat(w,"-item-tail"),{display:"none"}),s()(H,"&".concat(w,"-reverse ").concat(w,"-item-pending"),(z={},s()(z,"".concat(w,"-item-tail"),{insetBlockStart:r.margin,display:"block",height:"calc(100% - ".concat(r.margin,"px)"),borderInlineStart:"".concat(r.tailWidth,"px dotted ").concat(r.tailColor)}),s()(z,"".concat(w,"-item-content"),{minHeight:r.controlHeightLG*1.2}),z)),s()(H,"&".concat(w,"-label"),(Z={},s()(Z,"".concat(w,"-item-label"),{position:"absolute",insetBlockStart:-(r.fontSize*r.lineHeight-r.fontSize)+r.tailWidth,width:"calc(50% - ".concat(r.marginSM,"px)"),textAlign:"end"}),s()(Z,"".concat(w,"-item-right"),s()({},"".concat(w,"-item-label"),{insetInlineStart:"calc(50% + ".concat(r.marginSM,"px)"),width:"calc(50% - ".concat(r.marginSM,"px)"),textAlign:"start"})),Z)),s()(H,"&-rtl",s()({direction:"rtl"},"".concat(w,"-item-head-custom"),{transform:"translate(50%, -50%)"})),H)))},me=(0,Gn.Z)("Timeline",function(x){var r=(0,qn.TS)(x,{itemHeadSize:10,customHeadPaddingVertical:x.paddingXXS,paddingInlineEnd:2});return[Wn(r)]},function(x){return{tailColor:x.colorSplit,tailWidth:x.lineWidthBold,dotBorderWidth:x.wireframe?x.lineWidthBold:x.lineWidth*3,dotBg:x.colorBgContainer,itemPaddingBottom:x.padding*1.25}}),le=["prefixCls","children","items","className","style"],Nn=function(r){var d=h.useContext(R.E_),C=d.getPrefixCls,E=d.direction,z=d.timeline,Z=r.prefixCls,H=r.children,w=r.items,V=r.className,Y=r.style,tn=an()(r,le),sn=C("timeline",Z),gn=me(sn),cn=v()(gn,2),yn=cn[0],_=cn[1],Pn=Dn(w,H);return yn((0,X.jsx)(P,b()(b()({},tn),{},{className:c()(z==null?void 0:z.className,V),style:b()(b()({},z==null?void 0:z.style),Y),prefixCls:sn,direction:E,items:Pn,hashId:_})))};Nn.Item=y;var p=Nn,U=p}}]);
