'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidenavProps {
    children: React.ReactNode
    className?: string
}

export default function SidenavProps({ children, className }: SidenavProps) {
    return <ul className={className}>{children}</ul>
}

export function SidenavSeparator(props: { children: React.ReactNode }) {
    return <li className={'flex items-center px-4 py-1 font-medium text-sm'}>{props.children}</li>
}

export function SidenavItem(props: {
    icon: React.ReactNode
    children: React.ReactNode
    href?: string
    onClick?: () => void
}) {
    const pathname = usePathname()
    const isActive = props.href !== '/dashboard' ? pathname.includes(props.href!) : false
    const className = `w-full flex gap-2 px-3 py-1 items-center
    active:bg-stone-200 dark:active:bg-stone-800`
    const content = (
        <>
            <div className='items-center justify-center p-1'>{props.icon}</div>
            <p className='text block w-full text-left font-medium'>{props.children}</p>
        </>
    )

    if (props.href) {
        return (
            <li className={`${isActive ? 'bg-[#c6ece4]' : ''}flex items-center rounded-lg`}>
                <Link href={props.href} className={className}>
                    {content}
                    {isActive && <div className='h-2 w-3 rounded-full bg-gray-500' />}
                </Link>
            </li>
        )
    }

    return (
        <li>
            <button className={className} onClick={props.onClick}>
                {content}
            </button>
        </li>
    )
}
