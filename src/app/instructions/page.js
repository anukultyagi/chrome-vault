import React from 'react'
import Head from 'next/head';

const page = () => {
    return (
        <>
            <Head>
                <title>Chrome Vault - Installation Instructions</title>
            </Head>
            <div className="container max-w-6xl  mx-auto px-4 py-16">
                <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900">Installation Instructions</h1>
                <p className="text-lg text-gray-700 mb-12 text-center">
                    Follow these simple steps to download and install the Chrome extensions from Chrome Vault.
                </p>
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step 1: Download the Extension</h2>
                        <p className="text-gray-700 mb-6">
                            To get started, download the extension from our GitHub repository. Click the link below and download the ZIP file:
                        </p>
                        <a href="https://github.com/your-repo" className="text-blue-600 hover:text-blue-800 font-medium underline">
                            GitHub Repository
                        </a>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step 2: Extract the ZIP File</h2>
                        <p className="text-gray-700 mb-6">
                            After downloading, extract the ZIP file:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Windows: Right-click the file and select "Extract All".</li>
                            <li>macOS: Double-click the file to extract it.</li>
                            <li>Linux: Use the terminal to run <code className="bg-gray-100 px-1 rounded">unzip filename.zip</code>.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step 3: Enable Developer Mode in Chrome</h2>
                        <p className="text-gray-700 mb-6">
                            Open Chrome and navigate to <code className="bg-gray-100 px-1 rounded">chrome://extensions</code>. Enable Developer Mode using the toggle switch in the top right corner.
                        </p>
                        <img src="/images/enable-developer-mode.png" alt="Enable Developer Mode" className="w-full mt-6 rounded shadow" />
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step 4: Load the Unpacked Extension</h2>
                        <p className="text-gray-700 mb-6">
                            Click on "Load unpacked" and select the extracted folder from step 2.
                        </p>
                        <img src="/images/load-unpacked.png" alt="Load Unpacked Extension" className="w-full mt-6 rounded shadow" />
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step 5: Testing the Extension</h2>
                        <p className="text-gray-700 mb-2">
                            Once loaded, you should see the extension in your Chrome extensions list. You can now start using it.
                        </p>
                    </section>
                </div>

            </div>
        </>
    )
}

export default page