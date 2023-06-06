import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | layout.tsx",
    default: "Default Title",
  },
};

export default function FolderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>app/folder/layout.tsx</div>
      {children}
    </section>
  );
}
