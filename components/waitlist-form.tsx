"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      setSubmissionMessage("You've been added to the waitlist! We'll notify you when NinjaPay launches.")
      form.reset()
    } catch (error) {
      setSubmissionMessage("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="waitlist" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-primary/5 dark:from-background/95 dark:to-primary/[0.03] z-0" />
      
      <div className="container relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Join the Waitlist
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Be among the first to experience the future of private payments. We'll notify you when NinjaPay launches.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-medium text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Early Access</h3>
                  <p className="text-muted-foreground">Join the waitlist to get priority access when we launch.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-medium text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Exclusive Updates</h3>
                  <p className="text-muted-foreground">Receive insider information and product updates.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-medium text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Founder's Benefits</h3>
                  <p className="text-muted-foreground">Early adopters will receive special bonuses and features.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Reserve Your Spot</CardTitle>
                <CardDescription>
                  Enter your details below to join our exclusive waitlist.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="you@example.com" type="email" {...field} />
                                </FormControl>
                                <FormDescription>
                                  We'll never share your email with anyone else.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="submit" 
                            className="w-full" 
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              "Join Waitlist"
                            )}
                          </Button>
                        </form>
                      </Form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      <div className="rounded-full bg-primary/10 p-3 mb-4">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">You're on the list!</h3>
                      <p className="text-muted-foreground mb-6 max-w-xs">
                        {submissionMessage}
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsSubmitted(false)}
                      >
                        Add another email
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6 text-sm text-muted-foreground">
                <p>Privacy protected by NinjaPay</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}