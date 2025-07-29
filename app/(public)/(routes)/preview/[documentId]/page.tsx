// import { use } from "react";

import DocumentIdPage from "@/app/(public)/_components/document-id-page";
import { Id } from "@/convex/_generated/dataModel";

interface PageProps {
  params: Promise<{
    documentId: Id<"documents">;
  }>;
  // params: {
  //   documentId: Id<"documents">;
  // };
}

export default async function Page({ params }: PageProps) {
  // const { documentId } = use(params);
  const { documentId } = await params;
  return <DocumentIdPage documentId={documentId} />;
}
