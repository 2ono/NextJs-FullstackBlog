"use client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const deleteImage = async function (publicId: string) {
    const res = await fetch("/api/removeImage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({publicId})
    });
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you shre you want to dele this delete?"
    );

    if (confirmed) {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (res.ok) {
          const deletedMessage = 'successfully deleted Post!'
          toast.success(deletedMessage);
          const post = await res.json();
          const {publicId} = post;
          await deleteImage(publicId);

          router.refresh();
        } else {
          toast.error('something went wrong!')
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button onClick={handleDelete} className="text-red-600">
      Delete
    </button>
  );
};

export default DeleteButton;
