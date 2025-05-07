import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from ".";

const buttonVariants = cva(
  "rounded-base font-base inline-flex items-center justify-center gap-2 text-sm whitespace-nowrap ring-offset-white transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "text-main-foreground bg-main border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY border-2 hover:shadow-none",
        noShadow: "text-main-foreground bg-main border-border border-2",
        neutral:
          "bg-secondary-background text-foreground border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY border-2 hover:shadow-none",
        reverse:
          "text-main-foreground bg-main border-border hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow border-2",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
