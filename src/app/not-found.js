import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <div className="container max-w-6xl mx-auto p-4 mt-36 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="mb-4 text-7xl font-semibold text-zinc-800">404</h1>
                    <p className="mb-10 text-lg text-gray-800">Oops! Looks like you're lost.</p>
                    <div className="animate-bounce">
                        <svg className="mx-auto h-16 w-16 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                    </div>
                    <p className="mt-2 text-gray-600">
                        Let's get you back
                        <Link className="inline-block underline underline-offset-4 px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2 hover:text-zinc-950" href="/" previewlistener="true">Home Page</Link>
                        .
                    </p>
                </div>
            </div>

        </>
    );
};

export default Custom404;
