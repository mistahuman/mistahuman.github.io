<script>
    import { Avatar } from "@skeletonlabs/skeleton-svelte";
    import Tabs from "./Tabs.svelte";
</script>

<div class="">
    <div class="space-y-4 p-4 flex flex-col items-center text-center">
        <Avatar src="me.jpg" name="skeleton" />
        <div>
            <h3 class="h4">Marco Lanconelli</h3>
            <h2 class="h7">Software Engineer, Fullstack developer</h2>
        </div>
        <p class="opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            aspernatur provident eveniet eligendi cumque consequatur tempore
            sint nisi sapiente. Iste beatae laboriosam iure molestias cum
            expedita architecto itaque quae rem.
        </p>
    </div>
    <div class="space-y-4 p-4 flex flex-col items-center">
        <Tabs />
    </div>
</div>
