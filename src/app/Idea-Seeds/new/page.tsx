export default function NewIdeaSeedPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] pt-32 pb-24 px-6 md:px-12 flex items-center justify-center">
            {/* Ambient background glows */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-fuchsia-500/5 blur-[200px] rounded-full mix-blend-screen opacity-50" />
            </div>

            <div className="relative z-10 w-full">
                <IdeaSeedForm />
            </div>
        </div>
    );
}

import IdeaSeedForm from '../components/IdeaSeedForm';
