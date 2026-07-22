<script lang="ts">
  import { Avatar } from '@skeletonlabs/skeleton-svelte';
</script>

<Avatar
  class="w-40 h-40 md:w-60 md:h-60 border border-white rounded-lg overflow-hidden isolate flex items-center justify-center"
>
  <Avatar.Image src="/me2.jpg" alt="marcolanconelli" class="w-full h-full object-cover" />
  <Avatar.Fallback class="font-bold text-2xl uppercase">ml</Avatar.Fallback>
</Avatar>
