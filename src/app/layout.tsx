import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setThemeMode = `
  if (localStorage.theme === 'dark') {
    document.getElementsByTagName('body')[0].setAttribute("data-theme", "dark");    
  } else {
    document.getElementsByTagName('body')[0].setAttribute("data-theme", "light");
  }
`;

  return (
    <html lang="kr">
      <body suppressHydrationWarning={true}>
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
        {children}
      </body>
    </html>
  );
}
