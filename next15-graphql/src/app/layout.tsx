import { ApolloWrapper } from "../graphql/ApolloWrapper";
import "./globals.css";

export const metadata = {
  title: "Next 15 & GraphQL",
  description: "App router & GraphQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-amber-200">
        <ApolloWrapper>
          <header className="text-4xl text-center mt-8 font-extrabold ">
            Rick and Morty
          </header>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
