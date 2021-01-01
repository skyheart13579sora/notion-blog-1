import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      <span>
      Powered by {' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          Notion Blog
        </ExtLink>
      </span>
      <span>
      Copyright © 2021 {' '} . All Rights Reserved.
        <ExtLink href="https://twitter.com/Sky_MouthValley">
          Sora Taniguchi
        </ExtLink>
      </span>
    </footer>
  </>
)
