import { ContactPayload } from "@/app/types/contact";

export const AddContact = async (payload: ContactPayload) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const result = await res.json();
    return result;
  } else {
    console.error("failed", res.status);
    throw new Error(` failed with status ${res.status}`);
  }
};
