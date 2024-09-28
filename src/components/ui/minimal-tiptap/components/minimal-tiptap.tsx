"use client";
import type { Editor as TiptapEditor } from "@tiptap/core";
import { useEditor, EditorContent, ReactNodeViewRenderer } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Link } from "@tiptap/extension-link";
import { Image } from "@tiptap/extension-image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import SectionOne from "./section-1";
import SectionTwo from "./section-2";
import SectionThree from "./section-3";
import SectionFour from "./section-4";
import { ImageViewBlock } from "./image/image-view-block";
import { LinkBubbleMenu } from "./bubble-menu/link-bubble-menu";
import { Plugin, TextSelection } from "@tiptap/pm/state";
import { getMarkRange } from "@tiptap/core";
import { getOutput } from "../utils";
import { ImageBubbleMenu } from "./bubble-menu/image-bubble-menu";
import { forwardRef, useCallback } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FormLabel } from "../../form";
import { Textarea } from "../../textarea";
import { Button } from "../../button";

export interface MinimalTiptapProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  outputValue?: "html" | "json" | "text";
  disabled?: boolean;
  speech?: boolean;
  contentClass?: string;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
}

const MinimalTiptapEditor = forwardRef<HTMLDivElement, MinimalTiptapProps>(
  (
    {
      value,
      outputValue = "html",
      disabled,
      contentClass,
      onValueChange,
      className,
      speech,
      ...props
    },
    ref
  ) => {
    const editor = useEditor({
      extensions: [
        StarterKit,
        Image.extend({
          addNodeView() {
            return ReactNodeViewRenderer(ImageViewBlock);
          },
        }),
        Link.configure({
          openOnClick: false,
        }).extend({
          // https://github.com/ueberdosis/tiptap/issues/2571
          inclusive: false,

          addProseMirrorPlugins() {
            return [
              new Plugin({
                // mark the link
                props: {
                  handleClick(view, pos) {
                    const { schema, doc, tr } = view.state;
                    const range = getMarkRange(
                      doc.resolve(pos),
                      schema.marks.link
                    );

                    if (!range) {
                      return;
                    }

                    const { from, to } = range;
                    const start = Math.min(from, to);
                    const end = Math.max(from, to);

                    if (pos < start || pos > end) {
                      return;
                    }

                    const $start = doc.resolve(start);
                    const $end = doc.resolve(end);
                    const transaction = tr.setSelection(
                      new TextSelection($start, $end)
                    );

                    view.dispatch(transaction);
                  },
                },
              }),
            ];
          },
        }),
      ],
      editorProps: {
        attributes: {
          class:
            "prose mx-auto focus:outline-none max-w-none prose-stone dark:prose-invert",
        },
      },
      onUpdate: (props) => {
        onValueChange(getOutput(props.editor, outputValue));
      },
      content: value,
      editable: !disabled,
    });
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition,
    } = useSpeechRecognition();
    const setBlog = useCallback(
      (text: string) => {
        editor?.chain().focus().enter().insertContent(text).run();
      },
      [editor]
    );
    return (
      <div>
        <div
          className={cn(
            "flex h-auto min-h-72 w-full flex-col rounded-md border border-input shadow-sm focus-within:border-primary",
            className
          )}
          {...props}
          ref={ref}
        >
          {editor && (
            <>
              <LinkBubbleMenu editor={editor} />
              <ImageBubbleMenu editor={editor} />
              <Toolbar editor={editor} />
            </>
          )}
          <div
            className="h-full grow"
            onClick={() => editor?.chain().focus().run()}
          >
            <EditorContent
              editor={editor}
              className={cn("p-5", contentClass)}
            />
          </div>
        </div>
        {speech && browserSupportsSpeechRecognition ? (
          <div className="">
            <FormLabel>Speeach to text</FormLabel>
            <Textarea value={transcript} className="cursor-not-allowed" />
            <div className=" space-x-2 my-2">
              <Button type="button" onClick={SpeechRecognition.startListening}>
                Start
              </Button>
              <Button type="button" onClick={SpeechRecognition.stopListening}>
                Stop
              </Button>
              <Button type="button" onClick={resetTranscript}>
                Reset
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setBlog(transcript);
                  resetTranscript();
                }}
              >
                Add to Blog
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
);

MinimalTiptapEditor.displayName = "MinimalTiptapEditor";

const Toolbar = ({ editor }: { editor: TiptapEditor }) => {
  return (
    <div className="border-b border-border p-2">
      <div className="flex w-full flex-wrap items-center">
        <SectionOne editor={editor} />
        <Separator orientation="vertical" className="mx-2 h-7" />
        <SectionTwo editor={editor} />
        <Separator orientation="vertical" className="mx-2 h-7" />
        <SectionThree editor={editor} />
        <Separator orientation="vertical" className="mx-2 h-7" />
        <SectionFour editor={editor} />
      </div>
    </div>
  );
};

export { MinimalTiptapEditor };
