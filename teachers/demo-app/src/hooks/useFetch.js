import { useEffect, useState } from "react";

// Custom Hook — Logic loading / error / data សរសេរម្ដង ប្រើឡើងវិញគ្រប់ Component
// Naming: ត្រូវចាប់ផ្ដើមដោយ "use" ជានិច្ច
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // AbortController — Cancel Request ចាស់ ពេល url ប្ដូរ ឬ Component Unmount
        const controller = new AbortController();

        async function load() {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                setData(await res.json());
            } catch (e) {
                if (e.name !== "AbortError") setError(e.message);
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        }

        load();
        return () => controller.abort(); // Cleanup
    }, [url]); // url ប្ដូរ → Fetch ឡើងវិញ

    return { data, loading, error };
}
