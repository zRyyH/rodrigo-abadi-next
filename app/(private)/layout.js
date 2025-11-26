import Header from "@/components/layout/Header";

export default function PrivateLayout({ children }) {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex items-start justify-center min-h-screen pt-16">
                <main className="w-[1280px] animate-fadeSlideIn p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}