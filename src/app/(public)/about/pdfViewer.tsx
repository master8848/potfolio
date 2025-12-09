"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
export const RESUME_URL = "/Saurav_Sanjel_Resume.pdf";
const PdfResume = () => {
  const [openPdf, setOpenPdf] = useState(false);

  return (
    <Sheet
      open={openPdf}
      onOpenChange={(op) => {
        setOpenPdf(op);
      }}
    >
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          className="mt-5 py-4!"
          onClick={() => setOpenPdf((c) => !c)}
        >
          {!openPdf ? "View Resume" : "Hide Resume"}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Saurav's Resume </SheetTitle>
        </SheetHeader>
        <div className=" flex items-center justify-center">
          {/* <iframe
            src={RESUME_URL}
            className="lg:w-[80%] h-[85vh]"
            title="Saurav Resume"
          /> */}
          <embed
            type="application/pdf"
            src={RESUME_URL}
            className="w-[80%] h-[85vh]"
            title="Saurav Resume"
          ></embed>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default PdfResume;
