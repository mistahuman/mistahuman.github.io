<script lang="ts">
  import { Accordion } from '@skeletonlabs/skeleton-svelte'
  // Icons
  import Briefcase from '@lucide/svelte/icons/briefcase'
  import Calendar from '@lucide/svelte/icons/calendar'
  import MapPin from '@lucide/svelte/icons/map-pin'
  import Laptop from '@lucide/svelte/icons/laptop'
  let value = $state(['freelancer'])
</script>

<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
  <!-- Freelance -->
  <Accordion.Item value="freelancer">
    {#snippet lead()}<Laptop size={22} />{/snippet}
    {#snippet control()}Freelancer{/snippet}

    {#snippet panel()}
      <div class="p-3 space-y-3">
        <header class="space-y-1">
          <h3 class="text-base font-semibold text-primary">
            Full Stack Developer & Software Engineer
          </h3>
          <p
            class="text-xs flex flex-wrap items-center gap-3 text-surface-600 dark:text-surface-400"
          >
            <span class="flex items-center gap-1"><Calendar size={16} /> Oct 2025 – Present</span>
            <span class="flex items-center gap-1"><MapPin size={16} /> Bologna</span>
          </p>
        </header>

        <div class="mt-3 text-sm space-y-2">
          <p>
            I help companies design and deliver scalable software solutions — from microservice
            architectures to full-stack web applications.
          </p>
        </div>
      </div>
    {/snippet}
  </Accordion.Item>

  <!-- NIER -->
  <Accordion.Item value="nier">
    {#snippet lead()}<Briefcase size={22} />{/snippet}
    {#snippet control()}NIER Ingegneria S.p.A. – Società Benefit{/snippet}

    {#snippet panel()}
      <div class="p-3 space-y-3">
        <header class="space-y-1">
          <h3 class="text-base font-semibold text-primary">Software Engineer</h3>
          <p
            class="text-xs flex flex-wrap items-center gap-3 text-surface-600 dark:text-surface-400"
          >
            <span class="flex items-center gap-1"><Calendar size={16} /> Oct 2020 – Oct 2025</span>
            <span class="flex items-center gap-1"><MapPin size={16} /> Bologna</span>
          </p>
        </header>

        <div class="text-sm space-y-3 leading-relaxed">
          <p>
            Design and implementation of the full software development lifecycle for <strong
              >safety-critical systems</strong
            >, including:
          </p>

          <ul class="list-disc pl-5 space-y-1">
            <li>
              <strong>Development of safety-critical software</strong> for ERTMS systems (Interlocking,
              RBC).
            </li>
            <li><strong>Design of safety-critical communication protocols</strong>.</li>
            <li><strong>Automation</strong> of development processes and simulation tools.</li>
            <li><strong>Software verification & validation</strong>.</li>
            <li>
              <strong>Full-stack web development</strong> for business process and document management.
            </li>
          </ul>

          <p class="pt-1 font-medium text-surface-700 dark:text-surface-300">Main projects:</p>
          <ul class="list-disc pl-5 space-y-3">
            <li>
              <strong>
                <a
                  href="https://www.niering.it/software-gestionali-hr-le-nuove-funzionalita-di-matriskills/"
                  class="anchor"
                >
                  MatriSkillS
                </a>
              </strong>
              <p><strong>Role:</strong> Full Stack Developer</p>
              <p>
                Software platform for personnel management and professional growth, including
                candidate selection and skill search.
              </p>
              <div class="flex flex-wrap gap-1 mt-1">
                <span class="badge preset-outlined-secondary-500">Docker</span>
                <span class="badge preset-outlined-secondary-500">Flask</span>
                <span class="badge preset-outlined-secondary-500">MongoDB</span>
                <span class="badge preset-outlined-secondary-500">Vue.js</span>
                <span class="badge preset-outlined-secondary-500">Bootstrap</span>
              </div>
            </li>

            <li>
              <strong>
                <a
                  href="https://www.niering.it/case_histories/simulatore-multiprotocollo-emuxp/"
                  class="anchor"
                >
                  EmuXP
                </a>
              </strong>
              <p><strong>Role:</strong> Full Stack Developer</p>
              <p>
                Multiprotocol simulation suite for functional validation of communication nodes,
                with advanced tools for protocol manipulation.
              </p>
              <div class="flex flex-wrap gap-1 mt-1">
                <span class="badge preset-outlined-secondary-500">C</span>
                <span class="badge preset-outlined-secondary-500">Cython</span>
                <span class="badge preset-outlined-secondary-500">gRPC</span>
                <span class="badge preset-outlined-secondary-500">Flask</span>
                <span class="badge preset-outlined-secondary-500">Vue.js</span>
                <span class="badge preset-outlined-secondary-500">Vuetify</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    {/snippet}
  </Accordion.Item>
</Accordion>
