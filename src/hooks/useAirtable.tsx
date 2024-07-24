import { useEffect } from "react";

export const useAirtable = () => {
  useEffect(() => {
    fetch("/api/airtable")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
};