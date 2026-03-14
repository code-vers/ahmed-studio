import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center">
            <Image
                src="/images/website/website-logo.png"
                alt="Logo"
                width={300}
                height={100}
                className="h-10 w-32 md:h-12 md:w-40 object-contain"
            />
        </div>
    );
}