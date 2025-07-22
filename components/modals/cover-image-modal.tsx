"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useState } from "react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import { SingleImageDropzone } from "@/components/upload/single-image";
import {
  UploaderProvider,
  type UploadFn,
} from "@/components/upload/uploader-provider";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import React from "react";

export const CoverImageModal = () => {
  const params = useParams();
  const update = useMutation(api.documents.update);
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();

  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  // const onChange = async (file?: File) => {
  //   if (file) {
  //     setIsSubmitting(true);
  //     setFile(file);

  //     const res = await edgestore.publicFiles.upload({
  //       file,
  //       options: {
  //         replaceTargetUrl: coverImage.url
  //       }
  //     });

  //     await update({
  //       id: params.documentId as Id<"documents">,
  //       coverImage: res.url,
  //     });

  //     onClose();
  //   }
  // };

  const uploadFn: UploadFn = React.useCallback(
    async ({ file }) => {
      if (file) {
        setIsSubmitting(true);
        setFile(file);
      }

      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImage.url,
        },
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });

      onClose();

      return res;
    },
    [coverImage.url, params.documentId, edgestore]
  );

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <UploaderProvider uploadFn={uploadFn} autoUpload>
          <SingleImageDropzone
            dropzoneOptions={{
              maxSize: 1024 * 1024 * 1, // 1 MB
            }}
            className="w-full outline-none"
            disabled={isSubmitting}
          />
        </UploaderProvider>
      </DialogContent>
    </Dialog>
  );
};
