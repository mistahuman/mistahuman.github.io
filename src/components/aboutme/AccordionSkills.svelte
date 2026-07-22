<script lang="ts">
  import { Accordion } from '@skeletonlabs/skeleton-svelte';
  import ChevronDown from '@lucide/svelte/icons/chevron-down';
  // Icons
  import Wrench from '@lucide/svelte/icons/wrench';
  import HeartPulse from '@lucide/svelte/icons/heart-pulse';

  let value = $state(['tech']);
</script>

<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
  <Accordion.Item value="tech">
    <Accordion.ItemTrigger
      class="w-full flex items-center gap-4 px-4 py-3 rounded-base text-left cursor-pointer hover:preset-tonal"
    >
      <Wrench size={24} />
      <span>Tech</span>
      <Accordion.ItemIndicator
        class="ml-auto transition-transform duration-200 data-[state=open]:rotate-180"
      >
        <ChevronDown size={20} />
      </Accordion.ItemIndicator>
    </Accordion.ItemTrigger>
    <Accordion.ItemContent class="px-4 pb-3">
      <div class="p-1">
        <p class="text-sm">
          I have experience with a wide range of technologies, from web development to embedded
          systems. I am always eager to learn new tools and languages, and I am not afraid to dive
          into the unknown.
        </p>
        <ul class="list list-inside mt-2 space-y-2">
          <li>
            <span class="badge preset-filled-primary-500">SvelteKit</span>
            <span class="badge preset-filled-primary-500">Astro</span>
            <span class="badge preset-filled-primary-500">Skeleton UI Toolkit</span>
            <span class="badge preset-filled-primary-500">Vue.js</span>
          </li>
          <li>
            <span class="badge preset-filled-secondary-500">C</span>
            <span class="badge preset-filled-secondary-500">Python</span>
            <span class="badge preset-filled-secondary-500">Rust</span>
            <span class="badge preset-filled-secondary-500">Go</span>
          </li>
          <li>
            <span class="badge preset-filled-tertiary-500">MongoDB</span>
            <span class="badge preset-filled-tertiary-500">Docker</span>
            <span class="badge preset-filled-tertiary-500">Kubernetes</span>
            <span class="badge preset-filled-tertiary-500">Helm</span>
            <span class="badge preset-filled-tertiary-500">CI/CD</span>
            <span class="badge preset-filled-tertiary-500">Linux</span>
          </li>
          <li>
            <span class="badge preset-filled-success-500">LaTeX</span>
          </li>
        </ul>
      </div>
    </Accordion.ItemContent>
  </Accordion.Item>
  <hr class="hr" />
  <Accordion.Item value="soft">
    <Accordion.ItemTrigger
      class="w-full flex items-center gap-4 px-4 py-3 rounded-base text-left cursor-pointer hover:preset-tonal"
    >
      <HeartPulse size={24} />
      <span>Soft</span>
      <Accordion.ItemIndicator
        class="ml-auto transition-transform duration-200 data-[state=open]:rotate-180"
      >
        <ChevronDown size={20} />
      </Accordion.ItemIndicator>
    </Accordion.ItemTrigger>
    <Accordion.ItemContent class="px-4 pb-3">
      <div class="p-1">
        <p class="text-sm">
          I have developed a set of soft skills that allow me to work effectively in a team and
          independently. I am always looking for ways to improve my skills and learn new ones. I am
          not afraid to ask for help when needed, and I am always open to feedback.
        </p>
        <ul class="list list-inside mt-2 space-y-2">
          <li>
            <span class="badge preset-filled-success-500">Problem-Solving</span>
            <span class="badge preset-filled-success-500">Logical Thinking</span>
            <!-- <span class="badge preset-filled-success-500">Attention to Detail</span> -->
          </li>
          <li>
            <!-- <span class="badge preset-filled-warning-500">Effective Communication</span> -->
            <span class="badge preset-filled-warning-500">Independence & Self-Management</span>
            <!-- <span class="badge preset-filled-warning-500">Time Management</span> -->
            <!-- <span class="badge preset-filled-warning-500">Giving & Receiving Feedback</span> -->
          </li>
          <li>
            <span class="badge preset-filled-error-500">Research & Self-Teaching</span>
            <!-- <span class="badge preset-filled-error-500">Critical Thinking</span> -->
            <span class="badge preset-filled-error-500">Proactiveness</span>
            <!-- <span class="badge preset-filled-error-500">Curiosity & Willingness to Learn </span> -->
          </li>
        </ul>
      </div>
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion>
