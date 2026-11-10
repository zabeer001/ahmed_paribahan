"use client";
import { useEffect, useRef, useState } from "react";
export function showPreviewNotice(title: string, message: string) {
  window.dispatchEvent(new CustomEvent("preview-notice", { detail: { title, message } }));
}
export function PreviewNotice() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [content, setContent] = useState({ title: "", message: "" });
  useEffect(() => {
    function show(event: Event) {
      setContent((event as CustomEvent<{ title: string; message: string }>).detail);
      if (!dialog.current?.open) dialog.current?.showModal();
    }
    window.addEventListener("preview-notice", show);
    return () => window.removeEventListener("preview-notice", show);
  }, []);
  return <dialog ref={dialog} className="preview-dialog" aria-labelledby="notice-title"><h2 id="notice-title">{content.title}</h2><p>{content.message}</p><form method="dialog"><button className="btn-o" autoFocus>Close</button></form></dialog>;
}
