/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'src/styles/global.scss'

exports.onRenderBody = ({ setPostBodyComponents }) => {
  const attachCode = `
    if (ga) {
      ga('require', 'linker');
      ga('linker:autoLink', ['squard.co.jp']);
    }`

  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: attachCode,
      }}
    />,
  ])
}
