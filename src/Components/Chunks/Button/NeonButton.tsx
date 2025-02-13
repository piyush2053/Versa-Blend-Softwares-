import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { Phone, Mail } from "lucide-react";

export default function NeonButton({ text }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center items-center relative my-8">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button className="bg-vbs px-5 py-1 rounded-full text-white font-semibold text-[20px]">
            {text}
          </button>
        </Popover.Trigger>
        <Popover.Portal>
        <Popover.Content className="bg-blue-50 shadow-lg rounded-lg p-2 text-black w-70 transition">
            <div
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
              onClick={() => window.location.href = 'tel:+918770162378'}
            >
              <Phone size={16} color="green" fill="green" fillOpacity={0.1}/>
              <span>Call on +91 8770162378</span>
            </div>
            <div
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
              onClick={() => window.location.href = 'mailto:piyushpatel2053@gmail.com'}
            >
              <Mail size={16} color="blue" fill="blue" fillOpacity={0.05}/>
              <span>piyushpatel2053@gmail.com</span>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
