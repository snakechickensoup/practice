import { ApolloWrapper } from "./ApolloWrapper";

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
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
