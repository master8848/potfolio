"use client"

import {
    ArrowDownToLine,
    Linkedin,
    Github,
    AtSign,
    PhoneCall
} from 'lucide-react'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuTrigger } from '../../components/ui/context-menu'
import { useToast } from '../../components/ui/use-toast'
export function Socials({ show = false }) {
    return <>
        <h2 className="  tracking-tight ">
            {show ? <span className='p-2 font-bold'>Right click to copy.</span> : null}
            <ul className='flex space-x-3'>
                <li className='p-3 bg-accent text-accent-foreground rounded-full  border-white border'>
                    <a target='_blank' href="https://www.linkedin.com/in/saurav-sanjel-master/">

                        <Linkedin />
                    </a>
                </li>
                <li className='p-3 bg-accent text-accent-foreground rounded-full  border-white border'>
                    <a target='_blank' href="https://github.com/master8848">

                        <Github />
                    </a>
                </li>
                <li className='p-3 bg-accent text-accent-foreground rounded-full  border-white border'>
                    <a target='_blank' href="mailto:sauravsanjelgg+potfolioref@gmail.com">

                        <AtSign />
                    </a>
                </li>
                <li className='p-3 bg-accent text-accent-foreground rounded-full  border-white border'>
                    <a target='_blank' href="tel:+91 8310775600">

                        <PhoneCall />
                    </a>
                </li>
            </ul>
        </h2>
    </>
}
export function Resume() {
    return <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow border-white border">
            <a
                href="/Saurav_Sanjel_Resume.pdf"
                download={true}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md  bg-accent  text-accent-foreground"
            >
                Download Resume{"  "} <ArrowDownToLine className='ml-2' />
            </a>
        </div>
    </div>
}
export default function Cta() {
    return (
        <div className="">
            <ContextMenu>
                <ContextMenuTrigger className="">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <Socials show></Socials>
                        <Resume />
                    </div>


                </ContextMenuTrigger>
                <LinksContex />
            </ContextMenu>
        </div>
    )
}

export function LinksContex() {
    const { toast } = useToast()

    return <ContextMenuContent className="w-64">
        <ContextMenuLabel >
            Copy link
        </ContextMenuLabel>
        <ContextMenuItem inset onSelect={() => {

            navigator.clipboard.writeText("https://www.linkedin.com/in/saurav-sanjel-master/").then(() => toast({
                title: "Copied sucessfully✅",
            })).catch((e) => { toast({ title: "Could not copy!" }); console.error(e) })

        }
        }>
            Linked In

        </ContextMenuItem>
        <ContextMenuItem inset onSelect={() => {

            navigator.clipboard.writeText("https://github.com/master8848").then(() => toast({
                title: "Copied sucessfully✅",
            })).catch((e) => { toast({ title: "Could not copy!" }); console.error(e) })

        }
        } >
            Github
        </ContextMenuItem>
        <ContextMenuItem inset onSelect={() => {

            navigator.clipboard.writeText("sauravsanjelgg+potfolioref@gmail.com").then(() => toast({
                title: "Copied sucessfully✅",
            })).catch((e) => { toast({ title: "Could not copy!" }); console.error(e) })

        }
        }>
            Mail
        </ContextMenuItem>
        <ContextMenuItem inset onSelect={() => {

            navigator.clipboard.writeText("tel:+91 8310775600").then(() => toast({
                title: "Copied sucessfully✅",
            })).catch((e) => { toast({ title: "Could not copy!" }); console.error(e) })

        }
        }>
            Phone
        </ContextMenuItem>

    </ContextMenuContent>
} 