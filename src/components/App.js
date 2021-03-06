import React, { Component, PropTypes } from 'react'
import { injectGlobal } from 'styled-components'
import Helmet from 'react-helmet'

injectGlobal`
  @font-face {
    font-family: 'Avenir';
    src:  url('/avenir-black.woff2') format('woff2'),
          url('/avenir-black.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
  }


`

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render () {
    const { children } = this.props
    return (
      <div>
        <Helmet
          title="Atomic React"
          titleTemplate="ARc - %s"
          meta={[
            { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' },
            { property: 'og:site_name', content: 'ARc' },
            { property: 'og:image', content: 'https://diegohaz.github.io/arc/thumbnail.png' },
            { property: 'og:image:type', content: 'image/png' },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' }
          ]}
          link={[
            { rel: 'icon', href: 'https://diegohaz.github.io/arc/icon.png' }
          ]} />
        {children}
      </div>
    )
  }
}

export default App
