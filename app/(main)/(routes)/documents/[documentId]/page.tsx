import { use } from "react";

import DocumentIdPage from "@/app/(main)/_components/document-id-page";
import { Id } from "@/convex/_generated/dataModel";

interface PageProps {
  params: Promise<{
    documentId: Id<"documents">;
  }>;
}

export default function Page({ params }: PageProps) {
  const { documentId } = use(params);
  return <DocumentIdPage documentId={documentId} />;
}
