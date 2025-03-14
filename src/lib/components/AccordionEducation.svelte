<script lang="ts">
    import { Accordion } from '@skeletonlabs/skeleton-svelte';
    // Icons
    import GraduationCap from '@lucide/svelte/icons/graduation-cap';
    import Newspaper from '@lucide/svelte/icons/newspaper';
  
  
    let value = $state(['master']);
  </script>
  
<Accordion {value} onValueChange={(e) => (value = e.value)} multiple>
    <Accordion.Item value="master">
      <!-- Control -->
      {#snippet lead()}<GraduationCap size={24} />{/snippet}
      {#snippet control()}Master’s Degree in Energy and Nuclear Engineering{/snippet}
      <!-- Panel -->
      {#snippet panel()}
      <div class="text-sm p-1">
            University of Bologna
            📅 Sep 2016 – Dec 2019 | 📍 Bologna | 🎓 110L/110L
            <div class="space-y-4">
                <strong>Thesis: </strong> Modeling of an LFR Nuclear Reactor and Implementation on a Numerical Platform with Neutronic and Thermohydraulic Coupling
                Supervisor: Sandro Manservisi
        
                The nuclear reactor integrated into the numerical platform is based on the ALFRED project, which aims to demonstrate the feasibility of lead-cooled fast reactors. The numerical platform enables a comprehensive simulation of reactor physics through the implementation of the Dragon/Donjon neutronic code and the FEMuS thermohydraulic code.
            </div>
        </div>
      {/snippet}
    </Accordion.Item>
    <hr class="hr" />
    <Accordion.Item value="bachelor">
      {#snippet lead()}<GraduationCap size={24} />{/snippet}
      {#snippet control()}Bachelor’s Degree in Energy Engineering{/snippet}
      {#snippet panel()}
      <div class="text-sm p-1">
        Alma Mater Studiorum – University of Bologna
        📅 Sep 2012 – Mar 2016 | 📍 Bologna | 🎓 95/110L
      </div>
      {/snippet}
    </Accordion.Item>
    <hr class="hr" />
    <Accordion.Item value="highschool">
      {#snippet lead()}<GraduationCap size={24} />{/snippet}
      {#snippet control()}High School Diploma in Science and Technology{/snippet}
      {#snippet panel()}
      <div class="text-sm p-1">
        G. R. Curbastro Scientific and Technological High School
        📅 Sep 2007 – Jun 2012 | 📍 Lugo (RA) | 🎓 80/100
      </div>
      {/snippet}
    </Accordion.Item>
    <hr class="hr" />
    <Accordion.Item value="publication">
      {#snippet lead()}<Newspaper size={24} />{/snippet}
      {#snippet control()}Conference Proceedings{/snippet}
      {#snippet panel()}
      <div class="text-sm p-1">
        📅 Sep 2019 | 📍 Milan
        Marco Lanconelli, Sandro Manservisi, Marco Sumini
        "A Multiphysics Approach to LFR Analysis" – Technical Meeting on the Benefits and Challenges of Fast Reactors of the SMR Type
      </div>
      {/snippet}
    </Accordion.Item>
  </Accordion>