<script>
    import Send from '@lucide/svelte/icons/send';
    import ChevronRight from '@lucide/svelte/icons/chevron-right';

</script>


<div class="container mx-auto flex justify-center p-10 pt-20 pb-5">
    <div class="space-y-4 p-4 flex flex-col items-center text-center">
        <h1 class="text-6xl font-bold">mistahuman GitHub Pages</h1>
        <div class="p-4">
            <a href="#mycv" type="button" class="btn preset-tonal-secondary">
                <span>
                    Get mycv
                </span>
                <span>
                    <ChevronRight size={20} />
                </span>
            </a>
            <a href="#mycv" type="button" class="btn preset-outlined-secondary-500 ml-2">
                <span>
                    Contact me
                </span>
                <span>
                    <Send size={20} />
                </span>
            </a>
        </div>
    </div>
</div>