"use client"

import MDEditor from "@uiw/react-md-editor"
import { Send } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useActionState, useState } from "react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { createPitch } from "@/lib/actions"
import { formSchema } from "@/lib/validation"

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [pitch, setPitch] = useState("")
  const { toast } = useToast()
  const router = useRouter()

  const handleFormSubmit = async (previousState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      }

      await formSchema.parseAsync(formValues)

      const result = await createPitch(previousState, formData, pitch)

      if (result.status == "SUCCESS") {
        toast({
          title: "Success",
          description: "Your startup pitch has been created successfully",
        })

        router.push(`/startup/${result._id}`)
      }

      return result
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors

        setErrors(fieldErrors as unknown as Record<string, string>)

        toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive",
        })

        return { ...previousState, error: "Validation failed", status: "ERROR" }
      }

      toast({
        title: "Error",
        description: "An unexpected error has occurred",
        variant: "destructive",
      })

      return {
        ...previousState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      }
    }
  }

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  })

  return (
    <Card className="mx-auto mb-20 w-full max-w-2xl rounded-3xl">
      <CardHeader>
        <CardTitle className="sr-only">Startup Pitch</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              required
              placeholder="Startup Title"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              required
              placeholder="Startup Description"
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              required
              placeholder="Startup Category (Tech, Health, Education...)"
            />
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="link">Image URL</Label>
            <Input
              id="link"
              name="link"
              required
              placeholder="Startup Image URL"
            />
            {errors.link && (
              <p className="text-sm text-red-500">{errors.link}</p>
            )}
          </div>

          <div className="space-y-2" data-color-mode="dark">
            <Label htmlFor="pitch">Pitch</Label>
            <MDEditor
              value={pitch}
              onChange={value => setPitch(value as string)}
              id="pitch"
              preview="edit"
              height={300}
              style={{ borderRadius: 8, overflow: "hidden" }}
              textareaProps={{
                placeholder:
                  "Briefly describe your idea and what problem it solves",
              }}
              previewOptions={{
                disallowedElements: ["style"],
              }}
            />
            {errors.pitch && (
              <p className="text-sm text-red-500">{errors.pitch}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit Your Pitch"}
            <Send className="ml-2 size-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default StartupForm
