import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setThemeMode = `
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('ui-dark')
  } else {
    document.documentElement.classList.remove('ui-dark')
  }
`;

  return (
    <html lang="kr" suppressHydrationWarning={true}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
        {children}
      </body>
    </html>
  );
}
