import App from '@/App'
import GlobalStyle from '@/assets/styles/GlobalStyle'
import ContentProvider from '@/providers/ContentProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Nunito', 'Montserrat'],
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ContentProvider>
      <App />
    </ContentProvider>
  </React.StrictMode>
)
