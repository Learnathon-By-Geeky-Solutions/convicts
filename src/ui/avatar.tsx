"use client"

import * as React from "react"

import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = (
  {
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
  ref?: React.Ref<React.ComponentRef<typeof AvatarPrimitive.Root>>,
) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = (
  {
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>,
  ref?: React.Ref<React.ComponentRef<typeof AvatarPrimitive.Image>>,
) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
)
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = (
  {
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
  ref?: React.Ref<React.ComponentRef<typeof AvatarPrimitive.Fallback>>,
) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800",
      className,
    )}
    {...props}
  />
)
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
