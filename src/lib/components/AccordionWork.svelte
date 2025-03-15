<script lang="ts">
    import { Accordion } from '@skeletonlabs/skeleton-svelte';
    // Icons
    import Briefcase from '@lucide/svelte/icons/briefcase';
    import Calendar from '@lucide/svelte/icons/calendar';
    import MapPin from '@lucide/svelte/icons/map-pin';
    import Goal from '@lucide/svelte/icons/goal';

    let value = $state(['nier']);
  </script>
  
<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
    <Accordion.Item value="nier">
      <!-- Control -->
      {#snippet lead()}<Briefcase size={24} />{/snippet}
      {#snippet control()}NIER Ingegneria S.p.A. - Società Benefit{/snippet}
      <!-- Panel -->
      {#snippet panel()}
      <div class="p-1">
        <h3 class="text-base font-semibold text-primary">Software Engineer</h3>
        <p class="text-xs flex items-center gap-2">
          <Calendar size={18} /> Oct 2020 – Present
          <MapPin size={18} /> Bologna  
        </p>
        <div class="mt-3 space-y-2 text-sm">
              Design and implementation of the entire software development lifecycle for safety-critical systems, including:
              <ul class="list-disc pl-5 space-y-1">
                  <li><strong>Development of safety-critical software</strong> for ERTMS systems (Interlocking, RBC).</li>
                  <li><strong>Design of safety-critical communication protocols</strong>.</li>
                  <li><strong>Automation</strong> of development processes and simulation tools.</li>
                  <li><strong>Software verification & validation</strong>.</li>
                  <li><strong>Full-stack web development</strong> for business process and document management</li>
              </ul>
              Work projects:
              <ul class="list-disc pl-5 space-y-1">
                  <li><strong><a href="https://www.niering.it/software-gestionali-hr-le-nuove-funzionalita-di-matriskills/" class="anchor">MatriSkillS</a></strong> 
                    <p><strong>Role:</strong> Fullstack Developer</p>
                    <p>Software platform for personnel management and professional growth, including candidate selection and skill search.</p>
                    <p><strong>Technologies:</strong> Docker, Flask, MongoDB, Vue.js, Bootstrap</p>
                  </li>
                  <li><strong><a href="https://www.niering.it/case_histories/simulatore-multiprotocollo-emuxp/" class="anchor">EmuXP</a></strong> 
                    <p><strong>Role:</strong> Fullstack Developer</p>
                    <p>Multiprotocol simulation suite for functional validation of communication nodes, with advanced tools for protocol manipulation.</p>
                    <p><strong>Technologies:</strong> C, Cython, gRPC, Flask, Vue.js, Vuetify</p>
                  </li>
              </ul>
        </div>
      </div>
      {/snippet}
    </Accordion.Item>
  </Accordion>