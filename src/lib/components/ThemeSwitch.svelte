<script>
    import SunMoon from "@lucide/svelte/icons/sun-moon";

    let mode = "light"; 

    if (typeof document !== "undefined") {
        mode = document.documentElement.getAttribute("data-mode") || "light";
    }

    function toggleMode() {
        mode = mode === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-mode", mode);
        localStorage.setItem("mode", mode);
    }
</script>

<button
    on:click={toggleMode}
    class="btn-icon hover:preset-tonal"
    title="Toggle dark mode."
>
    <SunMoon size={20} />
</button>
