<script lang="ts">
  import { Accordion } from '@skeletonlabs/skeleton-svelte';
  import ChevronDown from '@lucide/svelte/icons/chevron-down';
  // Icons
  import GraduationCap from '@lucide/svelte/icons/graduation-cap';
  import School from '@lucide/svelte/icons/school';
  import Newspaper from '@lucide/svelte/icons/newspaper';
  import Calendar from '@lucide/svelte/icons/calendar';
  import MapPin from '@lucide/svelte/icons/map-pin';
  import Goal from '@lucide/svelte/icons/goal';

  let value = $state(['']);
</script>

<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
  <Accordion.Item value="master">
    <!-- Control -->
    <Accordion.ItemTrigger
      class="w-full flex items-center gap-4 px-4 py-3 rounded-base text-left cursor-pointer hover:preset-tonal"
    >
      <GraduationCap size={24} />
      <span>Master’s Degree in Energy and Nuclear Engineering</span>
      <Accordion.ItemIndicator
        class="ml-auto transition-transform duration-200 data-[state=open]:rotate-180"
      >
        <ChevronDown size={20} />
      </Accordion.ItemIndicator>
    </Accordion.ItemTrigger>
    <!-- Panel -->
    <Accordion.ItemContent class="px-4 pb-3">
      <div class="p-1">
        <h3 class="text-base font-semibold text-primary">
          Alma Mater Studiorum - University of Bologna
        </h3>
        <p class="text-xs flex flex-wrap items-center gap-3 text-surface-600 dark:text-surface-400">
          <Calendar size={18} /> Sep 2016 - Dec 2019
          <MapPin size={18} /> Bologna
          <Goal size={18} /> 110L/110L
        </p>
        <div class="mt-3 space-y-2 text-sm">
          <p><strong>Thesis</strong></p>
          <p>
            <i>Title:</i> Modeling of an LFR Nuclear Reactor and Implementation on a Numerical Platform
            with Neutronic and Thermohydraulic Coupling
          </p>
          <p><i>Supervisor:</i> Sandro Manservisi</p>
          <p>
            <i>Description:</i> The nuclear reactor integrated into the numerical platform is based on
            the ALFRED project, which aims to demonstrate the feasibility of lead-cooled fast reactors.
            The numerical platform enables a comprehensive simulation of reactor physics through the implementation
            of the Dragon/Donjon neutronic code and the FEMuS thermohydraulic code.
          </p>
          <p>
            <i>Repository:</i>
            <a
              href="https://github.com/mistahuman/marcolanconelli-thesis"
              target="_blank"
              class="anchor"
            >
              mistahuman/marcolanconelli-thesis
            </a>
            (thesis, slides & conference paper).
          </p>
          <p>
            <i>Coursework:</i>
            <a
              href="https://github.com/mistahuman/nuclear-engineer-homeworks"
              target="_blank"
              class="anchor"
            >
              mistahuman/nuclear-engineer-homeworks
            </a>
            (reports and projects from the M.Sc. programme).
          </p>
        </div>
      </div>
    </Accordion.ItemContent>
  </Accordion.Item>
  <hr class="hr" />
  <Accordion.Item value="publication">
    <Accordion.ItemTrigger
      class="w-full flex items-center gap-4 px-4 py-3 rounded-base text-left cursor-pointer hover:preset-tonal"
    >
      <Newspaper size={24} />
      <span>Conference Proceedings</span>
      <Accordion.ItemIndicator
        class="ml-auto transition-transform duration-200 data-[state=open]:rotate-180"
      >
        <ChevronDown size={20} />
      </Accordion.ItemIndicator>
    </Accordion.ItemTrigger>
    <Accordion.ItemContent class="px-4 pb-3">
      <div class="p-1">
        <h3 class="text-base font-semibold text-primary">
          Technical Meeting on the Benefits and Challenges of Fast Reactors of the SMR Type
        </h3>
        <p class="text-xs flex items-center gap-2 text-surface-600 dark:text-surface-400">
          <Calendar size={18} /> Sep 2019
          <MapPin size={18} /> Milan
        </p>
        <div class="mt-3 space-y-2 text-sm">
          <p><strong>Article</strong></p>
          <p><i>Title:</i>A Multiphysics Approach to LFR Analysis</p>
          <p><i>Authors:</i> Marco Lanconelli, Sandro Manservisi, Marco Sumini</p>
        </div>
      </div>
    </Accordion.ItemContent>
  </Accordion.Item>
  <hr class="hr" />
  <Accordion.Item value="bachelor">
    <Accordion.ItemTrigger
      class="w-full flex items-center gap-4 px-4 py-3 rounded-base text-left cursor-pointer hover:preset-tonal"
    >
      <GraduationCap size={24} />
      <span>Bachelor’s Degree in Energy Engineering</span>
      <Accordion.ItemIndicator
        class="ml-auto transition-transform duration-200 data-[state=open]:rotate-180"
      >
        <ChevronDown size={20} />
      </Accordion.ItemIndicator>
    </Accordion.ItemTrigger>
    <Accordion.ItemContent class="px-4 pb-3">
      <div class="p-1">
        <h3 class="text-base font-semibold text-primary">
          Alma Mater Studiorum - University of Bologna
        </h3>
        <p class="text-xs flex items-center gap-2 text-surface-600 dark:text-surface-400">
          <Calendar size={18} /> Sep 2012 – Mar 2016
          <MapPin size={18} /> Bologna
          <Goal size={18} /> 95/110L
        </p>
      </div>
    </Accordion.ItemContent>
  </Accordion.Item>
  <hr class="hr" />
  <Accordion.Item value="highschool">
    <Accordion.ItemTrigger
      class="w-full flex items-center gap-4 px-4 py-3 rounded-base text-left cursor-pointer hover:preset-tonal"
    >
      <School size={24} />
      <span>High School Diploma in Science and Technology</span>
      <Accordion.ItemIndicator
        class="ml-auto transition-transform duration-200 data-[state=open]:rotate-180"
      >
        <ChevronDown size={20} />
      </Accordion.ItemIndicator>
    </Accordion.ItemTrigger>
    <Accordion.ItemContent class="px-4 pb-3">
      <div class="p-1">
        <h3 class="text-base font-semibold text-primary">
          G. R. Curbastro Scientific and Technological High School
        </h3>
        <p class="text-xs flex items-center gap-2 text-surface-600 dark:text-surface-400">
          <Calendar size={18} /> Sep 2007 – Jun 2012
          <MapPin size={18} /> Lugo (RA)
          <Goal size={18} /> 80/100
        </p>
      </div>
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion>
