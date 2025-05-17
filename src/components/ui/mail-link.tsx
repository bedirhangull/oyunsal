import { useState } from "react";
import { Mail } from "lucide-react";
import clsx from "clsx";

const MailLink = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 600); // Reset animation state

        // Open mail client after short delay (optional UX)
        setTimeout(() => {
            window.location.href = "mailto:dev.bedirhangul@gmail.com";
        }, 100);
    };

    return (
        <div
            className="group flex cursor-pointer items-center gap-6 border-t border-dashed p-4 font-medium transition-transform duration-300 hover:scale-105 md:justify-center lg:p-10 lg:text-lg"
            onClick={handleClick}
        >
            <div className="relative flex size-10 shrink-0 lg:size-12">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75 group-hover:opacity-100"></span>
                <span
                    className={clsx(
                        "relative z-10 flex size-10 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base",
                        clicked && "animate-scale-once"
                    )}
                >
                    <Mail className="w-5 lg:w-6" />
                </span>
            </div>
            EDRO Moruk Yazılımdan Yeni Oyun isteklerinde bulunabilirsiniz.
        </div>
    );
};

export default MailLink;