import { Locale, NextIntlClientProvider } from 'next-intl';

export const RootLayout = async ({
  children,
  className,
  params,
}: {
  children: React.ReactNode;
  className?: string;
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};
