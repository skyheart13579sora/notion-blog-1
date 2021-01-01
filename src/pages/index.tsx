import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>そらのNotionBlog</h1>

       <div className="explanation">
        <p>
        日頃の気付きや学びなど
        思いついたことをつらつら書いていくブログ
         
        </p>
      </div>
    </div>
   
  </>
)
