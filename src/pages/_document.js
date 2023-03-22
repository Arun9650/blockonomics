import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript  src="https://blockonomics.co/js/pay_widget.js" />
        <script  src="https://blockonomics.co/js/pay_widget.js"></script>
      </body>
    </Html>
  )
}
