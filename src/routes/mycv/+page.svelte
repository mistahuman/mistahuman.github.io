<script>
    import Profile from "$lib/components/Profile.svelte";
</script>

<div>
    <section>
        <div class="container mx-auto flex justify-center p-10 pt-20 pb-5">
            <Profile />
        </div>
    </section>
</div>

<style lang="postcss">
    /* Create a custom preset in your global stylesheet */
    .preset-gradient-one {
        background-image:
            radial-gradient(
                at 24% 25%,
                color-mix(in oklab, var(--color-primary-500) 30%, transparent)
                    0px,
                transparent 30%
            ),
            radial-gradient(
                at 35% 13%,
                color-mix(in oklab, var(--color-success-500) 18%, transparent)
                    0px,
                transparent 30%
            ),
            radial-gradient(
                at 100% 64%,
                color-mix(in oklab, var(--color-error-500) 3%, transparent) 0px,
                transparent 40%
            );
        color: var(--color-primary-contrast-500);
    }
    .preset-gradient-two {
        background-image: linear-gradient(
            45deg,
            var(--color-error-500),
            var(--color-warning-500)
        );
        color: var(--color-error-contrast-500);
    }
    .preset-gradient-three {
        background-image: linear-gradient(
            45deg,
            var(--color-success-500),
            var(--color-warning-500)
        );
        color: var(--color-success-contrast-500);
    }
</style>
