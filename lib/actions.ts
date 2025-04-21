"use client"

import { z } from "zod"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function submitToWaitlist(formData: FormData) {
  const validatedFields = formSchema.safeParse(formData)
  
  if (!validatedFields.success) {
    return { 
      success: false, 
      message: "Invalid form data. Please check your inputs." 
    }
  }

  // In a real application, you would save this to a database
  // For this demo, we'll just simulate a successful submission
  
  try {
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return { 
      success: true, 
      message: "You've been added to the waitlist! We'll notify you when NinjaPay launches." 
    }
  } catch (error) {
    return { 
      success: false, 
      message: "Something went wrong. Please try again later." 
    }
  }
}