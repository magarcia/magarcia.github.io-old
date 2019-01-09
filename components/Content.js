export default ({ children, small = false }) => (
  <div className="post-content">
    {children}
    <style jsx="true" global>{`
      .post-content {
        color: rgba(0, 0, 0, 0.84);
      }
      .post-content p {
        letter-spacing: 0.01rem;
        font-weight: 400;
        font-style: normal;
        font-size: ${small ? '16px' : '21px'};
        line-height: 1.58;
        margin-top: 29px;
        color: ${small ? 'rgba(0,0,0,.54)' : 'rgba(0, 0, 0, 0.84)'};
      }
      .post-content a {
        text-decoration: none;
        background-repeat: repeat-x;
        background-image: linear-gradient(to right, currentColor 100%, currentColor 0);
        background-size: 1px 1px;
        background-position: 0 1.05em;
        background-position: 0 calc(1em + 1px);
        color: inherit;
      }
      .post-content code {
        font-family: Menlo, Monaco, 'Courier New', Courier, monospace;
        font-size: 16px;
        background: rgba(0, 0, 0, 0.05);
        padding: 3px 4px;
        margin: 0 2px;
      }
      .post-content blockquote {
        border-left: 3px solid rgba(0, 0, 0, 0.84);
        padding-left: 20px;
        margin-left: -23px;
        padding-bottom: 2px;
        letter-spacing: 0.01rem;
        font-weight: 400;
        font-size: 21px;
        margin: 0;
        margin-top: 29px;
        line-height: 1.58;
      }
      .post-content blockquote p {
        font-style: italic;
      }
      .post-content h2 {
        margin: 0;
        margin-top: 56px;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 0;
        font-size: 34px;
        line-height: 1.15;
        color: rgba(0, 0, 0, 0.84);
      }
      .post-content h3 {
        margin-top: 30px;
        margin: 0;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 0;
        font-size: 26px;
        line-height: 1.15;
        color: rgba(0, 0, 0, 0.84);
      }
      .post-content ol {
        counter-reset: post;
        padding: 0;
        list-style: none;
        list-style-image: none;
        margin: 0;
      }
      .post-content ol li {
        font-weight: 400;
        font-style: normal;
        font-size: 21px;
        line-height: 1.58;
        margin-left: 30px;
        margin-bottom: 14px;
      }
      .post-content ol li:before {
        font-feature-settings: 'liga' on, 'lnum' on;
        padding-right: 12px;
        counter-increment: post;
        content: counter(post) '.';
        position: absolute;
        display: inline-block;
        box-sizing: border-box;
        width: 78px;
        margin-left: -78px;
        text-align: right;
      }
      .post-content pre {
        background: rgba(0, 0, 0, 0.05);
        padding: 20px;
        white-space: pre-wrap;
        font-family: Menlo, Monaco, 'Courier New', Courier, monospace;
        font-size: 16px;
      }
      .post-content pre code {
        background: transparent;
      }
      .post-content ul {
        margin-top: 29px;
        counter-reset: post;
        padding: 0;
        list-style: none;
        list-style-image: none;
      }
      .post-content ul > li {
        display: list-item;
        text-align: -webkit-match-parent;
        font-weight: 400;
        font-style: normal;
        font-size: 21px;
        line-height: 1.58;
        margin-left: 30px;
        margin-bottom: 14px;
      }
      .post-content ul > li:before {
        position: absolute;
        display: inline-block;
        box-sizing: border-box;
        width: 78px;
        margin-left: -78px;
        text-align: right;
        padding-top: 4px;
        padding-right: 15px;
        content: '\\2022';
        font-size: 16.8px;
      }
      .post-content b,
      .post-content strong {
        font-weight: 700;
      }
    `}</style>
  </div>
);