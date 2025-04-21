import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/ui/theme-provider"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NinjaPay - Private Payments for the Digital Age',
  description: "NinjaPay combines Solana's speed with cutting-edge privacy technology for secure, private, and compliant payments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { ThemeProvider } from "@/components/ui/theme-provider"

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'NinjaPay - Private Payments for the Digital Age',
//   description: "NinjaPay combines Solana's speed with cutting-edge privacy technology for secure, private, and compliant payments.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.className} min-h-screen flex flex-col items-center`}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             {children}
//           </main>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }