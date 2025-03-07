export default function BebyPrivacyPage() {
    return (
        <main className="pb-16">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-6">Effective Date: [Insert Effective Date]</p>

                <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                <p className="mb-4">
                    Welcome to the Baby Gender Predictor app (the "App"). This Privacy Policy explains how we collect,
                    use, and protect your information when you use our App and website.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
                <p className="mb-4">
                    The App is designed to predict a child's gender based on traditional methods using the Chinese lunar
                    calendar and the Mayan calendar. In order to perform this calculation, we collect the following
                    information:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Mother's age</li>
                    <li>Month and year of conception</li>
                </ul>
                <p className="mb-4">
                    This data is used solely to provide the prediction and is not stored or shared with any third
                    parties.
                </p>

                <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
                <p className="mb-4">
                    The information you provide is used exclusively for calculating and displaying the gender
                    prediction. We do not retain or use this information for any other purpose.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                    Our website may use cookies and similar tracking technologies to enhance your user experience and
                    analyze website traffic. These cookies do not contain personal information and are used solely for
                    analytical purposes.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
                <p className="mb-4">
                    We do not share your information with third-party services for marketing or other purposes. Any
                    third-party services used on our website are employed only to help us better understand usage
                    patterns.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
                <p className="mb-4">
                    We take appropriate security measures to protect your data. Since the information provided is not
                    stored after the prediction is made, your privacy remains safeguarded.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Children's Privacy</h2>
                <p className="mb-4">
                    The App is not intended for use by children under the age of 13, and we do not knowingly collect
                    personal information from children under 13.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page along
                    with an updated effective date.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                    <a className="text-blue-600 hover:underline"
                       href="mailto:support@frozair.xyz">support@frozair.xyz</a>.
                </p>
            </div>
        </main>
    )
}