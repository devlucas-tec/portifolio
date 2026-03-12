"use client";

import { Toaster as ToasterProvider } from "react-hot-toast";

export const Toaster = () => {
  return (
    <ToasterProvider
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            background: "green",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "green",
          },
        },
        error: {
          style: {
            background: "red",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "red",
          },
        },
      }}
    />
  );
};