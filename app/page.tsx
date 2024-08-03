'use client'
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/home'); // Redirect to home page when the component mounts.
    // Ensure to always re-run the effect after updating the router object.
    // Otherwise, you may lead to stale props or state.
    return () => {
      // cleanup
    };
  }, []);
  return (
    <>
      {/* {router.replace('/home')} */}
    </>
  );
}
