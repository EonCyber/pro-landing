import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp01Icon, MailIcon, MessageSquare, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { z } from 'zod'

import DOMPurify from "dompurify";

import { collection, addDoc } from 'firebase/firestore';
import { db, portfolioFormResponse } from "@/components/Shared/api/firebase/config";
import { ToastAction } from "@radix-ui/react-toast";

const formSchema = z.object({
    name: z.string(),
    contact: z.string().refine((value) => /^\+?\d{6,15}$/.test(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
        message: 'Must be a valid Email (eg. myemail@gmail.com) or Phone number (eg. +55333332222)',
      }),
    message: z.string(),
})

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            contact: "",
            message: ""
        }
    })
    const { toast } = useToast()
    const saveMessage = async (values: z.infer<typeof formSchema>) => {
      try { 
        const sanitizedValues = Object.fromEntries(
            Object.entries(values).map(([key, value]) => [key, DOMPurify.sanitize(value)])
          );
        await addDoc(collection(db, portfolioFormResponse), sanitizedValues)
        toast({
            variant: 'default',
            title: "Mensagem Enviada!",
            description: "Logo entrarei em contato com você!",
        })
        form.reset()
      } catch (e) {
        toast({
            variant: "destructive",
            title: "Uh oh! Algo deu errado.",
            description: "Não foi possível enviar a mensagem.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
      }
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(saveMessage)} className="flex flex-col gap-y-4 pt-10 xl:pt-20">
                <FormField 
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <Input {...field} type='name' id='name' required placeholder="Who are You?" className="transition-all" />
                                    <User className="absolute right-6" size={20} />
                                </div>
                            </FormControl>
                        </FormItem>
                    )} />
                <FormField 
                    control={form.control}
                    name="contact"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                            <div className="relative flex items-center">
                                <Input  {...field} type='contact' id='contact' required placeholder="Your Email or Whatsapp?" className="transition-all" />
                                <MailIcon className="absolute right-6" size={20} />
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField 
                    control={form.control}
                    name="message"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                            <div className="relative flex items-center">
                                <Textarea {...field} rows={12} id='message' required placeholder="How May I Help You?" />
                                <MessageSquare className="absolute top-4 right-6" size={20} />
                            </div>
                            </FormControl>
                        </FormItem>
                    )} />
                <Button disabled={form.formState.isSubmitting} className="flex items-center gap-x-1">Send it <ArrowUp01Icon size={20} /></Button>
            </form>
        </Form>
    )
}