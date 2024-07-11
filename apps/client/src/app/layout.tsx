import Provider from './provider';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='ko'>
    <head>
      <link
        rel='stylesheet'
        as='style'
        crossOrigin=''
        href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css'
      />
    </head>
    <body>
      <Provider>{children}</Provider>
    </body>
  </html>
);

export default RootLayout;
