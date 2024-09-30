"use client";
import { Parent } from "@/components";
export default function Grand() {
  return (
    <div>
      <span>Grand</span>
      <Parent name="hello" />
    </div>
  );
}
