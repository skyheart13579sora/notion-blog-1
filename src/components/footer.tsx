import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      <div>
        <span>
        Powered by {' '}
          <ExtLink href="https://github.com/ijjk/notion-blog">
            Notion Blog
          </ExtLink>
        </span>
      </div>
      
      <span>
      Copyright © 2021 {' '}
        <ExtLink href="https://twitter.com/Sky_MouthValley">
          Sora Taniguchi
        </ExtLink>
        . All Rights Reserved.
      </span>
    </footer>
    
  </>
)
