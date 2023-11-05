import { FormSignIn } from "@components/auth"
import Image from "next/image"

export default function LoginPage() {
    return (
        <main className="flex justify-center">
            <div>
                <Image
                    src={"/facebook.svg"}
                    alt="error"
                    width={320}
                    height={106}
                />
                <p>
                    Facebook helps you contact and shear with people in your
                    life
                </p>
            </div>

            <FormSignIn />
        </main>
    )
}
