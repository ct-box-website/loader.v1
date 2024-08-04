import React from 'react'
import { MdEmail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { SlLock } from "react-icons/sl";
import { IconType } from 'react-icons';
interface TextInputProps {
    type?: string;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    Icon?: any
}
const TextInput: React.FC<TextInputProps> = ({
    type = "text",
    placeholder,
    className,
    disabled,
    value,
    onBlur,
    onChange,
    onFocus,
    onInput,
    Icon = MdEmail
}) => {
    return (
        <div className='relative' >
            <input
                type={type}
                placeholder={placeholder}
                className="
                border-[1.8px] 
                border-slate-300 
                p-2 
                rounded-md 
                focus:outline-none 
                focus:border-secondary 
                w-full
                pl-3
                text-secondary
                font-medium
                "
                pattern={`${type === 'email' ? '[a-z0-9._%+-]+@[a}' : ""}`}
            />
            {Icon
                && <div className='absolute top-[12px] right-3' >
                    <Icon
                        className='text-slate-400 text-[18px]'
                    />
                </div>}
        </div>
    )
}

export default TextInput