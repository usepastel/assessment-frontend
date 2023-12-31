import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Login() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <p className="fixed flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Get started by editing&nbsp;
                <code className="font-mono font-bold">pages/login.tsx</code>
            </p>
        </main>
    );
}
