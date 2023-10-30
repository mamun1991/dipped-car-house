import { ScaleLoader } from "react-spinners";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="h-screen backdrop-blur-lg flex justify-center items-center">
            <ScaleLoader color="#4FFEF3" />
        </div>
    );
}
