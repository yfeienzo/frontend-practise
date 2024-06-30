import { Montserrat, Fraunces } from "next/font/google";

const montserrat = Montserrat({ 
    subsets: ["latin"], 
    display: 'swap',
    variable: '--font-montserrat',
    weight: ['500', '700']
});

const fraunces = Fraunces({ 
    subsets: ["latin"], 
    display: 'swap',
    weight: '700',
    variable: '--font-fraunces',
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${fraunces.variable}`}>{children}</body>
    </html>
  );
}
