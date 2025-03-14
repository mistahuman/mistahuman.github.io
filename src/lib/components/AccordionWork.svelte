<script lang="ts">
    import { Accordion } from '@skeletonlabs/skeleton-svelte';
    // Icons
    import GraduationCap from '@lucide/svelte/icons/graduation-cap';
  
    let value = $state(['master']);
  </script>
  
<Accordion {value} onValueChange={(e) => (value = e.value)} multiple>
    <Accordion.Item value="master">
      <!-- Control -->
      {#snippet lead()}<GraduationCap size={24} />{/snippet}
      {#snippet control()}NIER Ingegneria S.p.A. - Società Benefit{/snippet}
      <!-- Panel -->
      {#snippet panel()}
      <div class="text-sm p-1">
        Software Engineer
        📅 October 2020 – Present | 📍 Bologna
        
        Design and implementation of the entire software development lifecycle for safety-critical systems, including:
        
        Design and development of software for ERTMS systems (interlocking, RBC);
        Design of safety-critical communication protocols;
        Development of simulation tools and automatic configuration generation;
        Automation of development processes;
        Software verification and validation.
        Full-stack development of web applications for corporate innovation purposes, including platforms for business process management and document management.
        </div>
      {/snippet}
    </Accordion.Item>
  </Accordion>