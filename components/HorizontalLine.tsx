"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function HorizontalLine({ className = "" }: { className?: string }) {
  return (
    <motion.hr
      className={cn("h-0.5 w-full my-10", className)}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
    />
  );
}

export default HorizontalLine;
